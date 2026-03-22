export const personalInfo = {
  name: "Sandeep Vaid",
  title: "Software Developer",
  tagline: "Building scalable systems that power the future",
  email: "vaid77167@gmail.com",
  phone: "+917006549295",
  github: "https://github.com/sandeepvaid",
  linkedin: "https://www.linkedin.com/in/sandeep-vaid623/",
  location: "India",
  about: `I'm a passionate Software Developer with expertise in building scalable backend systems, cloud-native infrastructure, and full-stack web applications. From architecting ETL pipelines that process 100M+ records to engineering real-time platforms — I turn complex engineering challenges into elegant, production-grade solutions.`,
  aboutPoints: [
    "Architected ETL pipelines processing 100M+ records with 99.9% consistency",
    "Built cloud-native backends using AWS Lambda, DynamoDB, and CloudWatch",
    "Full-stack expertise across React, Node.js, PostgreSQL, and more",
    "Passionate about system design, performance, and developer experience",
  ],
};

export const experiences = [
  {
    id: 1,
    role: "Software Developer 2",
    company: "ConveGenius",
    duration: "June 2024 – Present",
    location: "Remote",
    color: "#6366f1",
    highlights: [
      "Architected and deployed a scalable ETL pipeline integrating NIC UDISE+ APIs, ingesting 100M+ records across student, school, teaching datasets",
      "Engineered fault-tolerant data migration architecture using PostgreSQL transactions, staging tables, rollback safety, and Redis caching — ensuring 99.9% consistency",
      "Built production-grade monitoring and recovery system featuring Cron-based scheduling, health check endpoints, CloudWatch error logging, and retry logic with exponential backoff",
      "Built a modular, community-driven training platform enabling teachers to create sessions, share resources, and track attendance with preassigned S3 URLs",
      "Engineered cloud-native backend infrastructure using AWS Lambda, DynamoDB, and CloudWatch supporting scalable session management",
    ],
    tech: ["Node.js", "PostgreSQL", "Redis", "AWS Lambda", "DynamoDB", "CloudWatch", "S3"],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Travel Corporation of India",
    duration: "May 2023 – June 2024",
    location: "India",
    color: "#8b5cf6",
    highlights: [
      "Spearheaded development to deployment of a customizable React theme-editor using hooks, Redux, and Saga for itinerary details",
      "Orchestrated end-to-end implementation of Guide products across backend, frontend, and mobile app platforms",
      "Integrated AWS Cognito for advanced authentication capabilities and developed lambda functions for bespoke auth logic",
      "Engineered advanced search algorithms for guides, reducing search times by 2.35 seconds through intelligent filtering",
      "Contributed to the guide mobile app built with React Native and published it on the Play Store",
    ],
    tech: ["React", "React Native", "Redux", "AWS Cognito", "Lambda", "Node.js"],
  },
  {
    id: 3,
    role: "Software Development Engineer",
    company: "Argoid (Acquired by Amagi)",
    duration: "July 2022 – May 2023",
    location: "India",
    color: "#a855f7",
    highlights: [
      "Crafted a service layer serving multiple platform components — configuration management, dashboard management, and task & dependency management, reducing manual workload by 80%",
      "Built an Administration Console with robust role-based authentication for configuration management and monitoring",
      "Created a Discount tool for dynamic user discounts per sales team requirements",
      "Optimized Performance of Event Server Implementation with schema validation, enabling 50,000 requests/second",
      "Built image-to-text extractor for creating recommendations based on extracted attributes",
      "Developed expertise using Google Tag Manager for advanced configurations and real-time behavioral data collection",
    ],
    tech: ["Angular", "Node.js", "Shopify", "Google Tag Manager", "JavaScript"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Chatter — Social Media Server",
    description:
      "A full-featured social media backend with authentication, posts, comments, likes, friend requests, and real-time chat. Uses a message queue for concurrent request handling.",
    tech: ["MongoDB", "Node.js", "Express.js", "JavaScript"],
    github: "https://github.com/sandeepvaid/Chatter",
    live: null,
    color: "#6366f1",
    emoji: "💬",
  },
  {
    id: 2,
    title: "Connector — React Social App",
    description:
      "A single-page web application built on top of the Chatter server API. Features proper folder structure, custom hooks, providers, context API, and scalable state management.",
    tech: ["React", "JavaScript", "Context API", "Custom Hooks"],
    github: "https://github.com/sandeepvaid/chatter-react-app/tree/Working-branch",
    live: "https://connector-ea69e.web.app/",
    color: "#8b5cf6",
    emoji: "🔗",
  },
  {
    id: 3,
    title: "ETL Pipeline — 100M+ Records",
    description:
      "Scalable ETL pipeline integrating NIC UDISE+ APIs, processing 100M+ student and school records with fault-tolerant architecture, batch processing, and 99.9% data consistency.",
    tech: ["PostgreSQL", "Redis", "Node.js", "AWS", "CloudWatch"],
    github: null,
    live: null,
    color: "#a855f7",
    emoji: "⚡",
  },
  {
    id: 4,
    title: "Event Server — 50K req/s",
    description:
      "Optimized Event Server Implementation with schema validation achieving 50,000 requests per second throughput — used for real-time behavioral data collection at scale.",
    tech: ["Node.js", "Schema Validation", "JavaScript"],
    github: null,
    live: null,
    color: "#ec4899",
    emoji: "🚀",
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java"],
  frameworks: ["React", "Next.js", "Node.js", "Express.js", "Angular", "React Native", "Django", "Dropwizard"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB"],
  cloud: ["AWS Lambda", "AWS S3", "AWS Cognito", "CloudWatch", "DynamoDB"],
  tools: ["Git", "Docker", "Redis", "Google Tag Manager", "Shopify"],
};

export const testimonials = [
  {
    id: 1,
    name: "Prashant Chaudhary",
    role: "Founder",
    company: "Freelance Collaboration",
    avatar: "PC",
    linkedin: "https://www.linkedin.com/in/sandeep-vaid623/",
    text: "I had the pleasure of working with Sandeep Vaid as a freelancer, and I must say his professionalism, technical expertise, and dedication truly stand out. He consistently delivers high-quality work with great attention to detail and always meets deadlines without compromise. What impressed me the most is his problem-solving ability and proactive communication — he understands requirements clearly and often suggests better solutions that add real value to the project.",
    color: "#6366f1",
  },
  {
    id: 2,
    name: "Akshaya Dongre",
    role: "Building UI for AI · Amagi · React · SaaS",
    company: "Argoid (Amagi)",
    avatar: "AD",
    linkedin: "https://www.linkedin.com/in/sandeep-vaid623/",
    text: "Sandeep is a passionate developer. He has the mind to ponder the best solution for a particular problem. When he joined Argoid, he had never worked in Angular. But the speed with which he gained expertise in Angular was awesome. Also, he improved his skills in Java and associated technologies and started managing the applications on his own. Apart from tech, he keeps the office environment cheerful and will be a great asset to any team he works with.",
    color: "#8b5cf6",
  },
  {
    id: 3,
    name: "Mangaiappan Muthu",
    role: "Engineering Manager, Data & Analytics · Exabeam",
    company: "Argoid (Amagi)",
    avatar: "MM",
    linkedin: "https://www.linkedin.com/in/sandeep-vaid623/",
    text: "Sandeep is a truly full stack developer with the great capability to learn any technology and contribute in a short time. His focus levels, hardworking attitude, ability to learn new stuff is highly appreciated by teams.",
    color: "#a855f7",
  },
  {
    id: 4,
    name: "Rangaswamy J",
    role: "SDE III · Backend Engineer · Amagi",
    company: "Argoid (Amagi)",
    avatar: "RJ",
    linkedin: "https://www.linkedin.com/in/sandeep-vaid623/",
    text: "Sandeep Vaid is an excellent full stack developer who quickly adapts to new technologies. He demonstrated this by quickly learning Angular and Java, despite having no prior experience with them. Sandeep's technical skills, attention to detail, and passion for technology make him a valuable asset to any team.",
    color: "#ec4899",
  },
];

export const stats = [
  { label: "Records Processed", value: "100M+", suffix: "" },
  { label: "Requests/Second", value: "50K", suffix: "+" },
  { label: "Search Latency Cut", value: "2.35", suffix: "s" },
  { label: "Manual Work Reduced", value: "80", suffix: "%" },
];

export const blogs = [
  {
    id: 1,
    title: "The Rise of AI Agents: Your Invisible Problem Solvers",
    excerpt: "AI agents are quietly reshaping how we interact with software — from autonomous task execution to intelligent orchestration. Here's what they are and why they matter now.",
    date: "2024",
    readTime: "5 min read",
    tags: ["AI", "Agents", "Future Tech"],
    link: "https://medium.com/@vaid77167/the-rise-of-ai-agents-your-invisible-problem-solvers-0d07eb609409",
    color: "#6366f1",
  },
  {
    id: 2,
    title: "Demystifying Generator Functions in JavaScript for Beginners",
    excerpt: "Generator functions are one of JavaScript's most underused features. This beginner-friendly breakdown explains how they work, when to use them, and why they're powerful.",
    date: "2024",
    readTime: "6 min read",
    tags: ["JavaScript", "Generators", "ES6"],
    link: "https://medium.com/@vaid77167/demystifying-generator-functions-in-javascript-for-beginners-8be3e8aeaeb7",
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "Architecture of Blockchain",
    excerpt: "A deep dive into how blockchain works under the hood — from cryptographic hashing and distributed ledgers to consensus mechanisms and real-world use cases.",
    date: "2024",
    readTime: "8 min read",
    tags: ["Blockchain", "Architecture", "Web3"],
    link: "https://medium.com/@vaid77167/architecture-of-blockchain-432634bc31b",
    color: "#a855f7",
  },
];
