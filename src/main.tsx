import { Buffer } from "buffer";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Polyfill Buffer for gray-matter library // spelling:disable
window.Buffer = Buffer;

// Update document title to show development mode
if (import.meta.env.DEV) {
  document.title = `[DEV] ${document.title}`;
}

createRoot(document.getElementById("root")!).render(<App />);
