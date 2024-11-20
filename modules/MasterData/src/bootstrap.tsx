// This is only used for independent development of the microfrontend.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

declare global {
  interface window {
    containerContext: boolean;
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(<App />);