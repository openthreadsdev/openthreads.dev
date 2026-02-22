import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Update document title to show development mode
if (import.meta.env.DEV) {
  document.title = `[DEV] ${document.title}`;
}

createRoot(document.getElementById("root")!).render(<App />);
