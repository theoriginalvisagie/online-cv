import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Glasses } from "lucide-react"

const projects = [
  {
    title: "The Marloth",
    subtitle: "Hospitality booking platform",
    description: "A SaaS platform for small resorts and villages to manage reservations. Includes role-based dashboards, secure booking flows, PayFast payments, and containerized multi-environment infrastructure.",
    links: [
      { 
        label: "Private", 
        url: "",
        icon: Glasses 
      },
    ],
    tech: ["Laravel", "MySQL", "Docker", "Redis", "GitHub Actions", "Traefik", "VPS"],
  },
  {
    title: "TimeSheets",
    subtitle: "Time & project management software",
    description: "Built a web application for time tracking, project scheduling, and reporting. Features include user roles, automated reporting, and secure multi-tenant architecture.",
    links: [
      { 
        label: "Private", 
        url: "",
        icon: Glasses 
      },
    ],
    tech: ["Laravel", "Tailwind", "MySQL", "Docker", "Traefik", "VPS"],
  },
  {
    title: "Immortal Ledger",
    subtitle: "Quoting & invoicing system",
    description: "Developed a financial management tool with quoting, invoicing, and payment tracking. Includes PDF generation, client portals, and custom tax logic.",
    links: [
      { 
        label: "Private", 
        url: "",
        icon: Glasses 
      },
    ],
    tech: ["Vanilla PHP", "MySQL", "Bootstrap", "Docker", "Traefik", "VPS"],
  },
  {
    title: "Lilies and Lace",
    subtitle: "Cake studio website",
    description: "Designed and developed a brand website for a boutique cake business, with custom quote request flows, responsive design, and SEO optimization.",
    links: [
      { label: "Live", url: "https://liliesandlacecakes.co.za/", icon: ExternalLink },
    ],
    tech: ["Next.js", "Tailwind", "SEO", "Laravel", "Docker", "Traefik", "VPS"],
  },
  {
    title: "AMS",
    subtitle: "Aviation management system",
    description: "Contributed to a platform supporting aviation operations, including scheduling, pilot logs, and compliance workflows. Focused on secure role-based features and integrations.",
    links: [
      { 
        label: "Private", 
        url: "",
        icon: Glasses 
      },
    ],
    tech: ["Laravel", "MySQL", "NextJs", "Redis", "Docker", "Traefik", "VPS"],
  },
  {
    title: "The Ice-Kream Collective",
    subtitle: "Shopify e-commerce store",
    description: "E-commerce brand specializing in handmade skincare. Delivered a Shopify storefront with SEO-optimized content, custom imagery pipelines, and marketing automation.",
    links: [
      { label: "Live", url: "https://ice-kream.com", icon: ExternalLink },
    ],
    tech: ["Shopify", "Liquid", "SEO", "Custom Design"],
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
