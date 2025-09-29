import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillGroups = [
  {
    label: "Backend",
    items: ["Laravel", "PHP 8", "MySQL/MariaDB", "REST", "Queues/Jobs", "Testing (Pest/Dusk)"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind", "MUI", "Vite/CRA", "Accessibility"],
  },
  {
    label: "DevOps",
    items: ["Docker", "Traefik", "Cloudflare", "GitHub Actions", "Nginx", "CI/CD"],
  },
  {
    label: "Practices",
    items: ["Clean Architecture", "SOLID", "Modular Monoliths", "TDD", "E2E Testing"],
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
