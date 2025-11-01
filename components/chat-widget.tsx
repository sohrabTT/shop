"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ChatWidget() {
  useEffect(() => {
    // Initialize the chat widget after the script loads
    if (typeof window !== "undefined" && window.AuraChatWidget) {
      window.AuraChatWidget.init({
        apiKey: "aura_546c82611205f6e7d3d90c1da529b0bf",
        locale: "fa",
      });
    }
  }, []);

  return (
    <Script
      src="https://cdn.auraai.ir/chat-widget.js"
      strategy="afterInteractive"
    />
  );
}