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

export {};