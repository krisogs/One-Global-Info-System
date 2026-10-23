// ─────────────────────────────────────────────────────────────
// One Global Info Systems — site content model
// All page copy lives here. Edit this file to change the site.
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: "One Global Info Systems",
  shortName: "One Global",
  initials: "OG",
  tagline: "Enterprise Technology. Delivered.",
  founded: 2018,
  phone: "+1 (630) 559-4613",
  email: "info@oneglobalsys.com",
  address: "3030 Warrenville Rd, Lisle, IL 60532",
  // Footer social links. Leave a value as "" to hide that link.
  social: {
    linkedin: "https://www.linkedin.com/company/one-global-info-systems",
    x: "https://x.com/oneglobalinfo",
    facebook: "https://www.facebook.com/oneglobalinfosystems",
  },
};

export const stats = [
  { value: "30+", label: "Enterprise implementations" },
  { value: "8+", label: "Years in business" },
  { value: "97%", label: "Client retention rate" },
  { value: "24/7", label: "Managed services coverage" },
];

// ── Solutions ────────────────────────────────────────────────
export const solutions = [
  {
    slug: "enterprise-erp",
    name: "Enterprise ERP",
    icon: "Layers3",
    tagline: "One platform for finance, operations, and growth",
    summary:
      "A cloud-native ERP foundation that unifies financials, supply chain, inventory, and reporting in a single source of truth.",
    description:
      "Enterprise ERP from One Global brings every core business process — general ledger, procurement, order management, inventory, and planning — into one cloud platform. Instead of stitching together spreadsheets and point tools, your teams work from live, shared data with role-based dashboards and automated workflows. We handle the full lifecycle: process design, configuration, data migration, integration, and go-live support.",
    features: [
      { title: "Financial Management", text: "GL, AP/AR, multi-entity consolidation, revenue recognition, and real-time close." },
      { title: "Supply Chain & Inventory", text: "Demand planning, procurement, lot and serial tracking, and multi-location inventory." },
      { title: "Order-to-Cash", text: "Quote, order, fulfillment, invoicing, and collections in one automated flow." },
      { title: "Reporting & Dashboards", text: "Role-based KPIs, saved searches, and drill-down reporting without exports." },
      { title: "Global Operations", text: "Multi-currency, multi-subsidiary, and localized tax and compliance support." },
      { title: "Workflow Automation", text: "Approvals, alerts, and exception handling that remove manual handoffs." },
    ],
    platforms: [
      {
        slug: "qad",
        name: "QAD",
        text: "Manufacturing-focused ERP for discrete, process, and regulated industries, including QAD Adaptive ERP.",
      },
      {
        slug: "dynamics-365",
        name: "Microsoft Dynamics 365",
        text: "Dynamics 365 Business Central, Finance, and Supply Chain Management — connected to the Microsoft stack you already use.",
      },
      {
        slug: "netsuite",
        name: "Oracle NetSuite",
        text: "Cloud ERP for growing and multi-entity businesses, with financials, inventory, and order management in one suite.",
      },
    ],
    benefits: [
      "Close the books in days, not weeks",
      "Single source of truth across every department",
      "Scales from startup to multi-entity global operations",
      "Cloud delivery — no servers, no upgrade projects",
    ],
  },
  {
    slug: "quality-management",
    name: "Quality Management (QMS)",
    icon: "BadgeCheck",
    tagline: "Compliance-ready quality, connected to your ERP",
    summary:
      "Document control, CAPA, audits, training, and supplier quality in a validated system built for regulated industries.",
    description:
      "For regulated manufacturers, quality can't live in binders and shared drives. Our QMS solutions digitize document control, change management, CAPA, nonconformance, complaints, audits, and training — with the electronic signatures and audit trails that FDA 21 CFR Part 11, ISO 13485, and ISO 9001 demand. We integrate quality events directly with ERP transactions so quality and operations finally share one record.",
    features: [
      { title: "Document Control", text: "Versioned, routed, and approved documents with controlled distribution." },
      { title: "CAPA & Nonconformance", text: "Structured investigation, root cause, and effectiveness verification workflows." },
      { title: "Audit Management", text: "Internal, supplier, and regulatory audit planning, execution, and findings." },
      { title: "Training Management", text: "Role-based training matrices with automatic assignment on document change." },
      { title: "Supplier Quality", text: "Approved supplier lists, SCARs, and incoming inspection integration." },
      { title: "Validation Support", text: "IQ/OQ/PQ protocols and documentation for regulated deployments." },
    ],
    benefits: [
      "Pass audits with confidence — everything is traceable",
      "Cut CAPA cycle times dramatically",
      "One quality record across quality and operations",
      "Part 11-compliant signatures and audit trails",
    ],
  },
  {
    slug: "mes",
    name: "Manufacturing Execution (MES)",
    icon: "Cpu",
    tagline: "Digitize the shop floor, in weeks not years",
    summary:
      "Real-time production execution, machine connectivity, and operator workflows that bridge ERP and the plant floor.",
    description:
      "The gap between ERP and the shop floor is where visibility dies. Our MES solutions close it: operator-friendly touchscreens for work instructions and data collection, direct machine connectivity for counts and downtime, and live dashboards for OEE and schedule adherence. Built on a low-code platform, deployments that once took years now take weeks — and evolve as your processes do.",
    features: [
      { title: "Production Execution", text: "Digital work instructions, e-signoffs, and guided operator workflows." },
      { title: "Machine Connectivity", text: "PLC and IoT integration for automatic counts, rates, and downtime capture." },
      { title: "OEE & Downtime", text: "Live overall equipment effectiveness with reason-coded downtime analysis." },
      { title: "Quality In-Line", text: "In-process inspections and SPC checks embedded in production steps." },
      { title: "Labor & Genealogy", text: "Operator tracking and full as-built genealogy per unit or lot." },
      { title: "ERP Synchronization", text: "Work orders down, completions and consumption back — automatically." },
    ],
    benefits: [
      "Deploy in weeks with low-code configuration",
      "Live OEE without manual data entry",
      "Paperless shop floor with enforced quality",
      "Accurate, real-time ERP transactions",
    ],
  },
  {
    slug: "wms",
    name: "Warehouse Management (WMS)",
    icon: "Warehouse",
    tagline: "Accuracy and speed for every warehouse move",
    summary:
      "Directed put-away, picking, cycle counting, and shipping — barcode-driven and synchronized with your ERP.",
    description:
      "Inventory accuracy is the foundation everything else stands on. Our WMS solutions bring barcode-directed receiving, put-away, picking, packing, and shipping to warehouses of any size — from a single stockroom to a multi-site distribution network. Wave planning, license plating, and cycle counting keep inventory live and accurate, while carrier integration streamlines outbound shipping.",
    features: [
      { title: "Directed Receiving & Put-Away", text: "Scan-validated receipts routed to optimal bin locations." },
      { title: "Wave & Zone Picking", text: "Configurable pick strategies — wave, batch, zone, or order-based." },
      { title: "Cycle Counting", text: "ABC-driven counts that eliminate annual physical inventories." },
      { title: "License Plating", text: "Pallet- and container-level tracking through every move." },
      { title: "Shipping Integration", text: "Rate shopping, labels, and tracking with major parcel and LTL carriers." },
      { title: "Mobile Everywhere", text: "Runs on standard mobile scanners and tablets your team already knows." },
    ],
    benefits: [
      "99.9% inventory accuracy is achievable",
      "Faster onboarding for seasonal labor",
      "Eliminate annual physical counts",
      "Same-day implementation of process changes",
    ],
  },
];

// ── Industries ───────────────────────────────────────────────
export const industries = [
  {
    slug: "medical-devices",
    name: "Medical Devices",
    icon: "Stethoscope",
    summary:
      "Compliance-first ERP and QMS for device manufacturers — from Class I to Class III.",
    description:
      "Medical device manufacturers live under FDA 21 CFR Part 820, ISO 13485, and EU MDR — and their systems have to prove it. We implement validated ERP and QMS environments with full device history records, UDI support, lot and serial traceability, and electronic signatures, so audits become routine instead of fire drills.",
    challenges: [
      "Design history files and device history records scattered across systems",
      "Manual UDI submissions and labeling compliance",
      "Audit preparation consuming weeks of engineering time",
      "Disconnected quality events and production records",
    ],
    outcomes: [
      "Validated systems with complete IQ/OQ/PQ documentation",
      "End-to-end traceability from component to implanted device",
      "Automated DHR assembly at production close",
      "Audit-ready records on demand",
    ],
  },
  {
    slug: "pharma-biotech",
    name: "Pharma & Biotech",
    icon: "FlaskConical",
    summary:
      "GxP-ready systems for pharmaceutical and biotech operations of every scale.",
    description:
      "From clinical-stage biotechs to commercial pharmaceutical manufacturers, we deliver ERP and quality systems aligned with GMP requirements — batch records, expiry and retest management, quarantine workflows, and full electronic batch release. Our validation practice ensures every deployment stands up to regulatory scrutiny.",
    challenges: [
      "Paper batch records slowing release cycles",
      "Managing expiry, retest, and quarantine manually",
      "Scaling from clinical to commercial operations",
      "Serialization and track-and-trace mandates",
    ],
    outcomes: [
      "Electronic batch records with review-by-exception",
      "Automated expiry and retest date management",
      "Systems that scale through commercialization",
      "GxP-validated cloud infrastructure",
    ],
  },
  {
    slug: "startups",
    name: "Startups & Scale-Ups",
    icon: "Rocket",
    summary:
      "Right-sized enterprise systems that grow with you — without startup-killing overhead.",
    description:
      "Startups need enterprise-grade systems without enterprise-grade drag. We implement lean, pre-configured ERP editions that get you live in weeks, with a roadmap that unlocks capability as you grow — so you never outgrow your platform, and never pay for what you don't use yet.",
    challenges: [
      "QuickBooks and spreadsheets breaking under growth",
      "Investor and board reporting taking days to assemble",
      "First regulated-market entry demanding real quality systems",
      "No internal IT team to run systems",
    ],
    outcomes: [
      "Live on real ERP in as little as 60 days",
      "Board-ready reporting out of the box",
      "A platform that scales through Series A to IPO",
      "Fully managed — no internal IT required",
    ],
  },
  {
    slug: "automotive",
    name: "Automotive",
    icon: "Car",
    summary:
      "IATF-aligned systems for automotive suppliers running lean, high-volume operations.",
    description:
      "Automotive suppliers balance relentless cost pressure with unforgiving quality and delivery requirements. We implement systems that speak automotive natively: EDI with every major OEM, release accounting, cumulative tracking, label compliance, and PPAP-supporting quality workflows.",
    challenges: [
      "OEM EDI requirements and chargebacks",
      "Release-based scheduling and cum management",
      "IATF 16949 quality documentation",
      "Margin visibility across programs and parts",
    ],
    outcomes: [
      "Certified EDI with every major OEM and Tier 1",
      "Automated release processing and ASN generation",
      "Program-level profitability reporting",
      "Audit-ready IATF documentation",
    ],
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    icon: "UtensilsCrossed",
    summary:
      "Recipe-based ERP with the traceability and shelf-life control food safety demands.",
    description:
      "Food and beverage manufacturers manage variable inputs, strict shelf lives, and one-strike recall exposure. Our implementations deliver forward and backward lot traceability in minutes, catch-weight and recipe management, allergen controls, and FSMA-aligned record keeping — connected from receiving dock to distribution.",
    challenges: [
      "Mock recalls taking days instead of minutes",
      "Yield and loss tracking across variable inputs",
      "Shelf-life and FEFO inventory management",
      "Allergen segregation and labeling compliance",
    ],
    outcomes: [
      "Complete mock recalls in under 30 minutes",
      "Live yield analysis by batch and line",
      "Automated FEFO allocation and expiry alerts",
      "FSMA-ready electronic records",
    ],
  },
  {
    slug: "industrial",
    name: "Industrial Manufacturing",
    icon: "Wrench",
    summary:
      "Flexible systems for job shops, OEMs, and everything in between.",
    description:
      "Industrial manufacturers rarely fit one mold — mixed-mode production, engineer-to-order projects, aftermarket service, and distribution often live under one roof. We configure ERP to handle all of it: project costing, configurable BOMs, service management, and multi-channel fulfillment in a single system.",
    challenges: [
      "Quoting complex, configured products accurately",
      "Tracking actual costs on long-running jobs",
      "Aftermarket parts and service revenue leakage",
      "Legacy systems that no longer get updates",
    ],
    outcomes: [
      "Configure-price-quote tied directly to production",
      "Live job costing with margin alerts",
      "Unified service, parts, and warranty management",
      "Modern cloud platform with continuous updates",
    ],
  },
  {
    slug: "retail",
    name: "Retail & eCommerce",
    icon: "ShoppingBag",
    summary:
      "Unified commerce — inventory, orders, and financials across every channel.",
    description:
      "Retail brands selling across web, marketplaces, wholesale, and stores need one view of inventory and the customer. We implement unified commerce platforms that connect storefronts, POS, 3PLs, and marketplaces to a single ERP core — killing the spreadsheet reconciliation between channels.",
    challenges: [
      "Overselling from channel-siloed inventory",
      "Manual marketplace and 3PL reconciliation",
      "Returns eating margin invisibly",
      "Month-end close across channels taking weeks",
    ],
    outcomes: [
      "One live inventory position across all channels",
      "Automated marketplace and 3PL settlement",
      "Returns analytics by channel, SKU, and reason",
      "Days-long close reduced to hours",
    ],
  },
  {
    slug: "wholesale-distribution",
    name: "Wholesale Distribution",
    icon: "Truck",
    summary:
      "Margin-focused distribution systems — purchasing, pricing, and fulfillment tuned tight.",
    description:
      "Distribution margins are won in the details: buying right, pricing right, and turning inventory fast. We implement distribution ERP with demand-driven purchasing, matrix pricing, rebate tracking, and warehouse automation that lets distributors grow volume without growing headcount.",
    challenges: [
      "Dead stock tying up working capital",
      "Pricing exceptions eroding margin invisibly",
      "Vendor rebates tracked in spreadsheets",
      "Fulfillment errors driving customer churn",
    ],
    outcomes: [
      "Demand-driven replenishment cutting stockouts and overstock",
      "Enforced pricing with margin floor protection",
      "Automated rebate accrual and claims",
      "99%+ fill rates with barcode-directed fulfillment",
    ],
  },
];

// ── Professional Services ────────────────────────────────────
export const services = [
  {
    slug: "implementations",
    name: "Enterprise Implementations",
    icon: "Rocket",
    summary:
      "Fixed-scope, milestone-driven implementations that go live on time.",
    description:
      "Implementation is where enterprise projects succeed or fail. Our methodology — refined across 30+ projects — pairs industry-experienced consultants with a phased, milestone-driven plan: discover, design, build, validate, deploy. You get a named project team, weekly status transparency, and a go-live your business can actually absorb.",
    deliverables: [
      "Business process discovery and future-state design",
      "System configuration and data migration",
      "Integration development and testing",
      "User acceptance testing and training",
      "Go-live cutover and hypercare support",
    ],
  },
  {
    slug: "erp-consulting",
    name: "ERP Consulting",
    icon: "Compass",
    summary:
      "Platform selection, optimization, and rescue for ERP environments at any stage.",
    description:
      "Whether you're selecting a platform, underusing the one you have, or rescuing a stalled project, our consultants bring pattern recognition from hundreds of environments. We run structured assessments, quantify the gaps, and deliver a prioritized roadmap — then execute it with you.",
    deliverables: [
      "Platform selection and vendor evaluation",
      "System health checks and optimization roadmaps",
      "Stalled-project rescue and remediation",
      "Upgrade and cloud migration planning",
      "Process re-engineering workshops",
    ],
  },
  {
    slug: "business-consulting",
    name: "Business Consulting",
    icon: "LineChart",
    summary:
      "Process, people, and metrics — the operating model around the software.",
    description:
      "Software alone doesn't transform a business. Our business consulting practice works above the system layer: operating model design, KPI frameworks, S&OP process implementation, and change management that gets teams actually using what you bought.",
    deliverables: [
      "Operating model and org design",
      "KPI and management reporting frameworks",
      "Sales & operations planning (S&OP) implementation",
      "Change management and adoption programs",
      "Interim operational leadership",
    ],
  },
  {
    slug: "edi",
    name: "EDI Solutions",
    icon: "ArrowLeftRight",
    summary:
      "Trading partner EDI — implemented, tested, certified, and monitored.",
    description:
      "EDI failures cost real money in chargebacks and strained customer relationships. We implement and manage EDI for manufacturers and distributors: partner onboarding, document mapping (850/855/856/810 and beyond), certification testing, and proactive monitoring that catches failures before your customers do.",
    deliverables: [
      "Trading partner onboarding and certification",
      "Document mapping and translation",
      "ERP integration for touchless order flow",
      "Chargeback root-cause remediation",
      "24/7 transaction monitoring",
    ],
  },
  {
    slug: "system-integration",
    name: "System Integration",
    icon: "Network",
    summary:
      "Connect your ERP to everything — cleanly, reliably, observably.",
    description:
      "Modern stacks are ecosystems: ERP, CRM, eCommerce, PLM, shipping, banking, BI. We design and build integrations with proper error handling, retry logic, and monitoring — using native connectors, iPaaS platforms, or custom APIs as the architecture demands. No brittle point-to-point spaghetti.",
    deliverables: [
      "Integration architecture and platform selection",
      "API and iPaaS-based integration development",
      "eCommerce, CRM, PLM, and 3PL connectors",
      "Data synchronization and error monitoring",
      "Legacy system data conversion",
    ],
  },
  {
    slug: "training",
    name: "Training & Enablement",
    icon: "GraduationCap",
    summary:
      "Role-based training that turns licensed users into power users.",
    description:
      "Most companies use a fraction of what their systems can do. Our training practice builds role-based curricula — live workshops, recorded modules, and quick-reference guides — tailored to your configuration, not generic vendor slideware. New-hire onboarding programs keep capability from walking out the door.",
    deliverables: [
      "Role-based curriculum design",
      "Live instructor-led workshops",
      "Custom quick-reference documentation",
      "New-hire onboarding programs",
      "Post-go-live refresher and power-user tracks",
    ],
  },
];

// ── Managed Services ─────────────────────────────────────────
export const managedServices = [
  {
    slug: "totalcare",
    name: "TotalCare",
    icon: "ShieldCheck",
    summary: "Your complete ERP team — application, technical, and strategic — under one agreement.",
    description:
      "TotalCare is our flagship managed service: a named team covering application support, technical administration, integrations, reporting, and continuous improvement. One agreement, one SLA, predictable monthly cost — the equivalent of a full internal ERP team at a fraction of the cost.",
    includes: [
      "Unlimited application support tickets",
      "Proactive system administration and monitoring",
      "Report and enhancement development hours",
      "Quarterly strategic roadmap reviews",
      "Named service delivery manager",
    ],
  },
  {
    slug: "application-support",
    name: "Application Support",
    icon: "Headset",
    summary: "Expert help desk for your ERP users — SLA-backed, staffed by consultants.",
    description:
      "When users hit a wall, they need answers from people who know both the platform and your configuration. Our application support service gives your team a direct line to senior consultants — not a script-reading call center — with guaranteed response times and full ticket transparency.",
    includes: [
      "SLA-backed response and resolution times",
      "Senior consultants, not tier-1 script readers",
      "Full ticket portal with reporting",
      "How-to guidance and root-cause fixes",
      "Monthly service reviews",
    ],
  },
  {
    slug: "technical-services",
    name: "Technical Services",
    icon: "ServerCog",
    summary: "Database, environment, and performance management for your ERP stack.",
    description:
      "Behind every reliable ERP is unglamorous technical work: environment refreshes, patch management, performance tuning, backup verification, and security reviews. Our technical services team handles it on a scheduled cadence with proactive monitoring — so problems get fixed before users notice.",
    includes: [
      "Environment and instance management",
      "Patch and release management",
      "Performance monitoring and tuning",
      "Backup and disaster recovery verification",
      "Security and access reviews",
    ],
  },
  {
    slug: "managed-edi",
    name: "Managed EDI",
    icon: "Repeat",
    summary: "We run your EDI operation — onboarding, monitoring, and failure resolution.",
    description:
      "EDI never sleeps, and neither do its failures. Our managed EDI service takes the entire operation off your plate: new partner onboarding, map maintenance, transaction monitoring, and same-day failure resolution — with chargeback prevention as the KPI that matters.",
    includes: [
      "24/7 transaction monitoring and alerting",
      "Failed-document triage and resolution",
      "New trading partner onboarding",
      "Map updates for partner spec changes",
      "Monthly chargeback and volume reporting",
    ],
  },
  {
    slug: "bpo",
    name: "Business Process Outsourcing",
    icon: "Users",
    summary: "We run the back-office processes your ERP powers — order entry, AP, master data, and reporting.",
    description:
      "Some work doesn't need a full-time hire; it needs people who already know your system. Our BPO teams operate inside your ERP to handle high-volume, rules-driven back-office processes — order entry and fulfillment coordination, accounts payable and receivable, item and customer master data, and recurring reporting. Because the same firm that implemented and supports your platform is running the transactions, process changes take days instead of retraining cycles, and you get documented SOPs, agreed SLAs, and monthly quality metrics rather than a black box.",
    includes: [
      "Order entry, invoicing, and fulfillment coordination",
      "Accounts payable and receivable processing",
      "Item, customer, and vendor master data maintenance",
      "Recurring financial and operational reporting",
      "Documented SOPs with SLA-backed accuracy targets",
      "Flexible capacity for seasonal and growth spikes",
    ],
  },
];

// ── Case Studies ─────────────────────────────────────────────
export const caseStudies = [
  {
    slug: "meridian-medical",
    client: "Meridian Medical Components",
    industry: "Medical Devices",
    title: "From paper DHRs to audit-ready in 9 months",
    summary:
      "A Class II device manufacturer replaced paper device history records and a legacy MRP system with integrated ERP + QMS — and passed their next FDA audit with zero findings.",
    results: [
      { value: "0", label: "FDA audit findings post go-live" },
      { value: "75%", label: "Faster DHR assembly" },
      { value: "9 mo", label: "Full implementation timeline" },
    ],
    quote:
      "For the first time, quality and production are looking at the same record. Audit prep went from three weeks to an afternoon.",
    quoteAttribution: "VP of Quality, Meridian Medical Components",
  },
  {
    slug: "harvest-ridge",
    client: "Harvest Ridge Foods",
    industry: "Food & Beverage",
    title: "Mock recalls in 22 minutes, down from 3 days",
    summary:
      "A multi-plant food manufacturer implemented lot-traceable ERP with warehouse scanning across three facilities, transforming recall readiness and cutting inventory write-offs.",
    results: [
      { value: "22 min", label: "Mock recall completion" },
      { value: "40%", label: "Reduction in expired-stock write-offs" },
      { value: "3", label: "Plants live in one project" },
    ],
    quote:
      "Our largest customer audits us annually. This year they asked who built our traceability system so they could recommend it to other suppliers.",
    quoteAttribution: "COO, Harvest Ridge Foods",
  },
  {
    slug: "velocity-distribution",
    client: "Velocity Distribution Group",
    industry: "Wholesale Distribution",
    title: "Doubling volume with the same headcount",
    summary:
      "A regional distributor replaced a 20-year-old legacy system with cloud ERP, WMS, and managed EDI — absorbing an acquisition and doubling order volume without adding warehouse staff.",
    results: [
      { value: "2x", label: "Order volume, same headcount" },
      { value: "99.6%", label: "Order accuracy after WMS" },
      { value: "60 days", label: "Acquisition onboarded to platform" },
    ],
    quote:
      "The managed services model means I have an entire ERP department for less than the cost of one senior hire.",
    quoteAttribution: "President, Velocity Distribution Group",
  },
];

// ── Resources ────────────────────────────────────────────────
export const blogPosts = [
  {
    slug: "erp-selection-mistakes",
    title: "The 7 ERP selection mistakes we see every year",
    date: "2026-06-18",
    category: "ERP Strategy",
    excerpt:
      "After 30+ implementations, the same selection mistakes keep appearing. Here's how to avoid the traps that lead to stalled projects and shelfware.",
  },
  {
    slug: "validation-cloud-erp",
    title: "Validating cloud ERP in regulated industries: a practical guide",
    date: "2026-05-30",
    category: "Compliance",
    excerpt:
      "Cloud platforms update themselves — so how do you keep a validated state? A pragmatic framework for risk-based validation in GxP environments.",
  },
  {
    slug: "mes-low-code",
    title: "Why low-code MES changes the shop floor economics",
    date: "2026-05-12",
    category: "Manufacturing",
    excerpt:
      "Traditional MES projects took years and seven figures. Low-code platforms have collapsed both numbers — here's what that unlocks for mid-market plants.",
  },
  {
    slug: "edi-chargebacks",
    title: "The real cost of EDI chargebacks (and how to get to zero)",
    date: "2026-04-22",
    category: "Supply Chain",
    excerpt:
      "Chargebacks are a silent margin leak most suppliers accept as a cost of doing business. They shouldn't. A prevention playbook from our managed EDI team.",
  },
  {
    slug: "quickbooks-to-erp",
    title: "Outgrowing QuickBooks: the signals and the playbook",
    date: "2026-04-03",
    category: "Growth",
    excerpt:
      "Every growing company hits the wall — usually later than they should. The eight signals it's time, and how to make the move without disrupting operations.",
  },
  {
    slug: "sop-that-sticks",
    title: "S&OP that sticks: making planning a habit, not a project",
    date: "2026-03-15",
    category: "Operations",
    excerpt:
      "Most S&OP initiatives die within a year. The survivors share three traits — none of which are about software.",
  },
];

export const webinars = [
  {
    title: "ERP + QMS: One record for quality and operations",
    date: "2026-08-06",
    status: "Upcoming",
    description: "Live demo of integrated quality events and production transactions in regulated manufacturing.",
  },
  {
    title: "Warehouse accuracy bootcamp: getting to 99.9%",
    date: "2026-06-11",
    status: "On Demand",
    description: "The cycle counting and scanning practices behind near-perfect inventory accuracy.",
  },
  {
    title: "Cloud migration for legacy ERP: risk, cost, timeline",
    date: "2026-05-07",
    status: "On Demand",
    description: "What actually happens in a legacy-to-cloud ERP migration, with real project timelines.",
  },
  {
    title: "EDI for automotive suppliers: surviving OEM requirements",
    date: "2026-03-19",
    status: "On Demand",
    description: "Release accounting, cums, ASNs, and label compliance without the chargebacks.",
  },
];

export const dataSheets = [
  { title: "TotalCare Managed Services", description: "Service tiers, SLAs, and coverage details for our flagship managed offering." },
  { title: "Enterprise Implementation Methodology", description: "Our phased delivery model, milestones, and governance framework." },
  { title: "QMS for Regulated Manufacturers", description: "Capability overview: document control, CAPA, audits, training, Part 11." },
  { title: "Managed EDI Service Overview", description: "Monitoring, onboarding, and chargeback-prevention service details." },
];

export const news = [
  {
    date: "2026-06-24",
    title: "One Global named a Top 50 ERP Consultancy for the fourth consecutive year",
    excerpt: "Industry analysts recognized our implementation success rates and client retention in the annual services ranking.",
  },
  {
    date: "2026-05-02",
    title: "New Midwest delivery center opens in Lisle",
    excerpt: "Expanded headquarters adds capacity for 60 additional consultants and a client experience center.",
  },
  {
    date: "2026-03-10",
    title: "One Global launches Managed EDI with 24/7 monitoring",
    excerpt: "New service takes the full EDI operation off clients' plates with chargeback prevention as the core KPI.",
  },
  {
    date: "2026-01-15",
    title: "100th regulated-industry validation project completed",
    excerpt: "Milestone reflects a decade of GxP and FDA-regulated systems delivery across med device, pharma, and biotech.",
  },
];

export const careers = [
  { title: "Senior ERP Consultant — Manufacturing", location: "Lisle, IL / Remote", type: "Full-time" },
  { title: "NetSuite Solutions Architect", location: "Remote (US)", type: "Full-time" },
  { title: "EDI Analyst", location: "Lisle, IL", type: "Full-time" },
  { title: "QMS Implementation Consultant", location: "Remote (US)", type: "Full-time" },
  { title: "Managed Services Support Engineer", location: "Lisle, IL / Hybrid", type: "Full-time" },
];

// ── Clients (homepage logo strip) ────────────────────────────
export const clients = [
  { name: "Meridian Medical", icon: "HeartPulse" },
  { name: "Harvest Ridge Foods", icon: "Sprout" },
  { name: "Velocity Distribution", icon: "Truck" },
  { name: "Safecor Health", icon: "FlaskConical" },
  { name: "Art's Way Mfg", icon: "Cog" },
  { name: "Endura Products", icon: "Building2" },
];

// ── FAQs ─────────────────────────────────────────────────────
export const faqs = [
  {
    q: "How long does an ERP implementation take?",
    a: "Typical mid-market projects run 4 to 9 months depending on scope, integrations, and data quality. Because we fix scope and milestones up front, the timeline you sign is the timeline we hold — and we'll tell you honestly if your target date isn't realistic.",
  },
  {
    q: "Do you support regulated industries?",
    a: "Yes — validated deployments are one of our core practices. We deliver full IQ/OQ/PQ documentation for FDA and ISO environments, and have completed over 100 validation projects across med device, pharma, and biotech.",
  },
  {
    q: "Can you take over a system another partner implemented?",
    a: "Very common. We start with a system health check to document what exists, then move support under one SLA-backed agreement. Most rescue engagements stabilize within the first 60 days.",
  },
  {
    q: "What does managed support cost?",
    a: "Plans are sized by user count and coverage hours, so pricing is specific to you — but most clients pay less than the cost of one senior internal hire for a full team covering application, technical, and EDI support.",
  },
  {
    q: "Which platforms do you work with?",
    a: "Our practices cover cloud ERP for general business and manufacturing, quality management systems, MES, and WMS. If you're selecting a platform, we run a structured evaluation rather than pushing a default answer.",
  },
  {
    q: "Do you work with companies our size?",
    a: "We serve everyone from venture-backed startups going live on their first ERP to global multi-site manufacturers. Engagements are scoped to fit — a startup edition implementation looks very different from a five-plant rollout.",
  },
];

export const values = [
  { title: "Clients for life", text: "We measure success in decade-long relationships, not billable hours. 97% of our clients are still with us year over year." },
  { title: "Industry depth", text: "Our consultants come from the industries they serve — plant floors, quality labs, and distribution centers, not just consulting benches." },
  { title: "Deliver, then improve", text: "Go-live is the start, not the finish. Every engagement includes a path to continuous improvement." },
  { title: "Straight answers", text: "We'll tell you when a requirement is a bad idea, when scope should shrink, and when you don't need us." },
];
