import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  CircleStop,
  Code2,
  ExternalLink,
  GitBranch,
  HardDrive,
  Layers3,
  ListChecks,
  Search,
  ShieldAlert,
  Target,
  Workflow,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "AI Tooling | Paulino Tech",
  description:
    "A regularly reviewed reference for AI prompting, coding agents, research, governance and compliance, private-data handling, and local models.",
}

function ResourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
    >
      {children}
      <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

const decisionPoints = [
  {
    need: "Large codebase context",
    startingPoint: "Graphify + coding agent",
    discipline: "Measure savings on your repository",
    icon: GitBranch,
  },
  {
    need: "Software project work",
    startingPoint: "Codex or Claude Code",
    discipline: "Review diffs, commands, and tests",
    icon: Code2,
  },
  {
    need: "Broad web research",
    startingPoint: "Perplexity",
    discipline: "Open and verify original sources",
    icon: Search,
  },
  {
    need: "Private local work",
    startingPoint: "LM Studio",
    discipline: "Match model and context to hardware",
    icon: HardDrive,
  },
]

const promptingStages = [
  {
    step: "01",
    title: "Define the goal",
    detail: "State the outcome, audience, scope, constraints, required evidence, and what a successful result looks like.",
    icon: Target,
  },
  {
    step: "02",
    title: "Create verifiable stages",
    detail: "Break the goal into checkpoints that produce something observable: an approved plan, verified source, passing test, or reviewed diff.",
    icon: ListChecks,
  },
  {
    step: "03",
    title: "Set stopping points",
    detail: "Say when to pause for review or approval, when to retry or report a blocker, and exactly what counts as done.",
    icon: CircleStop,
  },
  {
    step: "04",
    title: "Validate, then continue",
    detail: "Check each stage against its evidence and success criteria before its output becomes context for the next stage.",
    icon: Search,
  },
]

export default function AiToolingPage() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header>
        <nav
          className="fixed top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md"
          aria-label="Main navigation"
        >
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="font-bold text-xl text-foreground">
              <span className="sr-only">Paulino Tech Home</span>
              <span aria-hidden="true">Paulino Tech</span>
            </Link>
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Home
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="px-4 pb-8 pt-24 sm:px-6 lg:px-8" aria-labelledby="review-notice-heading">
          <div
            className="mx-auto flex max-w-6xl gap-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 sm:p-6"
            role="note"
          >
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-700 dark:text-amber-400" aria-hidden="true" />
            <div>
              <h2 id="review-notice-heading" className="mb-2 text-lg font-bold text-foreground">
                AI tooling must be re-evaluated regularly
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                AI is a rapidly changing topic. Models, product capabilities, pricing, privacy terms, integrations,
                and hardware support can change quickly, so every recommendation on this page should be re-checked
                before adoption and reviewed on a regular schedule.
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">Last reviewed: August 25, 2026</p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8" aria-labelledby="page-heading">
          <div className="mx-auto max-w-6xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">A working reference, not a permanent ranking</Badge>
            <h1 id="page-heading" className="mb-6 text-4xl font-bold text-foreground text-balance sm:text-5xl">
              AI Tooling for <span className="text-primary">Practical Work</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
              Choose a tool from the job, data boundary, review process, and available hardware—not from a leaderboard alone.
            </p>
          </div>
        </section>

        <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="decision-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <Workflow className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden="true" />
              <h2 id="decision-heading" className="mb-3 text-3xl font-bold text-foreground">Quick decision map</h2>
              <p className="text-muted-foreground">Starting points for evaluation—not exclusive use cases.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {decisionPoints.map((item) => (
                <Card key={item.need} className="h-full border-border bg-card">
                  <CardHeader>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{item.need}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <p className="font-semibold text-foreground">{item.startingPoint}</p>
                    <p className="leading-relaxed text-muted-foreground">{item.discipline}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="graphify-heading">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Badge variant="outline" className="mb-4">Context efficiency</Badge>
              <h2 id="graphify-heading" className="mb-5 text-3xl font-bold text-foreground">Graphify</h2>
              <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
                Graphify turns a codebase and related material into a queryable knowledge graph. Once the graph is
                built, an AI coding agent can ask for a scoped subgraph instead of repeatedly rereading raw files,
                which can help lower repeated context and token usage—especially on larger repositories.
              </p>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Token savings are not guaranteed and should be measured on the actual project. Graphify documents
                little compression benefit on some small corpora. Its code parsing is deterministic and local, but
                documents and media may use a configured semantic-model backend, so that backend must be included in
                the project&apos;s privacy review.
              </p>
              <ResourceLink href="https://github.com/Graphify-Labs/graphify">View Graphify on GitHub</ResourceLink>
            </div>

            <div
              className="rounded-2xl border border-border bg-muted/50 p-6 sm:p-8"
              role="img"
              aria-label="Graphify parses a codebase into a reusable knowledge graph, allowing Codex or Claude Code to request focused context instead of rereading the full repository."
            >
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Input</p>
                <p className="mt-1 font-semibold text-foreground">Code, docs, schemas, and configuration</p>
              </div>
              <div className="mx-auto h-7 w-px bg-border" aria-hidden="true" />
              <div className="rounded-xl border border-primary/40 bg-primary/10 p-4 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Build once</p>
                <p className="mt-1 font-semibold text-foreground">Queryable knowledge graph</p>
              </div>
              <div className="mx-auto h-7 w-px bg-border" aria-hidden="true" />
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-card p-4 text-center">
                  <p className="font-semibold text-foreground">Codex</p>
                  <p className="mt-1 text-xs text-muted-foreground">Scoped project context</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4 text-center">
                  <p className="font-semibold text-foreground">Claude Code</p>
                  <p className="mt-1 text-xs text-muted-foreground">Scoped project context</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="coding-agents-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-4xl text-center">
              <Code2 className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden="true" />
              <h2 id="coding-agents-heading" className="mb-4 text-3xl font-bold text-foreground">Codex and Claude Code</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Calling Codex and Claude Code “coding tools” is a gross understatement of their capabilities, but it
                is a useful reference point. Either can suit different coding projects; evaluate the repository,
                permissions, privacy requirements, cost, integrations, and review workflow rather than treating one
                as a universal winner.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="h-full border-0 bg-card shadow-lg">
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">Repository implementation</Badge>
                  <CardTitle className="text-2xl">Codex</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="leading-relaxed text-muted-foreground">
                    A useful starting point for exploring and understanding a repository, building features or tools,
                    reviewing changes, and fixing issues or failures across a project. Its broader workflows extend
                    well beyond generating a code snippet.
                  </p>
                  <ResourceLink href="https://developers.openai.com/codex">Official Codex documentation</ResourceLink>
                </CardContent>
              </Card>

              <Card className="h-full border-0 bg-card shadow-lg">
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">Terminal and IDE project work</Badge>
                  <CardTitle className="text-2xl">Claude Code</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="leading-relaxed text-muted-foreground">
                    A useful starting point for repository-aware exploration, debugging, multi-file implementation,
                    testing, Git work, and development automation from the terminal, IDE, desktop, or browser.
                  </p>
                  <ResourceLink href="https://code.claude.com/docs/en/overview">Official Claude Code documentation</ResourceLink>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-background p-5 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Shared rule:</strong> agentic does not mean autonomous trust. Review
              proposed commands, diffs, security-sensitive changes, migrations, and test results before merging or deploying.
            </div>
          </div>
        </section>

        <section
          className="border-y border-border bg-primary/5 px-4 py-20 sm:px-6 lg:px-8"
          aria-labelledby="agent-frameworks-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-4xl text-center">
              <Badge variant="outline" className="mb-4">Reusable extensions</Badge>
              <h2 id="agent-frameworks-heading" className="mb-4 text-3xl font-bold text-foreground">
                Specialist agents and repeatable workflows
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                These projects extend coding agents at different layers. Agency Agents supplies reusable role
                definitions for particular kinds of work; Superpowers supplies a development process that moves work
                from discovery and design through implementation and verification.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="h-full border-border bg-card shadow-lg">
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">Specialist role library</Badge>
                  <CardTitle className="text-2xl">Agency Agents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="leading-relaxed text-muted-foreground">
                    Agency Agents is an open-source collection of Markdown agent profiles organized across disciplines
                    such as engineering, security, design, product, marketing, and support. Each profile defines an
                    identity and communication style, core mission and workflows, expected deliverables, examples, and
                    success measures.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    The profiles can be read and adapted as references or installed through the project&apos;s app and
                    scripts. Its documented integrations include Codex, Claude Code, Cursor, Gemini CLI, and other
                    agent tools, with options to install only selected divisions or individual agents.
                  </p>
                  <div className="rounded-xl border border-border bg-muted/40 p-4 text-sm leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Useful when:</strong> a recurring task benefits from a
                    consistent specialist brief, defined deliverables, and a repeatable communication style.
                  </div>
                  <ResourceLink href="https://github.com/msitarzewski/agency-agents">
                    View Agency Agents on GitHub
                  </ResourceLink>
                </CardContent>
              </Card>

              <Card className="h-full border-border bg-card shadow-lg">
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">Development methodology</Badge>
                  <CardTitle className="text-2xl">Superpowers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="leading-relaxed text-muted-foreground">
                    Superpowers is a composable skills framework and software-development methodology for coding
                    agents. Its documented workflow starts with brainstorming and an approved design, creates an
                    isolated worktree and implementation plan, and then moves through plan execution, test-driven
                    development, code review, and branch completion.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    The repository documents separate installation paths for Codex, Claude Code, Cursor, Gemini CLI,
                    and several other agent environments. The skills are intended to activate as mandatory workflow
                    gates rather than optional suggestions.
                  </p>
                  <div className="rounded-xl border border-border bg-muted/40 p-4 text-sm leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Useful when:</strong> software work needs explicit design
                    approval, small verifiable tasks, test-first implementation, review gates, and a defined finish.
                  </div>
                  <ResourceLink href="https://github.com/obra/superpowers">
                    View Superpowers on GitHub
                  </ResourceLink>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Review before installing:</strong> agent profiles and workflow
              skills can add persistent instructions and influence command or tool use. Read the exact files, install
              only what the project needs, keep permissions least-privileged, test outside production, and retain human
              approval for sensitive actions. A specialist name or structured workflow improves consistency; it does
              not prove expertise or guarantee a correct result.
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="prompting-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-4xl text-center">
              <Badge variant="outline" className="mb-4">A working prompting practice</Badge>
              <h2 id="prompting-heading" className="mb-4 text-3xl font-bold text-foreground">Start with the goal, not a magic phrase</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Prompting guidance is likely to change as models and agent workflows improve. These are useful things
                to keep in mind now, but they should be tested again with the model, tools, and task actually in use.
                Begin with a defined goal, then turn it into verifiable stages with distinct stopping points.
              </p>
            </div>

            <div
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
              role="img"
              aria-label="A four-stage prompting workflow: define the goal, create verifiable stages, set stopping points, then validate before continuing."
            >
              {promptingStages.map((item) => (
                <Card key={item.step} className="h-full border-border bg-card">
                  <CardHeader>
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-bold tracking-widest text-primary">{item.step}</span>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <Card className="h-full border-border bg-muted/40">
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">Use selectively</Badge>
                  <CardTitle className="text-2xl">Role framing is not the default</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 leading-relaxed text-muted-foreground">
                  <p>
                    A short role statement can be useful inside a reusable skill or plugin when it defines a durable
                    function, authority boundary, tool policy, or handoff. In that setting, the role helps keep repeated
                    work consistent.
                  </p>
                  <p>
                    Role hedging should not be a general rule of thumb. Decorative instructions such as asking the
                    model to act like an elite expert consume context and cannot replace a clear goal, relevant evidence,
                    constraints, success criteria, or stopping rules.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full border-primary/25 bg-primary/5">
                <CardHeader>
                  <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Layers3 className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl">The context window is the working set</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="leading-relaxed text-muted-foreground">
                    The context window contains the instructions, conversation, supplied or retrieved material, tool
                    results, and prior output available while the model generates its next token. It dictates what that
                    token can be conditioned on; it does not guarantee that the token is true. Missing, stale,
                    contradictory, badly summarized, or truncated context can still produce a fluent but invalid answer.
                  </p>

                  <div
                    className="grid gap-2 text-center text-sm sm:grid-cols-3 sm:items-stretch"
                    role="img"
                    aria-label="Relevant retained context informs next-token generation, which must then pass an evidence-based verification step."
                  >
                    <div className="rounded-lg border border-border bg-card p-4">
                      <p className="font-bold text-foreground">Relevant retained context</p>
                      <p className="mt-1 text-xs text-muted-foreground">Goal, constraints, evidence, and current state</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-4">
                      <p className="font-bold text-foreground">Next-token generation</p>
                      <p className="mt-1 text-xs text-muted-foreground">Conditioned on what is actually available</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-4">
                      <p className="font-bold text-foreground">Independent verification</p>
                      <p className="mt-1 text-xs text-muted-foreground">Sources, tests, checks, or human review</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Track token use, remove stale repetition, retrieve only the evidence needed, preserve the goal and
                    critical constraints through compaction, and leave room for tool results and the final answer. A
                    larger context window improves capacity, not truthfulness; validity comes from authoritative inputs
                    and verification.
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                    <ResourceLink href="https://developers.openai.com/api/docs/guides/latest-model">OpenAI model guidance</ResourceLink>
                    <ResourceLink href="https://developers.openai.com/api/docs/guides/compaction">OpenAI context compaction</ResourceLink>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-muted px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="research-heading">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <Search className="mx-auto mb-4 h-12 w-12 text-primary" aria-hidden="true" />
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Broad research</p>
              <p className="mt-2 text-3xl font-bold text-foreground">Perplexity</p>
            </div>
            <div>
              <h2 id="research-heading" className="mb-5 text-3xl font-bold text-foreground">Map the subject, then verify it</h2>
              <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
                Perplexity is good for broad research: learning the vocabulary of an unfamiliar subject, mapping its
                major questions, finding candidate sources, and following citations into deeper material. Its search
                and research modes synthesize information from multiple web sources and link back to those sources.
              </p>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Treat the synthesis as a starting point, not the authority. Open the original sources, confirm that
                each citation supports the nearby claim, check dates and context, and use primary sources for decisions
                where accuracy matters.
              </p>
              <ResourceLink href="https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work">
                How Perplexity works
              </ResourceLink>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="grc-heading">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <Badge variant="outline" className="mb-4">Governance, risk, and compliance</Badge>
                <h2 id="grc-heading" className="mb-5 text-3xl font-bold text-foreground">
                  AI tooling is now part of GRC
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  An AI product is also a third-party application, a data path, an identity and access surface, and a
                  recordkeeping decision. Selecting, configuring, and using it belongs inside the organization&apos;s
                  existing governance, risk, and compliance process&mdash;even when the work begins as a small pilot.
                </p>

                <div className="mt-6 rounded-xl border border-amber-500/40 bg-amber-500/10 p-5 leading-relaxed text-muted-foreground">
                  <p className="font-bold text-foreground">Do not feed shadow IT or shadow AI.</p>
                  <p className="mt-2">
                    Shadow AI is the use of an AI tool, model, account, browser extension, meeting bot, coding agent,
                    plugin, or connector outside the organization&apos;s approved inventory and policies. It can bypass
                    vendor review, data-handling rules, access controls, retention requirements, logging, and incident
                    response, creating security, contractual, audit, and regulatory exposure.
                  </p>
                </div>
              </div>

              <Card className="border-border bg-muted/40">
                <CardHeader>
                  <CardTitle className="text-2xl">What an unapproved tool can bypass</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: "Data controls",
                        detail: "Prompts, files, source code, and connectors may evade classification, minimization, residency, retention, and deletion controls.",
                      },
                      {
                        title: "Due diligence",
                        detail: "Provider terms, model training practices, subprocessors, security posture, and intellectual-property terms may never be reviewed.",
                      },
                      {
                        title: "Accountability",
                        detail: "The system may have no named owner, approved purpose, audit record, incident route, or defensible explanation of how it was used.",
                      },
                      {
                        title: "Access boundaries",
                        detail: "Agents, plugins, and integrations can gain broad permissions and create external data paths that users do not recognize.",
                      },
                    ].map((risk) => (
                      <div key={risk.title} className="rounded-xl border border-border bg-card p-5">
                        <p className="font-bold text-foreground">{risk.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{risk.detail}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10">
              <h3 className="mb-5 text-2xl font-bold text-foreground">Put AI adoption through an approved control path</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    step: "01",
                    title: "Inventory",
                    detail: "Record the tool, provider and model, owner, users, use case, data classes, deployment, plugins, connectors, and approved accounts.",
                  },
                  {
                    step: "02",
                    title: "Assess",
                    detail: "Review privacy, security, legal, procurement, contractual, retention, training, residency, subprocessor, and output-use risks.",
                  },
                  {
                    step: "03",
                    title: "Approve and control",
                    detail: "Define permitted use and data, require approved identities, limit access and connector scopes, keep needed logs, and assign human review.",
                  },
                  {
                    step: "04",
                    title: "Monitor and retire",
                    detail: "Reassess changing models, features, terms, and integrations; handle incidents; review use; and revoke access when the tool is retired.",
                  },
                ].map((item) => (
                  <div key={item.step} className="rounded-xl border border-border bg-card p-5">
                    <p className="text-xs font-bold tracking-widest text-primary">{item.step}</p>
                    <p className="mt-2 font-bold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-primary/25 bg-primary/5 p-5 leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Make the compliant path usable:</strong> publish approved tools,
              accounts, data classes, and use cases; provide a short review process and a place to ask questions. A ban
              without a practical alternative can push legitimate work into personal accounts and unsanctioned tools,
              making the risk harder to see and manage.
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Exact obligations depend on jurisdiction, industry, contracts, data, and use case. Legal, privacy,
              security, records, and compliance owners should determine the organization&apos;s requirements; this is risk
              management guidance, not legal advice.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <ResourceLink href="https://airc.nist.gov/airmf-resources/airmf/5-sec-core/">NIST AI RMF governance</ResourceLink>
              <ResourceLink href="https://airc.nist.gov/airmf-resources/playbook/govern/">NIST AI system inventory guidance</ResourceLink>
              <ResourceLink href="https://www.npsa.gov.uk/system-information-security/artificial-intelligence">NPSA guidance on shadow AI</ResourceLink>
            </div>
          </div>
        </section>

        <section className="bg-destructive/5 px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="private-data-heading">
          <div className="mx-auto max-w-5xl rounded-2xl border border-destructive/30 bg-card p-6 shadow-lg sm:p-10">
            <div className="mb-5 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-destructive/10">
                <ShieldAlert className="h-6 w-6 text-destructive" aria-hidden="true" />
              </div>
              <div>
                <Badge variant="destructive" className="mb-2">Hard data boundary</Badge>
                <h2 id="private-data-heading" className="text-3xl font-bold text-foreground">
                  Private data does not belong in a public LLM
                </h2>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Private business data should not be entered into a public or consumer LLM service. That includes
              passwords, API keys, customer or employee records, financial data, contracts, incident evidence,
              proprietary source code, and detailed network configurations. Treat every prompt, pasted block, and
              uploaded file as disclosure to a third party. If cloud AI is required, use only an organization-approved
              business or enterprise service after its retention, training, deletion, access-control, contractual,
              and subprocessor terms have been reviewed—and still minimize, redact, or replace sensitive details with
              synthetic data wherever possible.
            </p>
            <div className="mt-6">
              <ResourceLink href="https://www.cisa.gov/sites/default/files/2024-09/Secure-Our-World-Using-AI-Tip-Sheet.pdf">
                CISA guidance for using AI securely
              </ResourceLink>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="local-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <HardDrive className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden="true" />
              <Badge variant="outline" className="mb-4">Local inference</Badge>
              <h2 id="local-heading" className="mb-5 text-3xl font-bold text-foreground">LM Studio for private local projects</h2>
              <p className="mx-auto max-w-4xl text-lg leading-relaxed text-muted-foreground">
                LM Studio can run downloaded open-weight models and document workflows on the local computer,
                including fully offline operation. Whether a private project is practical locally depends on the
                computer&apos;s RAM or VRAM, CPU support, model size and quantization, context length, model format, and
                the task. Because models come in many sizes, quantizations, and specialties, there is likely a useful
                smaller or task-specialized model that can work within the available hardware—but fit, speed, and
                output quality must be tested rather than assumed.
              </p>
            </div>

            <div
              className="grid gap-3 rounded-2xl border border-border bg-muted/50 p-6 md:grid-cols-4"
              role="img"
              aria-label="For a local AI project, define the task, inspect available hardware, choose a compatible specialized or quantized model, then test privacy, speed, and output quality."
            >
              {[
                { step: "01", title: "Define the task", detail: "Coding, extraction, summarization, classification, or document Q&A" },
                { step: "02", title: "Inspect hardware", detail: "RAM, VRAM, CPU support, storage, and desired context" },
                { step: "03", title: "Match a model", detail: "Size, quantization, specialty, format, and runtime compatibility" },
                { step: "04", title: "Test locally", detail: "Quality, latency, memory use, privacy boundary, and failure cases" },
              ].map((item) => (
                <div key={item.step} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-bold tracking-widest text-primary">{item.step}</p>
                  <p className="mt-2 font-bold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Keep the boundary honest:</strong> downloaded models, local chat,
              local document processing, and the local server can work offline. Model search and downloads require a
              connection, and any enabled cloud model, web search, remote integration, or external API must be reviewed
              as a separate data path.
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
              <ResourceLink href="https://lmstudio.ai/docs/app/offline">LM Studio offline operation</ResourceLink>
              <ResourceLink href="https://lmstudio.ai/docs/app/system-requirements">LM Studio system requirements</ResourceLink>
              <ResourceLink href="https://lmstudio.ai/docs/app/basics/download-model">Choosing a local model</ResourceLink>
            </div>
          </div>
        </section>

        <section className="bg-muted px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="review-heading">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <BookOpen className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden="true" />
              <h2 id="review-heading" className="mb-3 text-3xl font-bold text-foreground">Re-evaluation checklist</h2>
              <p className="text-muted-foreground">Repeat this review before rollout and on a regular schedule.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Has the product, model, or feature changed?",
                "Have privacy, retention, training, or deletion terms changed?",
                "Do integrations create new external data paths?",
                "Does the tool still fit the project and review workflow?",
                "Do measured quality, token use, latency, and cost still hold?",
                "Can current local hardware run a better task-specific model?",
                "Is every AI tool, model, plugin, connector, owner, and approved use recorded in an inventory?",
                "Can staff identify the approved path and report shadow AI without hiding the work?",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-border bg-card p-5 text-sm font-medium leading-relaxed text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-background/10 bg-foreground py-8 text-background/60" role="contentinfo">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="font-bold text-xl text-background">Paulino Tech | 2026</div>
          <nav aria-label="Footer navigation">
            <Link href="/sitemap" className="text-background/70 underline transition-colors hover:text-background">Sitemap</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
