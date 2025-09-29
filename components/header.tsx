"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail } from "lucide-react"

export function Header() {
  const handleDownloadCV = () => {
    console.log("Downloading CV...")
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Hi, I'm <span className="text-accent">Christiaan Visagie</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">Software Engineer • Builder • Problem-Solver</p>
              <p className="text-lg text-muted-foreground text-pretty">
                Full-stack Engineer focused on Laravel, Next.js, Docker & DevOps.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleDownloadCV} size="lg" className="w-fit">
                <Download className="w-4 h-4 mr-2" />
                Download CV (PDF)
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact} className="w-fit bg-transparent">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <div className="w-48 h-48 rounded-xl bg-muted flex items-center justify-center">
                    <span className="text-4xl font-bold text-muted-foreground">CV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 no-print">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToAbout}
            className="animate-bounce hover:animate-none transition-all duration-200"
          >
            <ArrowDown className="w-5 h-5" />
            <span className="sr-only">Scroll to content</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
