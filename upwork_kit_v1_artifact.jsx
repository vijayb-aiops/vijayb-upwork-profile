import { useMemo, useState } from "react";

const TABS = [
  "Profile Strategy",
  "Market Positioning",
  "Service Offer Stack",
  "Proposal Engine",
  "Client Qualification",
  "Portfolio Strategy",
  "Delivery System",
  "Profile Optimization",
  "30-Day Launch Plan",
];

const THEME = {
  bg: "#09111d",
  panel: "#111b2d",
  panelSoft: "#16233a",
  ink: "#e7eefb",
  muted: "#9fb2cf",
  border: "#253855",
  accent: "#31d0aa",
  accentSoft: "#103d3a",
  gold: "#ffbe63",
  goldSoft: "#473312",
  blue: "#5aa2ff",
  blueSoft: "#142d4f",
  red: "#ff867d",
  redSoft: "#4e2324",
};

const PROFILE = {
  title: "Senior DevOps Engineer | Kubernetes, Terraform, CI/CD, AWS Platform Automation",
  shortOverview:
    "Senior DevOps engineer helping startups and SaaS teams stabilize delivery, automate cloud infrastructure, and reduce deployment risk across CI/CD, Kubernetes, Terraform, observability, and release operations.",
  longOverview: `I work with teams that need production-grade delivery systems, not fragmented DevOps task support. My focus is building and improving the operating layer behind software delivery: CI/CD pipelines, Terraform-based infrastructure, Kubernetes deployments, cloud automation, observability, release controls, and practical handoff documentation.

Clients typically bring me in when releases are still manual, environments are drifting, Kubernetes deployments are brittle, Terraform is inconsistent, or the internal team needs a senior engineer who can own the DevOps workstream without constant supervision.

I fit best with startups, SaaS products, and scaling engineering teams that need clearer systems, faster releases, and fewer platform surprises. The value is not just implementation. It is cleaner operating logic, better troubleshooting depth, and delivery structure the team can keep using after the engagement.`,
  specializations: [
    {
      name: "DevOps Platform Engineer",
      title: "DevOps Platform Engineer | CI/CD, Docker, Kubernetes, Observability",
      overview:
        "Built for clients who need end-to-end delivery enablement: repo workflow, build automation, release pipelines, deployment structure, incident visibility, and platform cleanup.",
    },
    {
      name: "Cloud & Terraform Specialist",
      title: "Cloud Infrastructure Engineer | Terraform, AWS, Azure, GCP, IaC",
      overview:
        "Best for infrastructure-heavy work where consistency, reusable modules, IAM, networking, remote state, and environment design matter more than one-off resource creation.",
    },
    {
      name: "CI/CD & Release Engineer",
      title: "CI/CD Engineer | Jenkins, GitHub Actions, GitLab CI, Release Automation",
      overview:
        "Best for clients dealing with broken pipelines, slow release cycles, manual deployments, and delivery bottlenecks between engineering and production.",
    },
  ],
  keywords: [
    "senior devops engineer",
    "kubernetes engineer",
    "terraform expert",
    "aws devops",
    "ci cd engineer",
    "platform automation",
    "release engineering",
    "cloud infrastructure",
    "observability",
    "devsecops",
    "helm",
    "github actions",
    "jenkins",
    "gitlab ci",
  ],
  skills: [
    "Kubernetes",
    "Terraform",
    "AWS",
    "Azure",
    "GCP",
    "Docker",
    "Helm",
    "GitHub Actions",
    "Jenkins",
    "GitLab CI",
    "ArgoCD",
    "Prometheus",
    "Grafana",
    "ELK",
    "Python",
    "Bash",
    "Ansible",
    "DevSecOps",
  ],
  hourlyRates: [
    {
      tier: "Entry traction",
      rate: "$25-$40/hr",
      use: "First projects, scoped troubleshooting, short pipeline fixes, controlled review-building period.",
    },
    {
      tier: "Core market",
      rate: "$45-$75/hr",
      use: "Most Upwork work once proof exists: CI/CD engineering, Terraform delivery, Kubernetes support, cloud automation.",
    },
    {
      tier: "Premium authority",
      rate: "$80-$125+/hr",
      use: "High-ownership work: architecture cleanups, platform leadership, migration planning, multi-environment delivery, urgent production remediation.",
    },
  ],
};

const POSITIONING = {
  differentiation: [
    "Lead with system ownership, not tools. Clients pay more when they believe you can own the delivery path end to end.",
    "Show production judgment: scope boundaries, rollback awareness, environment separation, and operational handoff.",
    "Talk in outcomes the buyer already feels: manual releases, unstable deployments, pipeline drag, Terraform sprawl, weak visibility.",
    "Avoid commodity framing such as 'I can help with any DevOps task' because it lowers trust and price anchor at the same time.",
  ],
  niche: [
    {
      label: "Startups",
      notes: "Need an execution-heavy engineer who can stand up clean foundations without introducing enterprise ceremony too early.",
    },
    {
      label: "SaaS teams",
      notes: "Need reliable release flow, environment consistency, cost-aware infra, and observability that supports on-call reality.",
    },
    {
      label: "Scaling engineering teams",
      notes: "Need senior help fixing bottlenecks between application teams, cloud infrastructure, CI/CD, and Kubernetes operations.",
    },
  ],
  pricing: [
    "Hourly works best when scope may expand during discovery, troubleshooting, or staged platform cleanup.",
    "Fixed price works best when the deliverable is concrete: one pipeline, one Terraform module set, one deployment implementation, one observability baseline.",
    "Use smaller fixed engagements to land the client, then convert the relationship into hourly optimization or retained ownership work.",
    "Do not underprice urgent or high-risk production work. Speed plus accountability is premium positioning, not discount positioning.",
  ],
  avoidClients: [
    "Jobs with vague goals and no technical owner on the client side.",
    "Clients asking for senior outcomes on junior pricing.",
    "Environments with production access expectations but no rollback, no staging, and no decision-maker available.",
    "Clients who want unlimited revisions on infrastructure work or refuse to define acceptance criteria.",
  ],
};

const SERVICES = [
  {
    id: "platform",
    name: "DevOps Platform Setup",
    asks: [
      "Set up CI/CD for our app from scratch",
      "We need a cleaner deployment workflow for our team",
      "Our releases are manual and nobody trusts the process",
    ],
    problems: [
      "No repeatable engineering flow",
      "Build and deploy logic lives in tribal knowledge",
      "The team ships slowly because platform basics were never designed properly",
    ],
    examples: [
      "Greenfield setup for an early-stage SaaS team",
      "Inherited repo and deployment process cleanup",
      "Delivery baseline before hiring more engineers",
    ],
    deliverables: [
      "Repository and branch flow guidance",
      "Build and deployment pipeline structure",
      "Containerization path and registry flow",
      "Documentation and environment notes",
    ],
    pricing: "Use fixed pricing for defined setup work. Use hourly when discovery, architecture cleanup, or team workflow redesign is still evolving.",
  },
  {
    id: "terraform",
    name: "Cloud Infrastructure & Terraform",
    asks: [
      "Create Terraform for our AWS infrastructure",
      "Fix our environment drift and clean up modules",
      "Move us away from manual cloud changes",
    ],
    problems: [
      "Infrastructure is inconsistent across environments",
      "Cloud changes are manual, risky, or undocumented",
      "Terraform exists but is hard to reuse, review, or extend",
    ],
    examples: [
      "AWS foundation with VPC, IAM, compute, storage, and remote state",
      "Refactor Terraform modules for dev, staging, and production separation",
      "Cloud migration support with IaC as the control layer",
    ],
    deliverables: [
      "Terraform module structure",
      "Remote state and workspace strategy",
      "IAM, networking, and environment definitions",
      "Handoff notes for future team ownership",
    ],
    pricing: "Prefer fixed pricing for a defined module or environment scope. Prefer hourly for refactors, audits, migrations, and inherited infrastructure cleanup.",
  },
  {
    id: "cicd",
    name: "CI/CD Pipeline Engineering",
    asks: [
      "Our Jenkins pipeline keeps failing",
      "We need GitHub Actions for build, test, and deploy",
      "Can you automate releases and reduce manual steps?",
    ],
    problems: [
      "Pipelines are brittle, slow, or poorly structured",
      "Release flow breaks under pressure",
      "Engineering loses time on repeated deployment and build issues",
    ],
    examples: [
      "Jenkins to GitHub Actions modernization",
      "GitLab CI optimization for multi-stage deployment flow",
      "Container build and artifact publishing implementation",
    ],
    deliverables: [
      "Pipeline definitions",
      "Build, test, package, and deploy stages",
      "Secrets and environment variable handling",
      "Troubleshooting summary and next-step recommendations",
    ],
    pricing: "Use fixed pricing when the target workflow is already defined. Use hourly when debugging, modernization, or release process redesign is involved.",
  },
  {
    id: "kubernetes",
    name: "Kubernetes & Deployment Operations",
    asks: [
      "Deploy our app to Kubernetes",
      "Fix Helm and ingress issues in our cluster",
      "We need more stable rollouts and better deployment operations",
    ],
    problems: [
      "Workloads fail after deployment",
      "Helm structure is inconsistent",
      "The team lacks safe rollout and runtime troubleshooting discipline",
    ],
    examples: [
      "Application deployment setup on EKS, AKS, or GKE",
      "Ingress, service, config, and rollout cleanup",
      "Post-deployment stability work with scaling and release hygiene",
    ],
    deliverables: [
      "Kubernetes manifests or Helm charts",
      "Service and ingress configuration",
      "Deployment and rollback notes",
      "Operational fixes and runtime recommendations",
    ],
    pricing: "Use fixed pricing for one scoped deployment target. Use hourly for active incident support, cluster troubleshooting, and ongoing release operations.",
  },
  {
    id: "observability",
    name: "Observability & DevSecOps",
    asks: [
      "We need monitoring and alerts before going live",
      "Can you improve visibility into failures and deployments?",
      "Add security checks to CI/CD without slowing delivery too much",
    ],
    problems: [
      "The team reacts to incidents without enough visibility",
      "Alerts are noisy or missing",
      "Security checks are inconsistent or bolted on late",
    ],
    examples: [
      "Prometheus and Grafana monitoring baseline",
      "Loki or ELK logging implementation",
      "CI/CD security scanning and secrets handling improvements",
    ],
    deliverables: [
      "Monitoring and dashboard setup",
      "Alerting baseline",
      "Logging pipeline structure",
      "DevSecOps recommendations and implementation notes",
    ],
    pricing: "Use fixed pricing for a defined monitoring baseline. Use hourly when observability is tied to production incidents, platform hardening, or broader operational maturity work.",
  },
];

const PROPOSALS = [
  {
    id: "cold",
    label: "Cold Proposal",
    text: `You do not need another generic DevOps bidder here. You need someone who can reduce deployment risk and move this into a cleaner operating state.

From your job post, the core issue looks like [insert specific problem in client language]. That usually means the team is losing time in one of three places: pipeline reliability, infrastructure consistency, or deployment operations.

I work on production-facing DevOps delivery across CI/CD, Terraform, Kubernetes, cloud automation, and observability. My value is not just writing config. I can scope the failure points, implement the missing pieces, and leave the workflow in a state your team can keep operating.

My approach for this job:
1. Review the current repo, pipeline, infra, or cluster state
2. Isolate the delivery bottleneck and risk points
3. Implement the scoped fix or rebuild path
4. Document changes, constraints, and next steps

If useful, send me the current stack, where the process is failing today, and whether this should be scoped as a fixed milestone or hourly engagement.`,
  },
  {
    id: "warm",
    label: "Warm Proposal",
    text: `Thanks, that gives enough signal to tighten the scope.

The main thing I would focus on first is [insert client pain], because that is usually the part creating the downstream deployment or stability issues. I would treat this as a structured DevOps delivery problem, not a one-line config tweak.

Relevant background for this kind of work:
- CI/CD pipeline design and troubleshooting
- Terraform-driven cloud infrastructure
- Kubernetes deployment operations and Helm
- Observability and release hardening

Recommended path:
1. Short review of the current state
2. Confirm exact deliverables and access boundaries
3. Implement the highest-risk fixes first
4. Close with handoff notes and improvement backlog

If you want, I can break this into a first milestone so you get movement quickly without overcommitting before the environment is reviewed.`,
  },
  {
    id: "short",
    label: "Short Proposal",
    text: `Your post reads like a delivery bottleneck, not just a tool issue.

I can help with the CI/CD, Terraform, Kubernetes, or cloud side depending on where the failure is actually happening. My approach is to isolate the operational constraint, fix the core path, and leave clear handoff notes instead of patching symptoms.

If you share the stack and current blocker, I can tell you whether this should be scoped fixed or hourly.`,
  },
  {
    id: "high-ticket",
    label: "High-Ticket Proposal",
    text: `This is the kind of project where senior judgment matters more than low hourly rate.

What you are describing touches production delivery, infrastructure control, and platform reliability. Those engagements usually fail when the work is treated as disconnected tasks instead of one operating system: cloud, pipelines, deployment flow, visibility, and rollback safety.

I work with teams that need ownership across that layer. I can step in, assess the current state, define a practical implementation plan, execute the highest-value changes first, and keep communication tight so you are not guessing where risk still exists.

For a project at this level, I would usually structure it as:
1. Discovery and technical review
2. Prioritized implementation roadmap
3. Execution in milestones or hourly sprints
4. Handoff, runbook, and next-phase recommendations

If you want to move this forward, send the current architecture, major pain points, and whether you already have staging, production, and access boundaries defined. I can then propose the right delivery structure instead of forcing a generic bid.`,
  },
];

const PROPOSAL_GUIDANCE = {
  mistakes: [
    "Do not start with a biography. Start with the client's operational pain.",
    "Do not list every tool you know in the first paragraph.",
    "Do not promise certainty before seeing the environment.",
    "Do not bid low just to get a reply on technically risky work.",
  ],
  customize: [
    "Mirror the client's wording for the main bottleneck in the first two lines.",
    "Reference one likely root cause or operational risk to show judgment.",
    "Match the offer format to the job: quick fix, milestone, or ongoing ownership.",
    "Attach only the most relevant proof item, not your entire portfolio.",
  ],
};

const QUALIFICATION = {
  questions: [
    "What is the exact production or delivery problem you want solved first?",
    "What does success look like for this engagement in concrete terms?",
    "Who owns application code, cloud access, and final production approval?",
    "Do you already have staging, rollback, and monitoring in place?",
    "Is this a one-time implementation or do you need ongoing DevOps ownership?",
  ],
  redFlags: [
    "No clear owner for access, architecture, or sign-off",
    "Urgent production expectations with no defined change window",
    "Requests for architecture, implementation, and unlimited support under one flat fee",
    "Pressure to skip discovery on a complex inherited environment",
  ],
  filter: [
    "Use a paid first milestone for unclear environments.",
    "Keep production cutover and risky scope explicitly out of undefined fixed-price jobs.",
    "Decline buyers who resist basic qualification questions.",
  ],
  expand: [
    "Turn a one-off pipeline fix into a release engineering cleanup engagement.",
    "Turn Terraform setup into environment design, secrets handling, and observability baseline work.",
    "Turn Kubernetes deployment work into broader platform reliability support.",
  ],
};

const PORTFOLIO = {
  use: [
    "Use GitHub to prove implementation depth and YouTube to reduce buyer uncertainty around communication and walkthrough quality.",
    "Portfolio supports trust. It should not replace a sharp proposal or a credible profile.",
    "Show only work that maps directly to the client's current problem.",
  ],
  attach: [
    "Attach one relevant GitHub repo when the buyer needs technical evidence.",
    "Attach one short demo or walkthrough when the buyer needs confidence in delivery quality or system clarity.",
    "Frame the link around the client problem: pipeline automation, Terraform structure, observability, or Kubernetes delivery.",
  ],
  language: `Use language like this in proposals:

"I have a public project that shows the same type of delivery pattern you are asking for: CI/CD automation, infrastructure definition, and deployment flow. I can share it if you want to see how I structure this work."

Avoid sounding like you are selling a demo project instead of solving the buyer's real environment.`,
  mappings: [
    {
      project: "GitHub CI/CD project",
      problem: "Shows release automation structure for teams still shipping manually.",
    },
    {
      project: "Terraform or cloud automation project",
      problem: "Shows how infrastructure is organized for repeatability and review.",
    },
    {
      project: "Kubernetes deployment demo",
      problem: "Shows deployment flow, manifests or Helm discipline, and rollout thinking.",
    },
    {
      project: "Observability or incident-response demo",
      problem: "Shows visibility and operational maturity rather than just deployment speed.",
    },
  ],
};

const DELIVERY = {
  process: [
    "Start with scope confirmation, access boundaries, and acceptance criteria.",
    "Separate discovery from implementation when the environment is unclear.",
    "Deliver in visible increments: baseline review, core fix, validation, handoff.",
    "Close every job with what changed, what remains, and what to do next.",
  ],
  updates: [
    "Day-start update: current focus, blockers, expected progress.",
    "Mid-work update: findings, decisions, or risk changes.",
    "Delivery update: completed work, validation notes, open items, and next recommendations.",
  ],
  scope: [
    "Document assumptions before touching production-facing changes.",
    "State what is out of scope in writing before implementation begins.",
    "Use new milestones or hourly continuation for anything discovered outside the agreed boundary.",
  ],
  upsell: [
    "After CI/CD work, propose release hardening or observability.",
    "After Terraform work, propose environment standardization and secrets management.",
    "After Kubernetes work, propose monitoring, alerting, and deployment guardrails.",
  ],
  messages: [
    {
      label: "Kickoff Message",
      text: `Scope confirmed for this phase:
- Objective: [insert objective]
- Environment: [insert environment]
- In scope: [insert agreed tasks]
- Out of scope: [insert boundaries]

I will start with a review of the current state, then implement the agreed changes, validate results, and close with handoff notes so the next step is clear.`,
    },
    {
      label: "Progress Update",
      text: `Quick update:
- Current focus: [insert]
- Completed so far: [insert]
- Active blocker or risk: [insert or none]
- Next step: [insert]

If anything changes the original scope or risk level, I will flag it before proceeding.`,
    },
    {
      label: "Delivery Handoff",
      text: `This phase is complete.

Delivered:
- [insert completed work]

Validated:
- [insert validation checks]

Remaining considerations:
- [insert known follow-up items]

Recommended next step if you want to extend the work:
- [insert upsell or phase-two recommendation]`,
    },
  ],
};

const OPTIMIZATION = {
  checklist: [
    "Use a title that combines seniority, search terms, and delivery credibility.",
    "Keep the first 2 lines of the overview outcome-driven and production-aware.",
    "Add specialized profiles aligned to actual service lanes, not random tool collections.",
    "Use relevant certifications, employment history, and project screenshots where real.",
    "Keep skill tags tight around DevOps, cloud, IaC, Kubernetes, and CI/CD.",
  ],
  ranking: [
    "Consistent proposal activity",
    "Fast response time",
    "Strong job success and private feedback",
    "Specialized profile relevance",
    "Repeat clients and larger contract value",
  ],
  firstFiveJobs: [
    "Bid on scoped jobs where the client pain is specific and solvable within a short first milestone.",
    "Prefer jobs where senior judgment matters but scope is still narrow enough to close quickly.",
    "Use one strong niche first instead of spreading across every cloud and every tool.",
    "Take a few lower-friction jobs only if they still reinforce the premium positioning.",
  ],
  firstFiveStars: [
    "Scope tightly and overcommunicate decisions, not filler.",
    "Avoid taking unclear jobs just to get revenue.",
    "Close every engagement with documentation and next-step clarity.",
    "Ask for feedback only after the client has seen visible progress and clean handoff.",
  ],
};

const LAUNCH_PLAN = [
  {
    week: "Week 1",
    focus: "Profile setup and niche selection",
    items: [
      "Publish general profile and 3 specialized profiles",
      "Lock primary niche: startups, SaaS teams, or scaling engineering teams",
      "Set initial hourly rate based on proof, not insecurity",
      "Prepare 3 proof assets: one GitHub repo, one demo, one short architecture explanation",
    ],
  },
  {
    week: "Week 2",
    focus: "Daily proposal system",
    items: [
      "Send targeted daily proposals to jobs with clear operational pain",
      "Use cold, short, and high-ticket templates depending on job size",
      "Track which hooks get replies and tighten copy quickly",
      "Avoid spraying bids across unrelated tool-only jobs",
    ],
  },
  {
    week: "Week 3",
    focus: "Close first client",
    items: [
      "Push for a paid first milestone instead of broad undefined commitments",
      "Use qualification questions to control risk before accepting",
      "Deliver a narrow but valuable win fast",
      "Turn early trust into a larger follow-on scope",
    ],
  },
  {
    week: "Week 4",
    focus: "Scale toward consistency",
    items: [
      "Raise prices on high-response work",
      "Refine specialized profiles around the proposal patterns that convert",
      "Build repeatable delivery messaging and post-project upsells",
      "Aim for fewer, better jobs rather than more cheap jobs",
    ],
  },
];

const TECH_STACK = [
  { label: "CI/CD", items: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "ArgoCD"] },
  {
    label: "Cloud Platforms",
    items: ["AWS: EKS, ECS, EC2, Lambda, VPC, IAM, S3, CloudWatch", "Azure: AKS, Azure DevOps, Key Vault", "GCP: GKE, Cloud Build"],
  },
  { label: "Containerization & Orchestration", items: ["Docker", "Kubernetes", "Helm", "Kustomize"] },
  { label: "Infrastructure as Code", items: ["Terraform", "Pulumi", "AWS CloudFormation"] },
  { label: "Configuration Management", items: ["Ansible", "Puppet", "Chef"] },
  { label: "Scripting & Automation", items: ["Bash", "Python with Boto3", "Shell scripting for CI/CD pipelines"] },
  { label: "Monitoring & Observability", items: ["Prometheus", "Grafana", "ELK Stack", "Loki", "Alertmanager"] },
  {
    label: "Artifact & Container Registry",
    items: ["Nexus", "JFrog Artifactory", "Docker Hub", "AWS ECR", "GitHub Container Registry"],
  },
  { label: "Version Control & Collaboration", items: ["Git", "GitHub", "GitLab", "Bitbucket"] },
  {
    label: "Security & DevSecOps",
    items: ["IAM and Azure RBAC", "Kubernetes RBAC and Network Policies", "Vault and AWS Secrets Manager", "SonarQube", "SAST and DAST integration"],
  },
  { label: "Networking & Edge", items: ["DNS, Load Balancing, CDN basics", "AWS Route 53", "Nginx and Ingress Controllers", "API Gateways"] },
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }}
      style={{
        position: "absolute",
        top: 12,
        right: 12,
        border: `1px solid ${copied ? THEME.accent : THEME.border}`,
        background: copied ? THEME.accentSoft : THEME.panelSoft,
        color: copied ? "#dffaf2" : THEME.ink,
        borderRadius: 999,
        padding: "7px 12px",
        fontSize: 11,
        fontWeight: 700,
        cursor: "pointer",
      }}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function ShellBlock({ label, text }) {
  return (
    <div
      style={{
        position: "relative",
        background: "#0d1627",
        border: `1px solid ${THEME.border}`,
        borderRadius: 14,
        padding: "42px 16px 16px",
        marginTop: 10,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 16,
          color: THEME.muted,
          fontSize: 11,
          letterSpacing: 0.5,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
      <pre
        style={{
          margin: 0,
          whiteSpace: "pre-wrap",
          fontSize: 12,
          lineHeight: 1.7,
          color: "#d8e4f5",
          fontFamily: "Consolas, Monaco, monospace",
        }}
      >
        {text}
      </pre>
      <CopyButton text={text} />
    </div>
  );
}

function Panel({ title, subtitle, children }) {
  return (
    <div
      style={{
        background: THEME.panel,
        border: `1px solid ${THEME.border}`,
        borderRadius: 18,
        padding: 18,
        marginBottom: 16,
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
    >
      {title ? (
        <div style={{ marginBottom: 12 }}>
          <div style={{ color: THEME.ink, fontWeight: 800, fontSize: 16 }}>{title}</div>
          {subtitle ? <div style={{ color: THEME.muted, fontSize: 12, marginTop: 4 }}>{subtitle}</div> : null}
        </div>
      ) : null}
      {children}
    </div>
  );
}

function Badge({ children, tone = "blue" }) {
  const map = {
    blue: { bg: THEME.blueSoft, ink: "#cfe3ff", border: "#2d4e7b" },
    green: { bg: THEME.accentSoft, ink: "#d8fbf3", border: "#2b6e68" },
    gold: { bg: THEME.goldSoft, ink: "#ffe0b0", border: "#7f6131" },
    red: { bg: THEME.redSoft, ink: "#ffd4cf", border: "#7a3a38" },
  };
  const selected = map[tone];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "6px 10px",
        borderRadius: 999,
        background: selected.bg,
        border: `1px solid ${selected.border}`,
        color: selected.ink,
        fontSize: 11,
        fontWeight: 700,
        margin: "0 8px 8px 0",
      }}
    >
      {children}
    </span>
  );
}

function MiniList({ items, bulletColor = THEME.accent }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item} style={{ display: "flex", gap: 10, marginBottom: 7, alignItems: "flex-start" }}>
          <span style={{ color: bulletColor, lineHeight: "18px" }}>•</span>
          <span style={{ color: THEME.ink, fontSize: 13, lineHeight: 1.55 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function Grid({ columns = "repeat(auto-fit, minmax(240px, 1fr))", children }) {
  return <div style={{ display: "grid", gridTemplateColumns: columns, gap: 14 }}>{children}</div>;
}

export default function UpworkKitV1Artifact() {
  const [activeTab, setActiveTab] = useState(0);
  const [openService, setOpenService] = useState(SERVICES[0].id);
  const [showTechStack, setShowTechStack] = useState(false);
  const keywordLine = useMemo(() => PROFILE.keywords.join(" | "), []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(49,208,170,0.12), transparent 30%), radial-gradient(circle at top right, rgba(90,162,255,0.12), transparent 26%), linear-gradient(180deg, #07111d 0%, #09111d 100%)",
        color: THEME.ink,
        fontFamily: '"Segoe UI", "Inter", "Helvetica Neue", Arial, sans-serif',
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(135deg, rgba(18,28,47,0.97), rgba(10,17,29,0.98))",
            border: `1px solid ${THEME.border}`,
            borderRadius: 24,
            padding: 24,
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            marginBottom: 18,
          }}
        >
          <Badge tone="green">Upwork Authority System</Badge>
          <Badge tone="blue">GitHub Pages Compatible</Badge>
          <Badge tone="gold">Profile + Proposal + Delivery Engine</Badge>
          <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: -0.6, marginTop: 8 }}>
            Upwork Kit V1: Premium DevOps Conversion Dashboard
          </div>
          <div style={{ color: THEME.muted, maxWidth: 980, lineHeight: 1.65, fontSize: 14, marginTop: 10 }}>
            Built for Upwork hiring behavior. This system positions the seller as a senior DevOps engineer who can own
            delivery across cloud infrastructure, CI/CD, Kubernetes, Terraform, observability, and production-facing
            execution.
          </div>
          <Grid columns="repeat(auto-fit, minmax(220px, 1fr))">
            <div style={heroStat()}>
              <div style={heroLabel()}>Primary Positioning</div>
              <div style={heroValue()}>Senior DevOps Engineer with platform ownership credibility</div>
            </div>
            <div style={heroStat()}>
              <div style={heroLabel()}>Conversion Mechanism</div>
              <div style={heroValue()}>Profile clarity, proposal strength, client filtering, clean delivery</div>
            </div>
            <div style={heroStat()}>
              <div style={heroLabel()}>Ideal Buyer</div>
              <div style={heroValue()}>Startups, SaaS teams, and engineering leaders hiring for real systems work</div>
            </div>
          </Grid>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 18 }}>
          {TABS.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              style={{
                borderRadius: 999,
                border: `1px solid ${activeTab === index ? "#2e6bb7" : THEME.border}`,
                background: activeTab === index ? "#163052" : THEME.panel,
                color: activeTab === index ? "#d6e8ff" : THEME.muted,
                padding: "10px 14px",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 0 && (
          <>
            <Panel title="Profile Strategy" subtitle="Searchable, credible, and built for trust with production systems">
              <Grid>
                <div style={infoCard()}>
                  <div style={cardHeading()}>Upwork Title</div>
                  <ShellBlock label="Profile Title" text={PROFILE.title} />
                </div>
                <div style={infoCard()}>
                  <div style={cardHeading()}>Short Overview</div>
                  <ShellBlock label="Short Overview" text={PROFILE.shortOverview} />
                </div>
              </Grid>
              <ShellBlock label="Long Overview" text={PROFILE.longOverview} />
            </Panel>

            <Panel title="Specialized Profiles" subtitle="Three lanes that still reinforce one senior positioning">
              <Grid>
                {PROFILE.specializations.map((item) => (
                  <div key={item.name} style={infoCard()}>
                    <div style={cardHeading()}>{item.name}</div>
                    <ShellBlock label="Specialized Title" text={item.title} />
                    <div style={{ ...bodyText(), marginTop: 12 }}>{item.overview}</div>
                  </div>
                ))}
              </Grid>
            </Panel>

            <Panel title="Keywords, Skills, and Hourly Rates" subtitle="Enough depth for search relevance without sounding stuffed">
              <ShellBlock label="Keyword Line" text={keywordLine} />
              <div style={{ marginTop: 12 }}>
                {PROFILE.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
              <Grid columns="repeat(auto-fit, minmax(260px, 1fr))">
                {PROFILE.hourlyRates.map((item, index) => (
                  <div key={item.tier} style={index === 1 ? contrastCard(THEME.blueSoft, "#2d4e7b") : infoCard()}>
                    <div style={cardHeading()}>{item.tier}</div>
                    <div style={{ color: THEME.gold, fontWeight: 800, fontSize: 22, marginBottom: 10 }}>{item.rate}</div>
                    <div style={bodyText()}>{item.use}</div>
                  </div>
                ))}
              </Grid>
            </Panel>
          </>
        )}

        {activeTab === 1 && (
          <>
            <Panel title="Market Positioning" subtitle="Authority beats commodity pricing on Upwork">
              <Grid>
                <div style={contrastCard(THEME.accentSoft, "#2b6e68")}>
                  <div style={cardHeading()}>Stand Out From Cheap DevOps Sellers</div>
                  <MiniList items={POSITIONING.differentiation} />
                </div>
                <div style={contrastCard(THEME.redSoft, "#7a3a38")}>
                  <div style={cardHeading()}>Low-Quality Client Filters</div>
                  <MiniList items={POSITIONING.avoidClients} bulletColor={THEME.red} />
                </div>
              </Grid>
            </Panel>

            <Panel title="Niche Focus" subtitle="Target buyer groups with actual DevOps buying intent">
              <Grid>
                {POSITIONING.niche.map((item) => (
                  <div key={item.label} style={infoCard()}>
                    <div style={cardHeading()}>{item.label}</div>
                    <div style={bodyText()}>{item.notes}</div>
                  </div>
                ))}
              </Grid>
            </Panel>

            <Panel title="Pricing Psychology" subtitle="Choose deal structure based on scope risk, not convenience">
              <MiniList items={POSITIONING.pricing} bulletColor={THEME.gold} />
            </Panel>
          </>
        )}

        {activeTab === 2 && (
          <Panel title="Service Offer Stack" subtitle="Consulting positioning, not Fiverr-style package selling">
            <div style={{ marginBottom: 14 }}>
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setOpenService(service.id)}
                  style={{
                    marginRight: 8,
                    marginBottom: 8,
                    borderRadius: 999,
                    padding: "8px 12px",
                    border: `1px solid ${openService === service.id ? "#2f6daf" : THEME.border}`,
                    background: openService === service.id ? "#18365a" : "#0d1627",
                    color: openService === service.id ? "#ddeaff" : THEME.muted,
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {service.name}
                </button>
              ))}
            </div>
            {SERVICES.filter((service) => service.id === openService).map((service) => (
              <div key={service.id}>
                <Grid>
                  <div style={infoCard()}>
                    <div style={cardHeading()}>What Clients Actually Ask For</div>
                    <MiniList items={service.asks} />
                  </div>
                  <div style={infoCard()}>
                    <div style={cardHeading()}>Real Problems Solved</div>
                    <MiniList items={service.problems} bulletColor={THEME.gold} />
                  </div>
                  <div style={infoCard()}>
                    <div style={cardHeading()}>Example Engagements</div>
                    <MiniList items={service.examples} bulletColor={THEME.blue} />
                  </div>
                </Grid>
                <Grid>
                  <div style={infoCard()}>
                    <div style={cardHeading()}>Deliverables</div>
                    <MiniList items={service.deliverables} />
                  </div>
                  <div style={infoCard()}>
                    <div style={cardHeading()}>Hourly vs Fixed</div>
                    <div style={bodyText()}>{service.pricing}</div>
                  </div>
                </Grid>
              </div>
            ))}
          </Panel>
        )}

        {activeTab === 3 && (
          <>
            <Panel title="Proposal Engine" subtitle="Reusable templates designed for replies, not generic application spam">
              <Grid>
                {PROPOSALS.map((item) => (
                  <ShellBlock key={item.id} label={item.label} text={item.text} />
                ))}
              </Grid>
            </Panel>
            <Panel title="Proposal Guidance" subtitle="Use judgment before speed">
              <Grid>
                <div style={contrastCard(THEME.redSoft, "#7a3a38")}>
                  <div style={cardHeading()}>Proposal Mistakes To Avoid</div>
                  <MiniList items={PROPOSAL_GUIDANCE.mistakes} bulletColor={THEME.red} />
                </div>
                <div style={contrastCard(THEME.accentSoft, "#2b6e68")}>
                  <div style={cardHeading()}>How To Customize Per Job</div>
                  <MiniList items={PROPOSAL_GUIDANCE.customize} />
                </div>
              </Grid>
            </Panel>
          </>
        )}

        {activeTab === 4 && (
          <>
            <Panel title="Client Qualification System" subtitle="Filter risk before it turns into delivery drag">
              <Grid>
                <div style={infoCard()}>
                  <div style={cardHeading()}>Questions To Ask Before Accepting</div>
                  <MiniList items={QUALIFICATION.questions} />
                </div>
                <div style={contrastCard(THEME.redSoft, "#7a3a38")}>
                  <div style={cardHeading()}>Red Flags</div>
                  <MiniList items={QUALIFICATION.redFlags} bulletColor={THEME.red} />
                </div>
              </Grid>
            </Panel>
            <Panel title="Filter and Expand" subtitle="Protect margin while moving good clients into larger work">
              <Grid>
                <div style={infoCard()}>
                  <div style={cardHeading()}>How To Filter Bad Clients</div>
                  <MiniList items={QUALIFICATION.filter} />
                </div>
                <div style={infoCard()}>
                  <div style={cardHeading()}>How To Move Clients Upmarket</div>
                  <MiniList items={QUALIFICATION.expand} bulletColor={THEME.gold} />
                </div>
              </Grid>
            </Panel>
          </>
        )}

        {activeTab === 5 && (
          <>
            <Panel title="Portfolio Strategy" subtitle="Use proof as trust support, not as the main offer">
              <Grid>
                <div style={infoCard()}>
                  <div style={cardHeading()}>How To Use GitHub and YouTube</div>
                  <MiniList items={PORTFOLIO.use} />
                </div>
                <div style={infoCard()}>
                  <div style={cardHeading()}>How To Attach Portfolio In Proposals</div>
                  <MiniList items={PORTFOLIO.attach} bulletColor={THEME.blue} />
                </div>
              </Grid>
              <ShellBlock label="Portfolio Framing Language" text={PORTFOLIO.language} />
            </Panel>

            <Panel title="Project to Client Problem Mapping" subtitle="Keep examples tied to buying intent">
              <Grid>
                {PORTFOLIO.mappings.map((item) => (
                  <div key={item.project} style={infoCard()}>
                    <div style={cardHeading()}>{item.project}</div>
                    <div style={bodyText()}>{item.problem}</div>
                  </div>
                ))}
              </Grid>
            </Panel>
          </>
        )}

        {activeTab === 6 && (
          <>
            <Panel title="Delivery System" subtitle="Visible structure builds trust and protects scope">
              <Grid>
                <div style={infoCard()}>
                  <div style={cardHeading()}>How To Structure Delivery</div>
                  <MiniList items={DELIVERY.process} />
                </div>
                <div style={infoCard()}>
                  <div style={cardHeading()}>How To Communicate Updates</div>
                  <MiniList items={DELIVERY.updates} bulletColor={THEME.blue} />
                </div>
                <div style={infoCard()}>
                  <div style={cardHeading()}>How To Avoid Scope Creep</div>
                  <MiniList items={DELIVERY.scope} bulletColor={THEME.red} />
                </div>
                <div style={infoCard()}>
                  <div style={cardHeading()}>How To Upsell After Delivery</div>
                  <MiniList items={DELIVERY.upsell} bulletColor={THEME.gold} />
                </div>
              </Grid>
            </Panel>
            <Panel title="Delivery Message Templates" subtitle="Use these to keep communication tight and professional">
              <Grid>
                {DELIVERY.messages.map((item) => (
                  <ShellBlock key={item.label} label={item.label} text={item.text} />
                ))}
              </Grid>
            </Panel>
          </>
        )}

        {activeTab === 7 && (
          <>
            <Panel title="Profile Optimization Checklist" subtitle="The basics that directly improve trust and ranking">
              <Grid>
                <div style={infoCard()}>
                  <div style={cardHeading()}>Profile Completeness</div>
                  <MiniList items={OPTIMIZATION.checklist} />
                </div>
                <div style={infoCard()}>
                  <div style={cardHeading()}>What Increases Ranking</div>
                  <MiniList items={OPTIMIZATION.ranking} bulletColor={THEME.blue} />
                </div>
              </Grid>
            </Panel>
            <Panel title="First Wins Strategy" subtitle="Get traction without damaging positioning">
              <Grid>
                <div style={infoCard()}>
                  <div style={cardHeading()}>How To Get First 5 Jobs</div>
                  <MiniList items={OPTIMIZATION.firstFiveJobs} />
                </div>
                <div style={infoCard()}>
                  <div style={cardHeading()}>How To Get First 5-Star Reviews</div>
                  <MiniList items={OPTIMIZATION.firstFiveStars} bulletColor={THEME.gold} />
                </div>
              </Grid>
            </Panel>
          </>
        )}

        {activeTab === 8 && (
          <>
            <Panel title="30-Day Upwork Launch Plan" subtitle="Sequenced for profile clarity, proposal learning, and early conversion">
              <Grid>
                {LAUNCH_PLAN.map((phase, index) => (
                  <div key={phase.week} style={index % 2 === 0 ? infoCard() : contrastCard(THEME.blueSoft, "#2d4e7b")}>
                    <div style={cardHeading()}>{phase.week}</div>
                    <div style={{ ...bodyText(), color: "#c9d9ef", marginBottom: 10 }}>{phase.focus}</div>
                    <MiniList items={phase.items} />
                  </div>
                ))}
              </Grid>
            </Panel>
            <Panel title="Expanded Tech Stack" subtitle="Secondary credibility section for deeper evaluation without bloating the main profile">
              <button
                onClick={() => setShowTechStack((value) => !value)}
                style={{
                  borderRadius: 12,
                  border: `1px solid ${THEME.border}`,
                  background: showTechStack ? "#163052" : THEME.panelSoft,
                  color: THEME.ink,
                  padding: "10px 14px",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  marginBottom: 12,
                }}
              >
                {showTechStack ? "Hide Expanded Stack" : "Show Expanded Stack"}
              </button>
              {showTechStack ? (
                <Grid>
                  {TECH_STACK.map((group) => (
                    <div key={group.label} style={infoCard()}>
                      <div style={cardHeading()}>{group.label}</div>
                      <MiniList items={group.items} />
                    </div>
                  ))}
                </Grid>
              ) : (
                <div style={bodyText()}>
                  Keep this collapsed by default so the main profile stays sharp. Open it when a client wants deeper stack
                  coverage or during later-stage evaluation.
                </div>
              )}
            </Panel>
          </>
        )}
      </div>
    </div>
  );
}

function heroStat() {
  return {
    marginTop: 18,
    background: "rgba(255,255,255,0.02)",
    border: `1px solid ${THEME.border}`,
    borderRadius: 16,
    padding: 16,
  };
}

function heroLabel() {
  return {
    color: THEME.muted,
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  };
}

function heroValue() {
  return {
    color: THEME.ink,
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.45,
    marginTop: 6,
  };
}

function infoCard() {
  return {
    background: THEME.panelSoft,
    border: `1px solid ${THEME.border}`,
    borderRadius: 16,
    padding: 16,
  };
}

function contrastCard(bg, border) {
  return {
    background: bg,
    border: `1px solid ${border}`,
    borderRadius: 16,
    padding: 16,
  };
}

function cardHeading() {
  return {
    color: THEME.ink,
    fontSize: 13,
    fontWeight: 800,
    marginBottom: 10,
  };
}

function bodyText() {
  return {
    color: THEME.muted,
    fontSize: 13,
    lineHeight: 1.65,
  };
}
