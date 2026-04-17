import Projects from "./components/landingPage/projects";

import calendar1 from "./assets/calendar1.png";
import calendar from "./assets/calendar.png";

import xpenza from "./assets/xpenza.png";
import xpenza1 from "./assets/xpenza1.png";

import resufy1 from "./assets/r1.png";
import resufy2 from "./assets/r2.png";

import smartAccountDisplay from "./assets/sa-home.png";
import smartAccountDashboard from "./assets/sa1.png";
import saDashboard from "./assets/sa-dashboard.png";
import sa2 from "./assets/sa2.png";
import sa3 from "./assets/sa3.png";

import Hero from "./components/landingPage/hero";
import Experiences from "./components/landingPage/experiences";
import Skills from "./components/landingPage/skills";
import Education from "./components/landingPage/education";

export const NAVITEMS = [
  { title: "About", Component: Hero },
  { title: "Experiences", Component: Experiences },
  { title: "Skills", Component: Skills },
  { title: "Education", Component: Education },
  { title: "Projects", Component: Projects },
  { title: "Contact" },
];

export const EXPERIENCES_DATA = [
  {
    role: "Frontend Developer",
    company: "Clove.IT Pvt. Ltd",
    location: "Nepal — Remote",
    duration: "2025 – Present | Contract",
    details: [
      "Worked on refactoring legacy React codebase into modular, reusable components.",
      "Implemented lazy loading and dynamic imports to improve initial page load performance.",
      "Applied memoization and component-level optimizations to reduce unnecessary re-renders.",
      "Participated in code reviews and helped maintain frontend code quality standards.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "AppX Technologies Pvt. Ltd",
    location: "Nepal — Remote",
    duration: "2024 | Part-time / Contract",
    details: [
      "Built and delivered React UI features and bug fixes under client deadlines.",
      "Developed task-based frontend components for client applications.",
      "Improved user experience through UI refinements and responsive design adjustments.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "LightBulb Technology Pvt. Ltd",
    location: "Nepal | Hybrid",
    duration: "Sep 2022 – 2024",
    details: [
      "Contributed to frontend development of analytics dashboards used by internal teams.",
      "Integrated REST APIs using Redux Toolkit for state management and data handling.",
      "Worked on reusable components and code-splitting to improve frontend scalability.",
      "Collaborated on UI design decisions for dashboard applications.",
    ],
  },
  {
    role: "Junior Frontend Developer",
    company: "CodAvatar Tech Pvt. Ltd",
    location: "Nepal",
    duration: "Jun 2022 – Sep 2022",
    details: [
      "Built reusable React components under senior developer guidance.",
      "Contributed to API integration and frontend feature development.",
      "Worked with Git-based workflows, including branching, pull requests, and collaborative development practices.",
    ],
  },
  {
    role: "Technical Support & Early Career",
    company: "WorldLink Communications & Others",
    location: "Nepal",
    duration: "2017 – 2022",
    details: [
      "Provided technical support and customer-facing troubleshooting.",
      "Developed strong problem-solving, communication, and analytical skills.",
      "Transitioned into software development through hands-on learning and practice.",
    ],
  },
];

export const EDUCATION_DATA = [
  {
    degree: "B.Sc. in Computer Science and Information Technology",
    field: "CSIT",
    institution: "Tribhuvan University",
    address: "Nepal",
    board: "TU",
    year: 2022,
    icon: "graduationCap",
  },
];

export const SKILLS_DATA = [
  {
    title: "Frontend",
    icon: "code",
    items: [
      { title: "React.js", icon: "react" },
      { title: "Next.js", icon: "react" },
      { title: "TypeScript", icon: "ts" },
      { title: "JavaScript (ES6+)", icon: "js" },
      { title: "HTML5", icon: "html" },
      { title: "CSS3", icon: "css" },
      { title: "Tailwind CSS", icon: "tailwind" },
      { title: "MUI", icon: "mui" },
      { title: "Ant Design", icon: "antd" },
    ],
  },
  {
    title: "State Management",
    icon: "redux",
    items: [
      { title: "Redux", icon: "redux" },
      { title: "Redux Toolkit", icon: "redux" },
      { title: "Async Thunks", icon: "redux" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: "setting",
    items: [
      { title: "REST APIs", icon: "toolbox" },
      { title: "Node.js", icon: "nodejs" },
      { title: "Express.js", icon: "nodejs" },
      { title: "MongoDB", icon: "nodejs" },
      { title: "GraphQL", icon: "graphql" },
    ],
  },
  {
    title: "Performance Optimization",
    icon: "bulb",
    items: [
      { title: "Code Splitting", icon: "bulb" },
      { title: "Lazy Loading", icon: "bulb" },
      { title: "Memoization", icon: "bulb" },
      { title: "Dynamic Imports", icon: "bulb" },
      { title: "Lighthouse Optimization", icon: "bulb" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "toolbox",
    items: [
      { title: "Git / GitHub", icon: "git" },
      { title: "Vercel", icon: "vercel" },
      { title: "Postman", icon: "postman" },
      { title: "Agile / Scrum", icon: "peopleArrow" },
      { title: "ESLint / Prettier", icon: "eslint" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "peopleArrow",
    items: [
      { title: "Problem-solving", icon: "bulb" },
      { title: "Teamwork", icon: "peopleArrow" },
      { title: "Time Management", icon: "clock" },
      { title: "Adaptability", icon: "bulb" },
      { title: "Communication", icon: "peopleArrow" },
    ],
  },
];

export const PROJECTS_DATA = [
  {
    showDetails: true,
    title: "BS-AD Calendar",
    type: "React NPM Package | Open Source",
    description:
      "A modern React calendar component for seamless conversion between Bikram Sambat (BS) and Gregorian (AD) calendars.",
    overview:
      "Published NPM package with 1.2k+ downloads. Provides dual calendar conversion, date range selection, and Nepali localization. Built with TypeScript for type safety and includes comprehensive documentation.",
    coreFeatures: [
      "Automatic dual calendar conversion (BS ↔ AD) with single click.",
      "Single date and range selection with customizable presets.",
      "Nepali localization support (months, days, numbers).",
      "TypeScript support with full type definitions.",
      "Keyboard navigation and ARIA accessibility.",
    ],
    advancedFeatures: [
      "DatePicker component with popup calendar.",
      "Custom themes (light/dark) and color schemes.",
      "Range presets (last 7 days, this month, etc.).",
      "Date constraints (min/max dates).",
      "Responsive design for all devices.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "NPM Package",
      "GitHub Pages",
    ],
    development: {
      tools: ["Vite", "TypeScript", "ESLint", "Prettier", "GitHub Actions"],
      practices: [
        "Published to NPM with semantic versioning.",
        "Comprehensive documentation and examples.",
        "Unit tests and CI/CD pipeline.",
        "Open source with MIT license.",
      ],
    },
    displayImage: calendar1,
    images: [calendar1, calendar],
    deployedLink: "https://bibekamatya.github.io/bs-ad-calendar/",
  },
  {
    showDetails: true,
    title: "Smart Account",
    type: "Next.js Full-Stack App | Business Management",
    description:
      "A comprehensive business management system with multi-business/user/member support, financial tracking, and inventory management.",
    overview:
      "Smart Account is a full-stack Next.js application designed for managing multiple businesses with complete financial tracking, team collaboration, and real-time analytics. Built with Next.js 15, React 19, TypeScript, and MongoDB, it provides a robust solution for business owners to manage sales, purchases, payments, and team members efficiently.",
    coreFeatures: [
      "Multi-Business Support - Manage multiple businesses from one account with role-based permissions.",
      "Financial Management - Complete sales, purchase, and payment tracking with supplier/customer management.",
      "Team Collaboration - Role-based access control with granular permissions for team members.",
      "Real-time Analytics - Dashboard with live business insights, charts, and performance metrics.",
      "PWA Support - Installable progressive web app with offline functionality.",
    ],
    advancedFeatures: [
      "Fiscal Year Management - Multiple fiscal year support with data carry-forward.",
      "Audit Logging - Complete activity tracking and audit trails for all operations.",
      "Advanced Search - Powerful search and filtering capabilities across all modules.",
      "Data Export - Excel and CSV export functionality for reports.",
      "Supplier & Customer Ledger - Complete transaction history and relationship management.",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Redux Toolkit",
      "NextAuth.js",
      "Tailwind CSS",
      "Server Actions",
      "JWT Authentication",
      "Framer Motion",
      "React Hook Form",
      "Zod Validation",
    ],
    development: {
      tools: ["Visual Studio Code", "Postman", "Git", "ESLint", "Prettier"],
      practices: [
        "Component-based architecture with TypeScript strict mode.",
        "Redux Toolkit for state management with custom hooks.",
        "Server Actions for type-safe API operations.",
        "Comprehensive error handling and audit logging.",
      ],
    },
    displayImage: saDashboard,
    images: [smartAccountDisplay, smartAccountDashboard, sa2, sa3],
    deployedLink: "https://smart-acc.vercel.app/",
  },
  {
    showDetails: true,
    title: "Xpenza",
    type: "Next.js Full-Stack App | Expense Tracker",
    description:
      "A modern expense tracking application with analytics, budget management, and data export features.",
    overview:
      "Full-stack expense tracker built with Next.js 15, React 19, and MongoDB. Features Google OAuth authentication, real-time analytics, budget tracking, and PWA support for offline access.",
    coreFeatures: [
      "Transaction Management - Add, edit, delete income/expense with categories.",
      "Smart Filtering - Real-time search with date range and category filters.",
      "Budget Tracking - Set limits and get alerts when approaching budget.",
      "Reports & Analytics - Visual insights with charts and trend analysis.",
      "Data Export - Export transactions as CSV or PDF.",
    ],
    advancedFeatures: [
      "Google OAuth authentication with NextAuth.js.",
      "Real-time updates with optimistic rendering.",
      "Bulk operations (select and delete multiple transactions).",
      "PWA support with offline functionality.",
      "Responsive design with dark theme.",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "MongoDB",
      "NextAuth.js",
      "Tailwind CSS",
      "Recharts",
      "Framer Motion",
      "jsPDF",
    ],
    development: {
      tools: ["Visual Studio Code", "MongoDB Atlas", "Vercel", "Git"],
      practices: [
        "Server Actions for type-safe API operations.",
        "Zod validation for data integrity.",
        "Optimistic UI updates for better UX.",
        "PWA configuration for mobile experience.",
      ],
    },
    displayImage: xpenza,
    images: [xpenza, xpenza1],
    deployedLink: "https://xpenza-web.vercel.app/",
  },
  {
    showDetails: true,
    title: "Resufy",
    type: "Next.js Full-Stack App | Resume Builder",
    description:
      "A resume builder with multiple templates, real-time preview, ATS scoring, and PDF export.",
    overview:
      "Resufy is a full-stack resume builder built with Next.js 15 and MongoDB. It features an ATS scoring system that analyzes resumes and suggests keyword improvements, multi-profile management, and public share links for recruiter access without authentication.",
    coreFeatures: [
      "Multiple resume templates with real-time preview and PDF export.",
      "ATS scoring system to analyze resumes and suggest keyword improvements.",
      "Multi-profile management with configurable section visibility.",
      "Public share links for recruiter access without authentication.",
      "Responsive templates using React-PDF for consistent document generation.",
    ],
    advancedFeatures: [
      "Google OAuth authentication with NextAuth.js.",
      "Configurable section visibility per profile.",
      "Used by early users for resume creation and iteration.",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "NextAuth.js",
      "react-pdf",
    ],
    development: {
      tools: ["Visual Studio Code", "MongoDB Atlas", "Vercel", "Git"],
      practices: [
        "Server Actions for type-safe API operations.",
        "React-PDF for consistent cross-browser document generation.",
        "Public share links without requiring authentication.",
      ],
    },
    displayImage: resufy1,
    images: [resufy1, resufy2],
    deployedLink: "https://resufy.vercel.app/",
  },
];

export const OTHER_PROJECTS_DATA = [
  {
    title: "Event Management System",
    type: "React App | Client Project",
    description: "Event scheduling with role-based login, category search, and real-time UI updates using Redux.",
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    deployedLink: "https://eventmgmt.vercel.app/",
  },
  {
    title: "Merriment Travels",
    type: "React App | Client Project",
    description: "Travel booking system with category filtering, admin tools, and responsive design.",
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    deployedLink: "https://merrimenttravels.com/",
  },
  {
    title: "Health Care System",
    type: "React App",
    description: "Healthcare UI for managing health and medical history records with a clean responsive layout.",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "Smart Account",
    type: "Next.js App | Business Management",
    description: "Full-featured business accounting and inventory management system with multi-role support and analytics dashboard.",
    technologies: ["Next.js", "TypeScript", "Redux Toolkit", "MongoDB", "Tailwind CSS", "JWT"],
    deployedLink: "https://smart-acc.vercel.app/",
  },
  {
    title: "Room Finder",
    type: "MERN App | Self-learning",
    description: "Platform for listing and searching available rooms with multi-role support and analytics dashboard.",
    technologies: ["Next.js", "TypeScript", "Redux Toolkit", "MongoDB", "Tailwind CSS"],
    deployedLink: "https://roomfinder.vercel.app/",
  },
  {
    title: "Restropal",
    type: "HTML/CSS App",
    description: "Restaurant management application with menu, orders, and table management features.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "E-Commerce App",
    type: "React App",
    description: "E-commerce platform with product listing, cart, and checkout functionality.",
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
  },
];

export const CONTACT_DETAILS = [
  {
    icon: "address",
    title: "Location",
    content: "Nepal (Open to Remote)",
  },
  {
    icon: "email",
    title: "Email",
    content: "bamatya1@gmail.com",
  },
  {
    icon: "phone",
    title: "Phone",
    content: "+977 9816776999",
  },
  {
    icon: "clock",
    title: "Timezone",
    content: "GMT+5:45 (Flexible overlap with US/EU)",
  },
];
