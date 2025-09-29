import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "The Marloth",
    subtitle: "SaaS booking platform for small resorts/villages",
    description:
      "Full Laravel stack with role-based dashboards, PayFast payments, CI/CD, and containerized infra on VPS.",
    links: [
      { label: "Live", url: "https://themarloth.example.com", icon: ExternalLink },
      { label: "GitHub", url: "https://github.com/your/repo", icon: Github },
    ],
    tech: ["Laravel", "MySQL", "Docker", "Redis", "GitHub Actions"],
  },
  {
    title: "Ice-Kream Collective",
    subtitle: "E-commerce brand & site",
    description: "Custom quoting flow, SEO-optimized pages, and image pipelines with Next.js and Tailwind.",
    links: [
      { label: "Live", url: "https://ice-kream.com", icon: ExternalLink },
      { label: "GitHub", url: "https://github.com/your/repo", icon: Github },
    ],
    tech: ["Next.js", "Tailwind", "Cloudflare", "Traefik"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="border-border/50 hover:border-accent/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground">{project.title}</CardTitle>
              <p className="text-accent font-medium">{project.subtitle}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                {project.links.map((link) => {
                  const Icon = link.icon
                  return (
                    <Button key={link.label} variant="outline" size="sm" asChild className="focus-ring bg-transparent">
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <Icon className="w-4 h-4 mr-2" />
                        {link.label}
                      </a>
                    </Button>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
