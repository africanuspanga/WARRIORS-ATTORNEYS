export type Service = {
  id: string;
  number: string;
  title: string;
  category: string;
  image: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "corporate-commercial-law",
    number: "01",
    title: "Corporate & Commercial Law",
    category: "For Businesses & Corporates",
    image: "/corporate-commercial-law.jpg",
    description:
      "Comprehensive legal support throughout the business lifecycle, from establishment to expansion, restructuring, and exit.",
    items: [
      "Company incorporation and registration",
      "Business name registration",
      "Corporate restructuring and reorganization",
      "Corporate governance advisory",
      "Legal due diligence",
      "Shareholder and investment agreements",
      "Joint venture agreements",
      "Commercial contract drafting and review",
      "Competition and consumer protection advisory",
      "Trade and investment law advisory",
      "Regulatory compliance support",
      "Company secretarial services",
    ],
  },
  {
    id: "banking-finance-mergers-acquisitions",
    number: "02",
    title: "Banking, Finance & Mergers & Acquisitions",
    category: "For Businesses & Corporates",
    image: "/banking-finance-mergers-acquisitions.jpg",
    description:
      "Advising financial institutions, investors, and corporate clients on banking, finance, acquisitions, and investment transactions.",
    items: [
      "Banking and financial services advisory",
      "Project finance transactions",
      "Syndicated financing arrangements",
      "Security documentation",
      "Mergers and acquisitions",
      "Financial institution regulatory compliance",
      "Microfinance institution advisory",
      "Bureau de Change licensing and compliance",
      "Bank of Tanzania regulatory matters",
      "Debt restructuring and recovery",
    ],
  },
  {
    id: "company-secretarial-governance",
    number: "03",
    title: "Company Secretarial & Governance Services",
    category: "For Businesses & Corporates",
    image: "/company-secretarial-governance.jpg",
    description:
      "Acting as Company Secretary and governance advisor to private and public entities.",
    items: [
      "Annual returns filing",
      "Maintenance of statutory registers",
      "Board and shareholder meeting management",
      "Preparation of notices and resolutions",
      "Minute preparation and record keeping",
      "Corporate governance compliance",
      "Foreign company compliance requirements",
      "Beneficial ownership compliance",
    ],
  },
  {
    id: "business-registration-licensing",
    number: "04",
    title: "Business Registration & Licensing",
    category: "For Businesses & Corporates",
    image: "/business-registration-licensing.jpg",
    description:
      "Assisting local and international investors with business establishment and regulatory approvals in Tanzania.",
    items: [
      "Company registration",
      "Business name registration",
      "NGO registration support",
      "Partnership and joint venture registrations",
      "Sector-specific licensing",
      "Investment facilitation",
      "Tanzania Investment Centre support",
      "Regulatory permits and approvals",
    ],
  },
  {
    id: "land-property-conveyancing",
    number: "05",
    title: "Land, Property & Conveyancing",
    category: "For Property, Projects & Investments",
    image: "/land-property-conveyancing.jpg",
    description:
      "Legal support on land acquisition, ownership, leasing, and development projects.",
    items: [
      "Land acquisition and disposition transactions",
      "Property conveyancing",
      "Sale and purchase agreements",
      "Lease agreements",
      "Land due diligence",
      "Mortgage and security transactions",
      "Land dispute advisory",
      "Foreign ownership structures",
      "Engagement with land authorities",
    ],
  },
  {
    id: "energy-mining-oil-gas",
    number: "06",
    title: "Energy, Mining, Oil & Gas",
    category: "For Property, Projects & Investments",
    image: "/energy-mining-oil-gas.jpg",
    description:
      "Advising investors, operators, and stakeholders in regulated extractive and energy sectors.",
    items: [
      "Mining licence applications",
      "Prospecting and mining rights transactions",
      "Licence transfers and assignments",
      "Mining joint ventures",
      "Oil and gas transactions",
      "Energy project development",
      "Regulatory compliance",
      "Government negotiations",
      "Sector-related disputes",
    ],
  },
  {
    id: "tourism-conservation-carbon-markets",
    number: "07",
    title: "Tourism, Conservation & Carbon Markets",
    category: "For Property, Projects & Investments",
    image: "/tourism-conservation-carbon-markets.jpg",
    description:
      "Supporting sustainable investment and conservation initiatives across Tanzania and East Africa.",
    items: [
      "Tourism investment structuring",
      "Tourism concession agreements",
      "Carbon credit transactions",
      "ESG compliance advisory",
      "Conservation partnership agreements",
      "Wildlife management agreements",
      "Public-Private Partnerships",
      "Sustainable investment advisory",
    ],
  },
  {
    id: "litigation-arbitration-dispute-resolution",
    number: "08",
    title: "Litigation, Arbitration & Alternative Dispute Resolution",
    category: "Disputes & Investigations",
    image: "/litigation-arbitration-dispute-resolution.jpg",
    description:
      "Representing clients before courts, tribunals, arbitrators, and regulatory bodies.",
    items: [
      "Commercial litigation",
      "Civil litigation",
      "Debt recovery proceedings",
      "Contract disputes",
      "Employment disputes",
      "Tax disputes",
      "Judicial review applications",
      "Arbitration",
      "Mediation",
      "Adjudication",
      "Settlement negotiations",
    ],
  },
  {
    id: "insolvency-restructuring-recovery",
    number: "09",
    title: "Insolvency, Restructuring & Recovery",
    category: "Disputes & Investigations",
    image: "/insolvency-restructuring-recovery.jpg",
    description:
      "Assisting creditors, lenders, insolvency practitioners, and distressed businesses.",
    items: [
      "Corporate restructuring",
      "Insolvency advisory",
      "Voluntary winding-up",
      "Liquidation support",
      "Receivership matters",
      "Debt recovery",
      "Creditor representation",
      "Business rescue solutions",
    ],
  },
  {
    id: "employment-labour-law",
    number: "10",
    title: "Employment & Labour Law",
    category: "Regulatory & Compliance",
    image: "/employment-labour-law.jpg",
    description:
      "Assisting employers and employees with workplace legal matters and compliance.",
    items: [
      "Employment contracts",
      "Human resource policies",
      "Employment advisory",
      "Labour compliance audits",
      "Work permit advisory",
      "CMA representation",
      "Labour Court representation",
      "Employment dispute resolution",
    ],
  },
  {
    id: "intellectual-property-law",
    number: "11",
    title: "Intellectual Property Law",
    category: "Regulatory & Compliance",
    image: "/intellectual-property-law.jpg",
    description:
      "Protecting and enforcing intellectual property rights for businesses, innovators, and creators.",
    items: [
      "Trademark registration",
      "Trademark renewals",
      "Patent registration",
      "Industrial design registration",
      "Copyright protection",
      "IP portfolio management",
      "Licensing agreements",
      "Counterfeit and infringement disputes",
      "ARIPO and WIPO coordination",
    ],
  },
  {
    id: "tax-law-revenue-matters",
    number: "12",
    title: "Tax Law & Revenue Matters",
    category: "Regulatory & Compliance",
    image: "/regulatory-compliance-aml-data-protection.jpg",
    description:
      "Strategic tax advisory and dispute resolution services for businesses and investors.",
    items: [
      "Tax advisory services",
      "Tax compliance reviews",
      "Tax planning",
      "Objections and appeals",
      "Tax Board representation",
      "Tax Tribunal representation",
      "Revenue authority engagements",
      "Investment tax incentives advisory",
    ],
  },
  {
    id: "gaming-betting-regulatory-compliance",
    number: "13",
    title: "Gaming, Betting & Regulatory Compliance",
    category: "Regulatory & Compliance",
    image: "/gaming-betting-regulatory-compliance.jpg",
    description:
      "Specialized legal services to gaming operators and regulated entities.",
    items: [
      "Gaming licence applications",
      "Regulatory compliance audits",
      "Gaming Board engagements",
      "Responsible gaming advisory",
      "AML/CFT compliance",
      "Inspection support",
      "Internal compliance frameworks",
      "Regulatory investigations support",
    ],
  },
  {
    id: "regulatory-compliance-aml-data-protection",
    number: "14",
    title: "Regulatory Compliance, AML & Data Protection",
    category: "Regulatory & Compliance",
    image: "/regulatory-compliance-aml-data-protection.jpg",
    description:
      "Helping businesses operating in regulated sectors meet legal and compliance obligations.",
    items: [
      "Anti-Money Laundering compliance",
      "Counter-Terrorism Financing compliance",
      "Risk assessments",
      "Compliance audits",
      "Internal policies and procedures",
      "Regulatory reporting frameworks",
      "Data Protection and Privacy compliance",
      "Compliance training programs",
      "Regulatory investigations support",
    ],
  },
  {
    id: "legal-research-advisory",
    number: "15",
    title: "Legal Research & Advisory Services",
    category: "Regulatory & Compliance",
    image: "/legal-research-advisory.jpg",
    description:
      "Ongoing legal intelligence and strategic advisory services to businesses and institutions.",
    items: [
      "Legal opinions",
      "Regulatory monitoring",
      "Legislative updates",
      "Policy reviews",
      "Legal risk assessments",
      "Strategic legal advisory",
      "Governance advisory",
      "Industry-specific compliance guidance",
    ],
  },
  {
    id: "microfinance-company-setup",
    number: "16",
    title: "Microfinance Company Setup",
    category: "For Businesses & Corporates",
    image: "/microfinance-company-setup.jpg",
    description:
      "End-to-end support for establishing and licensing microfinance institutions in Tanzania.",
    items: [
      "Microfinance company incorporation",
      "Bank of Tanzania licence applications",
      "Regulatory compliance frameworks",
      "Corporate governance structuring",
      "Shareholder and director advisory",
      "Operational policy drafting",
      "Capital adequacy guidance",
      "Ongoing regulatory reporting support",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Warriors Attorneys guided our acquisition with precision and deep market knowledge. Their commercial approach made a complex transaction feel straightforward.",
    name: "Juma Mwinyi",
    role: "CEO, Manufacturing Group",
  },
  {
    quote:
      "The team handled our tourism investment structuring with exceptional care. They understood both the legal landscape and the practical realities of operating in Tanzania.",
    name: "Asha Ibrahim",
    role: "Managing Director, Tourism Investor",
  },
  {
    quote:
      "Responsive, strategic, and genuinely committed to our success. Warriors Attorneys has become a trusted partner for our fintech venture.",
    name: "Emmanuel Nyerere",
    role: "Founder, Fintech Startup",
  },
];

export const contactInfo = {
  phones: ["+255 743 500 300", "+255 718 091 838"],
  emails: ["info@warriorsattorneys.co.tz", "t.ndundulu@beba.co.tz"],
  location: "Plot No. 1/50, Dar es Salaam, Tanzania",
  whatsapp: "+255 743 500 300",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
