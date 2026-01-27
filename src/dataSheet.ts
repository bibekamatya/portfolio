import Projects from "./components/landingPage/projects";

import calendar1 from "./assets/calendar1.png";
import calendar from "./assets/calendar.png";

import xpenza from "./assets/xpenza.png";
import xpenza1 from "./assets/xpenza1.png";

import healt1 from "./assets/health1.png";

import eventForm from "./assets/event-form.png";
import eventDashboard from "./assets/event-dashboard.png";
import eventDisplay from "./assets/event-home-display.png";
import eventHome from "./assets/event-home.png";
import eventCategoryWise from "./assets/event-category-wise.png";
import eventDetails from "./assets/event-details.png";

import smartAccountDisplay from "./assets/sa-home.png";
import smartAccountDashboard from "./assets/sa1.png";
import saDashboard from "./assets/sa-dashboard.png";
import sa2 from "./assets/sa2.png";
import sa3 from "./assets/sa3.png";

import merrimentDisplay from "./assets/merriment-display.png";
import merrimentHome from "./assets/merriment-home.png";
import merrimentPlaceDetail from "./assets/merriment-place-detail.png";
import merrimentBlogs from "./assets/merriment-blogs.png";
import merrimentBlogDetails from "./assets/merriment-blog-details.png";

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
    location: "Biratnagar, Nepal",
    duration: "Tasks Based, 2025 - PRESENT",
    details: [
      "Built and maintained React.js and Next.js applications for business clients.",
      "Improved legacy UI components for better reusability.",
      "Integrated REST APIs and managed state using Redux Toolkit.",
      "Reviewed code and optimized performance to reduce load times.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "AppX Technologies Pvt. Ltd",
    location: "Nepal",
    duration: "Part time, Tasks based, 2024",
    details: [
      "Built UI features and custom components using React.js.",
      "Worked with design team to improve user experience.",
      "Fixed bugs and improved responsive layouts.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "LightBulb Technology Pvt. Ltd",
    location: "Biratnagar, Nepal",
    duration: "2022 - 2024",
    details: [
      "Learned React.js and TypeScript while building dashboards.",
      "Worked with designers and backend teams on UI features.",
      "Improved performance using lazy loading and optimization.",
      "Followed best practices for clean code.",
    ],
  },
  {
    role: "Jr. Frontend Developer",
    company: "CodAvatar Tech Pvt. Ltd",
    location: "Kathmandu, Nepal",
    duration: "June 2022 - Sep 2022",
    details: [
      "Learned React.js basics while maintaining web applications.",
      "Helped senior developers with feature implementation.",
      "Gained experience in frontend development.",
    ],
  },
  {
    role: "Retail Support Officer",
    company: "WorldLink Communications Pvt. Ltd",
    location: "Itahari, Nepal",
    duration: "Sep 2019 - Feb 2020",
    details: [
      "Provided technical support to users.",
      "Resolved service-related inquiries and issues.",
      "Assisted in the installation and configuration of network equipment.",
      "Guided customers on network usage and maintenance.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Zeftware Solutions Pvt. Ltd",
    location: "Biratnagar, Nepal",
    duration: "May 2018 - Jun 2019",
    details: [
      "Developed static websites.",
      "Implemented UI/UX designs.",
      "Collaborated with designers to translate visual concepts into code.",
    ],
  },
  {
    role: "Technical Support Officer",
    company: "Zeftware Solutions Pvt. Ltd",
    location: "Biratnagar, Nepal",
    duration: "Oct 2017 - Mar 2018",
    details: [
      "Provided technical assistance to users.",
      "Diagnosed and resolved software-related issues.",
      "Supported end-users with software installation and configuration.",
      "Delivered training and guidance to users.",
    ],
  },
];

export const EDUCATION_DATA = [
  {
    degree: "Bachelors Degree",
    field: "B.SC.CSIT",
    institution: "Himalaya Darshan College",
    address: "Biratnagar, Morang, Nepal",
    board: "TU",
    year: 2022,
    percentage: "63%",
    icon: "graduationCap",
  },
  {
    degree: "High School",
    field: "Science",
    institution: "Kanchanjunga Higher Secondary School",
    address: "Biratnagar, Morang, Nepal",
    board: "HSEB",
    year: 2013,
    percentage: "62%",
    icon: "school",
  },
  {
    degree: "SLC",
    field: "",
    institution: "Shree Janta Higher Secondary School",
    address: "Deaury, Udayapur, Nepal",
    board: "Nepal Education Board",
    year: 2010,
    percentage: "56%",
    icon: "university",
  },
];

export const SKILLS_DATA = [
  {
    title: "Frontend",
    icon: "code",
    items: [
      { title: "HTML", icon: "html" },
      { title: "CSS", icon: "css" },
      { title: "JavaScript (ES6+)", icon: "js" },
      { title: "React.js", icon: "react" },
      { title: "TypeScript", icon: "ts" },
      { title: "Bootstrap", icon: "bootstrap" },
      { title: "Tailwind CSS", icon: "tailwind" },
      { title: "MUI", icon: "mui" },
      { title: "ANT-D", icon: "antd" },
    ],
  },
  {
    title: "Tools/Version Control",
    icon: "toolbox",
    items: [
      { title: "Git", icon: "git" },
      { title: "Vercel", icon: "vercel" },
      { title: "Postman", icon: "postman" },
      { title: "Jest", icon: "jest" },
      { title: "Thunder Client", icon: "toolbox" },
    ],
  },
  {
    title: "Frameworks/Libraries",
    icon: "setting",
    items: [
      { title: "Next.js", icon: "react" },
      { title: "React.js", icon: "react" },
      { title: "MERN", icon: "nodejs" },
      { title: "Redux", icon: "redux" },
      { title: "Redux Thunk", icon: "redux" },
      { title: "ESLint/Prettier", icon: "eslint" },
      { title: "GraphQL", icon: "graphql" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "peopleArrow",
    items: [
      { title: "Problem-solving", icon: "bulb" },
      { title: "Teamwork", icon: "peopleArrow" },
      { title: "Time management", icon: "clock" },
      { title: "Collaboration", icon: "peopleArrow" },
      { title: "Adaptability", icon: "bulb" },
    ],
  },
  {
    title: "Other",
    icon: "bulb",
    items: [
      { title: "Networking", icon: "networking" },
      { title: "Graphic Designing", icon: "palette" },
      { title: "Computer Hardware & Software", icon: "computer" },
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
    title: "Event Management System",
    type: "React App",
    description:
      "A React application for managing events, including creation and scheduling.",
    overview:
      "An event management system built with React to facilitate event creation, scheduling, and management. This application allows users to organize events easily while managing roles and notifications, ensuring smooth operation across multiple users.",
    coreFeatures: [
      "Integrated frontend components with state management for real-time updates and dynamic user experiences.",
      "Implemented secure authentication and user roles for personalized access control.",
    ],
    advancedFeatures: [
      "Advanced search and filtering options for events based on date, type, and location.",
      "Real-time notifications and reminders for upcoming events.",
      "Integration with calendar services for event synchronization.",
      "User profile management and event history tracking.",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Redux",
      "Redux Thunk",
    ],
    displayImage: eventDisplay,
    images: [
      eventHome,
      eventCategoryWise,
      eventDetails,
      eventDashboard,
      eventForm,
    ],
    deployedLink: "https://eventmgmt.vercel.app/",
  },
  {
    showDetails: false,
    title: "Health Care System",
    type: "React App",
    description:
      "React-based application designed for managing health and medical history records efficiently.",
    overview:
      "A user interface created for a healthcare system, focusing on a clean, responsive layout that allows users to access essential healthcare information easily.",
    coreFeatures: [
      "Focused on delivering a clean layout and intuitive user experience.",
    ],
    technologies: ["React.Js", "Tailwind CSS"],
    displayImage: healt1,
    images: [healt1],
  },
  {
    showDetails: true,
    title: "Merriment Travels",
    type: "React App",
    description:
      "A React application for managing travel bookings and itineraries.",
    overview:
      "Merriment Travels is a travel management application that provides users with an easy way to book and manage their travel itineraries. The app supports real-time notifications, advanced search, and integration with third-party travel platforms.",
    coreFeatures: [
      "User-friendly interface for booking management.",
      "Itinerary tracking with calendar integration.",
    ],
    advancedFeatures: [
      "Real-time notifications for booking updates.",
      "Advanced filtering for travel options based on user preferences.",
      "Integration with external booking platforms and services.",
    ],
    technologies: ["React", "Tailwind CSS", "Redux"],
    displayImage: merrimentDisplay,
    images: [
      merrimentHome,
      merrimentPlaceDetail,
      merrimentBlogs,
      merrimentBlogDetails,
    ],
    deployedLink: "https://merrimenttravels.com/",
  },
];

export const CONTACT_DETAILS = [
  {
    icon: "address",
    title: "Address",
    content: "Gaighat, Udayapur, Nepal",
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
];
