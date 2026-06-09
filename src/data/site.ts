/**
 * Single source of truth for all site copy & content.
 * Edit this file to update the portfolio — components read from it.
 *
 * Fields marked `// TODO` are placeholders awaiting real content.
 */

export type NavLink = { href: string; label: string };

export type Experience = {
  company: string;
  role: string;
  period?: string;
  logo: string;
  logoAlt: string;
  summary: string;
  placeholder?: boolean;
};

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  image?: string;
  video?: string;
  contributions?: string[];
  href?: string;
  repo?: string;
  placeholder?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  image?: string;
  placeholder?: boolean;
};

export type Education = {
  degree: string;
  institution: string;
  university: string;
  summary: string;
  image?: string;
};

export type Social = { label: string; href: string };

const nav: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const socials: Social[] = [
  // TODO: add your real links.
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "WhatsApp", href: "https://wa.me/94762610110?text=Hi%20Vihanga%2C%20I%20recently%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20project%20or%20opportunity%20with%20you.%20Let%20me%20know%20when%20you%20are%20available!" },
];

const experience: Experience[] = [
  {
    company: "McLarens Group of Companies",
    role: "Business Transformation – AI & Automation Engineer",
    period: "2025 – Present",
    logo: "/images/experience/mclarens-75.svg",
    logoAlt: "McLarens Group 75 years logo",
    summary:
      "Contributing to digital transformation, workflow improvement, process mapping, AI-based automation, and internal solution development within the group environment. Focused on reducing manual work, improving operational visibility, and building practical automation workflows for business teams.",
  },
  {
    company: "MAS Capital (PVT) LTD – KREEDA",
    role: "Digital Transformation Intern",
    period: "2024 – 2025",
    logo: "/images/experience/mas.png",
    logoAlt: "MAS Capital KREEDA logo",
    summary:
      "Worked on digital transformation initiatives using Power Apps, Python, workflow automation, and system solution implementation. Supported project handling and managed critical internal systems as a System Super Admin across KREEDA cluster companies.",
  },
];

// Projects list updated with user content
const projects: Project[] = [
  {
    title: "Road Guard AI — AI Road Safety Intelligence Platform",
    summary:
      "An AI-based road safety research project focused on predicting accident risk levels and safer travel routes using historical accident data, weather conditions, traffic behavior, and route-based analysis. The system visualizes accident hotspots, heatmaps, risk-colored routes, and route safety scores through an interactive map interface.",
    tags: ["Next.js", "React", "Python", "FastAPI", "Machine Learning", "Three.js"],
    video: "/images/videoes/roadguard ai.mp4",
    image: "/images/projects_cover_photos/Road guard.png",
    contributions: [
      "Designed the full project concept and research direction",
      "Planned AI-based route risk prediction logic",
      "Designed dashboard UI/UX and map-based user flow",
      "Worked on accident dataset analysis and risk scoring approach",
      "Planned heatmaps, hotspot markers, route comparison, and safety indicators",
    ],
  },
  {
    title: "Group Pulse — Enterprise Financial Intelligence Dashboard",
    summary:
      "An enterprise financial analytics dashboard designed to monitor company performance, budget vs actuals, monthly results, YTD performance, KPIs, and management-level insights across multiple companies and business units.",
    tags: ["React", "Next.js", "TypeScript", "PostgreSQL", "Dashboard Analytics"],
    video: "/images/videoes/groupluse_demo.mp4",
    image: "/images/projects_cover_photos/group pulse.png",
    contributions: [
      "Supported dashboard structure and KPI visualization planning",
      "Designed finance-focused UI/UX layouts",
      "Planned budget vs actual and YTD analytics views",
      "Worked on role-based workflow design for finance users",
      "Supported reporting structure and business logic documentation",
    ],
  },
  {
    title: "McLean Flow — Business Transformation Workflow Platform",
    summary:
      "A business transformation and project management platform designed to manage business requests, projects, tasks, daily logs, sign-offs, feedback, and process improvement workflows. Converts manual project tracking into a structured digital workflow.",
    tags: ["Laravel", "React", "TypeScript", "Inertia.js", "Azure Entra ID"],
    image: "/images/projects_cover_photos/Mclean flow.png",
    contributions: [
      "Contributed to full system workflow planning",
      "Designed request, project, task, daily log, sign-off, and feedback flows",
      "Supported UI/UX design and dashboard planning",
      "Worked on documentation, module planning, and testing support",
      "Planned approval stages, notifications, and reporting structure",
    ],
  },
  {
    title: "eDetector — Microsoft 365 Communication Intelligence System",
    summary:
      "A Microsoft 365-based email monitoring and analytics dashboard designed to provide operational visibility into mailbox activity, unread emails, response patterns, workload, and communication efficiency.",
    tags: ["Microsoft Graph API", "React", "Next.js", "FastAPI", "PostgreSQL"],
    video: "/images/videoes/Edetector Demo.mp4",
    image: "/images/projects_cover_photos/eDetector.png",
    contributions: [
      "Planned Microsoft 365 mailbox analytics dashboard structure",
      "Designed admin and HOD portal concepts",
      "Worked on email status tracking logic and filtering options",
      "Planned dashboard tiles, reports, and monitoring views",
      "Supported Microsoft Graph API integration planning",
    ],
  },
  {
    title: "McFuel — Fuel Operations & Vehicle Tracking Platform",
    summary:
      "A digital fuel management system designed to manage fuel requests, approvals, fuel issuing, tank monitoring, vehicle tracking, finance reporting, and company-wise fuel allocation.",
    tags: ["React", "Node.js", "Express.js", "PostgreSQL", "Dashboard Analytics"],
    image: "/images/projects_cover_photos/Mcfuel (2).png",
    contributions: [
      "Supported fuel request and approval workflow planning",
      "Designed dashboard and reporting structure",
      "Planned role-based access for requesters, approvers, finance, and pump users",
      "Worked on finance dashboard concepts and allocation reporting",
      "Supported UI/UX planning and process documentation",
    ],
  },
  {
    title: "Axio — Smart Project Management & Collaboration Platform",
    summary:
      "A smart project management and collaboration platform designed to manage project requirements, approvals, tasks, timelines, Kanban boards, reminders, comments, activity logs, and productivity analytics.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Zustand", "Framer Motion"],
    image: "/images/projects_cover_photos/Axio.png",
    contributions: [
      "Designed product concept and workflow",
      "Planned project dashboard, Kanban board, timeline, and task modules",
      "Designed landing page and dashboard UI structure",
      "Planned analytics, reminders, comments, and collaboration features",
      "Created system flow and feature documentation",
    ],
  },
  {
    title: "AI Bot — Intelligent Business Automation Assistant",
    summary:
      "A concept focused on using AI assistants and automation workflows to support business users with process guidance, document understanding, task support, reporting assistance, and faster decision-making.",
    tags: ["ChatGPT / LLMs", "Prompt Engineering", "Power Automate", "Python"],
    image: "/images/projects_cover_photos/Ai Bots .png",
    contributions: [
      "Designed AI bot use cases for business workflows",
      "Created prompt structures and interaction flows",
      "Planned integration with automation workflows",
      "Supported knowledge base and process guidance concepts",
      "Identified business areas where AI can reduce manual effort",
    ],
  },
  {
    title: "Power Platform Solutions — Low-Code Business Apps",
    summary:
      "A collection of low-code business applications and automation workflows built using Microsoft Power Apps and Power Automate to digitize manual tasks, automate approvals, and improve internal process efficiency.",
    tags: ["Power Apps", "Power Automate", "Microsoft 365", "SharePoint", "Dataverse"],
    image: "/images/projects_cover_photos/power platform solutions .png",
    contributions: [
      "Designed Power Apps screens and user flows",
      "Built automation logic using Power Automate",
      "Connected forms, data sources, approvals, and notifications",
      "Supported low-code app testing and process improvement",
      "Helped convert manual workflows into digital solutions",
    ],
  },
  {
    title: "Excel Intelligence — Automated Reporting & Data Workflow System",
    summary:
      "A process automation project focused on improving manual Excel-based tasks using formulas, macros, structured templates, automated reports, data cleaning, and dashboard-style reporting.",
    tags: ["Microsoft Excel", "Power Query", "VBA Macros", "Python", "Data Cleaning"],
    image: "/images/projects_cover_photos/Excel automations .png",
    contributions: [
      "Automated repetitive Excel tasks and manual reporting steps",
      "Created structured templates for business users",
      "Worked on formulas, data cleaning, and report formatting",
      "Supported dashboard-style Excel reporting",
      "Improved speed, accuracy, and usability of spreadsheet-based processes",
    ],
  },
  {
    title: "Automation Studio — Business Process Digitization Workflows",
    summary:
      "A business process digitization initiative focused on identifying repetitive manual tasks and converting them into structured digital workflows, covering approval automation, email notifications, and report generation.",
    tags: ["Power Automate", "Python", "JavaScript", "APIs", "Workflow Automation"],
    image: "/images/projects_cover_photos/Automation Workflows.png",
    contributions: [
      "Identified manual process gaps and improvement areas",
      "Designed automation workflows and approval logic",
      "Supported process mapping and workflow documentation",
      "Tested automation outputs and improved usability",
      "Helped business users move from manual work to digital workflows",
    ],
  },
];

// Testimonials updated with real details
const testimonials: Testimonial[] = [
  {
    quote:
      "Vihanga has an exceptional ability to map complex business operations and turn them into intuitive digital workflows. His contribution to our operational tracking systems has significantly improved transparency and efficiency across the board.",
    name: "Navin Perera",
    role: "Executive Director",
    company: "Spectra Logistics",
    image: "/images/testimonials/Navin perera .png",
  },
  {
    quote:
      "Working with Vihanga on business transformation initiatives has been a game-changer. He doesn't just write software; he deeply understands the underlying processes and delivers solutions that genuinely reduce manual effort and empower our teams.",
    name: "Imalka Upendra",
    role: "Business Transformation Lead",
    company: "McLarens Group",
    image: "/images/testimonials/Imalka Upendra.png",
  },
  {
    quote:
      "Vihanga's analytical approach and technical expertise helped us streamline repetitive tasks into automated, reliable systems. His solutions are practical, user-friendly, and consistently deliver real business value.",
    name: "Suzanne Lewis",
    role: "Senior Manager",
    company: "McLarens Group",
    image: "/images/testimonials/suzanne lewis.png",
  },
];

const education: Education[] = [
  {
    degree: "MBA – Business Administration(Reading)",
    institution: "AIBT Campus",
    university: "University of Gloucestershire, UK",
    summary: "Master’s Stage focused on leadership, strategy, innovation, and business transformation.",
    image: "/images/education/University_of_Gloucestershire__UK-removebg-preview.png",
  },
  {
    degree: "BSc (Hons) Computing Science",
    institution: "Achievers International Campus",
    university: "University of Gloucestershire, UK",
    summary: "Focused on software engineering, databases, web systems, and modern application development.",
    image: "/images/education/University_of_Gloucestershire__UK-removebg-preview.png",
  },
  {
    degree: "HND Artificial Intelligence & Data Science",
    institution: "IIT",
    university: "Robert Gordon University, UK",
    summary: "Focused on artificial intelligence, data science, machine learning concepts, and practical computing skills.",
    image: "/images/education/Robert Gordon University, UK.png",
  },
  {
    degree: "Professional Diploma in Business Administration",
    institution: "AIBT Campus",
    university: "University of Gloucestershire, UK",
    summary: "Focused on business management, administration, operations, and strategic business practices.",
    image: "/images/education/University_of_Gloucestershire__UK-removebg-preview.png",
  },
];

export const site = {
  // ── Identity ──────────────────────────────────────────────────────
  name: "Vihanga Ranaweera",
  role: "Business Transformation & AI Automation",
  location: "Sri Lanka",
  available: true,
  email: "vihangarpersonal@gmail.com",
  phone: "+94762610110",
  description:
    "Business transformation, AI, and automation expertise focused on creating intelligent, streamlined workflows that reduce manual work and improve decision-making.",

  tagline:
    "Turning complex business processes into intelligent, automated, and streamlined workflows.",

  about:
    "I work at the intersection of business transformation, AI, and automation, mapping messy real-world processes and rebuilding them as smarter, faster, and more reliable workflows. My focus is practical impact: clearer processes, less manual work, better decision-making, and automation solutions that teams actually want to use.",

  socials,
  nav,
  experience,
  education,
  projects,
  testimonials,
};
