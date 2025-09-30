import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    role: "Software Engineering Consultant",
    company: "Visagie & Co",
    location: "Johannesburg, ZA",
    date: "April 2025 — Present",
    bullets: [
      "<strong>Bridged business and tech teams</strong> by ensuring requirements were captured in signed Business Requirement Specs (BRS) and formal change requests before development began, cutting costly back-and-forth and reducing time-to-market.",
      "<strong>Designed and managed secure multi-environment server stacks</strong> (dev, staging, prod) using Docker, Traefik, and environment-based secret management.",
      "<strong>Hardened infrastructure security</strong> with SSL, reverse proxies, port lockdowns, Cloudflare integration, and active intrusion prevention tools like Fail2Ban.",
      "<strong>Automated builds and deployments</strong> with GitHub Actions, streamlining CI/CD workflows and enabling faster, more reliable releases.",
      "<strong>Optimized Laravel applications with caching strategies</strong>, resulting in faster web app performance and improved scalability.",
      "<strong>Led and mentored developers</strong>, introducing coding standards and documentation practices that improved team alignment and delivery quality."
    ],
    tech: [
      "Laravel",
      "Next.js",
      "MySQL/MariaDB",
      "Docker",
      "Traefik",
      "Cloudflare",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Server Hardening",
      "Multi-Environment Architecture",
    ]
  },
  {
    role: "Full-stack Engineer (Contract|Project Specific)",
    company: "PPM",
    location: "Remote",
    date: "April 2025 — July 2025",
    bullets: [
      "<strong>Implemented UK-compliant payment flows</strong> by integrating with <em>NuaPay</em> for direct debits, recurring payments, and secure money collection.",
      "<strong>Developed financial services features</strong> on the Laravel backend, aligning with strict banking regulations and ensuring data integrity.",
      "<strong>Enhanced the public-facing React application</strong> with performance optimizations and UX improvements for customers interacting with payment systems.",
      "<strong>Collaborated across business and technical teams</strong> to capture financial requirements and deliver accurate, production-ready solutions under tight deadlines."
    ],
    tech: [
      "Laravel",
      "React",
      "Tailwind",
      "NuaPay",
      "Direct Debit APIs",
      "Secure Payment Workflows"
    ]
  },
  {
    role: "Senior Full-stack Engineer (Contract|Project Specific)",
    company: "WWAS",
    location: "On Site",
    date: "April 2024 — March 2025",
    bullets: [
      "<strong>Led a cross-country development team</strong> of 7 engineers and QA testers, driving delivery of core features for an <em>Automated Insurance Management System (AIMS)</em>.",
      "<strong>Delivered end-to-end insurance workflows</strong> covering policy setup, premium payments, claims submission, and back-office administration.",
      "<strong>Implemented multi-tenant architecture</strong> and <em>role-based access control</em> using Laravel Sanctum to ensure data isolation and secure user management.",
      "<strong>Collaborated with stakeholders</strong> across business and technical teams to translate insurance requirements into accurate, production-ready software.",
      "<strong>Improved system reliability and performance</strong> through Redis caching, frontend optimizations, and process refinements."
    ],
    tech: [
      "Laravel",
      "Bootstrap",
      "Redis",
      "Laravel Sanctum",
      "Multi-tenant Architecture",
      "Insurance Domain Workflows",
      "GitHub Actions",
      "CI/CD Pipelines",
    ]
  },
  {
    role: "Head Of Software Engineering",
    company: "Labmin",
    location: "Hybrid",
    date: "February 2023 — March 2024",
    bullets: [
      "<strong>Led a 10-person engineering team</strong> including developers, QA, and a project manager; established coding standards, ran code reviews, and drove delivery excellence.",
      "<strong>Architected secure, scalable infrastructure and systems</strong> for laboratory information management platforms, ensuring long-term maintainability and security compliance.",
      "<strong>Directed development of Human Genetics LIMS, Veterinary Genetics LIMS, and an ISO-compliant Quality Assurance System</strong>, reducing client costs and accelerating time-to-market.",
      "<strong>Worked directly with laboratory stakeholders</strong>, traveling on-site to capture requirements, align business needs with software design, and ensure regulatory compliance (ISO, GDPR, POPIA).",
      "<strong>Championed security-first engineering</strong>, embedding data protection and compliance into every stage of system design and delivery."
    ],
    tech: [
      "Custom PHP Framework",
      "Bootstrap",
      "MySQL",
      "Docker",
      "Role-based Access Control",
      "ISO/GDPR/POPIA Compliance",
      "Hardware Integrations (Scales, Barcode Scanners)"
    ]
  },
  {
    role: "Full-stack Engineer",
    company: "Labmin",
    location: "On Site",
    date: "September 2020 — January 2023",
    bullets: [
      "<strong>Developed core modules</strong> for laboratory information management software (LIMS), integrating with lab hardware such as barcode scanners, scales, and other testing devices.",
      "<strong>Built a custom PHP framework with Bootstrap</strong> to support role-based access, notification systems, and modular extensions.",
      "<strong>Implemented secure workflows</strong> to ensure ISO, GDPR, and POPIA compliance across sensitive lab data and processes.",
      "<strong>Collaborated within a cross-functional team</strong> to design, test, and deploy LIMS features supporting human and veterinary genetics labs.",
      "<strong>Contributed to client success</strong> by tailoring software directly to laboratory workflows, ensuring smooth adoption and operational efficiency."
    ],
    tech: [
      "Custom PHP Framework",
      "Bootstrap",
      "MySQL",
      "JavaScript",
      "Role-based Access Control",
      "Notifications System",
      "Hardware Integrations (Barcode, Scales)",
      "ISO/GDPR/POPIA Compliance"
    ]
  },
  {
    role: "Full-stack Engineer (Freelance)",
    company: "Freelance",
    location: "Remote",
    date: "January 2019 — current",
    bullets: [
      "<strong>Delivered custom software solutions</strong> including e-commerce platforms, booking systems, business dashboards, and corporate websites for a range of clients.",
      "<strong>Specialized in backend engineering</strong> with Laravel and <em>a self-developed MVC PHP framework</em>, providing tailored architectures and secure data workflows.",
      "<strong>Implemented full-stack features</strong> from user authentication to payment integrations, ensuring GDPR/POPIA compliance across projects.",
      "<strong>Managed infrastructure and deployments</strong> on VPS and shared hosting, handling SSL, environment configs, and server hardening.",
      "<strong>Worked directly with clients</strong> to gather requirements, scope projects, and deliver production-ready systems while minimizing costs and delivery times."
    ],
    tech: [
      "Laravel",
      "Custom MVC PHP Framework",
      "Vanilla PHP",
      "MySQL",
      "React/React Native",
      "NextJs",
      "Tailwind",
      "REST APIs",
      "E-commerce Integrations",
      "VPS / Shared Hosting",
      "SSL / Security Best Practices"
    ]
  },
  {
    role: "Various Roles (Pre-Tech Career)",
    company: "Various",
    location: "Remote / On Site",
    date: "2012 — 2017",
    bullets: [
      "<strong>Gained cross-industry experience</strong> across multiple roles prior to transitioning into software engineering.",
      "<strong>Developed strong business communication skills</strong> through direct client interaction, stakeholder engagement, and cross-department collaboration.",
      "<strong>Built a foundation in leadership and process improvement</strong>, contributing to team efficiency and goal alignment.",
      "<strong>Acquired problem-solving and adaptability skills</strong> by working in diverse environments and managing varied responsibilities.",
      "<strong>Leveraged business insights</strong> that later enabled effective translation between technical and non-technical teams."
    ],
    tech: []
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-border/50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground">{exp.role}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <div className="text-sm text-muted-foreground font-mono">{exp.date}</div>
              </div>

              <ul className="space-y-2 mb-4 px-5">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <ul className="list-disc">
                    <li className="text-muted-foreground px-3">
                      <span dangerouslySetInnerHTML={{ __html: bullet}}/>
                    </li>
                  </ul>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
