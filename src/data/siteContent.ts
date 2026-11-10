export interface NavItem {
  label: string;
  href: string;
}

export interface StatementRowData {
  id: string;
  zone: string;
  task: string;
  outcome: "Delivered and verified" | "Missed with an agreed reason";
  outcomeTone: "verified" | "exception";
  summary: string;
  obligation: string;
  evidence: string;
  invoiceTreatment: string;
}

export interface PlatformModule {
  number: string;
  title: string;
  metaTag: string;
  description: string;
  detailNote?: string;
}

export interface LedgerOutcome {
  label: string;
  tone: "verified" | "low-confidence" | "agreed-reason" | "missed";
  marker: string;
  note: string;
}

export interface CapabilityGroup {
  category: string;
  items: string[];
}

export interface RolloutPhase {
  phase: string;
  scope: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SubscriptionTier {
  id: string;
  name: string;
  unitPrice: string;
  unitPeriod: string;
  minimumLine?: string;
  summary: string;
  featured?: boolean;
}

export interface CommercialRow {
  id: string;
  name: string;
  price: string;
  cadenceNote: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Platform", href: "#platform" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Market & Pricing", href: "#market-pricing" },
  { label: "FAQ", href: "#faq" },
];

export const STATEMENT_ROWS: StatementRowData[] = [
  {
    id: "reception",
    zone: "Reception",
    task: "Scheduled evening clean",
    outcome: "Delivered and verified",
    outcomeTone: "verified",
    summary: "Checklist recorded",
    obligation:
      "Contracted weekday evening clean for the Reception zone within the agreed time window, covering surface sanitisation, floor care and waste clearance to the approved specification.",
    evidence:
      "Visit check-in verified against the site baseline and rotating token; multilingual zone checklist recorded against the task entry.",
    invoiceTreatment:
      "Matched to the approved schedule as delivered and verified under the standard contract rate.",
  },
  {
    id: "meeting-room",
    zone: "Meeting room",
    task: "Scheduled evening clean",
    outcome: "Missed with an agreed reason",
    outcomeTone: "exception",
    summary: "Room locked; client accepted the access exception",
    obligation:
      "Contracted weekday evening clean for the Meeting room zone within the agreed time window, covering table wiping, seating reset and bin clearance to the approved specification.",
    evidence:
      "Operative attended the site within the scheduled window and recorded that the room was locked. The access exception was submitted and accepted by the client.",
    invoiceTreatment:
      "Invoice treatment depends on the relevant contract clause governing client-accepted access exceptions.",
  },
];

export const PLATFORM_MODULES: PlatformModule[] = [
  {
    number: "01",
    title: "Specification Compiler",
    metaTag: "Input: Word or PDF spec",
    description:
      "A language model extracts structured obligations from the written specification: site, zone, task, frequency, time window, standard, required evidence and any linked KPI or service-credit clause. The contractor and client approve the resulting schedule before it becomes the reference for reconciliation.",
  },
  {
    number: "02",
    title: "Presence Confidence Engine",
    metaTag: "Score: 0 to 100",
    description:
      "Each visit receives a confidence score from 0 to 100. Inputs include a rotating NFC or e-ink QR token, Wi-Fi and Bluetooth observations compared with the site baseline, time spent on site, task sequence and device integrity. Low-confidence visits go to a supervisor for review. The score describes confidence in the visit record. Cleaning quality is assessed through the evidence below.",
  },
  {
    number: "03",
    title: "Task & Quality Evidence",
    metaTag: "Aligned with BS EN 13549",
    description:
      "Operatives follow short multilingual checklists, supply photographs where the specification requires them and capture task evidence by zone. Sampled quality audits aligned with BS EN 13549 sit alongside the records.",
    detailNote:
      "Audits are designed around BS EN 13549 alignment only and do not imply third-party certification.",
  },
  {
    number: "04",
    title: "Obligation Ledger",
    metaTag: "4 reconciliation outcomes",
    description:
      "Each agreed obligation has one of four outcomes: “Delivered and verified”, “Delivered with low confidence”, “Missed with an agreed reason” or “Missed”. Each entry links to the evidence behind it.",
  },
  {
    number: "05",
    title: "Service Delivery Statement",
    metaTag: "Output: Signed snapshot",
    description:
      "At the end of the billing period, the contractor reviews a one-page statement with line-by-line evidence and any service credits calculated under the contract. The contractor issues it with the invoice. The issued version is preserved as a signed snapshot.",
  },
  {
    number: "06",
    title: "PA 2023 KPI Pack",
    metaTag: "Public-contract KPIs",
    description:
      "Maps verified delivery evidence to the KPIs and rating categories used in public-contract performance notices. It gives buyers and suppliers a shared basis for assessment.",
    detailNote:
      "Designed to support structured assessment without promising automatic legal compliance.",
  },
];

export const LEDGER_OUTCOMES: LedgerOutcome[] = [
  {
    label: "Delivered and verified",
    tone: "verified",
    marker: "✓",
    note: "Visit confidence and task evidence match the approved obligation.",
  },
  {
    label: "Delivered with low confidence",
    tone: "low-confidence",
    marker: "!",
    note: "Evidence recorded; confidence score flagged for supervisor review.",
  },
  {
    label: "Missed with an agreed reason",
    tone: "agreed-reason",
    marker: "◊",
    note: "Exception recorded and accepted; invoice effect follows contract terms.",
  },
  {
    label: "Missed",
    tone: "missed",
    marker: "×",
    note: "Scheduled obligation without qualifying delivery evidence or exception.",
  },
];

export const SUPPORTING_CAPABILITIES: CapabilityGroup[] = [
  {
    category: "On site",
    items: [
      "Offline capture for basements and plant rooms",
      "A worker view for seeing and contesting flags",
      "A no-login QR route for building users to report an issue against a zone",
    ],
  },
  {
    category: "Contract review",
    items: [
      "Agreed exceptions for access denials and changes",
      "A hash-chained record that makes edits traceable",
      "Tracking and repricing of scope changes",
      "Analysis of recurring failures by time, staffing, zone and specification ambiguity",
    ],
  },
  {
    category: "Across systems",
    items: [
      "Visibility of underlying subcontractor delivery",
      "Planned accounting connectors for Xero, Sage and QuickBooks",
      "A planned open API and webhooks for facilities management, rostering and payroll tools",
    ],
  },
];

export const PLANNED_ROLLOUT: RolloutPhase[] = [
  {
    phase: "Year 1 MVP",
    scope:
      "Operative app, rotating tokens, first confidence engine, Obligation Ledger and Service Delivery Statements.",
  },
  {
    phase: "Year 2",
    scope:
      "General availability of the Specification Compiler, PA 2023 KPI Pack and accounting connectors.",
  },
  {
    phase: "Year 3",
    scope:
      "Learned confidence model, subcontractor visibility and open API.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Specify the work",
    description:
      "The contractor and client review and approve the obligations extracted from the cleaning specification. On the first supervised visit, the team sets up rotating site tokens and records the usual Wi-Fi and Bluetooth signals as a baseline.",
  },
  {
    number: "02",
    title: "Verify each visit",
    description:
      "Operatives check in, complete the relevant zone checklists and capture required evidence. Each night, the confidence engine scores the day’s visits and the ledger is updated. Supervisors review flagged visits, and operatives can see and contest their own flags.",
  },
  {
    number: "03",
    title: "Reconcile the invoice",
    description:
      "At period end, the platform compares approved obligations with delivery records and agreed exceptions. It applies the service-credit clauses in the contract. The contractor reviews and releases the statement with the invoice. Complaints and audit findings feed into the analysis of recurring issues.",
  },
];

export const SECONDARY_AUDIENCES: string[] = [
  "Contractors serving councils, academy trusts and NHS estates that need evidence for performance assessments.",
  "Facilities management providers overseeing subcontracted cleaning.",
  "Multi-site buyers, including property managers, retail chains and trusts, comparing suppliers.",
  "Facilities management software vendors interested in future licensing of the confidence engine and the Specify–Verify–Reconcile method.",
];

export const SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  {
    id: "verify",
    name: "Verify",
    unitPrice: "£9",
    unitPeriod: "per site per month",
    minimumLine: "Minimum £149 per month",
    summary:
      "Includes the operative app, rotating-token support, presence-confidence scoring and supervisor exception list.",
  },
  {
    id: "assure",
    name: "Assure",
    unitPrice: "£15",
    unitPeriod: "per site per month",
    minimumLine: "Minimum £299 per month",
    summary:
      "Includes everything in Verify, plus the Specification Compiler, Obligation Ledger, Service Delivery Statements, contractual service credits and client portal.",
    featured: true,
  },
  {
    id: "public",
    name: "Public",
    unitPrice: "£18",
    unitPeriod: "per site per month",
    summary:
      "Includes everything in Assure, plus the PA 2023 KPI Pack, extended retention and an enhanced audit trail.",
  },
];

export const COMMERCIAL_ROWS: CommercialRow[] = [
  {
    id: "buyer-edition",
    name: "Buyer Edition",
    price: "From £6,000 per year",
    cadenceNote: "Annual multi-supplier licence",
    description:
      "Multi-supplier assurance and supplier-neutral KPI comparison for buying organisations.",
  },
  {
    id: "onboarding",
    name: "Onboarding",
    price: "£250–£1,500 per contract",
    cadenceNote: "Per-contract implementation fee",
    description:
      "Covers specification compilation and an approval workshop, separate from recurring subscriptions.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-invoice",
    question: "What will my client receive with the invoice?",
    answer:
      "On Assure and Public, the planned Service Delivery Statement summarises contracted work, delivery evidence, agreed exceptions and any applicable service credits. The client can inspect the evidence for individual entries.",
  },
  {
    id: "faq-confidence",
    question: "Does a low confidence score automatically reduce the invoice?",
    answer:
      "No. It sends the visit for supervisor review. The operative can contest the flag. Any credit depends on the reconciled obligation and the relevant contract clause.",
  },
  {
    id: "faq-locked-room",
    question: "What if a cleaner cannot access a room?",
    answer:
      "The operative records the issue against the scheduled task. Once the reason is agreed, the ledger shows “Missed with an agreed reason”. The contract determines how that affects the invoice.",
  },
  {
    id: "faq-offline",
    question: "Can operatives capture evidence without a connection?",
    answer:
      "The planned operative app supports offline capture in areas such as basements and plant rooms. Monitoring is limited to scheduled work on client premises, and client-facing views use pseudonymised worker identities.",
  },
  {
    id: "faq-portal-vs-buyer",
    question: "How does the free client portal differ from the Buyer edition?",
    answer:
      "The read-only portal lets a client review information shared by its contractor. The Buyer edition, from £6,000 per year, supports assurance and KPI comparisons across multiple suppliers.",
  },
  {
    id: "faq-pilot",
    question: "Who is the proposed free pilot for?",
    answer:
      "The plan targets three to five design partners in West London and the Heathrow corridor, covering 10–20 sites per contractor in exchange for case-study rights.",
  },
];
