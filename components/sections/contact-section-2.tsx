"use client"

import { useEffect, useState } from "react"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"

declare global {
  interface Window {
    grecaptcha?: any
  }
}

export function ContactSection() {
  const [loaded, setLoaded] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // console.log("siteKey", process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)

    if (document.querySelector('script[data-recaptcha="true"]')) {
      setLoaded(true)
      return
    }
    const s = document.createElement("script")
    s.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
    s.async = true
    s.defer = true
    s.dataset.recaptcha = "true"
    s.onload = () => setLoaded(true)
    document.head.appendChild(s)
  }, [])

  const handleVerify = async () => {
    if (!window.grecaptcha) return
    setError(null)
    setVerifying(true)

    window.grecaptcha.ready(async () => {
      const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
        action: "reveal_contact",
      })

      const res = await fetch("/api/recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, action: "reveal_contact" }),
      })
      const data = await res.json()

      if (res.ok && data.ok) {
        setRevealed(true)
      } else {
        setError("Verification failed. Please try again.")
      }

      setVerifying(false)
    })
  }

  // Keep email encoded until verified
  const encodedEmail = "aGVsbG9AY2hyaXN0aWFhbnZpc2FnaWUuY28uemE="
  const email = revealed ? atob(encodedEmail) : ""

  return (
    <section id="contact" className="scroll-mt-24">
      <SectionHeading>Contact</SectionHeading>
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-card-foreground">Get In Touch</CardTitle>
          <p className="text-muted-foreground">
            Solve a quick verification to reveal my contact details.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {!revealed ? (
            <>
              <Button
                type="button"
                className="w-full md:w-auto"
                disabled={!loaded || verifying}
                onClick={handleVerify}
              >
                {verifying ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Reveal contact details
                  </>
                )}
              </Button>
              {error && <p className="text-sm text-red-500">{error}</p>}
            </>
          ) : (
            <div>
              <p className="text-muted-foreground text-sm mb-1">Email</p>
              <a href={`mailto:${email}`} className="text-primary hover:underline break-all">
                {email}
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
