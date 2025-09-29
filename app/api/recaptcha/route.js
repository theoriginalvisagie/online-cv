export async function POST(request) {
  try {
    const { token, action } = await request.json()
    if (!token) {
      return new Response(JSON.stringify({ ok: false, error: "missing-token" }), { status: 400 })
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY
    const params = new URLSearchParams()
    params.append("secret", secret)
    params.append("response", token)

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      cache: "no-store",
    })
    const data = await res.json()

    // Check success, action, and score
    const success = data?.success === true
    const scoreOk = typeof data?.score === "number" ? data.score >= 0.5 : false
    const actionOk = data?.action === action

    if (success && scoreOk && actionOk) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 })
    }

    return new Response(
      JSON.stringify({ ok: false, error: "verification-failed", details: data }),
      { status: 400 }
    )
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: "server-error" }), { status: 500 })
  }
}
