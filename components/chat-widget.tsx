"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    AuraChatWidget?: {
      init: (config: {
        apiKey: string;
        locale: string;
      }) => void;
    };
  }
}

export default function ChatWidget() {
  useEffect(() => {
    // Dynamic import of the external script
    const initializeChat = async () => {
      try {
        // Load the script dynamically
        const script = document.createElement('script');
        script.type = 'module';
        script.innerHTML = `
          import "https://cdn.auraai.ir/chat-widget.js";
          if (window.AuraChatWidget) {
            window.AuraChatWidget.init({
              apiKey: "aura_546c82611205f6e7d3d90c1da529b0bf",
              locale: "fa",
            });
          }
        `;
        document.head.appendChild(script);
      } catch (error) {
        console.error("Failed to load chat widget:", error);
      }
    };

    // Initialize when component mounts
    initializeChat();
  }, []);

  return null;
}