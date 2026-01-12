import Projects from "./components/landingPage/projects";
import xoopcall from "./assets/xoopcall.png";

import healt1 from "./assets/health1.png";

import rfDashboard from "./assets/rf-dashboard.png";
import rfHome from "./assets/rf-home.png";
import rfDisplay from "./assets/rf-display.png";
import rfDetails from "./assets/rf-details.png";
import rfList from "./assets/rf-list.png";

import outinvoice1 from "./assets/outinvoice-1.png";
import outinvoice2 from "./assets/outinvoice-2.png";

import merrimentDisplay from "./assets/merriment-display.png";
import merrimentHome from "./assets/merriment-home.png";
import merrimentPlaceDetail from "./assets/merriment-place-detail.png";
import merrimentBlogs from "./assets/merriment-blogs.png";
import merrimentBlogDetails from "./assets/merriment-blog-details.png";

import eventForm from "./assets/event-form.png";
import eventDashboard from "./assets/event-dashboard.png";
import eventDisplay from "./assets/event-home-display.png";
import eventHome from "./assets/event-home.png";
import eventCategoryWise from "./assets/event-category-wise.png";
import eventDetails from "./assets/event-details.png";

import smartAccountDisplay from "./assets/sa-home.png";
import smartAccountDashboard from "./assets/sa1.png";
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
    location: "Biratnagar, Nepal",
    duration: "Tasks Based, 2025 - PRESENT",
    details: [
      "Developed and maintained modern React.js and Next.js applications for business clients.",
      "Focused on refactoring legacy UI and improving component reusability across modules.",
      "Integrated RESTful APIs and state management using Redux Toolkit for seamless user experiences.",
      "Contributed to code reviews and performance tuning, improving application load times.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "AppX Technologies Pvt. Ltd",
    location: "Nepal",
    duration: "Part time, Tasks based, 2024",
    details: [
      "Developed and maintained React.js applications.",
      "Enhanced existing features and improved user interfaces.",
      "Adapted quickly to changing requirements.",
      "Ensured timely delivery of tasks.",
    ],
  },
  {
  role: "Frontend Developer",
  company: "LightBulb Technology Pvt. Ltd",
  location: "Biratnagar, Nepal",
  duration: "2022 - 2024",
  details: [
    "Worked on building interactive, data-driven dashboards using React.js and TypeScript.",
    "Collaborated with senior developers, designers, and backend teams to implement business requirements on the frontend.",
    "Assisted in improving application performance using techniques such as lazy loading and component optimization.",
    "Followed frontend best practices to maintain clean, reusable, and maintainable code."
  ],
},
  {
    role: "Jr. Frontend Developer",
    company: "CodAvatar Tech Pvt. Ltd",
    location: "Kathmandu, Nepal",
    duration: "June 2022 - Sep 2022",
    details: [
      "Assisted in maintaining dynamic, responsive web applications using React.js.",
      "Supported senior developers in implementing new features.",
      "Gained hands-on experience in modern front-end development practices.",
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
    displayImage: smartAccountDisplay,
    images: [smartAccountDisplay, smartAccountDashboard, sa2, sa3],
    deployedLink: "https://smart-acc.vercel.app/",
  },
  {
    showDetails: true,
    title: "RoomFinder",
    type: "MERN App | Self-learning project",
    description:
      "A MERN stack app for finding and listing rooms with advanced search features.",
    overview:
      "RoomFinder is a MERN stack application built to help users find rooms for rent and list their own properties. It features user authentication, search and filtering options, map integration, and a responsive design, providing a smooth user experience across devices.",
    coreFeatures: [
      "Implemented search and filtering capabilities for efficient room discovery.",
      "User authentication and role-based navigation for secure access and management.",
      "Integration with MongoDB for efficient data storage and retrieval.",
      "Responsive design using React.js and Tailwind CSS for a seamless experience on all devices.",
    ],
    advancedFeatures: [
      "Functionality for users to edit or delete their posts.",
      "Enhanced search with criteria such as price range, location, tenant type, and room types.",
      "Map integration for visualizing room locations.",
      "Notification system for important alerts.",
      "User profile management for updating personal and contact information.",
      "Lightbox feature for full-screen image viewing.",
    ],
    technologies: [
      "React",
      "Redux",
      "Redux Thunk",
      "Tailwind CSS",
      "TypeScript",
      "Express",
      "MongoDB",
      "Node.js",
      "JavaScript",
      "RESTful APIs",
      "JWT Authentication",
      "Google Maps API",
    ],
    development: {
      tools: ["Visual Studio Code", "Postman", "Git", "Webpack"],
      practices: [
        "Adopted best practices for code quality and maintainability.",
        "Used Git for version control and collaboration.",
        "Applied continuous integration and deployment with GitHub Actions.",
      ],
    },
    displayImage: rfDisplay,
    images: [rfHome, rfDashboard, rfDetails, rfList],
    deployedLink: "https://roomfinder.vercel.app/",
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
    showDetails: false,
    title: "XoopCall",
    type: "React App",
    description: "React application for communicate with users.",
    overview:
      "XoopCall is a React application developed to communicate with users. It allows real-time updates, and includes features for advanced user and message filtering and search.",
    coreFeatures: [
      "Efficient call scheduling and tracking system with a clean and intuitive UI.",
    ],
    advancedFeatures: [
      "Real-time call updates and notifications.",
      "Advanced call filtering and search options.",
      "User profile and call history management.",
    ],
    technologies: ["React", "Redux", "Tailwind CSS"],
    displayImage: xoopcall,
    images: [xoopcall],
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
  {
    showDetails: true,
    title: "OutInvoice",
    type: "React App",
    description:
      "A React app for managing invoices and billing with customizable templates.",
    overview:
      "OutInvoice simplifies the invoice and billing process by offering customizable templates, real-time invoice tracking, and integration with payment gateways. The app is designed to improve efficiency in managing business transactions.",
    coreFeatures: [
      "Simplified invoice creation and management.",
      "Real-time tracking of billing statuses.",
    ],
    advancedFeatures: [
      "Automated invoice generation based on user input.",
      "Customizable templates for invoicing.",
      "Integration with third-party payment gateways.",
    ],
    technologies: ["React", "Bootstrap 5", "Redux"],
    displayImage: outinvoice1,
    images: [outinvoice1, outinvoice2],
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
