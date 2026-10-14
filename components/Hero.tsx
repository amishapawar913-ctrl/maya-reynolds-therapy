import Image from "next/image";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="bg-bg pb-[21vw] md:pb-[10vw] lg:pb-[6vw]">
      <div className="mx-auto flex max-w-[1800px] flex-col md:flex-row md:items-stretch">
        {/* Text column */}
        <div className="order-1 flex flex-col px-[6vw] pt-4 md:order-2 md:flex-1 md:justify-between md:pl-[7vw] md:pr-[3vw] md:pt-[2vw] lg:px-[4vw]">
          <p className="label-caps max-w-[22em]">{hero.eyebrow}</p>
          <div className="mt-8 md:mt-[10vw]">
            <h1 className="text-h1 max-w-[14em]">
              {hero.titleStart} <span className="script-word">{hero.scriptWord}</span>.
            </h1>
            <p className="mt-8 max-w-[34em] md:mt-[2.5vw]">{hero.subtext}</p>
            <a href={hero.cta.href} className="label-caps link-underline mt-8 md:mt-[3.5vw]">
              {hero.cta.label}
            </a>
          </div>
        </div>

        {/* Photos: left tall photo touches the left edge, narrow photo peeks in at the right */}
        <div className="order-2 mt-12 flex items-start justify-between md:contents">
          <div className="relative aspect-[103/100] w-[71%] md:order-1 md:aspect-auto md:w-[36%] md:shrink-0 lg:w-[34%]">
            <Image
              src={hero.imageLeft.src}
              alt={hero.imageLeft.alt}
              fill
              priority
              sizes="(min-width: 768px) 36vw, 71vw"
              className="object-cover"
            />
          </div>
          <div className="relative mt-[24vw] h-[45vw] w-[15%] md:order-3 md:mt-0 md:h-[42vw] md:w-[7%] md:self-end lg:h-[22vw] lg:w-[8%]">
            <Image
              src={hero.imageRight.src}
              alt={hero.imageRight.alt}
              fill
              sizes="(min-width: 768px) 8vw, 15vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}