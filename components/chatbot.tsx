"use client";
import { useEffect } from "react";

const ALT_TEXT = "Zea CRM Chatbot Icon";

function applyAlt(root: ParentNode | Document = document) {
  const imgs = root.querySelectorAll<HTMLImageElement>("img.circular-image");
  imgs.forEach((img) => {
    const current = img.getAttribute("alt");
    if (current === null || current === "") {
      img.setAttribute("alt", ALT_TEXT);
    }
  });
}

const ChatWidget = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Inject GHL/LeadConnector widget
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.async = true;
    script.setAttribute(
      "data-resources-url",
      "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
    );
    script.setAttribute("data-widget-id", "6905cfcacab8e9ab56a364f1");
    document.body.appendChild(script);

    // Apply fix immediately in case widget already rendered
    applyAlt();

    // Observe future mutations to patch images added later
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "childList") {
          m.addedNodes.forEach((node) => {
            if (!(node instanceof Element)) return;

            if (node.matches("img.circular-image")) {
              applyAlt(node);
            }

            const descendants = node.querySelectorAll?.("img.circular-image");
            if (descendants && descendants.length) {
              applyAlt(node);
            }
          });
        } else if (m.type === "attributes" && m.target instanceof Element) {
          if (m.target.matches("img.circular-image")) {
            applyAlt(document);
          }
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      document.body.removeChild(script);
    };
  }, []);

    return null; // It just injects the widget, no visible component needed
};

export default ChatWidget;
