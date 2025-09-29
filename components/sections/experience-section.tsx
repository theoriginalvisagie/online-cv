import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    role: "Founder & Lead Engineer",
    company: "Visagie & Co",
    location: "Johannesburg, ZA",
    date: "2023 — Present",
    bullets: [
      "Bridged communication between business & tech to cut time-to-release by 30%+.",
      "Built Laravel + Next.js apps with modular architecture and automated testing.",
      "Containerized stacks with Docker, Traefik reverse proxy, Cloudflare.",
    ],
    tech: ["Laravel", "Next.js", "MySQL", "Docker", "Traefik", "GitHub Actions"],
  },
  {
    role: "Full-stack Engineer (Contract)",
    company: "Semstudio",
    location: "Remote",
    date: "2022 — 2023",
    bullets: [
      "Shipped multi-tenant features and role-based auth with Laravel Sanctum.",
      "Improved frontend performance and Lighthouse scores to 90+.",
    ],
    tech: ["Laravel", "React", "Tailwind", "Redis"],
  },
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

              <ul className="space-y-2 mb-4">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-muted-foreground flex items-start">
                    <span className="text-accent mr-2 mt-2">•</span>
                    <span>{bullet}</span>
                  </li>
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
