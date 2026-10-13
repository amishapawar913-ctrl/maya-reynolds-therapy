import { specialties } from "@/lib/content";

export default function Specialties() {
  return (
    <section id="specialties" className="scroll-mt-4 bg-paper pb-[12vw] pt-[6vw] lg:pb-[8vw]">
      <div className="mx-auto grid max-w-[1800px] gap-12 px-[6vw] lg:grid-cols-[27%_1fr] lg:px-[5vw]">
        <h2 className="text-h2 lg:pl-[4vw]">
          {specialties.heading} <span className="script-word">{specialties.scriptWord}</span>{" "}
          {specialties.headingEnd}
        </h2>
        <div className="grid gap-16 sm:grid-cols-2 sm:gap-x-[4vw] lg:gap-y-[7vw]">
          {specialties.items.map((item) => (
            <article key={item.title}>
              <h3 className="text-h3">{item.title}</h3>
              <p className="mt-6">{item.text}</p>
              <a href={specialties.learnMore.href} className="label-caps link-underline mt-8">
                {specialties.learnMore.label}
              </a>
            </article>
          ))}
          <article>
            <h3 className="text-h3">{specialties.ctaCard.title}</h3>
            <p className="mt-6">{specialties.ctaCard.text}</p>
            <a href={specialties.ctaCard.link.href} className="label-caps link-underline mt-8">
              {specialties.ctaCard.link.label}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
