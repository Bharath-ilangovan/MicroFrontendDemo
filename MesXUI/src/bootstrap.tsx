import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Find the root element in your HTML where the app will be rendered
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement); // Use createRoot with React 18
  root.render(<App />);
} else {
  console.error("Root element with id 'root' not found in HTML.");
}
