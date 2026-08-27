# MTA-STS policy Worker

Serves `https://mta-sts.paulinotech.com/.well-known/mta-sts.txt`.

Mail policy should not depend on the portfolio's deploy state or firewall rules,
so this runs on Cloudflare rather than alongside the site. The policy body is
imported from `public/.well-known/mta-sts.txt`, which stays the single source of
truth — the Worker cannot drift from what the repository says.

## Why the subdomain

RFC 8461 senders fetch the policy from `mta-sts.<domain>` and nowhere else.
Serving it on the apex does nothing. They also must not follow redirects, so the
Worker answers the path directly rather than forwarding anywhere.

## DNS

`mta-sts.paulinotech.com` must be **proxied** (orange cloud) for a Worker route
to receive its traffic. If nothing else needs to serve that hostname, point it at
the discard address Cloudflare documents for Worker-only hostnames:

| Type | Name      | Content | Proxy    |
| ---- | --------- | ------- | -------- |
| AAAA | `mta-sts` | `100::` | Proxied  |

An existing proxied `A`/`AAAA` record also works — the Worker route intercepts
before the origin is reached, which is what removes the Vercel dependency.

`_mta-sts` is a `TXT` record and is never proxied; Cloudflare only proxies
`A`, `AAAA`, and `CNAME`.

## Deploy

```bash
cd workers/mta-sts
npx wrangler@latest deploy
```

Cloudflare's Universal SSL already covers a single-label subdomain, so
`mta-sts.paulinotech.com` presents a valid certificate with no extra work.

## Changing the policy

1. Edit `public/.well-known/mta-sts.txt` at the repository root.
2. Redeploy this Worker so the bundled copy is rebuilt.
3. **Bump the `id` in the `_mta-sts` TXT record.** Senders cache the policy
   against that value; without a new `id` they will not re-fetch, and the change
   is invisible to anyone holding a cached copy.
4. Run `npm run verify:mta-sts` from the repository root and confirm every check
   passes.

## Before switching to enforce

`mode: enforce` tells sending servers to refuse delivery when TLS to the MX
hosts cannot be validated against the policy. If the policy is unreachable,
stale, or disagrees with the live MX records, mail bounces or defers.

Serve `mode: testing` first, read the TLS-RPT reports for a week, and only then
switch. `npm run verify:mta-sts` exits non-zero while anything would make
`enforce` unsafe, so it is worth running before every policy deploy.
