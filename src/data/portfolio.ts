export const personalInfo = {
  name: "Sandeep Vaid",
  title: "Software Engineer II",
  tagline: "Building scalable systems that power the future",
  email: "vaid77167@gmail.com",
  phone: "+917006549295",
  github: "https://github.com/sandeepvaid",
  linkedin: "https://www.linkedin.com/in/sandeep-vaid623/",
  leetcode: "https://leetcode.com/u/sandeep623/",
  location: "India",
  about: `I'm a Software Engineer specializing in scalable backend systems, cloud-native infrastructure, agentic AI, and full-stack platforms. From architecting fault-tolerant ETL pipelines that ingest 100M+ records daily to building RAG retrieval services and high-throughput event processors — I turn complex engineering challenges into elegant, production-grade solutions.`,
  aboutPoints: [
    "Architected a fault-tolerant ETL pipeline ingesting 100M+ records daily across 13+ states with 99.9% consistency",
    "Built RAG retrieval and agentic AI platforms with LangGraph, PGVector, and LLM APIs",
    "Engineered cloud-native systems across AWS Lambda, ECS, EKS, Snowflake, and Redshift",
    "Full-stack & mobile expertise across React, Next.js, Node.js, React Native, and PostgreSQL",
  ],
};

export const experiences = [
  {
    id: 1,
    role: "Software Engineer II",
    company: "ConveGenius",
    duration: "June 2024 – Present",
    location: "India",
    color: "#6366f1",
    highlights: [
      "Architected and scaled a full-fledged EdTech MIS platform across 13+ states — covering data cleaning, quality monitoring, leave management, service management, and user onboarding",
      "Architected a fault-tolerant ETL pipeline ingesting 100M+ records daily across 13+ states from UDISE+ APIs with parallel batch extraction and transactional PostgreSQL staging, achieving 99.9% consistency",
      "Built state-level data warehouses resolving legacy data-quality issues and creating trusted government data assets for fund-allocation decisions — making the MIS a key revenue-generating product",
      "Built a shared RAG retrieval service for 5+ internal apps with PII redaction and tenant-scoped access, plus an eval platform comparing chunking, embedding models, top-k, and rerankers",
      "Designed an audit-trail SDK adopted by 10+ services with batched async flushes, backoff retries, and a durable dead-letter queue; streamed events via Firehose to S3, Redshift, and Snowflake",
      "Built a config-driven scheduler for 10 cron jobs across PostgreSQL and S3 with an audit ledger; enforced GDPR and tiered retention via S3/Snowflake, cutting storage costs by 85%",
      "Operated 10+ AWS accounts with environment isolation — matching Lambda to short event-triggered workloads and ECS/EKS to long-running jobs, cutting compute spend",
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Snowflake", "Redshift", "Airflow", "AWS Lambda", "ECS", "RAG", "LangGraph"],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Travel Corporation of India (TCI)",
    duration: "May 2023 – June 2024",
    location: "Gurugram, India",
    color: "#8b5cf6",
    highlights: [
      "Architected and delivered a Guide Management Platform spanning web, backend microservices, and React Native apps — with onboarding, service management, leave, assignment, location tracking, and feedback; published on the Google Play Store and Apple App Store",
      "Built a scalable, highly customizable itinerary-generation web app with multilingual support and reusable themes — cutting travel-agent itinerary creation time by 98% and contributing to a 35% reduction in overall company costs",
      "Built the client-facing Offering Platform end-to-end, generating the reports business teams use to finalize client deals — the platform has generated reports worth INR 1 Billion+ per annum",
      "Led the re-development of the Booking Platform, re-architecting the complex booking-status calculation and management microservice",
      "Integrated AWS Cognito OAuth with custom Lambda authentication; engineered advanced search and filtering across date, type, language, location, and booking status — cutting search time by 2.35s",
    ],
    tech: ["React", "React Native", "Redux", "Redux-Saga", "AWS Cognito", "Lambda", "Node.js"],
  },
  {
    id: 3,
    role: "Software Development Engineer",
    company: "Argoid (Acquired by Amagi)",
    duration: "July 2022 – May 2023",
    location: "India",
    color: "#a855f7",
    highlights: [
      "Built a centralized admin console integrating microservices, Airflow DAGs, scheduled ETL pipelines, and CloudWatch monitoring — automating client onboarding, billing, subscriptions, and revenue calculations behind RBAC",
      "Integrated Google Tag Manager with a custom single-threaded event-processing microservice on AWS EC2, validating and transforming 2M+ events/second for analytics and recommendations",
      "Built a browser-based, VS Code-like editor for Shopify Liquid with multi-file editing, autosave, session management, and codebase search",
      "Built an image-to-text OCR pipeline powering AI product recommendations",
    ],
    tech: ["Angular", "Node.js", "AWS EC2", "Airflow", "Shopify", "Google Tag Manager", "JavaScript"],
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
    title: "Agentic AI Lab — RAG & Agents",
    description:
      "RAG pipelines (chunking, embeddings, vector retrieval) built as multi-step LangGraph flows with conditional routing and tool nodes — plus PGVector semantic search and SQL/calculator tool-calling agents.",
    tech: ["Node.js", "TypeScript", "LangGraph", "PGVector", "OpenAI", "Claude"],
    github: "https://github.com/sandeepvaid/learning-agentic-ai",
    live: null,
    color: "#ec4899",
    emoji: "🤖",
  },
  {
    id: 5,
    title: "Event Server — 2M+ events/s",
    description:
      "A single-threaded event-processing microservice on AWS EC2 with schema validation, validating and transforming 2M+ events per second for real-time analytics and recommendations at scale.",
    tech: ["Node.js", "AWS EC2", "Google Tag Manager", "JavaScript"],
    github: null,
    live: null,
    color: "#facc15",
    emoji: "🚀",
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java"],
  frameworks: ["React", "Next.js", "Node.js", "Express.js", "Angular", "React Native", "Vue", "Django", "Spring Boot"],
  databases: ["PostgreSQL", "PGVector", "MongoDB", "Redis", "DynamoDB", "Snowflake", "Redshift"],
  cloud: ["AWS Lambda", "EC2", "ECS", "EKS", "S3", "SQS", "Kafka", "Airflow", "CloudWatch"],
  ai: ["RAG", "AI Agents", "Tool Calling", "LangGraph", "MCP", "LLM APIs", "Embeddings", "Cursor"],
  tools: ["Git", "Docker", "CI/CD", "Google Tag Manager", "Shopify"],
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
  { label: "Records / Day", value: "100M+", suffix: "" },
  { label: "Events / Second", value: "2M", suffix: "+" },
  { label: "States Served", value: "13", suffix: "+" },
  { label: "Storage Cost Cut", value: "85", suffix: "%" },
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
