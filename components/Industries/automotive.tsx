"use client";
import React, { useEffect, useMemo, useState } from "react";

// Next.js page that inlines the HTML and CSS from this folder's index.html/style.css.
// Assets referenced via relative paths continue to load from this public subfolder.

const styles = {
  root: {
    boxSizing: "border-box" as const,
    background: "#000000",
    position: "relative" as const,
    overflow: "hidden" as const,
    // Allow content to size naturally in React instead of a fixed height
    minHeight: 5000,
  },
};

export default function Page() {
  // Example: simple interactive hook to simulate the old static CTA buttons
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    // No external JS existed; keep a placeholder for future behavior (e.g., tracking, scroll, etc.)
  }, []);

  const onSubscribe = () => setSubscribed(true);

  // Helper to resolve asset paths within this public folder
  const asset = useMemo(() => (name: string) => `/industries/Automotive copy/${name}`, []);

  return (
    <div style={styles.root}>
      {/* Section: How it Works */}
      <div style={{ background: "#161616", width: 1440, height: 1632, position: "relative", marginTop: 728 }}>
        <div
          style={{
            color: "#fafaff",
            textAlign: "left",
            fontFamily: 'DmSans, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
            fontSize: 20,
            lineHeight: "160%",
            letterSpacing: "-0.03em",
            fontWeight: 400,
            position: "absolute",
            left: "calc(50% - 240px)",
            top: 1348,
            width: 582,
          }}
        >
          Aliquet nec mauris tortor at sed erat. Ut faucibus habitant risus morbi quis egestas etiam lorem. Feugiat lorem
          aliquam eget mattis cursus. Turpis massa arcu sagittis interdum. Integer molestie.
        </div>

        <div style={{ borderTop: "1px solid #d0dbff", width: 290, position: "absolute", left: 150, bottom: 240 }} />

        {/* Card 3 */}
        <div style={{ width: 1140, height: 296, position: "absolute", left: 187, top: 988 }}>
          <img alt="rectangle" src={asset("rectangle-60.png")} style={{ borderRadius: 10, width: 520, height: 316, position: "absolute", left: -24, top: 0, objectFit: "cover" }} />
          <div style={{ paddingLeft: 62, display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start", justifyContent: "flex-start", position: "absolute", left: 402, top: 68, boxShadow: "0px 4px 4px rgba(255,250,250,0.25)" }}>
            <div style={{ background: "#fffefe", width: 485, height: 212, boxShadow: "0px 16px 4px rgba(0,0,0,0.25)" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start", justifyContent: "flex-start", width: 500, position: "absolute", left: 496, top: 98 }}>
            <div style={{ color: "#050509", textAlign: "left", fontFamily: 'DmSans, sans-serif', fontSize: 24, lineHeight: "120%", fontWeight: 700 }}>Equipment Manufacturers</div>
          </div>
          <div style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start", justifyContent: "flex-start", position: "absolute", left: 482, top: 141 }}>
            <div style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "flex-start", justifyContent: "flex-start", width: 418 }}>
              <img alt="corner" src={asset("corner-down-right0.svg")} style={{ width: 24, height: 24 }} />
              <div>
                <div style={{ color: "#050509", textAlign: "left", fontFamily: 'DmSans, sans-serif', fontSize: 18, lineHeight: "160%", letterSpacing: "-0.03em", fontWeight: 400, width: 442 }}>
                  <ul>
                    <li>Dealer/OEM order workflows</li>
                    <li>Maintenance alerts for equipment</li>
                    <li>Sales analytics dashboards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div style={{ width: 1140, height: 296, position: "absolute", left: 150, top: 629 }}>
          <div style={{ background: "#58585b", borderRadius: 10, width: 520, height: 296, position: "absolute", left: 620, top: 0, overflow: "hidden" }}>
            <img alt="retailers" src={asset("gemini-generated-image-xim-4-b-9-xim-4-b-9-xim-4-10.png")} style={{ width: 520, height: 296, objectFit: "cover" }} />
          </div>
          <div>
            <div style={{ background: "#fffefe", width: 485, height: 212, position: "absolute", left: 155, top: 42, boxShadow: "0px 16px 4px rgba(0,0,0,0.25)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start", justifyContent: "flex-start", width: 500, position: "absolute", left: 220, top: 68 }}>
              <div style={{ color: "#050509", textAlign: "left", fontFamily: 'DmSans, sans-serif', fontSize: 24, lineHeight: "120%", fontWeight: 700 }}>Spare Parts Retailers</div>
            </div>
            <div style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start", justifyContent: "flex-start", position: "absolute", left: 206, top: 111 }}>
              <div style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "flex-start", justifyContent: "flex-start", width: 418 }}>
                <img alt="corner" src={asset("corner-down-right1.svg")} style={{ width: 24, height: 24 }} />
                <div>
                  <div style={{ color: "#050509", textAlign: "left", fontFamily: 'DmSans, sans-serif', fontSize: 18, lineHeight: "160%", letterSpacing: "-0.03em", fontWeight: 400, width: 442 }}>
                    <ul>
                      <li>Auto inventory alerts</li>
                      <li>Digital billing & repeat order reminders</li>
                      <li>Loyalty campaigns for mechanics/customers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 1 imagery */}
        <div style={{ width: 520, height: 296, position: "absolute", left: 150, top: 300 }}>
          <img alt="icon" src={asset("icon0.svg")} style={{ width: 48, height: 48 }} />
          <img alt="manufacturing" src={asset("gemini-generated-image-7-ndia-77-ndia-77-ndi-10.png")} style={{ width: 520, height: 296, objectFit: "cover" }} />
        </div>

        <div style={{ position: "absolute", left: 150, top: 80 }}>
          <div style={{ color: "#fafaff", fontFamily: 'DmSans, sans-serif', fontSize: 18 }}>How it Works</div>
          <div style={{ color: "#fafaff", fontFamily: 'DmSans, sans-serif', fontSize: 32, fontWeight: 700 }}>AI-Powered CRM for Faster Growth</div>
        </div>

        {/* CTA */}
        <div style={{ position: "absolute", left: 150, top: 240 }}>
          <button style={{ cursor: "pointer", background: "#d4af37", color: "#0a0a0a", padding: "10px 18px", borderRadius: 6, fontWeight: 700 }}>Get Started</button>
        </div>

        {/* Dealers & Showrooms */}
        <div style={{ position: "absolute", left: 150, top: 410 }}>
          <div style={{ background: "#fffefe", width: 485, height: 212, boxShadow: "0px 16px 4px rgba(0,0,0,0.25)" }} />
          <div style={{ position: "absolute", top: 26, left: 65, color: "#050509", fontFamily: 'DmSans, sans-serif', fontSize: 24, fontWeight: 700 }}>Dealers & Showrooms</div>
          <div style={{ position: "absolute", top: 70, left: 52, display: "flex", gap: 10 }}>
            <img alt="corner" src={asset("corner-down-right2.svg")} style={{ width: 24, height: 24 }} />
            <div style={{ color: "#050509", fontFamily: 'DmSans, sans-serif', fontSize: 18, lineHeight: "160%", letterSpacing: "-0.03em" }}>
              <ul>
                <li>Test drive booking via WhatsApp</li>
                <li>Auto service/warranty reminders</li>
                <li>Digital payments & invoices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Hero + mid sections */}
      <div style={{ marginTop: 24, padding: "24px 16px", color: "#fafaff", maxWidth: 1200, marginLeft: "auto", marginRight: "auto" }}>
        <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>AI-Powered CRM for Faster Growth</div>
        <img alt="section" src={asset("section-30.svg")} style={{ width: 200, height: "auto" }} />
        <div style={{ marginTop: 12, color: "#e5e7eb" }}>
          From healthcare and real estate to retail and finance, ZeaCRM adapts to your unique challenges with automation-first solutions. Discover how we help businesses streamline operations, enhance customer relationships, and drive growth.
        </div>
      </div>

      <div style={{ padding: "24px 16px", color: "#fafaff", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
          Keap customers save time and grow with Easy Automations like:
        </div>
        <div style={{ color: "#d1d5db", marginBottom: 16 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetti industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <img alt="users" src={asset("users0.svg")} style={{ width: 28, height: 28 }} />
            <div>
              <div style={{ fontWeight: 600 }}>Dealers & Showrooms</div>
              <div style={{ color: "#9ca3af" }}>Tellus aliquam faucibus imperdiet eget interdum risus diam neque lectus.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <img alt="clock" src={asset("clock0.svg")} style={{ width: 28, height: 28 }} />
            <div>
              <div style={{ fontWeight: 600 }}>Spare Parts Retailers</div>
              <div style={{ color: "#9ca3af" }}>Tellus aliquam faucibus imperdiet eget interdum risus diam neque lectus.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <img alt="package" src={asset("package0.svg")} style={{ width: 28, height: 28 }} />
            <div>
              <div style={{ fontWeight: 600 }}>Equipment Manufacturers</div>
              <div style={{ color: "#9ca3af" }}>Tellus aliquam faucibus imperdiet eget interdum risus diam neque lectus.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Large background image and hero CTA */}
      <img alt="background" src={asset("rectangle-10.png")} style={{ width: "100%", height: "auto" }} />
      <div style={{ padding: "32px 16px", color: "#fafaff", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 32, fontWeight: 800 }}>Automotive & Manufacturing</div>
        <div style={{ fontSize: 24, fontWeight: 700, marginTop: 4 }}>AI-Powered CRM for Faster Growth</div>
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          <button style={{ cursor: "pointer", background: "#d4af37", color: "#0a0a0a", padding: "10px 18px", borderRadius: 6, fontWeight: 700 }}>Request Demo</button>
          <button style={{ cursor: "pointer", background: "transparent", color: "#d4af37", padding: "10px 18px", borderRadius: 6, border: "1px solid #d4af37", fontWeight: 700 }}>Request Demo</button>
        </div>
      </div>

      
      {/* Footer-ish section with subscribe */}
      <div style={{ padding: "32px 16px", color: "#fafaff", maxWidth: 1200, margin: "0 auto" }}>
        <img alt="frame" src={asset("frame-2290.svg")} style={{ width: 120, height: "auto" }} />
        <div style={{ marginTop: 12 }}>
          <div>Our platform is built on five core principles to guarantee your success</div>
        </div>
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
