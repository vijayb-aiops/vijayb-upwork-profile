import { useMemo, useState } from "react";

const TABS = [
  "Profile Strategy",
  "Market Positioning",
  "Gig Architecture",
  "Service Chain",
  "Portfolio Integration",
  "Communication Kit",
  "Buyer Requirements",
  "Delivery Templates",
  "Thumbnail Strategy",
  "Launch Plan",
];

const THEME = {
  bg: "#0b1220",
  panel: "#121c2f",
  panelSoft: "#17243a",
  ink: "#e7edf7",
  muted: "#9fb0c9",
  border: "#253856",
  accent: "#23c4a8",
  accentSoft: "#0f3f3d",
  gold: "#ffb454",
  goldSoft: "#423015",
  blue: "#4da3ff",
  blueSoft: "#142c4f",
  danger: "#ff7b72",
  dangerSoft: "#4c2222",
};

const PROFILE = {
  headline: "DevOps Engineer | Cloud, CI/CD, Kubernetes, Terraform, Observability",
  title: "DevOps Engineer and Cloud Platform Automation Specialist",
  specialization:
    "I help startups and engineering teams set up, fix, automate, and scale modern DevOps systems across CI/CD, cloud infrastructure, containers, observability, and DevSecOps.",
  shortBio:
    "DevOps Engineer with 5+ years of experience helping teams build, fix, and scale CI/CD, cloud infrastructure, Docker, Kubernetes, Terraform, and observability workflows. I work across AWS, Azure, and GCP with a practical focus on automation, deployment reliability, troubleshooting, and documentation. Ideal for startups and engineering teams that need a stronger DevOps foundation, cleaner release workflows, and production-aware delivery support.",
  bio: `I work with teams that need more than isolated DevOps fixes. I set up and improve complete delivery systems: source control workflows, CI/CD pipelines, Docker builds, Kubernetes deployments, Terraform-based infrastructure, observability, and release operations.

My background includes 5+ years of hands-on DevOps work across enterprise environments, cloud platforms, platform automation, and production troubleshooting. I am comfortable stepping into greenfield setups, inherited infrastructure, unstable release pipelines, and scaling environments where delivery speed and reliability both matter.

Core stack:
- CI/CD: Jenkins, GitHub Actions, GitLab CI
- Cloud: AWS, Azure, GCP
- Containers: Docker, Kubernetes, Helm
- IaC: Terraform, Pulumi
- Config Mgmt: Ansible, Puppet
- Scripting: Bash, Python
- Monitoring: Prometheus, ELK
- Registries: Nexus, Artifactory, Docker Hub, ECR
- Security: IAM, Kubernetes security, CI/CD secrets management

What buyers get from me:
- practical architecture and implementation
- production-aware troubleshooting
- clear documentation and handover notes
- scoped delivery with realistic boundaries
- communication that keeps engineering and business stakeholders aligned

I also maintain a GitHub and YouTube portfolio of AI + DevOps projects. Those projects support my credibility in automation, incident response, IaC, CI/CD, and cloud operations, but my Fiverr gigs are structured around business outcomes and real DevOps delivery needs.`,
  keywords: [
    "devops engineer",
    "ci cd",
    "docker",
    "kubernetes",
    "terraform",
    "cloud infrastructure",
    "aws devops",
    "monitoring",
    "automation",
    "devsecops",
    "platform engineering",
    "release engineering",
  ],
  skills: [
    "Jenkins",
    "GitHub Actions",
    "GitLab CI",
    "AWS",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes",
    "Helm",
    "Terraform",
    "Pulumi",
    "Ansible",
    "Python",
    "Bash",
    "Prometheus",
    "ELK",
    "IAM",
    "DevSecOps",
  ],
};

const POSITIONING = {
  summary:
    "Position as a delivery-focused DevOps engineer who can own connected systems, not a low-cost tool fixer. The buyer should understand that the offer covers engineering flow from repository and infrastructure through deployment, runtime visibility, and security hardening.",
  premiumLaunch: [
    "Launch with credible entry pricing on Basic packages to remove friction for first buyers.",
    "Use Standard packages as the core offer for most practical work and make them visibly stronger than Basic.",
    "Keep Premium aligned to production-readiness, environment separation, documentation, and handover value.",
    "Raise prices after the first 5-10 solid reviews, especially on CI/CD, IaC, Kubernetes, and observability gigs.",
  ],
  audiences: [
    {
      label: "Startups and SaaS teams",
      notes:
        "Need speed, environment setup, release automation, Docker/Kubernetes readiness, and practical documentation without hiring full-time platform staff yet.",
    },
    {
      label: "Founders and technical leads",
      notes:
        "Need a reliable freelancer who can fix bottlenecks, scope clearly, and build systems that the internal team can continue using.",
    },
    {
      label: "Engineering teams inheriting messy infrastructure",
      notes:
        "Need stabilization, IaC cleanup, pipeline modernization, runtime fixes, and better observability without rewriting everything at once.",
    },
    {
      label: "Agencies and product teams",
      notes:
        "Need a dependable DevOps implementation partner for client delivery, white-label support, and environment rollouts.",
    },
  ],
  orderModel: [
    {
      type: "Fast-order gigs",
      details:
        "Use for pipeline fixes, Kubernetes troubleshooting, automation scripts, or scoped monitoring/security improvements. These convert quickly and generate early reviews.",
    },
    {
      type: "High-value gigs",
      details:
        "Use for platform setup, Terraform-driven cloud infrastructure, full CI/CD buildouts, production Kubernetes delivery, or observability programs. These are stronger for long-term positioning and repeat work.",
    },
  ],
  whyGrouped:
    "Tool-only gigs create price pressure and make the seller look interchangeable. Grouped-solution gigs reflect how DevOps is actually bought: teams need workflows that connect Git, pipelines, cloud, containers, artifact storage, security, and observability. That lets titles stay searchable while the scope still supports higher-value outcomes.",
  messaging: {
    startups:
      "I can help you move from ad hoc deployments to a clean DevOps foundation with CI/CD, Docker, cloud-ready infrastructure, and deployment workflows your team can actually operate.",
    founders:
      "If releases are manual, infra is fragile, or your team is losing time to deployment issues, I can scope the bottleneck, implement the missing platform pieces, and document a maintainable path forward.",
    engineering:
      "I work well with existing repos, environments, and team processes. I can improve pipeline reliability, infrastructure consistency, Kubernetes delivery, and runtime visibility without forcing unnecessary platform churn.",
  },
};

const GIGS = [
  {
    id: "gig-1",
    name: "DevOps Platform Setup",
    title:
      "I will set up a complete DevOps platform with CI/CD, Docker and cloud automation",
    subtitle: "DevOps foundation setup for startups and development teams",
    tools: [
      "Linux",
      "Git / GitHub / GitLab",
      "Docker",
      "Jenkins / GitHub Actions / GitLab CI",
      "Nexus / Artifactory / Docker Hub / ECR",
      "AWS / Azure / GCP basics",
      "secrets handling and access structure",
    ],
    problems: [
      "No DevOps foundation",
      "Manual builds and deployments",
      "No containerization baseline",
      "Disconnected repositories, pipelines, and deployment flow",
    ],
    deliverables: [
      "repository workflow and branching guidance",
      "working CI or CI/CD pipeline",
      "Dockerized application build path",
      "artifact publishing or image push flow",
      "deployment notes and architecture summary",
    ],
    audience:
      "Founders, startups, SaaS teams, and product teams building their first clean DevOps operating model.",
    tags: [
      "devops",
      "ci cd",
      "docker",
      "cloud automation",
      "gitlab",
      "github actions",
      "jenkins",
      "platform setup",
      "devops engineer",
      "automation",
    ],
    description: `If your team has source code but no reliable DevOps delivery path, I can set up a practical platform foundation that connects repository workflows, CI/CD, Docker, artifact handling, and cloud deployment readiness.

This gig is designed for teams that need a real DevOps starting point, not isolated fixes. I can help you organize Git workflows, build and test automation, Docker-based packaging, artifact publishing, and deployment guidance so your team can move from manual release steps to repeatable delivery.

Typical use cases:
- startup launching its first proper delivery workflow
- SaaS team replacing ad hoc deployments
- engineering team standardizing Git + CI/CD + Docker + registry flow
- inherited project with inconsistent DevOps setup

I work with Jenkins, GitHub Actions, and GitLab CI, and I can align the setup with AWS, Azure, or GCP environments. The final outcome is a cleaner DevOps foundation with documentation your team can continue using after delivery.`,
    packages: [
      {
        name: "Basic",
        label: "DevOps Starter Setup",
        price: "$60",
        items: [
          "Git repository workflow setup",
          "Basic CI pipeline",
          "Dockerfile for application",
          "Deployment documentation",
        ],
      },
      {
        name: "Standard",
        label: "DevOps Pipeline Setup",
        price: "$150",
        items: [
          "Complete CI/CD pipeline",
          "Docker containerization",
          "Artifact repository integration",
          "Build and deploy automation",
        ],
      },
      {
        name: "Premium",
        label: "Production DevOps Platform",
        price: "$350",
        items: [
          "Full DevOps platform setup",
          "CI/CD pipelines",
          "Dockerized deployment",
          "Artifact management",
          "Deployment automation",
          "Documentation and architecture guidance",
        ],
      },
    ],
    extras: [
      "Rush delivery",
      "Architecture review call",
      "Additional environment setup",
      "Post-delivery support window",
    ],
    boundary:
      "Best for one application or one scoped platform flow per order unless a custom quote expands the scope.",
  },
  {
    id: "gig-2",
    name: "Cloud Infrastructure & Terraform",
    title: "I will design and automate your cloud infrastructure using Terraform",
    subtitle: "Scalable AWS, Azure or GCP infrastructure with Infrastructure as Code",
    tools: [
      "Terraform",
      "Pulumi",
      "AWS / Azure / GCP",
      "IAM",
      "VPC networking",
      "load balancers",
      "compute and storage services",
      "remote state and environment separation",
    ],
    problems: [
      "Manual cloud setup",
      "Unscalable infrastructure",
      "No infrastructure version control",
      "Inconsistent environments across dev, staging, and prod",
    ],
    deliverables: [
      "Terraform or Pulumi-based infrastructure definition",
      "reusable module structure",
      "remote state configuration",
      "IAM and networking baseline",
      "container-ready compute or cluster support path",
      "deployment guide and handover notes",
    ],
    audience:
      "Teams building or improving cloud environments that need repeatable IaC instead of manual console work.",
    tags: [
      "terraform",
      "cloud infrastructure",
      "aws devops",
      "azure",
      "gcp",
      "infrastructure as code",
      "iam",
      "networking",
      "automation",
      "devops engineer",
    ],
    description: `I design and automate cloud infrastructure for teams that need scalable, maintainable environments rather than one-off resource creation. This gig is built around infrastructure as code, environment consistency, and delivery readiness.

I can provision or improve AWS, Azure, or GCP environments using Terraform or Pulumi, including IAM, networking, compute, storage, remote state, and reusable module structure. The goal is not just to create resources, but to give your team an infrastructure baseline that supports CI/CD, container workloads, and controlled environment growth.

This is a good fit if your team is:
- moving from manual console configuration to IaC
- standardizing environments for dev, staging, and production
- preparing cloud infrastructure for CI/CD and Kubernetes workloads
- cleaning up inherited Terraform or module sprawl

You receive code, structure, and documentation that can support ongoing team use instead of fragile one-time setup.`,
    packages: [
      {
        name: "Basic",
        label: "Cloud Resource Setup",
        price: "$70",
        items: [
          "Setup cloud resources",
          "Basic networking",
          "IAM configuration",
        ],
      },
      {
        name: "Standard",
        label: "Terraform Infrastructure",
        price: "$180",
        items: [
          "Terraform infrastructure",
          "Reusable modules",
          "Remote state configuration",
          "Environment separation",
        ],
      },
      {
        name: "Premium",
        label: "Production Cloud Architecture",
        price: "$400",
        items: [
          "Complete cloud architecture",
          "Terraform infrastructure modules",
          "Networking, IAM, scaling",
          "Documentation and deployment guide",
        ],
      },
    ],
    extras: [
      "Additional module set",
      "Existing codebase review",
      "Readme and diagrams",
      "Follow-up implementation support",
    ],
    boundary:
      "Provider credentials, account ownership, and final production cutover approvals remain with the buyer unless explicitly included.",
  },
  {
    id: "gig-3",
    name: "CI/CD Pipeline Engineering",
    title: "I will build or optimize CI/CD pipelines using Jenkins or GitHub Actions",
    subtitle: "Automated build, test and deployment pipelines for modern applications",
    tools: [
      "Jenkins",
      "GitHub Actions",
      "GitLab CI",
      "Docker build workflows",
      "artifact registries",
      "deployment workflows",
      "secret handling",
    ],
    problems: [
      "Manual deployments",
      "Broken pipelines",
      "Slow release cycles",
      "Unreliable builds and weak release controls",
    ],
    deliverables: [
      "fixed or newly built pipeline workflow",
      "build, test, package, and deploy stages",
      "artifact publishing or registry integration",
      "secret handling improvements",
      "troubleshooting notes and optimization recommendations",
    ],
    audience:
      "Product teams that need release automation, faster delivery, and fewer deployment failures.",
    tags: [
      "ci cd",
      "jenkins",
      "github actions",
      "gitlab ci",
      "release engineering",
      "docker",
      "automation",
      "pipeline",
      "devops",
      "devops engineer",
    ],
    description: `This gig focuses on release engineering outcomes: reliable builds, cleaner deployment workflows, and delivery systems your team can trust under deadline pressure.

I can troubleshoot failed Jenkins, GitHub Actions, or GitLab CI pipelines, or build a cleaner release workflow from scratch. That includes Docker image builds, artifact publishing, environment-aware deployment stages, secret handling, and general pipeline optimization.

Typical scenarios:
- builds pass locally but fail in CI
- deployments are still manual or partially automated
- release steps are slow, brittle, or inconsistent across environments
- pipelines have grown messy and need cleanup without full platform rework

The result is a more dependable release process with better automation and clearer handoff documentation.`,
    packages: [
      {
        name: "Basic",
        label: "Pipeline Fix",
        price: "$50",
        items: [
          "Troubleshoot CI/CD issue",
          "Pipeline configuration fix",
          "Logs analysis",
        ],
      },
      {
        name: "Standard",
        label: "CI/CD Pipeline Build",
        price: "$140",
        items: [
          "Full CI/CD pipeline",
          "Build automation",
          "Artifact publishing",
          "Deployment automation",
        ],
      },
      {
        name: "Premium",
        label: "Advanced Release Pipeline",
        price: "$320",
        items: [
          "Multi stage CI/CD pipeline",
          "Environment based deployments",
          "Container builds",
          "Automated release workflows",
        ],
      },
    ],
    extras: [
      "Pipeline review video",
      "Additional workflow file",
      "Release rollback logic",
      "Support for one more environment",
    ],
    boundary:
      "Application code refactors, test authoring, and complex release governance programs can be quoted separately if they exceed pipeline scope.",
  },
  {
    id: "gig-4",
    name: "Kubernetes Deployment & Operations",
    title: "I will deploy and manage applications on Kubernetes with Helm",
    subtitle: "Production ready container orchestration and cluster deployments",
    tools: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Ingress",
      "Services",
      "cluster networking",
      "autoscaling",
      "runtime troubleshooting",
    ],
    problems: [
      "Application deployment failures",
      "Container orchestration complexity",
      "Scaling issues",
      "Unstable runtime behavior in clusters",
    ],
    deliverables: [
      "application deployment or troubleshooting support",
      "Helm-based release setup",
      "service and ingress configuration",
      "scaling and rollout guidance",
      "runtime fix summary and operational notes",
    ],
    audience:
      "Teams deploying containerized applications who need Kubernetes delivery support, troubleshooting, and operational cleanup.",
    tags: [
      "kubernetes",
      "docker",
      "helm",
      "deployment",
      "ingress",
      "autoscaling",
      "devops",
      "cluster operations",
      "runtime troubleshooting",
      "ci cd",
    ],
    description: `I help teams deploy, stabilize, and operate Kubernetes workloads with practical Helm and runtime support. This gig is for teams that need more than one-off pod debugging. It covers deployment structure, services, ingress, rollout flow, scaling basics, and production-aware runtime troubleshooting.

I can help with new application deployments, broken workload rollouts, Helm release issues, service exposure, and cluster behavior that is slowing down delivery or causing recurring incidents.

This is a good fit for:
- teams moving from Docker to Kubernetes
- projects with failed or unstable deployments
- SaaS teams improving runtime operations and release consistency
- environments that need better Helm structure and deployment hygiene

You get a cleaner, more supportable Kubernetes delivery path rather than a narrow one-time fix.`,
    packages: [
      {
        name: "Basic",
        label: "Kubernetes Deployment Fix",
        price: "$70",
        items: [
          "Pod debugging",
          "Deployment troubleshooting",
          "Logs analysis",
        ],
      },
      {
        name: "Standard",
        label: "Kubernetes Deployment Setup",
        price: "$180",
        items: [
          "Application deployment",
          "Services and ingress",
          "Helm charts",
          "Scaling configuration",
        ],
      },
      {
        name: "Premium",
        label: "Production Kubernetes Setup",
        price: "$420",
        items: [
          "Cluster deployment guidance",
          "Helm based releases",
          "Autoscaling setup",
          "Networking and monitoring integration",
        ],
      },
    ],
    extras: [
      "Additional service deployment",
      "Helm values profile",
      "Runbook creation",
      "Post-deployment support",
    ],
    boundary:
      "Managed service provisioning, cluster creation, and large-scale platform migration may need a custom order tied to infrastructure scope.",
  },
  {
    id: "gig-5",
    name: "Monitoring, Security & Operations",
    title: "I will implement monitoring, logging and DevOps security automation",
    subtitle: "Observability and DevSecOps integration for production infrastructure",
    tools: [
      "Prometheus",
      "Grafana",
      "ELK stack",
      "IAM",
      "secrets management",
      "SonarQube",
      "DevSecOps tools",
      "alerting and incident visibility",
    ],
    problems: [
      "No monitoring visibility",
      "Slow incident response",
      "Security gaps in delivery workflows",
      "No auditability or alerting structure",
    ],
    deliverables: [
      "monitoring and alerting baseline",
      "log collection or centralization setup",
      "security checks or policy integration",
      "operational visibility improvements",
      "handover notes for incident and audit workflows",
    ],
    audience:
      "Teams that already run services and now need visibility, alerting, and safer operational practices.",
    tags: [
      "monitoring",
      "prometheus",
      "grafana",
      "elk",
      "devsecops",
      "security",
      "automation",
      "incident response",
      "devops",
      "aws devops",
    ],
    description: `This gig is built for teams that want stronger operational maturity: better metrics, cleaner logs, actionable alerts, and security controls that fit into delivery workflows instead of slowing everything down.

I can help implement Prometheus and Grafana setups, ELK-based logging, IAM and secrets improvements, CI/CD security checks, and alerting paths that improve incident visibility. The goal is to make systems easier to operate and easier to trust.

Use this when:
- incidents are discovered too late
- logs are scattered or difficult to search
- there is little confidence in pipeline or infrastructure security
- the team needs an observability baseline before scaling further

This gig fits naturally after cloud, CI/CD, and Kubernetes work, and it supports a more complete DevOps operating model.`,
    packages: [
      {
        name: "Basic",
        label: "Monitoring Setup",
        price: "$80",
        items: [
          "Basic monitoring",
          "Metrics collection",
          "Alert configuration",
        ],
      },
      {
        name: "Standard",
        label: "Observability Stack",
        price: "$200",
        items: [
          "Prometheus and Grafana setup",
          "Log aggregation",
          "Alerting configuration",
        ],
      },
      {
        name: "Premium",
        label: "DevOps Observability & Security",
        price: "$450",
        items: [
          "Monitoring stack",
          "Logging pipeline",
          "Security scanning integration",
          "Alerting and incident workflows",
        ],
      },
    ],
    extras: [
      "Dashboard pack",
      "Additional alert policy",
      "Security review call",
      "Knowledge transfer walkthrough",
    ],
    boundary:
      "Formal compliance programs, 24/7 managed operations, or full SOC-style ownership are outside this gig unless custom scoped.",
  },
  {
    id: "gig-6",
    name: "DevOps Automation",
    title: "I will automate your DevOps workflows using Python, Bash or Ansible",
    subtitle: "Infrastructure automation and DevOps scripting for faster operations",
    tools: [
      "Python",
      "Bash",
      "Ansible",
      "CI/CD pipelines",
      "cloud automation",
      "infrastructure maintenance scripts",
    ],
    problems: [
      "Manual DevOps tasks",
      "Slow infrastructure operations",
      "Repetitive maintenance work",
      "Human error in deployments and ops routines",
    ],
    deliverables: [
      "automation scripts or playbooks",
      "pipeline-integrated workflow logic",
      "repeatable maintenance automation",
      "documentation and usage notes",
    ],
    audience:
      "Teams spending too much time on repetitive operational work and ad hoc deployment routines.",
    tags: [
      "automation",
      "python",
      "bash",
      "ansible",
      "devops engineer",
      "ci cd",
      "cloud automation",
      "infrastructure",
      "scripting",
      "devops",
    ],
    description: `This gig covers practical DevOps automation for teams that want fewer manual steps and more reliable operations. I can automate infrastructure tasks, deployment routines, maintenance workflows, and pipeline-adjacent operations using Python, Bash, or Ansible.

The value here is operational leverage. Instead of repeating the same tasks manually, your team gets scripts or automation flows that reduce time loss, improve consistency, and lower the risk of mistakes during deployment or maintenance work.

Good fit examples:
- repetitive deployment or post-deployment tasks
- cloud housekeeping and routine operations
- environment preparation scripts
- automations that should connect cleanly into CI/CD workflows

This gig integrates naturally with platform, cloud, pipeline, and operational maturity work.`,
    packages: [
      {
        name: "Basic",
        label: "DevOps Script",
        price: "$60",
        items: [
          "Write simple automation script",
          "Bash or Python automation",
          "Documentation",
        ],
      },
      {
        name: "Standard",
        label: "Workflow Automation",
        price: "$150",
        items: [
          "Automation for deployment or infrastructure",
          "Script integration with pipelines",
          "Documentation",
        ],
      },
      {
        name: "Premium",
        label: "Full DevOps Automation",
        price: "$350",
        items: [
          "Complex automation workflow",
          "Python or Ansible automation",
          "CI/CD integration",
          "Infrastructure maintenance automation",
        ],
      },
    ],
    extras: [
      "Extra script module",
      "CLI wrapper or config file support",
      "Recorded walkthrough",
      "Additional integration target",
    ],
    boundary:
      "This gig is scoped for automation engineering, not large application development or full internal platform product builds unless custom quoted.",
  },
  {
    id: "gig-7",
    name: "DevSecOps & Pipeline Security",
    title: "I will secure your CI/CD pipelines and cloud infrastructure",
    subtitle: "DevSecOps integration for secure DevOps workflows",
    tools: [
      "SonarQube",
      "IAM",
      "Vault",
      "CI/CD secrets management",
      "pipeline security",
      "container security scanning",
    ],
    problems: [
      "Security vulnerabilities in pipelines",
      "Exposed secrets in repositories",
      "Weak IAM policies",
      "Unsecured container builds",
    ],
    deliverables: [
      "pipeline security review or hardening",
      "secrets handling improvements",
      "security scanning integration",
      "IAM and policy guidance",
      "secure CI/CD architecture notes",
    ],
    audience:
      "Teams that already have pipelines and infrastructure in place but need stronger DevSecOps guardrails and safer release paths.",
    tags: [
      "devsecops",
      "pipeline security",
      "sonarqube",
      "iam",
      "vault",
      "ci cd",
      "container security",
      "cloud security",
      "devops",
      "automation",
    ],
    description: `This gig focuses on securing delivery workflows and infrastructure access without turning DevOps into process overload. I can review and harden CI/CD pipelines, improve secrets handling, integrate scans, and support safer IAM and container build practices.

This is especially useful when your team has grown fast and security controls have not kept up with release speed. I work to add practical guardrails that fit engineering workflows and reduce avoidable exposure in repositories, pipelines, cloud access, and container delivery.

Use this gig when:
- secrets management is weak or inconsistent
- pipeline stages lack scanning or approval logic
- IAM and deployment permissions need cleanup
- you want a cleaner DevSecOps baseline before scaling delivery further

This gig pairs well with CI/CD, infrastructure, Kubernetes, and observability work across the full service chain.`,
    packages: [
      {
        name: "Basic",
        label: "Pipeline Security Check",
        price: "$70",
        items: [
          "Pipeline security review",
          "Secrets exposure check",
          "Recommendations",
        ],
      },
      {
        name: "Standard",
        label: "DevSecOps Integration",
        price: "$180",
        items: [
          "Integrate security scans",
          "Secure CI/CD secrets",
          "Pipeline hardening",
        ],
      },
      {
        name: "Premium",
        label: "Full DevSecOps Setup",
        price: "$420",
        items: [
          "Security scanning integration",
          "IAM and secrets management",
          "Container security checks",
          "Secure CI/CD architecture",
        ],
      },
    ],
    extras: [
      "Extra scan target",
      "Security posture summary",
      "Threat-focused review call",
      "Follow-up remediation support",
    ],
    boundary:
      "This gig supports DevSecOps engineering integration. Formal pentesting, compliance certification, or legal security attestations are outside scope unless separately arranged.",
  },
];

const SERVICE_CHAIN = [
  {
    step: "1. Platform Setup",
    goal: "Create the source-control, container, registry, and CI/CD foundation.",
    connects: "Feeds infrastructure provisioning, release engineering, and runtime operations.",
  },
  {
    step: "2. Cloud Infrastructure & IaC",
    goal: "Build scalable cloud environments with Terraform or Pulumi and proper IAM/networking.",
    connects: "Gives pipelines and deployments stable, versioned infrastructure targets.",
  },
  {
    step: "3. CI/CD Pipeline Engineering",
    goal: "Automate build, test, artifact publishing, and deployment workflows.",
    connects: "Moves code reliably from repository to container registry and deployment platform.",
  },
  {
    step: "4. Kubernetes Deployment & Operations",
    goal: "Deploy and operate workloads with Helm, ingress, services, and scaling practices.",
    connects: "Turns delivery automation into stable runtime execution.",
  },
  {
    step: "5. Monitoring, Security & Operations",
    goal: "Add metrics, logs, alerts, DevSecOps checks, and operational visibility.",
    connects: "Strengthens reliability, incident response, and production confidence.",
  },
  {
    step: "6. DevOps Automation",
    goal: "Remove repetitive manual work with Python, Bash, and Ansible automation.",
    connects: "Improves efficiency across setup, release, runtime, and operations tasks.",
  },
  {
    step: "7. DevSecOps & Security",
    goal: "Secure pipelines, secrets, access, and container delivery workflows.",
    connects: "Hardens the full chain so scale does not increase security risk unchecked.",
  },
];

const PORTFOLIO = {
  github:
    "Use GitHub as evidence of engineering depth, documentation quality, and repeatable project execution. Link only the cleanest repos with clear README files, architecture notes, screenshots, and demo flow.",
  youtube:
    "Use YouTube to prove communication quality and technical confidence. Short demos help buyers believe you can explain work clearly, not just perform tasks silently.",
  chatUse: [
    "Reference projects after the buyer explains their problem, not as an opening pitch.",
    "Use portfolio links to reduce buyer risk: 'Here is a related build I documented publicly.'",
    "Match each project to a gig outcome so the proof feels relevant and practical.",
  ],
  mappings: [
    {
      project: "AI Docker Security Scanner",
      authority: "Supports Platform Setup, Kubernetes, and Security credibility.",
    },
    {
      project: "AI AWS Cost Detective",
      authority: "Supports Cloud Infrastructure and Operations credibility.",
    },
    {
      project: "AI GitHub Actions Healer",
      authority: "Supports CI/CD Pipeline Engineering credibility.",
    },
    {
      project: "AI Terraform Generator",
      authority: "Supports Cloud Infrastructure and IaC credibility.",
    },
    {
      project: "AI Log Analyzer / AI Incident Commander / AI Pipeline War Room",
      authority: "Supports Monitoring, Operations, incident visibility, and troubleshooting credibility.",
    },
  ],
  rules: [
    "Do not make gigs feel like a portfolio showcase product.",
    "Use projects as proof of thinking and execution style.",
    "Keep authority claims concrete: demos, repos, documentation, and related problem-solving depth.",
  ],
};

const COMMUNICATION = {
  firstReply: `Thanks for reaching out. From your message, it sounds like the main issue is [problem]. I can help with that.

Before I recommend the right package, please send:
- current stack or cloud/provider details
- repo or pipeline tool in use
- what is failing now
- what outcome you want after this job

If you share that, I can confirm scope, delivery approach, and the best package or custom quote.`,
  scopeClarification: `To scope this correctly, I need to separate the immediate fix from the wider platform work.

Please confirm:
- what is already in place
- what should be created vs fixed
- number of environments involved
- whether access, documentation, and handover are required
- whether this is a one-time delivery or the first phase of a bigger DevOps roadmap`,
  quoteFraming: `Based on your requirements, I recommend the [package/custom offer] option because it covers the full chain needed for this outcome, not just the visible symptom.

Scope included:
- [deliverable 1]
- [deliverable 2]
- [deliverable 3]

Not included in this quote:
- [boundary 1]
- [boundary 2]

That keeps the delivery focused, realistic, and easier to complete cleanly.`,
  orderConfirmation: `Order confirmed. I will start with an initial review of your current setup, identify the implementation path, and keep you updated at each key milestone.

Expected flow:
1. review current setup and access
2. implement or fix scoped DevOps components
3. validate outcome
4. deliver documentation, notes, and next-step recommendations

If I find a blocker outside the agreed scope, I will flag it before proceeding.`,
  delivery: `Delivery is ready.

Completed in this order:
- [completed item 1]
- [completed item 2]
- [completed item 3]

What to review:
- updated configs / scripts / manifests / pipeline files
- implementation notes and usage guidance
- follow-up recommendations for the next improvement stage

If you want, I can also help with the next linked phase such as infrastructure cleanup, deployment hardening, monitoring, or security integration.`,
  reviewRequest: `If this delivery helped your team move faster or made the setup easier to operate, a short review would help a lot. Specific feedback about communication, technical clarity, and delivery quality is especially valuable.`,
  scopeCreep: `That request is related, but it goes beyond the scope of the current order. I can either keep the current order focused and deliver it cleanly, or I can prepare a custom extension that includes the additional work with updated timeline and pricing.`,
  upsell: `Now that the current issue is handled, the next highest-value improvement would be [next phase]. That would help you move from a point fix to a more reliable DevOps chain. If useful, I can prepare a scoped follow-up offer.`,
};

const REQUIREMENTS = [
  {
    gig: "DevOps Platform Setup",
    items: [
      "Repository link or repo structure overview",
      "Current hosting or cloud platform details",
      "Existing Dockerfile, pipeline files, or deployment scripts if available",
      "Target outcome: CI only, CI/CD, artifact publishing, or deployment flow",
      "Access model and any security constraints",
    ],
  },
  {
    gig: "Cloud Infrastructure & Terraform",
    items: [
      "Cloud provider and target services",
      "Current environment layout or existing infrastructure",
      "Whether this is greenfield, migration, or refactor work",
      "Environment count: dev, staging, prod",
      "IAM, networking, naming, and state backend preferences",
    ],
  },
  {
    gig: "CI/CD Pipeline Engineering",
    items: [
      "Pipeline platform in use",
      "Current pipeline file or logs",
      "Application stack and build commands",
      "Deployment target and artifact destination",
      "Expected release flow and environment model",
    ],
  },
  {
    gig: "Kubernetes Deployment & Operations",
    items: [
      "Cluster type: EKS, AKS, GKE, self-managed, or other",
      "Current manifests, Helm chart, or deployment setup",
      "Problem symptoms, logs, and recent failures",
      "Ingress or service exposure requirements",
      "Scaling, rollout, and environment expectations",
    ],
  },
  {
    gig: "Monitoring, Security & Operations",
    items: [
      "Current monitoring and logging tools in use",
      "Main operational pain points or incident patterns",
      "Target metrics, logs, alert channels, or dashboards",
      "Security tools or scan platforms already available",
      "Whether the priority is visibility, alerting, logging, or security integration",
    ],
  },
  {
    gig: "DevOps Automation",
    items: [
      "Manual workflow to automate",
      "Preferred automation method: Python, Bash, or Ansible",
      "Inputs, outputs, and trigger conditions",
      "Whether integration with CI/CD or cloud APIs is required",
      "Expected documentation or handover format",
    ],
  },
  {
    gig: "DevSecOps & Pipeline Security",
    items: [
      "Current CI/CD platform and cloud environment",
      "Existing secrets handling process",
      "Current security scans or policy checks, if any",
      "Key risk area: repos, pipelines, IAM, containers, or deployment access",
      "Security outcome expected from this order",
    ],
  },
];

const DELIVERIES = [
  {
    label: "Platform Setup",
    text: `Delivery summary:
- repository workflow reviewed and aligned
- CI/CD flow configured or improved
- Docker packaging path added or fixed
- artifact/deployment process documented

Included files and notes:
- pipeline/config updates
- Docker or registry changes
- architecture summary
- handover steps for your team

Recommended next phase:
Cloud infrastructure hardening, Kubernetes rollout support, or monitoring integration.`,
  },
  {
    label: "Cloud / IaC",
    text: `Delivery summary:
- cloud resources defined or improved through IaC
- module/state/environment structure organized
- IAM/networking baseline aligned to scope
- deployment and maintenance notes included

Included files and notes:
- Terraform or Pulumi code
- variable and backend guidance
- environment usage instructions
- implementation summary and next-step notes

Recommended next phase:
CI/CD integration or Kubernetes deployment layer.`,
  },
  {
    label: "CI/CD Work",
    text: `Delivery summary:
- pipeline issue resolved or new workflow built
- build/test/package/deploy stages aligned to scope
- secrets/artifact flow reviewed and improved
- optimization or troubleshooting notes included

Included files and notes:
- pipeline YAML/Jenkinsfile/config changes
- deployment logic summary
- validation notes
- next improvement recommendations

Recommended next phase:
Runtime observability, Kubernetes rollout support, or DevSecOps hardening.`,
  },
  {
    label: "Kubernetes Runtime",
    text: `Delivery summary:
- deployment/runtime issue diagnosed and fixed or workload setup completed
- Helm/service/ingress configuration aligned to scope
- rollout and scaling notes included
- operational follow-up points documented

Included files and notes:
- manifest or Helm changes
- issue root-cause summary
- validation details
- suggested next hardening actions

Recommended next phase:
Monitoring, alerting, and security integration.`,
  },
  {
    label: "Monitoring / Security",
    text: `Delivery summary:
- monitoring, logging, or security controls implemented within scope
- visibility and alerting improved
- operational or DevSecOps notes documented
- next maturity steps identified

Included files and notes:
- dashboards, alerts, config, or scan changes
- implementation summary
- operational guidance
- follow-up roadmap suggestions

Recommended next phase:
Automation or additional platform hardening based on team priorities.`,
  },
];

const THUMBNAILS = [
  {
    gig: "DevOps Platform Setup",
    headline: "Build Your DevOps Foundation",
    sub: "CI/CD + Docker + Registry + Cloud-ready setup",
    icons: "Git, Docker, Jenkins, GitHub Actions, GitLab, cloud symbol",
  },
  {
    gig: "Cloud Infrastructure & Terraform",
    headline: "Automate Your Cloud Infrastructure",
    sub: "Terraform-driven AWS, Azure, or GCP environments",
    icons: "Terraform, AWS, Azure, GCP, IAM, network",
  },
  {
    gig: "CI/CD Pipeline Engineering",
    headline: "Fix And Scale Release Pipelines",
    sub: "Reliable build, test, artifact, and deployment flow",
    icons: "Jenkins, GitHub Actions, GitLab CI, Docker, registry",
  },
  {
    gig: "Kubernetes Deployment & Operations",
    headline: "Deploy Cleanly On Kubernetes",
    sub: "Helm, ingress, scaling, rollout, and runtime fixes",
    icons: "Kubernetes, Helm, Docker, ingress, autoscaling",
  },
  {
    gig: "Monitoring, Security & Operations",
    headline: "See Issues Before They Escalate",
    sub: "Prometheus, logs, alerts, security, incident visibility",
    icons: "Prometheus, Grafana, ELK, shield, alert",
  },
  {
    gig: "DevOps Automation",
    headline: "Automate Repetitive DevOps Work",
    sub: "Python, Bash, Ansible, pipeline-linked workflows",
    icons: "Python, terminal, Ansible, automation arrows",
  },
  {
    gig: "DevSecOps & Pipeline Security",
    headline: "Secure Your Delivery Chain",
    sub: "Secrets, IAM, scans, and hardened CI/CD flow",
    icons: "shield, SonarQube, Vault, IAM, container scan",
  },
];

const LAUNCH_PLAN = [
  {
    phase: "Days 1-3",
    focus: "Profile and first publish",
    items: [
      "Publish the Fiverr profile with the optimized headline, title, bio, tags, and skills.",
      "Launch the first 4 gigs: Platform Setup, Cloud Infrastructure, CI/CD Engineering, Kubernetes Operations.",
      "Prepare thumbnail designs before publishing so all first gigs look consistent and premium.",
    ],
  },
  {
    phase: "Days 4-10",
    focus: "Expand into operational maturity",
    items: [
      "Publish Monitoring/Security, Automation, and DevSecOps gigs after the first four are live and polished.",
      "Use buyer messages and early impressions to tune subtitles, FAQs, and package phrasing.",
      "Push GitHub repos and YouTube demos that support the most strategic gigs, especially CI/CD, IaC, and observability.",
    ],
  },
  {
    phase: "Days 11-20",
    focus: "Generate first orders and reviews",
    items: [
      "Use moderate launch pricing on Basic packages while keeping Standard as the main recommended offer.",
      "Prioritize faster-response, lower-friction jobs that can convert into good reviews and future upgrades.",
      "Use structured communication templates so every buyer experience feels professional and repeatable.",
    ],
  },
  {
    phase: "Days 21-30",
    focus: "Refine positioning and price ramp",
    items: [
      "Raise prices on gigs that get messages quickly or show stronger conversion.",
      "Add more authority cues in descriptions based on real delivered work and buyer language.",
      "Use delivered projects to upsell buyers from point fixes into wider DevOps chain work.",
    ],
  },
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
        background: "#0f1728",
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
        boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
      }}
    >
      {title ? (
        <div style={{ marginBottom: 12 }}>
          <div style={{ color: THEME.ink, fontWeight: 800, fontSize: 16 }}>{title}</div>
          {subtitle ? (
            <div style={{ color: THEME.muted, fontSize: 12, marginTop: 4 }}>{subtitle}</div>
          ) : null}
        </div>
      ) : null}
      {children}
    </div>
  );
}

function Badge({ children, tone = "blue" }) {
  const map = {
    blue: { bg: THEME.blueSoft, ink: "#cde2ff", border: "#2c4c7b" },
    green: { bg: THEME.accentSoft, ink: "#d8fbf3", border: "#2b6e68" },
    gold: { bg: THEME.goldSoft, ink: "#ffe2ba", border: "#7c5f35" },
    red: { bg: THEME.dangerSoft, ink: "#ffd5d1", border: "#7a3a38" },
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

function PackageTable({ packages }) {
  return (
    <div style={{ overflowX: "auto", marginTop: 12 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 660 }}>
        <thead>
          <tr>
            {packages.map((pkg, index) => (
              <th
                key={pkg.name}
                style={{
                  textAlign: "left",
                  padding: 14,
                  background: index === 1 ? "#17324c" : "#101a2b",
                  color: THEME.ink,
                  border: `1px solid ${THEME.border}`,
                  fontSize: 13,
                }}
              >
                <div style={{ fontWeight: 800 }}>{pkg.name}</div>
                <div style={{ color: index === 1 ? "#b7d9ff" : THEME.muted, fontSize: 12, marginTop: 4 }}>
                  {pkg.label}
                </div>
                <div style={{ color: THEME.gold, fontSize: 18, fontWeight: 800, marginTop: 8 }}>{pkg.price}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {packages.map((pkg) => (
              <td
                key={pkg.name}
                style={{
                  verticalAlign: "top",
                  padding: 14,
                  border: `1px solid ${THEME.border}`,
                  background: "#0f1728",
                }}
              >
                <MiniList items={pkg.items} bulletColor={THEME.gold} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Grid({ columns = "repeat(auto-fit, minmax(240px, 1fr))", children }) {
  return <div style={{ display: "grid", gridTemplateColumns: columns, gap: 14 }}>{children}</div>;
}

export default function FiverrKitV3Artifact() {
  const [activeTab, setActiveTab] = useState(0);
  const [openGig, setOpenGig] = useState(GIGS[0].id);
  const keywordLine = useMemo(() => PROFILE.keywords.join(" | "), []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(35,196,168,0.12), transparent 32%), radial-gradient(circle at top right, rgba(77,163,255,0.12), transparent 28%), linear-gradient(180deg, #08101c 0%, #0b1220 100%)",
        color: THEME.ink,
        fontFamily: '"Segoe UI", "Inter", "Helvetica Neue", Arial, sans-serif',
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(135deg, rgba(18,28,47,0.96), rgba(12,19,32,0.96))",
            border: `1px solid ${THEME.border}`,
            borderRadius: 24,
            padding: 24,
            boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
            marginBottom: 18,
          }}
        >
          <Badge tone="green">Grouped Solution Gig System</Badge>
          <Badge tone="blue">GitHub Pages Friendly</Badge>
          <Badge tone="gold">7 Full-Chain DevOps Gigs</Badge>
          <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: -0.6, marginTop: 8 }}>
            Fiverr Kit V3: Premium DevOps Launch Dashboard
          </div>
          <div style={{ color: THEME.muted, maxWidth: 950, lineHeight: 1.65, fontSize: 14, marginTop: 10 }}>
            Built for a real DevOps engineer with enterprise exposure, portfolio proof, and a stronger Fiverr
            go-to-market strategy. The structure sells outcomes across the full DevOps lifecycle instead of
            isolated tool tasks.
          </div>
          <Grid columns="repeat(auto-fit, minmax(220px, 1fr))">
            <div style={heroStat()}>
              <div style={heroLabel()}>Positioning</div>
              <div style={heroValue()}>DevOps Engineer + Cloud & Platform Automation Specialist</div>
            </div>
            <div style={heroStat()}>
              <div style={heroLabel()}>Primary Model</div>
              <div style={heroValue()}>Full DevOps service chains, not tool-only gigs</div>
            </div>
            <div style={heroStat()}>
              <div style={heroLabel()}>Buyer Outcome</div>
              <div style={heroValue()}>More clicks, better-fit messages, and stronger upsell paths</div>
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
            <Panel title="Profile Strategy" subtitle="SEO-first profile copy with stronger specialization and business logic">
              <Grid>
                <div style={infoCard()}>
                  <div style={cardHeading()}>Fiverr Headline</div>
                  <ShellBlock label="Headline" text={PROFILE.headline} />
                </div>
                <div style={infoCard()}>
                  <div style={cardHeading()}>SEO-Friendly Profile Title</div>
                  <ShellBlock label="Profile Title" text={PROFILE.title} />
                </div>
              </Grid>
              <ShellBlock label="600-Character Bio" text={PROFILE.shortBio} />
              <ShellBlock label="Profile Bio" text={PROFILE.bio} />
              <Grid>
                <div style={infoCard()}>
                  <div style={cardHeading()}>Specialization Statement</div>
                  <div style={bodyText()}>{PROFILE.specialization}</div>
                </div>
                <div style={infoCard()}>
                  <div style={cardHeading()}>Why Grouped-Solution Gigs Win</div>
                  <div style={bodyText()}>{POSITIONING.whyGrouped}</div>
                </div>
              </Grid>
            </Panel>
            <Panel title="Keyword Strategy" subtitle="Use natural search terms without stuffing">
              <ShellBlock label="Keyword Line" text={keywordLine} />
              <div style={{ marginTop: 12 }}>
                {PROFILE.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Panel>
          </>
        )}

        {activeTab === 1 && (
          <>
            <Panel title="Market Positioning" subtitle="How to stand apart from generic DevOps freelancers">
              <div style={bodyText()}>{POSITIONING.summary}</div>
              <Grid>
                <div style={contrastCard(THEME.accentSoft, "#2b6e68")}>
                  <div style={cardHeading()}>Premium-But-Launch Pricing</div>
                  <MiniList items={POSITIONING.premiumLaunch} />
                </div>
                <div style={contrastCard(THEME.dangerSoft, "#7a3a38")}>
                  <div style={cardHeading()}>Avoid This Positioning</div>
                  <MiniList
                    items={[
                      "Cheap tool-fix seller language",
                      "Generic 'I do any DevOps task' messaging",
                      "Overusing portfolio projects as the product itself",
                      "Titles that only target narrow troubleshooting keywords",
                    ]}
                    bulletColor={THEME.danger}
                  />
                </div>
              </Grid>
            </Panel>
            <Panel title="Ideal Buyers" subtitle="Speak differently to each segment while keeping the service chain intact">
              <Grid>
                {POSITIONING.audiences.map((item) => (
                  <div key={item.label} style={infoCard()}>
                    <div style={cardHeading()}>{item.label}</div>
                    <div style={bodyText()}>{item.notes}</div>
                  </div>
                ))}
              </Grid>
            </Panel>
            <Panel title="Order Strategy" subtitle="Balance faster wins with long-term higher-ticket work">
              <Grid>
                {POSITIONING.orderModel.map((item) => (
                  <div key={item.type} style={infoCard()}>
                    <div style={cardHeading()}>{item.type}</div>
                    <div style={bodyText()}>{item.details}</div>
                  </div>
                ))}
              </Grid>
              <Grid>
                <div style={infoCard()}>
                  <div style={cardHeading()}>Messaging for Startups</div>
                  <div style={bodyText()}>{POSITIONING.messaging.startups}</div>
                </div>
                <div style={infoCard()}>
                  <div style={cardHeading()}>Messaging for Founders</div>
                  <div style={bodyText()}>{POSITIONING.messaging.founders}</div>
                </div>
                <div style={infoCard()}>
                  <div style={cardHeading()}>Messaging for Engineering Teams</div>
                  <div style={bodyText()}>{POSITIONING.messaging.engineering}</div>
                </div>
              </Grid>
            </Panel>
          </>
        )}

        {activeTab === 2 && (
          <Panel title="Gig Architecture" subtitle="Seven connected gigs built around business outcomes, not isolated tools">
            <div style={{ marginBottom: 14 }}>
              {GIGS.map((gig) => (
                <button
                  key={gig.id}
                  onClick={() => setOpenGig(gig.id)}
                  style={{
                    marginRight: 8,
                    marginBottom: 8,
                    borderRadius: 999,
                    padding: "8px 12px",
                    border: `1px solid ${openGig === gig.id ? "#2f6daf" : THEME.border}`,
                    background: openGig === gig.id ? "#18365a" : "#0f1728",
                    color: openGig === gig.id ? "#ddeaff" : THEME.muted,
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {gig.name}
                </button>
              ))}
            </div>
            {GIGS.filter((gig) => gig.id === openGig).map((gig) => (
              <div key={gig.id}>
                <Grid>
                  <div style={infoCard()}>
                    <div style={cardHeading()}>SEO Title</div>
                    <ShellBlock label="Gig Title" text={gig.title} />
                  </div>
                  <div style={infoCard()}>
                    <div style={cardHeading()}>Short Subtitle</div>
                    <ShellBlock label="Subtitle" text={gig.subtitle} />
                  </div>
                </Grid>
                <Grid>
                  <div style={infoCard()}>
                    <div style={cardHeading()}>Grouped Tools Included</div>
                    <MiniList items={gig.tools} />
                  </div>
                  <div style={infoCard()}>
                    <div style={cardHeading()}>Problems Solved</div>
                    <MiniList items={gig.problems} bulletColor={THEME.gold} />
                  </div>
                  <div style={infoCard()}>
                    <div style={cardHeading()}>Deliverables</div>
                    <MiniList items={gig.deliverables} bulletColor={THEME.blue} />
                  </div>
                </Grid>
                <Grid>
                  <div style={infoCard()}>
                    <div style={cardHeading()}>Who This Gig Is For</div>
                    <div style={bodyText()}>{gig.audience}</div>
                  </div>
                  <div style={infoCard()}>
                    <div style={cardHeading()}>Tags / Keywords</div>
                    <div>{gig.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
                  </div>
                  <div style={infoCard()}>
                    <div style={cardHeading()}>Upsell Extras</div>
                    <MiniList items={gig.extras} bulletColor={THEME.accent} />
                  </div>
                </Grid>
                <ShellBlock label="Fiverr-Ready Description" text={gig.description} />
                <PackageTable packages={gig.packages} />
                <div style={{ marginTop: 12, ...infoCard() }}>
                  <div style={cardHeading()}>Scope Boundary</div>
                  <div style={bodyText()}>{gig.boundary}</div>
                </div>
              </div>
            ))}
          </Panel>
        )}

        {activeTab === 3 && (
          <>
            <Panel title="Service Chain View" subtitle="Foundation to operational maturity across the full DevOps lifecycle">
              <div style={{ color: THEME.muted, fontSize: 13, marginBottom: 14 }}>
                Position the gigs as linked stages of one delivery ecosystem: Foundation → Infrastructure → CI/CD →
                Deployment → Observability/Security, with automation and DevSecOps reinforcing every stage.
              </div>
              <Grid columns="repeat(auto-fit, minmax(260px, 1fr))">
                {SERVICE_CHAIN.map((item, index) => (
                  <div key={item.step} style={{ ...infoCard(), position: "relative", overflow: "hidden" }}>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: index % 2 === 0 ? THEME.accent : THEME.blue,
                      }}
                    />
                    <div style={cardHeading()}>{item.step}</div>
                    <div style={bodyText()}>{item.goal}</div>
                    <div style={{ ...bodyText(), color: "#bfd0e7", marginTop: 10 }}>{item.connects}</div>
                  </div>
                ))}
              </Grid>
            </Panel>
            <Panel title="Core Strategic Line" subtitle="Use this phrasing in bio, chats, and custom offers">
              <ShellBlock
                label="Positioning Line"
                text="I sell DevOps outcomes across the full service chain: platform setup, cloud infrastructure, CI/CD, Kubernetes deployment, observability, automation, and DevSecOps. Buyers do not need separate freelancers for each tool."
              />
            </Panel>
          </>
        )}

        {activeTab === 4 && (
          <>
            <Panel title="Portfolio Integration" subtitle="Use proof to lower buyer risk, not to replace the service strategy">
              <Grid>
                <div style={infoCard()}>
                  <div style={cardHeading()}>GitHub Portfolio Block</div>
                  <div style={bodyText()}>{PORTFOLIO.github}</div>
                </div>
                <div style={infoCard()}>
                  <div style={cardHeading()}>YouTube Credibility Block</div>
                  <div style={bodyText()}>{PORTFOLIO.youtube}</div>
                </div>
                <div style={infoCard()}>
                  <div style={cardHeading()}>How To Reference Projects In Chats</div>
                  <MiniList items={PORTFOLIO.chatUse} />
                </div>
              </Grid>
            </Panel>
            <Panel title="Project-to-Gig Authority Map">
              <Grid>
                {PORTFOLIO.mappings.map((item) => (
                  <div key={item.project} style={infoCard()}>
                    <div style={cardHeading()}>{item.project}</div>
                    <div style={bodyText()}>{item.authority}</div>
                  </div>
                ))}
              </Grid>
              <div style={{ marginTop: 12 }}>
                {PORTFOLIO.rules.map((rule) => (
                  <Badge key={rule} tone="gold">
                    {rule}
                  </Badge>
                ))}
              </div>
            </Panel>
          </>
        )}

        {activeTab === 5 && (
          <Panel title="Client Communication Kit" subtitle="Reusable message templates for faster, cleaner buyer handling">
            <Grid>
              <ShellBlock label="First Reply" text={COMMUNICATION.firstReply} />
              <ShellBlock label="Scope Clarification" text={COMMUNICATION.scopeClarification} />
              <ShellBlock label="Quote Framing" text={COMMUNICATION.quoteFraming} />
              <ShellBlock label="Order Confirmation" text={COMMUNICATION.orderConfirmation} />
              <ShellBlock label="Delivery Message" text={COMMUNICATION.delivery} />
              <ShellBlock label="Review Request" text={COMMUNICATION.reviewRequest} />
              <ShellBlock label="Handling Scope Creep" text={COMMUNICATION.scopeCreep} />
              <ShellBlock label="Upsell After Delivery" text={COMMUNICATION.upsell} />
            </Grid>
          </Panel>
        )}

        {activeTab === 6 && (
          <Panel title="Buyer Requirement Templates" subtitle="Collect the right information before work starts">
            {REQUIREMENTS.map((block) => (
              <div key={block.gig} style={{ ...infoCard(), marginBottom: 12 }}>
                <div style={cardHeading()}>{block.gig}</div>
                <MiniList items={block.items} />
              </div>
            ))}
          </Panel>
        )}

        {activeTab === 7 && (
          <Panel title="Delivery Templates" subtitle="Use structured handoff language to reinforce professionalism">
            <Grid>
              {DELIVERIES.map((block) => (
                <ShellBlock key={block.label} label={block.label} text={block.text} />
              ))}
            </Grid>
          </Panel>
        )}

        {activeTab === 8 && (
          <>
            <Panel title="Thumbnail / Gig Cover Strategy" subtitle="Dark SaaS-style visuals that match DevOps credibility and portfolio branding">
              <Grid>
                <div style={infoCard()}>
                  <div style={cardHeading()}>Visual Rules</div>
                  <MiniList
                    items={[
                      "Use a dark SaaS / DevOps color system with strong contrast and minimal text.",
                      "Keep headline text large enough to read in Fiverr search results.",
                      "Use icon groups tied to the full service chain, not random stock images.",
                      "Align cover visuals with GitHub Pages branding so Fiverr and portfolio feel consistent.",
                      "Use one clear promise per thumbnail: setup, automate, deploy, monitor, or secure.",
                    ]}
                  />
                </div>
                <div style={infoCard()}>
                  <div style={cardHeading()}>Avoid</div>
                  <MiniList
                    items={[
                      "generic laptop stock photos",
                      "tiny unreadable feature text",
                      "too many unrelated logos",
                      "cheap neon effects that reduce clarity",
                      "tool-only headlines with no buyer outcome",
                    ]}
                    bulletColor={THEME.danger}
                  />
                </div>
              </Grid>
            </Panel>
            <Panel title="Per-Gig Cover Guidance">
              <Grid>
                {THUMBNAILS.map((item) => (
                  <div key={item.gig} style={infoCard()}>
                    <div style={cardHeading()}>{item.gig}</div>
                    <div style={{ ...bodyText(), color: THEME.ink }}>
                      <strong>Headline:</strong> {item.headline}
                    </div>
                    <div style={bodyText()}>
                      <strong>Subtext:</strong> {item.sub}
                    </div>
                    <div style={bodyText()}>
                      <strong>Icon Group:</strong> {item.icons}
                    </div>
                  </div>
                ))}
              </Grid>
            </Panel>
          </>
        )}

        {activeTab === 9 && (
          <>
            <Panel title="30-Day Launch Plan" subtitle="Realistic sequencing for a strong first month">
              <Grid>
                {LAUNCH_PLAN.map((phase) => (
                  <div key={phase.phase} style={infoCard()}>
                    <div style={cardHeading()}>{phase.phase}</div>
                    <div style={{ ...bodyText(), color: "#c4d4ea", marginBottom: 10 }}>{phase.focus}</div>
                    <MiniList items={phase.items} />
                  </div>
                ))}
              </Grid>
            </Panel>
            <Panel title="Publishing Sequence">
              <MiniList
                items={[
                  "Publish 4 core gigs first: Platform Setup, Cloud Infrastructure, CI/CD Engineering, Kubernetes Operations.",
                  "Add Monitoring/Security next to show operational maturity and improve authority.",
                  "Add Automation and DevSecOps last as expansion gigs that support upsells and repeat work.",
                  "After initial reviews, increase prices first on Standard and Premium tiers before moving Basic too aggressively.",
                  "Use YouTube demos to support buyer trust, GitHub to support technical credibility, and Fiverr messaging to turn proof into scoped orders.",
                ]}
              />
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
