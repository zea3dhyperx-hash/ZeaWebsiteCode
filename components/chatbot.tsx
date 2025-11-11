"use client"
// ChatWidget.jsx
import { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.async = true;
    script.setAttribute(
      "data-resources-url",
      "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
    );
    script.setAttribute("data-widget-id", "6905cfcacab8e9ab56a364f1");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // It just injects the widget, no visible component needed
};

export default ChatWidget;
