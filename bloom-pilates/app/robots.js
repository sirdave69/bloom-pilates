import { siteUrl } from "@/lib/site";

// Explicitly welcome AI answer-engine crawlers (GEO) and search crawlers.
export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // AI / LLM crawlers — allow so the studio can be cited in AI answers.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
