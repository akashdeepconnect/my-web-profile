# Implementation Guide - Akash Deep's Web Profile

## 🚀 Quick Start Commands

```bash
# Initialize Next.js project with TypeScript
npx create-next-app@latest my-web-profile --typescript --tailwind --app --no-src-dir

# Navigate to project
cd my-web-profile

# Install additional dependencies
npm install framer-motion lucide-react react-icons
npm install -D @types/node

# Run development server
npm run dev
```

## 📦 Dependencies

### Core
- `next`: ^14.0.0
- `react`: ^18.0.0
- `react-dom`: ^18.0.0
- `typescript`: ^5.0.0

### Styling & UI
- `tailwindcss`: ^3.4.0
- `autoprefixer`: ^10.4.0
- `postcss`: ^8.4.0

### Animation & Interaction
- `framer-motion`: ^11.0.0
- `lucide-react`: ^0.300.0
- `react-icons`: ^5.0.0

## 🗂️ File Structure

```
my-web-profile/
├── app/
│   ├── layout.tsx              # Root layout with theme provider
│   ├── page.tsx                # Main page with all sections
│   ├── globals.css             # Global styles and Tailwind
│   └── favicon.ico
├── components/
│   ├── Hero.tsx                # Hero section with profile & CTA
│   ├── About.tsx               # About section with metrics
│   ├── Skills.tsx              # Skills grid with categories
│   ├── Experience.tsx          # Timeline with company cards
│   ├── Projects.tsx            # GitHub projects showcase
│   ├── Certifications.tsx      # Certifications & awards
│   ├── Contact.tsx             # Contact info & social links
│   ├── Navigation.tsx          # Sticky navigation bar
│   ├── ThemeToggle.tsx         # Dark/light mode toggle
│   ├── ParticleBackground.tsx  # Animated particles
│   └── ui/
│       ├── Button.tsx          # Reusable button component
│       ├── Card.tsx            # Reusable card component
│       ├── Badge.tsx           # Badge for skills/certs
│       └── Timeline.tsx        # Timeline component
├── lib/
│   ├── data.ts                 # All content data
│   ├── utils.ts                # Utility functions
│   └── constants.ts            # Constants and config
├── public/
│   ├── profile.jpg             # Optimized profile picture
│   ├── resume.pdf              # Resume PDF
│   └── icons/                  # Tech stack icons
├── types/
│   └── index.ts                # TypeScript type definitions
└── hooks/
    ├── useTheme.ts             # Theme management hook
    └── useScrollSpy.ts         # Active section detection
```

## 🎨 Component Breakdown

### 1. Hero Section (`components/Hero.tsx`)

**Features:**
- Animated profile picture with gradient border
- Typing animation for roles: "AI Engineer" → "Cloud Architect" → "LLM Specialist"
- Particle background effect
- CTA buttons with hover effects
- Smooth scroll indicator

**Key Elements:**
```typescript
- Profile image with scale animation on load
- Text typing effect using Framer Motion
- Gradient animated border
- Floating particles (canvas or CSS)
- Download Resume button
- Contact Me button
- Social links (LinkedIn, GitHub)
```

### 2. About Section (`components/About.tsx`)

**Features:**
- Professional summary
- Animated counter for metrics
- Skill tags cloud

**Metrics to Display:**
- 7+ Years Experience
- 4 Companies
- 50+ Projects
- 5 AWS Certifications

### 3. Skills Section (`components/Skills.tsx`)

**Categories:**

1. **Generative AI** (Primary focus)
   - LangChain, LangGraph, RAG
   - Vector Databases, MCP
   - LLM Agents, Bedrock
   - Prompt Engineering

2. **Cloud & Infrastructure**
   - AWS (CDK, Lambda, Step Functions, Glue, Athena, S3, DynamoDB, RDS, SageMaker, API Gateway)
   - Terraform, Docker, Serverless
   - Azure DevOps CI/CD

3. **Programming**
   - Python (PySpark, Pandas, NumPy, Scikit-learn, FastAPI)
   - TypeScript, React
   - SQL, Git

**Interaction:**
- Cards flip on hover showing proficiency level
- Filter by category
- Animated progress bars
- Icon + name + experience level

### 4. Experience Timeline (`components/Experience.tsx`)

**Companies (Reverse chronological):**

1. **IBM** - Cloud Tech Lead (Sep 2024 - Present)
   - Leading cloud architecture for enterprise AWS workloads
   - Built LangChain-based agents and RAG pipelines
   - Architect and lead developer role

2. **Novo Nordisk** - Advanced IT Developer (Dec 2021 - Nov 2024)
   - AWS solutions with Azure DevOps automation
   - Full-stack React/Python/TypeScript applications
   - AWS IaC using CDK and Terraform

3. **Technumen** - Senior Software Engineer (Mar 2021 - Dec 2021)
   - Built AWS CodePipeline infrastructure
   - NLP sentiment analysis system
   - Serverless AWS migration

4. **Infosys** - Senior Systems Engineer (Jan 2018 - Feb 2021)
   - Data analysis on ITSM datasets
   - Serverless AWS applications
   - Won Insta Award for automation

**Features:**
- Vertical timeline with connecting line
- Company logo/icon
- Expandable cards
- Achievement tags
- Duration badges
- Smooth expand/collapse animation

### 5. Projects Section (`components/Projects.tsx`)

**GitHub Integration:**
- Fetch repositories from github.com/akashdeepconnect
- Display top 6 projects
- Show: name, description, stars, forks, language
- Link to GitHub repo
- Tech stack badges

**Featured Projects:**
- AI/ML projects
- Cloud infrastructure projects
- Full-stack applications

### 6. Certifications (`components/Certifications.tsx`)

**Layout:**
- Grid of certification badges
- Hover to show details
- Category filters: AWS, AI/ML, Agile, Awards

**Certifications:**
- AWS Certified Machine Learning – Specialty
- AWS Certified Developer – Associate
- LangChain & Generative AI: Agents, RAG, LangGraph & MCP
- InstructLab: Democratizing AI Models at Scale
- Global Agile Developer Certification

**Awards:**
- Novo Nordisk – Leading with Brilliance Award
- Novo Nordisk – Ace of Initiatives Award
- Infosys Insta Award for Automation Excellence

### 7. Contact Section (`components/Contact.tsx`)

**Information:**
- Email: akashdeep.connect@gmail.com (with copy button)
- Phone: +91 9611858704 (click to call)
- Location: Bangalore, India
- LinkedIn: linkedin.com/in/akash-deep-aab839119
- GitHub: github.com/akashdeepconnect

**Features:**
- Social icons with hover effects
- Copy email to clipboard
- Download resume button
- Contact form (optional)

### 8. Navigation (`components/Navigation.tsx`)

**Features:**
- Sticky header with blur background
- Smooth scroll to sections
- Active section highlighting
- Theme toggle button
- Mobile hamburger menu

**Sections:**
- Home
- About
- Skills
- Experience
- Projects
- Certifications
- Contact

## 🎬 Animation Implementation

### Framer Motion Variants

```typescript
// Fade in from bottom
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

// Stagger children
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Scale on hover
const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}
```

### Scroll Animations

Use `framer-motion`'s `useInView` hook:
```typescript
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: "-100px" })
```

## 🎨 Tailwind Configuration

### Custom Colors
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  secondary: {
    500: '#8b5cf6',
    600: '#7c3aed',
  }
}
```

### Custom Animations
```javascript
animation: {
  'gradient': 'gradient 8s linear infinite',
  'float': 'float 6s ease-in-out infinite',
  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Performance Checklist

- [ ] Use Next.js Image component for all images
- [ ] Lazy load below-fold components
- [ ] Minimize bundle size with dynamic imports
- [ ] Optimize fonts with next/font
- [ ] Add loading skeletons
- [ ] Implement proper caching headers
- [ ] Compress images (WebP format)
- [ ] Use CSS containment for animations

## 🔍 SEO Implementation

```typescript
// app/layout.tsx metadata
export const metadata = {
  title: 'Akash Deep - Senior AI & Cloud Engineer',
  description: 'Senior AI & Cloud Engineer specializing in Generative AI, LangChain, AWS, and Full-Stack Development',
  keywords: ['AI Engineer', 'Cloud Engineer', 'LangChain', 'AWS', 'Python', 'Next.js'],
  authors: [{ name: 'Akash Deep' }],
  openGraph: {
    title: 'Akash Deep - Senior AI & Cloud Engineer',
    description: 'Portfolio of Akash Deep - AI & Cloud Engineering Expert',
    images: ['/profile.jpg'],
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Environment Variables
```env
NEXT_PUBLIC_GITHUB_USERNAME=akashdeepconnect
NEXT_PUBLIC_EMAIL=akashdeep.connect@gmail.com
```

## ✅ Testing Checklist

- [ ] All sections render correctly
- [ ] Animations are smooth (60fps)
- [ ] Theme toggle works
- [ ] Mobile responsive
- [ ] Links work correctly
- [ ] Resume downloads
- [ ] Email copy works
- [ ] Lighthouse score > 90
- [ ] Accessibility audit passes
- [ ] Cross-browser testing (Chrome, Firefox, Safari)

## 🎨 Design Tokens

### Typography
- Headings: Space Grotesk (bold, modern)
- Body: Inter (clean, readable)

### Spacing Scale
- xs: 0.5rem (8px)
- sm: 0.75rem (12px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 3rem (48px)

### Border Radius
- sm: 0.375rem
- md: 0.5rem
- lg: 0.75rem
- xl: 1rem
- full: 9999px

---

This implementation guide provides all the technical details needed to build your eye-catching web profile. The focus is on creating a modern, performant, and engaging portfolio that showcases your AI & Cloud expertise effectively.