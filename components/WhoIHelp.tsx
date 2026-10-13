import Image from "next/image";
import { whoIHelp } from "@/lib/content";

export default function WhoIHelp() {
  return (
    <section className="bg-paper py-[12vw] md:py-[8vw]">
      <div className="mx-auto max-w-[1800px] px-[6vw] lg:px-[5vw]">
        <h2 className="text-h2">
          {whoIHelp.heading} <span className="script-word">{whoIHelp.scriptWord}</span>
        </h2>
        <div className="mt-10 grid gap-14 md:grid-cols-3 md:gap-[1.4vw] lg:ml-[14%] lg:mt-[4vw]">
          {whoIHelp.cards.map((card) => (
            <article key={card.title}>
              <div className="relative aspect-[7/8]">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(min-width: 768px) 28vw, 88vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-8 text-h3">{card.title}</h3>
              <p className="mt-5 md:pr-[1vw]">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
