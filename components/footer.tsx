import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/theoriginalvisagie",
    icon: Github,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/christiaanvisagie",
    icon: Linkedin,
  },
  {
    label: "X",
    url: "https://x.com/theoriginalvisagie",
    icon: Twitter,
  },
  {
    label: "Email",
    url: "mailto:hello@christiaanvisagie.co.za",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 no-print">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">Available for consulting and contract work.</p>
            <p className="text-sm text-muted-foreground mt-1">© 2025 Christiaan Visagie. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Button key={link.label} variant="ghost" size="sm" asChild className="focus-ring">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
