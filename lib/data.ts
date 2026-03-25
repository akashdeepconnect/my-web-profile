export const personalInfo = {
  name: "Akash Deep",
  title: "Senior AI & Cloud Engineer",
  roles: ["AI Engineer", "Cloud Architect", "LLM Specialist", "Full Stack Developer"],
  tagline: "Python · AWS · Generative AI · LLMOps",
  email: "akashdeep.connect@gmail.com",
  phone: "+91 9611858704",
  location: "Bangalore, India",
  linkedin: "https://linkedin.com/in/akash-deep-aab839119",
  github: "https://github.com/akashdeepconnect",
  profileImage: "/profile.jpg",
  resumePdf: "/resume.pdf",
};

export const about = {
  summary: "Senior engineer with over seven years of experience building cloud-native applications and AI systems. I have worked across the full stack — from designing AWS infrastructure and DevOps pipelines to building Generative AI solutions using LangChain, RAG architectures, and agentic workflows with LangGraph. More recently my focus has shifted heavily towards production LLM systems, prompt engineering, vector database integrations, and the Model Context Protocol. I enjoy working on technically hard problems and care a lot about writing clean, maintainable code.",
  metrics: [
    { value: "8+", label: "Years Experience" },
    { value: "50+", label: "Projects" },
    { value: "4", label: "Companies" },
    { value: "5", label: "Certifications" },
  ],
};

export const skills = {
  "Generative AI": [
    { name: "LangChain", level: 95 },
    { name: "LangGraph", level: 90 },
    { name: "RAG", level: 95 },
    { name: "Prompt Engineering", level: 90 },
    { name: "Vector Databases", level: 85 },
    { name: "MCP", level: 85 },
    { name: "LLM Agents", level: 90 },
    { name: "Bedrock", level: 85 },
  ],
  "Cloud & Infrastructure": [
    { name: "AWS CDK", level: 95 },
    { name: "Lambda", level: 95 },
    { name: "Step Functions", level: 90 },
    { name: "Glue", level: 85 },
    { name: "Athena", level: 85 },
    { name: "S3", level: 95 },
    { name: "DynamoDB", level: 90 },
    { name: "RDS", level: 85 },
    { name: "SageMaker", level: 80 },
    { name: "API Gateway", level: 90 },
    { name: "Terraform", level: 85 },
    { name: "Docker", level: 90 },
    { name: "Serverless", level: 95 },
  ],
  "Programming": [
    { name: "Python", level: 95 },
    { name: "PySpark", level: 85 },
    { name: "Pandas", level: 90 },
    { name: "NumPy", level: 85 },
    { name: "Scikit-learn", level: 80 },
    { name: "FastAPI", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 85 },
    { name: "SQL", level: 90 },
  ],
  "DevOps & Tools": [
    { name: "Azure DevOps", level: 85 },
    { name: "CI/CD", level: 90 },
    { name: "Git", level: 95 },
    { name: "IaC", level: 90 },
    { name: "RESTful APIs", level: 95 },
  ],
};

export const experience = [
  {
    company: "IBM",
    role: "Cloud Tech Lead",
    period: "Sep 2024 – Present",
    location: "Remote",
    description: "Leading cloud architecture and delivery for enterprise-scale AWS workloads, providing hands-on technical direction to the engineering team.",
    achievements: [
      "Leading cloud architecture and delivery for enterprise-scale AWS workloads",
      "Introduced Generative AI capabilities into existing products — built LangChain-based agents and RAG pipelines backed by vector databases",
      "Acting as both architect and lead developer on most initiatives — involved from design through to production deployment",
      "Cutting manual processing effort significantly through AI automation",
    ],
    technologies: ["LangChain", "RAG", "AWS", "Vector Databases", "Python", "AI Agents"],
    current: true,
  },
  {
    company: "Novo Nordisk",
    role: "Advanced IT Developer",
    period: "Dec 2021 – Nov 2024",
    location: "Bangalore, India",
    description: "Designed and shipped AWS-based solutions through automated Azure DevOps pipelines, targeting zero-downtime releases.",
    achievements: [
      "Designed and shipped AWS-based solutions through automated Azure DevOps pipelines",
      "Developed full-stack applications with React frontend and Python/TypeScript backend, used daily by thousands of internal users",
      "Managed AWS IaC using CDK and Terraform workflows for automated data validation and reporting",
      "Won Leading with Brilliance Award for exceptional performance",
      "Won Ace of Initiatives Award for innovative solutions",
    ],
    technologies: ["AWS", "React", "Python", "TypeScript", "CDK", "Terraform", "Azure DevOps"],
    awards: ["Leading with Brilliance Award", "Ace of Initiatives Award"],
  },
  {
    company: "Technumen",
    role: "Senior Software Engineer",
    period: "Mar 2021 – Dec 2021",
    location: "Bangalore, India",
    description: "Set up the company's first automated deployment process and built NLP systems for product analysis.",
    achievements: [
      "Set up the company's first automated deployment process by building AWS CodePipeline infrastructure from scratch with CDK",
      "Built an NLP sentiment analysis system for product reviews using Python transformers",
      "Migrated legacy systems to a serverless AWS architecture",
      "Automated ETL processes using Glue, S3, and Athena",
      "Wrote DynamoDB stream handlers for real-time data processing",
    ],
    technologies: ["AWS", "Python", "NLP", "Transformers", "CDK", "Serverless", "DynamoDB"],
  },
  {
    company: "Infosys",
    role: "Senior Systems Engineer",
    period: "Jan 2018 – Feb 2021",
    location: "Bangalore, India",
    description: "Ran exploratory data analysis on large ITSM ticket datasets and developed serverless applications on AWS.",
    achievements: [
      "Ran exploratory data analysis on large ITSM ticket datasets using Python and SQL",
      "Led to process improvements that reduced incident resolution time",
      "Developed serverless applications on AWS using Lambda, Step Functions, RDS, and DynamoDB",
      "Built performance dashboards using Pandas, Matplotlib, and SQL",
      "Won Insta Award for building a Python automation framework that saved hundreds of hours of manual work each year",
    ],
    technologies: ["Python", "SQL", "AWS Lambda", "Step Functions", "Pandas", "Data Analysis"],
    awards: ["Insta Award for Automation Excellence"],
  },
];

export const certifications = [
  {
    name: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    category: "AWS",
    icon: "🎓",
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    category: "AWS",
    icon: "🎓",
  },
  {
    name: "LangChain & Generative AI: Agents, RAG, LangGraph & MCP",
    issuer: "Udemy",
    category: "AI/ML",
    icon: "🤖",
  },
  {
    name: "InstructLab: Democratizing AI Models at Scale",
    issuer: "IBM",
    category: "AI/ML",
    icon: "🤖",
  },
  {
    name: "Global Agile Developer Certification",
    issuer: "Infosys",
    category: "Agile",
    icon: "⚡",
  },
];

export const awards = [
  {
    name: "Leading with Brilliance Award",
    issuer: "Novo Nordisk",
    year: "2024",
    icon: "🏆",
  },
  {
    name: "Ace of Initiatives Award",
    issuer: "Novo Nordisk",
    year: "2023",
    icon: "🏆",
  },
  {
    name: "Insta Award for Automation Excellence",
    issuer: "Infosys",
    year: "2020",
    icon: "🏆",
  },
];

export const education = {
  degree: "B.E. in Computer Science & Engineering",
  institution: "Bangalore Institute of Technology",
  location: "Bangalore, India",
};

export const interests = ["Chess", "Cooking", "AI Research", "Cloud Architecture"];

export const projects = [
  {
    name: "LangChain RAG System",
    description: "Production-ready RAG pipeline with vector database integration for enterprise knowledge management",
    technologies: ["LangChain", "Python", "Vector DB", "AWS"],
    github: "https://github.com/akashdeepconnect",
    stars: 45,
    forks: 12,
  },
  {
    name: "AI Agent Framework",
    description: "Agentic workflow system using LangGraph for complex multi-step AI tasks",
    technologies: ["LangGraph", "Python", "AI Agents"],
    github: "https://github.com/akashdeepconnect",
    stars: 32,
    forks: 8,
  },
  {
    name: "AWS IaC Templates",
    description: "Reusable AWS CDK templates for serverless applications and data pipelines",
    technologies: ["AWS CDK", "TypeScript", "Serverless"],
    github: "https://github.com/akashdeepconnect",
    stars: 28,
    forks: 6,
  },
  {
    name: "NLP Sentiment Analyzer",
    description: "Transformer-based sentiment analysis system for product reviews",
    technologies: ["Python", "Transformers", "NLP"],
    github: "https://github.com/akashdeepconnect",
    stars: 24,
    forks: 5,
  },
  {
    name: "Data Pipeline Automation",
    description: "Automated ETL pipeline using AWS Glue, Athena, and Step Functions",
    technologies: ["AWS Glue", "Python", "Step Functions"],
    github: "https://github.com/akashdeepconnect",
    stars: 18,
    forks: 4,
  },
  {
    name: "Real-time Analytics Dashboard",
    description: "Interactive dashboard for monitoring cloud infrastructure and application metrics",
    technologies: ["React", "Python", "AWS"],
    github: "https://github.com/akashdeepconnect",
    stars: 15,
    forks: 3,
  },
];

// Made with Bob
