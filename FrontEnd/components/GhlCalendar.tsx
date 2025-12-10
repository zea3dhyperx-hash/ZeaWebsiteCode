"use client"

import React from "react"

export default function GhlCalendar() {
  React.useEffect(() => {
    const id = "ghl-form-embed"
    if (document.getElementById(id)) return
    const s = document.createElement("script")
    s.id = id
    s.src = "https://link.msgsndr.com/js/form_embed.js"
    s.async = true
    document.body.appendChild(s)
  }, [])

  return (
    <div className="w-full">
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/ALmSDgzEM4r8kQ4wTOZL?embed=true"
        style={{ width: "100%", height: 0, border: 0 }}
        id="3Ki9YVu9scOarxIVpapL_1762756204520"
        title="GHL Booking"
      />
    </div>
  )
}

