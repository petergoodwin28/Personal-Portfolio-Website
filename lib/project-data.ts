export type ProjectStatus = "Live" | "In Progress";
export type ProjectWorkSection = "featured" | "supporting";

export type ProjectLinkSet = {
  github?: string;
  demo?: string;
};

export type ProjectEntry = {
  slug: string;
  title: string;
  type: string;
  status: ProjectStatus;
  summary: string;
  impact: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
  stack: string[];
  coreFeatures: string[];
  implementationNotes: string[];
  performanceNotes?: string[];
  links: ProjectLinkSet;
  workSection: ProjectWorkSection;
  showOnHomepage: boolean;
  homepageOrder?: number;
};

const projects: ProjectEntry[] = [
  {
    slug: "stock-dashboard",
    title: "Stock Dashboard",
    type: "Web App",
    status: "Live",
    summary:
      "A login-aware stock dashboard with watchlist workflows, range-based chart controls, and route-aware guest behavior.",
    impact:
      "Demonstrates practical product thinking across auth states, data density, and chart usability.",
    role: "Product planning, frontend architecture, and UI implementation",
    image: {
      src: "/stockdash-login-page.png",
      alt: "Stock Dashboard login and watchlist interface preview",
    },
    stack: ["Next.js", "React", "TypeScript", "Charting UI", "Tailwind CSS"],
    coreFeatures: [
      "Authenticated and guest access paths with feature-aware route behavior",
      "Multi-range stock chart controls for quick analysis windows",
      "Watchlist-focused workflows with data clarity and chart readability",
      "Dashboard layout built for scanning dense financial information quickly",
    ],
    implementationNotes: [
      "Component boundaries were organized around route sections and data-display concerns.",
      "UI states were modeled to keep guest and authenticated behavior explicit and testable.",
      "Chart interaction controls were structured for quick extension to additional data ranges.",
    ],
    performanceNotes: [
      "Image and chart regions were scoped to reduce layout shift and unnecessary repaint work.",
      "Interactive behaviors were tuned to keep transitions responsive under dense data views.",
    ],
    links: {
      github:
        "https://github.com/petergoodwin28/Stock-Dashboard-Login-Watchlist",
    },
    workSection: "featured",
    showOnHomepage: true,
    homepageOrder: 1,
  },
  {
    slug: "theme-change-site",
    title: "Theme Change Site",
    type: "UI System",
    status: "Live",
    summary:
      "A theme-reactive interface experiment where visual tokens adapt to curated hero-image palettes.",
    impact:
      "Highlights design-system thinking: tokenized color control, consistency, and smooth theme transitions.",
    role: "Design systems direction and frontend implementation",
    image: {
      src: "/theme-site-battle-image.png",
      alt: "Theme Change Site interface with dynamic color system",
    },
    stack: ["Next.js", "React", "Tailwind CSS", "Theme Tokens", "Motion"],
    coreFeatures: [
      "Palette-aware themes driven by curated visual inputs",
      "Tokenized color architecture for consistent cross-component styling",
      "Smooth theme transition behavior across primary UI surfaces",
      "Reusable theme primitives that support future palette expansion",
    ],
    implementationNotes: [
      "Theme primitives were modeled first, then consumed by section-level components.",
      "Color token layering was designed to keep text contrast and surface hierarchy reliable.",
      "Animation timing was tuned to support theme changes without visual noise.",
    ],
    performanceNotes: [
      "Theme transitions avoid expensive layout changes and focus on paint-safe properties.",
      "Shared token usage reduces one-off style drift across components.",
    ],
    links: {
      github: "https://github.com/petergoodwin28/Theme-Change-Site",
    },
    workSection: "featured",
    showOnHomepage: true,
    homepageOrder: 2,
  },
  {
    slug: "homestead-planner",
    title: "Homestead Planner",
    type: "Planning App",
    status: "Live",
    summary:
      "A planning tool for tracking livestock, crops, budgets, and sustainability targets in one interface.",
    impact:
      "Balances practical planning workflows with approachable information architecture.",
    role: "Product direction and frontend development",
    image: {
      src: "/homestead-crops.png",
      alt: "Homestead Planner crop and planning interface preview",
    },
    stack: ["Next.js", "TypeScript", "Planning UX", "Data Structuring"],
    coreFeatures: [
      "Planning views for livestock, crops, and seasonal priorities",
      "Budget and resource framing for long-term sustainability goals",
      "Task organization designed for repeat-use planning sessions",
      "Clear data grouping for quick scanning and decision support",
    ],
    implementationNotes: [
      "Domain data was separated into practical planning categories to reduce cognitive load.",
      "Page sections were structured around common planning questions and repeat workflows.",
      "Content framing prioritized readability for longer session use.",
    ],
    links: {
      github: "https://github.com/petergoodwin28/HomesteadPlanner",
    },
    workSection: "supporting",
    showOnHomepage: true,
    homepageOrder: 4,
  },
  {
    slug: "custom-pc-build",
    title: "Custom PC Build",
    type: "Personal Build",
    status: "In Progress",
    summary:
      "An evolving workstation build centered on airflow, thermal stability, and long-term upgrade flexibility.",
    impact:
      "Reflects systems thinking through component compatibility, maintenance planning, and performance tuning.",
    role: "Hardware research, build execution, and performance tuning",
    image: {
      src: "/my-pc.jpg",
      alt: "Custom PC build and workstation hardware setup",
    },
    stack: ["Hardware", "Performance Tuning", "System Design", "Benchmarking"],
    coreFeatures: [
      "Component layout optimized for airflow and easy maintenance access",
      "Thermal tuning strategy focused on sustained mixed workloads",
      "Upgrade-aware planning for future GPU and memory expansion",
      "Build documentation for iterative testing and refinement",
    ],
    implementationNotes: [
      "Part selection prioritized compatibility and practical long-term upgrade paths.",
      "Thermal and airflow decisions were validated through repeated workload checks.",
      "System changes are tracked in phases to isolate impact of each adjustment.",
    ],
    performanceNotes: [
      "Workload stability and thermals are measured under sustained render and gaming scenarios.",
    ],
    links: {},
    workSection: "supporting",
    showOnHomepage: true,
    homepageOrder: 3,
  },
  {
    slug: "ford-focus-se-upgrades",
    title: "Ford Focus SE Upgrades",
    type: "Personal Build",
    status: "In Progress",
    summary:
      "A phased vehicle upgrade project spanning lighting, intake, wheel, and styling improvements.",
    impact:
      "Demonstrates iterative planning and prioritization across practical and aesthetic upgrades.",
    role: "Research, phased planning, and hands-on execution",
    image: {
      src: "/my-car.jpg",
      alt: "Ford Focus SE with ongoing exterior and performance upgrades",
    },
    stack: ["Research", "Iteration", "Hands-on Execution", "Project Planning"],
    coreFeatures: [
      "Phased upgrade roadmap balancing cost, impact, and installation effort",
      "Lighting and intake improvements with compatibility checks",
      "Exterior styling refinements mapped to practical maintenance needs",
      "Incremental testing after each phase to validate outcomes",
    ],
    implementationNotes: [
      "Upgrade sequencing is planned to avoid redundant install work across phases.",
      "Each phase is documented to capture lessons and reduce rework risk.",
      "Tradeoffs are tracked between visual goals, drivability, and budget.",
    ],
    links: {},
    workSection: "supporting",
    showOnHomepage: false,
  },
  {
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    type: "Portfolio",
    status: "Live",
    summary:
      "A custom Next.js portfolio focused on polished presentation, reusable UI patterns, and scalable content architecture.",
    impact:
      "Serves as a production-quality foundation for showcasing project work, process, and iterative engineering improvements.",
    role: "Design direction, frontend engineering, and production hardening",
    image: {
      src: "/meImage1.jpg",
      alt: "Personal portfolio homepage and profile preview",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    coreFeatures: [
      "Consistent multi-page design language with responsive behavior",
      "Structured SEO metadata, social cards, and route-level content hierarchy",
      "Interactive homepage sections with deliberate performance controls",
      "Data-driven project architecture for scalable future additions",
    ],
    implementationNotes: [
      "Shared page-shell and surface patterns were reused to reduce one-off styling drift.",
      "Project content architecture was centralized to keep listing and detail views synchronized.",
      "Routing and metadata were aligned so new pages remain easy to add and index.",
    ],
    performanceNotes: [
      "Client-heavy regions were deferred and scoped to reduce initial load pressure.",
      "Pointer effects and motion behavior were tuned for lower overhead on real devices.",
    ],
    links: {},
    workSection: "supporting",
    showOnHomepage: false,
  },
  {
    slug: "car-camping-outdoor-planner",
    title: "Car Camping / Outdoor Planner",
    type: "Planning Tool",
    status: "In Progress",
    summary:
      "A readiness-focused planner inspired by real trips, packing workflows, and repeat campsite preparation.",
    impact:
      "Turns practical trip prep into reusable checklists and decision support patterns.",
    role: "Product concept, information architecture, and workflow design",
    image: {
      src: "/carCamping.webp",
      alt: "Car camping planning checklist and outdoor preparation concept",
    },
    stack: ["Checklist UX", "Planning Flows", "Data Structure", "Trip Readiness"],
    coreFeatures: [
      "Trip-readiness checklists with reusable planning templates",
      "Packing guidance organized by weather, duration, and activity",
      "Preparation workflows aimed at reducing last-minute planning friction",
      "Expandable structure for campsite and route decision support",
    ],
    implementationNotes: [
      "The content model is built around repeat planning loops rather than one-time trip setup.",
      "Checklist groupings are tuned for fast scanning on mobile and desktop.",
      "Feature scope is intentionally phased to keep the foundation stable as it grows.",
    ],
    links: {},
    workSection: "supporting",
    showOnHomepage: false,
  },
];

export const capabilityGroups = [
  {
    label: "Frontend",
    values: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    label: "Platform",
    values: ["Node.js", "MongoDB", "SQL Server", "AWS", "Azure AD / Intune"],
  },
  {
    label: "Workflow",
    values: [
      "Component Systems",
      "Theme Architecture",
      "Interaction Design",
      "Accessibility",
      "Responsive Design",
    ],
  },
] as const;

export function getAllProjects() {
  return [...projects];
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getWorkProjects(section: ProjectWorkSection) {
  return projects.filter((project) => project.workSection === section);
}

export function getHomepageProjects() {
  return projects
    .filter((project) => project.showOnHomepage)
    .sort((a, b) => (a.homepageOrder ?? 999) - (b.homepageOrder ?? 999))
    .map((project) => ({
      slug: project.slug,
      name: project.title,
      imageURL: project.image.src,
      description: project.summary,
      status: project.status,
    }));
}
