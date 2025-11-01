"use client";
import React, { useMemo, useState } from "react";

// Self-contained component rendering the content of public/industries/Automotive copy
// - HTML merged into JSX
// - CSS applied inline (key rules)
// - Simple interactivity via React hooks

const rootStyle: React.CSSProperties = {
  boxSizing: "border-box",
  background: "#000",
  position: "relative",
  overflow: "hidden",
  minHeight: 1200,
};

export default function AutomotiveCopy() {
  const [subscribed, setSubscribed] = useState(false);
  const asset = useMemo(() => (name: string) => `/industries/Automotive copy/${name}`, []);

  return (
    <div style={rootStyle}>
      {/* How it Works section */}
      <div style={{ background: "#161616", width: "100%", position: "relative", paddingBottom: 48, paddingTop: 48 }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 16px" }}>
          <div style={{ color: "#fafaff", fontSize: 28, fontWeight: 700 }}>How it Works</div>
          <div style={{ color: "#fafaff", fontSize: 18, opacity: 0.9, marginTop: 8 }}>AI-Powered CRM for Faster Growth</div>

          {/* Cards grid (3) */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 16, marginTop: 24 }}>
            {/* Dealers & Showrooms */}
            <div style={{ background: "#fffefe", borderRadius: 10, padding: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 20, color: "#050509", marginBottom: 8 }}>Dealers & Showrooms</div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <img alt="corner" src={asset("corner-down-right2.svg")} style={{ width: 24, height: 24 }} />
                <ul style={{ color: "#050509", lineHeight: 1.6 }}>
                  <li>Test drive booking via WhatsApp</li>
                  <li>Auto service/warranty reminders</li>
                  <li>Digital payments & invoices</li>
                </ul>
              </div>
            </div>

            {/* Spare Parts Retailers */}
            <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", background: "#fffefe" }}>
              <img alt="retailers" src={asset("gemini-generated-image-xim-4-b-9-xim-4-b-9-xim-4-10.png")} style={{ width: "100%", height: 160, objectFit: "cover" }} />
              <div style={{ padding: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 20, color: "#050509", marginBottom: 8 }}>Spare Parts Retailers</div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <img alt="corner" src={asset("corner-down-right1.svg")} style={{ width: 24, height: 24 }} />
                  <ul style={{ color: "#050509", lineHeight: 1.6 }}>
                    <li>Auto inventory alerts</li>
                    <li>Digital billing & repeat order reminders</li>
                    <li>Loyalty campaigns for mechanics/customers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Equipment Manufacturers */}
            <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", background: "#fffefe" }}>
              <img alt="equip" src={asset("rectangle-60.png")} style={{ width: "100%", height: 160, objectFit: "cover" }} />
              <div style={{ padding: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 20, color: "#050509", marginBottom: 8 }}>Equipment Manufacturers</div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <img alt="corner" src={asset("corner-down-right0.svg")} style={{ width: 24, height: 24 }} />
                  <ul style={{ color: "#050509", lineHeight: 1.6 }}>
                    <li>Dealer/OEM order workflows</li>
                    <li>Maintenance alerts for equipment</li>
                    <li>Sales analytics dashboards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style={{ color: "#fafaff", marginTop: 24, maxWidth: 700 }}>
            Aliquet nec mauris tortor at sed erat. Ut faucibus habitant risus morbi quis egestas etiam lorem. Feugiat lorem aliquam eget mattis cursus. Turpis massa arcu sagittis interdum. Integer molestie.
          </div>
        </div>
      </div>

      {/* Secondary section */}
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "24px 16px", color: "#fafaff" }}>
        <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>AI-Powered CRM for Faster Growth</div>
        <img alt="section" src={asset("section-30.svg")} style={{ width: 200, height: "auto" }} />
        <div style={{ marginTop: 12, color: "#e5e7eb" }}>
          From healthcare and real estate to retail and finance, ZeaCRM adapts to your unique challenges with automation-first solutions. Discover how we help businesses streamline operations, enhance customer relationships, and drive growth.
        </div>
      </div>

      {/* Icon trio */}
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "24px 16px", color: "#fafaff" }}>
        <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
          Keap customers save time and grow with Easy Automations like:
        </div>
        <div style={{ color: "#d1d5db", marginBottom: 16 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetti industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 16 }}>
          <div style={{ display: "flex", gap: 12 }}>
            <img alt="users" src={asset("users0.svg")} style={{ width: 28, height: 28 }} />
            <div>
              <div style={{ fontWeight: 600 }}>Dealers & Showrooms</div>
              <div style={{ color: "#9ca3af" }}>Tellus aliquam faucibus imperdiet eget interdum risus diam neque lectus.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <img alt="clock" src={asset("clock0.svg")} style={{ width: 28, height: 28 }} />
            <div>
              <div style={{ fontWeight: 600 }}>Spare Parts Retailers</div>
              <div style={{ color: "#9ca3af" }}>Tellus aliquam faucibus imperdiet eget interdum risus diam neque lectus.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <img alt="package" src={asset("package0.svg")} style={{ width: 28, height: 28 }} />
            <div>
              <div style={{ fontWeight: 600 }}>Equipment Manufacturers</div>
              <div style={{ color: "#9ca3af" }}>Tellus aliquam faucibus imperdiet eget interdum risus diam neque lectus.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width image + CTA */}
      <img alt="background" src={asset("rectangle-10.png")} style={{ width: "100%", height: "auto" }} />
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "32px 16px", color: "#fafaff" }}>
        <div style={{ fontSize: 32, fontWeight: 800 }}>Automotive & Manufacturing</div>
        <div style={{ fontSize: 24, fontWeight: 700, marginTop: 4 }}>AI-Powered CRM for Faster Growth</div>
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          <button style={{ cursor: "pointer", background: "#d4af37", color: "#0a0a0a", padding: "10px 18px", borderRadius: 6, fontWeight: 700 }}>Request Demo</button>
          <button style={{ cursor: "pointer", background: "transparent", color: "#d4af37", padding: "10px 18px", borderRadius: 6, border: "1px solid #d4af37", fontWeight: 700 }}>Request Demo</button>
        </div>
      </div>

      {/* Footer-ish with subscribe */}
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "32px 16px", color: "#fafaff" }}>
        <img alt="frame" src={asset("frame-2290.svg")} style={{ width: 120, height: "auto" }} />
        <div style={{ marginTop: 12 }}>Our platform is built on five core principles to guarantee your success</div>
        <img alt="image-box" src={asset("image-box0.png")} style={{ width: 560, height: "auto", marginTop: 16 }} />

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 32 }}>
          <img alt="logo" src={asset("button-zea-crm-logo0.png")} style={{ width: 40, height: 40 }} />
          <div style={{ fontWeight: 700 }}>Product</div>
        </div>

        <div style={{ display: "flex", gap: 24, marginTop: 12, color: "#e5e7eb" }}>
          <div>Features</div>
          <div>Pricing</div>
          <div>Industries</div>
          <div>PlayBooks</div>
        </div>

        <div style={{ marginTop: 16, color: "#9ca3af" }}>
          ZeaCRM is an AI-powered CRM platform built for all industries — from healthcare to real estate, retail, and beyond.
        </div>

        <div style={{ marginTop: 20 }}>
          <div style={{ fontWeight: 700 }}>Subscribe for product updates and automation tips.</div>
          <div style={{ display: "flex", marginTop: 8 }}>
            <input placeholder="Your email" style={{ flex: 1, padding: "10px 12px", border: "1px solid #374151", borderRadius: "6px 0 0 6px", background: "#111827", color: "#e5e7eb" }} />
            <button onClick={() => setSubscribed(true)} style={{ background: "#d4af37", color: "#0a0a0a", padding: "10px 16px", borderRadius: "0 6px 6px 0", fontWeight: 700 }}>Subscribe</button>
          </div>
          {subscribed && <div style={{ color: "#a7f3d0", marginTop: 8 }}>Thanks! We’ll keep you posted.</div>}
        </div>

        <div style={{ display: "flex", gap: 8, justifyContent: "center", alignItems: "center", marginTop: 24, color: "#6b7280" }}>
          <div>© 2025</div>
          <div>|</div>
          <div>ZeaCRM</div>
          <div>|</div>
          <div>Powered by URL Factory</div>
          <div>|</div>
          <div>All rights reserved</div>
        </div>
      </div>
    </div>
  );
}

