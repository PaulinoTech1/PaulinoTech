/**
 * Serves the MTA-STS policy for the domain.
 *
 * RFC 8461 requires the policy to be reachable at exactly
 * https://mta-sts.<domain>/.well-known/mta-sts.txt, over HTTPS with a
 * certificate valid for that host, as text/plain. Sending servers MUST NOT
 * follow redirects when fetching it, so this Worker answers the path directly
 * and never redirects.
 *
 * The policy body is imported from the same file the website deploys, so the
 * two cannot drift apart. Editing public/.well-known/mta-sts.txt and
 * redeploying this Worker is the whole update path.
 */

import policy from "../../../public/.well-known/mta-sts.txt"

const POLICY_PATH = "/.well-known/mta-sts.txt"

/** A day is well under the policy's own max_age and keeps edits propagating quickly. */
const CACHE_SECONDS = 86_400

const TEXT_HEADERS = { "content-type": "text/plain; charset=utf-8" }

export default {
  async fetch(request) {
    const url = new URL(request.url)

    if (url.pathname !== POLICY_PATH) {
      return new Response("Not found\n", { status: 404, headers: TEXT_HEADERS })
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed\n", {
        status: 405,
        headers: { ...TEXT_HEADERS, allow: "GET, HEAD" },
      })
    }

    // HEAD is answered with the same headers and no body, which the runtime handles.
    return new Response(request.method === "HEAD" ? null : policy, {
      status: 200,
      headers: {
        ...TEXT_HEADERS,
        "cache-control": `public, max-age=${CACHE_SECONDS}`,
        "x-content-type-options": "nosniff",
      },
    })
  },
}
