import Link from "next/link";
import { studio } from "@/lib/site";

export default function Logo({ light = false }) {
  return (
    <Link href="/" className="flex flex-col leading-none">
      <span
        className={`font-serif text-[26px] font-medium ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {studio.name}
      </span>
      <span
        className={`font-sans text-[9px] font-semibold uppercase tracking-[0.3em] ${
          light ? "text-cream/70" : "text-gold"
        }`}
      >
        {studio.tagline}
      </span>
    </Link>
  );
}
