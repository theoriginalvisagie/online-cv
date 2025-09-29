"use client"

import type React from "react"

import { useState } from "react"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="scroll-mt-24">
        <SectionHeading>Contact</SectionHeading>
        <Card className="border-accent/50">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Message Sent!</h3>
            <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you within 24 hours.</p>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section id="contact" className="scroll-mt-24">
      <SectionHeading>Contact</SectionHeading>
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-card-foreground">Get In Touch</CardTitle>
          <p className="text-muted-foreground">
            Interested in working together? Send a message and I'll reply within 24 hours.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" required className="focus-ring" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="focus-ring"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                className="focus-ring resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
