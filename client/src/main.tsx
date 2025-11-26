import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Conditionally load Umami analytics only when environment variables are provided.
const ANALYTICS_ENDPOINT = import.meta.env.VITE_ANALYTICS_ENDPOINT as string | undefined;
const ANALYTICS_WEBSITE_ID = import.meta.env.VITE_ANALYTICS_WEBSITE_ID as string | undefined;

if (ANALYTICS_ENDPOINT && ANALYTICS_WEBSITE_ID) {
	try {
		const s = document.createElement("script");
		s.defer = true;
		s.src = `${ANALYTICS_ENDPOINT.replace(/\/+$/, "")}/umami`;
		s.setAttribute("data-website-id", ANALYTICS_WEBSITE_ID);
		document.head.appendChild(s);
	} catch (e) {
		// If anything goes wrong, don't break the app.
		// eslint-disable-next-line no-console
		console.warn("Failed to load analytics script:", e);
	}
}

createRoot(document.getElementById("root")!).render(<App />);
