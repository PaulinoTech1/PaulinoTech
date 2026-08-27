import type { ReactNode } from "react"
import {
  AlertTriangle,
  Banknote,
  Building2,
  Car,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Database,
  Eye,
  FolderTree,
  KeyRound,
  Lock,
  Server,
  ShieldAlert,
  ShieldCheck,
  UserCog,
  Users,
  Wrench,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Active Directory Design",
  description:
    "A least-privilege Active Directory reference pattern for dealership-shaped small businesses: scoping roles by duty, purchasing authority, and data classification, with organizational unit layout, group nesting, and segregation of duties.",
  path: "/active-directory",
})

interface Role {
  title: string
  department: string
  duties: string
  purchasing: string
  data: string
  sensitivity: "Restricted" | "Confidential" | "Internal"
}

/**
 * Role archetypes common to the dealership segment. Headcount is deliberately
 * absent: the model is driven by function, and a census of any real site would
 * add nothing useful for a reader while narrowing the picture for everyone else.
 */
const ROLES: readonly Role[] = [
  {
    title: "Sales Representative",
    department: "Sales",
    duties: "Works leads, quotes vehicles, walks customers through delivery paperwork.",
    purchasing: "None. Requests route through a sales manager.",
    data: "Customer relationship records, contact details, published inventory and pricing.",
    sensitivity: "Confidential",
  },
  {
    title: "Sales Manager",
    department: "Sales",
    duties: "Structures deals, approves discounts, manages the representative pipeline.",
    purchasing: "Department consumables and marketing spend under a defined threshold; approves representative requests.",
    data: "Everything a representative sees, plus vehicle cost, margin, and deal structure.",
    sensitivity: "Confidential",
  },
  {
    title: "Finance Officer",
    department: "Finance & Insurance",
    duties: "Handles credit applications, lender submissions, and contract execution.",
    purchasing: "None. Product vendors are contracted centrally.",
    data: "The most sensitive category in the building: government identifiers, dates of birth, credit reports, and bank details.",
    sensitivity: "Restricted",
  },
  {
    title: "Accounts Payable",
    department: "Accounting",
    duties: "Processes vendor invoices, runs payments, reconciles statements.",
    purchasing: "Executes approved payments only.",
    data: "Vendor records, payment instructions, invoices, and payment history.",
    sensitivity: "Restricted",
  },
  {
    title: "General Manager",
    department: "Executive",
    duties: "Oversees departments and holds final approval on spend and exceptions.",
    purchasing: "Broad approval authority below ownership.",
    data: "Read-across on business reporting and financial statements.",
    sensitivity: "Confidential",
  },
  {
    title: "Service Administrator",
    department: "Service",
    duties: "Writes repair orders, orders parts, schedules technician work.",
    purchasing: "Parts and shop supplies from approved vendors, under a per-order threshold.",
    data: "Repair orders, vehicle history, parts pricing, customer contact details.",
    sensitivity: "Confidential",
  },
  {
    title: "Technician",
    department: "Service",
    duties: "Performs the work and clocks time against repair orders.",
    purchasing: "None. Parts requests route through a service administrator.",
    data: "Repair order line detail and technical references. Customer name and vehicle only.",
    sensitivity: "Internal",
  },
  {
    title: "Detail Administrator",
    department: "Service",
    duties: "Schedules reconditioning and manages detailing supplies.",
    purchasing: "Detailing supplies under a small defined threshold.",
    data: "Inventory and reconditioning status. Minimal customer data.",
    sensitivity: "Internal",
  },
  {
    title: "System Administrator",
    department: "IT",
    duties: "Owns identity, endpoints, network, and backup.",
    purchasing: "Hardware, software, and licensing within an agreed budget.",
    data: "Broad technical authority, but no standing access to finance or F&I file content.",
    sensitivity: "Restricted",
  },
]

const SENSITIVITY_STYLE: Record<Role["sensitivity"], string> = {
  Restricted: "border-destructive/40 bg-destructive/10 text-destructive",
  Confidential: "border-primary/40 bg-primary/10 text-primary",
  Internal: "border-border bg-muted text-muted-foreground",
}

function SectionHeading({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
        {title}
      </h2>
      {children ? <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{children}</p> : null}
    </div>
  )
}

function OuNode({ label, detail, depth = 0 }: { label: string; detail: string; depth?: number }) {
  return (
    <div style={{ marginLeft: `${depth * 1.5}rem` }} className="border-l border-border pl-4">
      <div className="flex flex-col gap-1 py-2 sm:flex-row sm:items-baseline sm:gap-3">
        <code className="font-mono text-sm font-semibold text-foreground">{label}</code>
        <span className="text-sm leading-relaxed text-muted-foreground">{detail}</span>
      </div>
    </div>
  )
}

function ControlCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Users
  title: string
  children: ReactNode
}) {
  return (
    <Card className="h-full border-border bg-card">
      <CardHeader>
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10" aria-hidden="true">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-relaxed text-muted-foreground">{children}</CardContent>
    </Card>
  )
}

export default function ActiveDirectoryPage() {
  return (
    <div className="bg-background">
      <main id="main-content">
        {/* Scope notice */}
        <section className="px-4 pb-8 pt-24 sm:px-6 lg:px-8" aria-labelledby="scope-notice-heading">
          <div
            className="mx-auto flex max-w-6xl gap-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 sm:p-6"
            role="note"
          >
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-700 dark:text-amber-400" aria-hidden="true" />
            <div>
              <h2 id="scope-notice-heading" className="mb-2 text-lg font-bold text-foreground">
                A reference pattern, not a description of any live environment
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                This page sets out how I approach directory design for small businesses in the dealership segment. The
                role archetypes are the ones the industry has in common. It intentionally contains no headcount, no
                naming conventions, no domain or host names, no addressing, no share or policy names, and nothing
                specific to any organization I have worked with. Treat it as a design method you could apply, not a
                map of somewhere that exists.
              </p>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8" aria-labelledby="page-heading">
          <div className="mx-auto max-w-6xl">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Identity &amp; Access</Badge>
            <h1 id="page-heading" className="max-w-4xl text-4xl font-bold text-balance text-foreground sm:text-5xl">
              Scoping a dealership directory by duty, spend, and data
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">
              A small business rarely gets a dedicated identity team, so the directory itself has to carry the policy.
              I scope one by asking three questions of every role: what does this person <em>do</em>, what are they
              allowed to <em>buy</em>, and what information do they <em>touch</em>.
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Those three answers decide the organizational unit, the group membership, the purchasing workflow, and
              the controls layered on top. Nothing is granted because of seniority, and nothing is ever granted to an
              individual directly.
            </p>
          </div>
        </section>

        {/* Role archetypes */}
        <section className="bg-card px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="glance-heading">
          <div className="mx-auto max-w-6xl">
            <SectionHeading id="glance-heading" eyebrow="Archetypes" title="The roles a dealership has in common">
              Nine functions across five departments. The pattern worth noticing is the inversion: the roles with the
              largest headcount need the least access, and the smallest back-office functions carry the most sensitive
              data. Designing as though access should track headcount gets this exactly backwards.
            </SectionHeading>

            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[48rem] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Dealership role archetypes with department and the highest data classification each role touches
                </caption>
                <thead>
                  <tr className="border-b border-border bg-muted/60">
                    <th scope="col" className="px-5 py-4 font-semibold text-foreground">Role</th>
                    <th scope="col" className="px-5 py-4 font-semibold text-foreground">Department</th>
                    <th scope="col" className="px-5 py-4 font-semibold text-foreground">Purchasing authority</th>
                    <th scope="col" className="px-5 py-4 font-semibold text-foreground">Highest data class</th>
                  </tr>
                </thead>
                <tbody>
                  {ROLES.map((role) => (
                    <tr key={role.title} className="border-b border-border last:border-0">
                      <th scope="row" className="px-5 py-4 font-medium text-foreground">{role.title}</th>
                      <td className="px-5 py-4 text-muted-foreground">{role.department}</td>
                      <td className="px-5 py-4 text-muted-foreground">
                        {role.purchasing.startsWith("None") ? "None" : "Delegated, capped"}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-block rounded-md border px-2 py-1 text-xs font-semibold ${SENSITIVITY_STYLE[role.sensitivity]}`}
                        >
                          {role.sensitivity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Scope by role */}
        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="scope-heading">
          <div className="mx-auto max-w-6xl">
            <SectionHeading id="scope-heading" eyebrow="Do, buy, touch" title="Scoping every role three ways">
              Job titles make poor permissions. These three questions produce an access boundary that survives someone
              changing desks, covering a shift, or being promoted.
            </SectionHeading>

            <div className="grid gap-6 lg:grid-cols-2">
              {ROLES.map((role) => (
                <Card key={role.title} className="h-full border-border bg-card">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-3">
                      <CardTitle className="text-xl">{role.title}</CardTitle>
                      <span
                        className={`rounded-md border px-2 py-0.5 text-xs font-semibold ${SENSITIVITY_STYLE[role.sensitivity]}`}
                      >
                        {role.sensitivity}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-4 text-sm">
                      <div>
                        <dt className="flex items-center gap-2 font-semibold text-foreground">
                          <ClipboardList className="h-4 w-4 text-primary" aria-hidden="true" />
                          Does
                        </dt>
                        <dd className="mt-1 leading-relaxed text-muted-foreground">{role.duties}</dd>
                      </div>
                      <div>
                        <dt className="flex items-center gap-2 font-semibold text-foreground">
                          <CreditCard className="h-4 w-4 text-primary" aria-hidden="true" />
                          Buys
                        </dt>
                        <dd className="mt-1 leading-relaxed text-muted-foreground">{role.purchasing}</dd>
                      </div>
                      <div>
                        <dt className="flex items-center gap-2 font-semibold text-foreground">
                          <Eye className="h-4 w-4 text-primary" aria-hidden="true" />
                          Touches
                        </dt>
                        <dd className="mt-1 leading-relaxed text-muted-foreground">{role.data}</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* OU structure */}
        <section className="bg-card px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="ou-heading">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              id="ou-heading"
              eyebrow="Structure"
              title="Organizational units follow policy, not the org chart"
            >
              Organizational units exist to attach policy and delegate administration. Splitting them by reporting line
              produces containers that all need identical settings; splitting them by the controls a group needs
              produces containers that justify themselves. The labels below are illustrative.
            </SectionHeading>

            <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <FolderTree className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="font-semibold text-foreground">Illustrative container layout</p>
              </div>

              <OuNode label="Business/" detail="Top container. No objects live here directly." />
              <OuNode label="Business/Users/Sales" detail="Standard desktop policy, customer and inventory systems." depth={1} />
              <OuNode
                label="Business/Users/Finance"
                detail="Hardened baseline: short lock timeout, removable media blocked, tighter data loss prevention."
                depth={1}
              />
              <OuNode
                label="Business/Users/Accounting"
                detail="Payment-handling baseline with mandatory second approval on payment-instruction changes."
                depth={1}
              />
              <OuNode label="Business/Users/Service" detail="Shop-floor policy tuned for shared terminals." depth={1} />
              <OuNode label="Business/Users/Executive" detail="Standard policy plus broad read reporting." depth={1} />
              <OuNode
                label="Business/Workstations/Office"
                detail="Assigned single-user devices, full disk encryption, automatic patching."
                depth={1}
              />
              <OuNode
                label="Business/Workstations/Shop"
                detail="Shared terminals: no roaming profiles, aggressive session expiry, narrowly scoped applications."
                depth={1}
              />
              <OuNode label="Business/Servers" detail="Delegated to the administrative tier only." depth={1} />
              <OuNode
                label="Business/Groups"
                detail="Role groups and resource groups, kept apart from user containers."
                depth={1}
              />
              <OuNode
                label="Business/Admin"
                detail="Privileged accounts, separate from the daily-driver account of the same person."
                depth={1}
              />
              <OuNode
                label="Business/Disabled"
                detail="Departure holding area. Access removed, object retained for audit."
                depth={1}
              />
            </div>
          </div>
        </section>

        {/* Group model */}
        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="groups-heading">
          <div className="mx-auto max-w-6xl">
            <SectionHeading id="groups-heading" eyebrow="Group model" title="Nobody is granted anything directly">
              Every permission is reached through two layers of groups. Users go into a role group, role groups nest
              into a resource group, and only the resource group appears on the access control list. Reviewing access
              then means reading a membership list rather than crawling folder permissions.
            </SectionHeading>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-border bg-card">
                <CardHeader>
                  <Badge className="mb-2 w-fit bg-primary/10 text-primary hover:bg-primary/20">Layer 1</Badge>
                  <CardTitle className="text-xl">Role groups</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  One per function, mirroring the archetypes above. Membership answers &ldquo;what is this
                  person&rsquo;s job?&rdquo; and nothing else. Onboarding another technician becomes a single
                  membership change.
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <Badge className="mb-2 w-fit bg-primary/10 text-primary hover:bg-primary/20">Layer 2</Badge>
                  <CardTitle className="text-xl">Resource groups</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  One per resource and access level, such as read versus change on a given share. Role groups nest into
                  these, and the resource group is the only thing that ever appears on a permission entry.
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <Badge className="mb-2 w-fit bg-primary/10 text-primary hover:bg-primary/20">Result</Badge>
                  <CardTitle className="text-xl">Reviewable access</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  Any question of the form &ldquo;who can reach finance data?&rdquo; is answered by expanding one
                  group. No individual accounts on access control lists, and no permissions inherited by accident.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Data classification */}
        <section className="bg-card px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="data-heading">
          <div className="mx-auto max-w-6xl">
            <SectionHeading id="data-heading" eyebrow="Classification" title="What each tier means in practice">
              A dealership handles regulated financial data alongside routine scheduling. Treating those the same is
              how small businesses end up with a reportable incident, so classification should drive both storage
              location and the controls attached to it.
            </SectionHeading>

            <div className="grid gap-6 lg:grid-cols-3">
              <ControlCard icon={ShieldAlert} title="Restricted">
                Government identifiers, credit reports, payment instructions, and cardholder data. Belongs only in the
                systems of record, never on a workstation or a general-purpose share. Access limited to the functions
                that require it, logged, and reviewed on a schedule.
              </ControlCard>
              <ControlCard icon={Lock} title="Confidential">
                Customer records, deal structure, vehicle cost and margin, and repair history. Available to the
                departments that need it, blocked from bulk export, and excluded from personal storage and unmanaged
                devices.
              </ControlCard>
              <ControlCard icon={Database} title="Internal">
                Schedules, published inventory, technical references, and reconditioning status. Broad internal access,
                because the operational cost of restricting it exceeds the risk of exposure.
              </ControlCard>
            </div>
          </div>
        </section>

        {/* Segregation of duties */}
        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="sod-heading">
          <div className="mx-auto max-w-6xl">
            <SectionHeading id="sod-heading" eyebrow="Segregation of duties" title="The splits that actually matter">
              Most small-business fraud does not require a broken password. It requires one role that can do two things
              which should never be held together. These are the divisions worth enforcing even at small scale.
            </SectionHeading>

            <div className="grid gap-6 lg:grid-cols-2">
              <ControlCard icon={Banknote} title="Maintaining vendors and paying them">
                The function that processes invoices should not be the function that creates or edits vendor records,
                including payment instructions. Published guidance from the FBI and FTC on business email compromise
                has recommended this split, plus out-of-band verification of banking changes, for years. It remains the
                single most effective control against invoice redirection.
              </ControlCard>
              <ControlCard icon={Building2} title="Approving spend and executing it">
                The role that approves a purchase is never the role that pays it. Purchasing thresholds attach to the
                role group, so someone covering another department does not silently inherit their spending authority.
              </ControlCard>
              <ControlCard icon={UserCog} title="Running the business and running the directory">
                Executive oversight should mean broad read access to business reporting and no administrative rights in
                the directory. Administration should mean directory rights and no standing access to regulated file
                content. Neither side can then quietly grant itself the other half.
              </ControlCard>
              <ControlCard icon={Car} title="Selling a vehicle and financing it">
                Sales structures the deal; Finance owns the credit application and the regulated data attached to it.
                A sales role should never reach credit bureau output, and that boundary belongs in group membership
                rather than in convention.
              </ControlCard>
            </div>
          </div>
        </section>

        {/* Privileged access */}
        <section className="bg-card px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="privileged-heading">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              id="privileged-heading"
              eyebrow="Privileged access"
              title="Small teams need more administrative discipline, not less"
            >
              Segment-wide, small businesses commonly run with a very thin identity function, sometimes outsourced.
              That makes the standard privileged-access patterns more important rather than less, because there are
              fewer people positioned to catch a mistake.
            </SectionHeading>

            <div className="grid gap-6 lg:grid-cols-2">
              <ControlCard icon={KeyRound} title="Separate accounts by tier">
                Administrators keep a normal account for mail, browsing, and daily work, and a separate privileged
                account that never reads mail or browses the web. Domain-level rights are exercised from a dedicated
                management context, never from the machine that opens attachments.
              </ControlCard>
              <ControlCard icon={ShieldCheck} title="Break-glass, sealed and watched">
                An emergency account exists outside normal workflows, with credentials held offline and split. It is
                excluded from routine policy so a misconfiguration cannot lock everyone out, and any use of it should
                raise an alert immediately.
              </ControlCard>
              <ControlCard icon={Eye} title="Administrative action is visible">
                Group membership changes, privilege escalation, and account creation are logged off the box that
                generated them. An administrator who can silently edit their own audit trail is not audited.
              </ControlCard>
              <ControlCard icon={Server} title="Recovery is rehearsed, not assumed">
                Directory recovery should be documented and tested on a schedule. A backup nobody has restored from is
                a hypothesis, not a control.
              </ControlCard>
            </div>
          </div>
        </section>

        {/* Shared workstations */}
        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="shop-heading">
          <div className="mx-auto max-w-6xl">
            <SectionHeading id="shop-heading" eyebrow="Shop floor" title="Shared terminals are the hard case">
              Service bays are the most difficult identity problem in a dealership. Technicians move between machines
              mid-task with dirty hands, and a control that adds friction in that environment tends to get worked
              around rather than followed. The design has to make the secure path the convenient one, or it will lose.
            </SectionHeading>

            <div className="grid gap-6 lg:grid-cols-3">
              <ControlCard icon={Wrench} title="Individual accounts, always">
                Every technician authenticates as themselves. Time clocked against a repair order is only meaningful if
                it maps to a person, and a shared login destroys the audit trail and the payroll record together.
              </ControlCard>
              <ControlCard icon={Users} title="Fast switching, no roaming state">
                Shop terminals keep no roaming profiles and no cached documents. Sessions expire aggressively, and
                sign-in has to be quick enough that staying logged in as someone else is never the easier option.
              </ControlCard>
              <ControlCard icon={CheckCircle2} title="Scoped to the task">
                Those machines reach the repair order system and technical references, and nothing else. A shared
                device in an area customers walk through should carry the narrowest scope in the building.
              </ControlCard>
            </div>
          </div>
        </section>

        {/* Lifecycle */}
        <section className="bg-card px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="lifecycle-heading">
          <div className="mx-auto max-w-6xl">
            <SectionHeading id="lifecycle-heading" eyebrow="Lifecycle" title="Joining, moving, and leaving">
              Access granted correctly on day one still decays. In a segment with seasonal hiring and frequent internal
              moves, the mover case is the one that quietly accumulates privilege.
            </SectionHeading>

            <div className="grid gap-6 lg:grid-cols-3">
              <ControlCard icon={Users} title="Joiner">
                Accounts get created from a role template, never by copying an existing user. Copying inherits whatever
                exceptions that person accumulated, which is how one manager&rsquo;s temporary access quietly becomes
                everyone&rsquo;s permanent access.
              </ControlCard>
              <ControlCard icon={UserCog} title="Mover">
                A change of role removes the old role group before adding the new one. Access reviews across the
                industry consistently find the removal step is the one most often missed, which is why it belongs in
                the procedure rather than in someone&rsquo;s memory.
              </ControlCard>
              <ControlCard icon={Lock} title="Leaver">
                Sessions and tokens are revoked, not just the password reset. The account is disabled and moved to a
                holding container rather than deleted, so records stay attributable while access ends immediately.
              </ControlCard>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-background p-6 sm:p-8">
              <h3 className="mb-3 text-lg font-bold text-foreground">Periodic review</h3>
              <p className="leading-relaxed text-muted-foreground">
                On a regular cadence, every role group membership is read back to the manager who owns that function,
                along with the resource groups it nests into. At small scale this is a short conversation per
                department rather than a formal campaign, which is the main argument for actually doing it.
              </p>
            </div>
          </div>
        </section>

        {/* Omissions */}
        <section className="px-4 pb-24 pt-20 sm:px-6 lg:px-8" aria-labelledby="omitted-heading">
          <div className="mx-auto max-w-6xl">
            <SectionHeading id="omitted-heading" eyebrow="Scope" title="What this page deliberately leaves out">
              A method is useful to describe. An environment is not. The following are withheld on principle, because
              publishing them would help an attacker and help nobody else.
            </SectionHeading>

            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Headcount, staffing ratios, and org size",
                "Domain, forest, and namespace names",
                "Account and group naming conventions",
                "Server, host, and workstation names",
                "Addressing, subnets, and site topology",
                "Share paths and folder structures",
                "Policy object names and their link order",
                "Vendor names, portals, and account identifiers",
                "Specific purchasing thresholds and limits",
                "Product versions, patch levels, and licensing detail",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border bg-card p-4 text-sm font-medium leading-relaxed text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
