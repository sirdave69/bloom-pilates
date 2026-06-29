import Link from "next/link";

export default function CTASection({
  title = "Rezervujte si svoju lekciu",
  buttonLabel = "Pozrieť rozvrh",
  href = "/rozvrh",
}) {
  return (
    <section className="bg-beige">
      <div className="container-x flex flex-col items-center gap-7 py-20 text-center md:py-24">
        <h2 className="h-display text-[40px] md:text-[52px]">{title}</h2>
        <Link href={href} className="btn-primary">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
