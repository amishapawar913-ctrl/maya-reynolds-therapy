import Image from "next/image";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="bg-bg pb-[10vw] lg:pb-[6vw]">
      <div className="mx-auto flex max-w-[1800px] flex-col lg:flex-row lg:items-stretch">
        {/* Text column */}
        <div className="order-1 flex flex-col px-[6vw] pt-4 lg:order-2 lg:flex-1 lg:justify-between lg:px-[4vw] lg:pt-[2vw]">
          <p className="label-caps max-w-[22em]">{hero.eyebrow}</p>
          <div className="mt-8 lg:mt-[10vw]">
            <h1 className="text-h1 max-w-[14em]">
              {hero.titleStart} <span className="script-word">{hero.scriptWord}</span>.
            </h1>
            <p className="mt-8 max-w-[34em] lg:mt-[2.5vw]">{hero.subtext}</p>
            <a href={hero.cta.href} className="label-caps link-underline mt-8 lg:mt-[3.5vw]">
              {hero.cta.label}
            </a>
          </div>
        </div>

        {/* Photos: left tall photo touches the left edge, narrow photo peeks in at the right */}
        <div className="order-2 mt-12 flex items-start lg:contents">
          <div className="relative aspect-[7/8] w-[82%] lg:order-1 lg:w-[34%] lg:shrink-0">
            <Image
              src={hero.imageLeft.src}
              alt={hero.imageLeft.alt}
              fill
              priority
              sizes="(min-width: 1024px) 34vw, 82vw"
              className="object-cover"
            />
          </div>
          <div className="relative mt-[22vw] h-[44vw] w-[18%] lg:order-3 lg:mt-0 lg:h-[22vw] lg:w-[8%] lg:self-end">
            <Image
              src={hero.imageRight.src}
              alt={hero.imageRight.alt}
              fill
              sizes="(min-width: 1024px) 8vw, 18vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
