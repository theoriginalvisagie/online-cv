import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillGroups = [
  {
    label: "Backend",
    items: ["Laravel", "PHP", "MySQL/MariaDB", "SQLLite", "PostGress", "REST APIs", "Queues/Jobs", "Testing (PHPUnit)"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind", "MUI", "Vite/CRA", "React Native", "Livewire"],
  },
  {
    label: "DevOps & Security",
    items: ["Docker", "Traefik", "Cloudflare", "GitHub Actions", "Nginx", "CI/CD Pipelines", "Server Architecture & Hardening", "Compliance (ISO, GDPR, POPIA)"],
  },
  {
    label: "Architecture & Practices",
    items: ["Clean Architecture", "SOLID Principles", "Modular Monoliths", "TDD", "E2E Testing", "Multi-Environment Infrastructure"],
  },
  {
    label: "Leadership & Communication",
    items: ["Team Leadership", "Mentoring & Code Reviews", "Project Management", "Business-Tech Translation", "Requirements Gathering & BRS Writing", "Consulting"],
  },
  {
    label: "Domain Expertise",
    items: ["Insurance Systems", "Aviation Management", "Laboratory Information Management (LIMS)", "Financial Services & Payments", "Hospitality Booking", "E-commerce"],
  },
  {
    label: "Soft Skills",
    items: ["Problem Solving", "Adaptability", "Critical Thinking", "Time Management", "Client Communication", "Cross-Functional Collaboration"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <Card key={group.label} className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg text-card-foreground">{group.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
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
