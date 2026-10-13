import Image from "next/image";
import { office } from "@/lib/content";

export default function OurOffice() {
  const [main, ...rest] = office.images;

  return (
    <section id="office" className="scroll-mt-4 bg-bg py-[12vw] md:py-[7vw]">
      <div className="mx-auto grid max-w-[1800px] gap-12 md:grid-cols-[1fr_1.05fr] md:gap-[4vw]">
        {/* Copy */}
        <div className="px-[6vw] md:pl-[9vw] md:pr-0 md:pt-[2vw]">
          <p className="label-caps">{office.eyebrow}</p>
          <h2 className="text-h2 mt-10 md:mt-[4vw]">
            {office.heading} <span className="script-word">{office.scriptWord}</span>
          </h2>
          <p className="mt-8 max-w-[34em] md:mt-[2.5vw]">{office.body1}</p>
          <p className="mt-5 max-w-[34em]">{office.body2}</p>
          <dl className="mt-10 max-w-[34em] md:mt-[3vw]">
            {office.details.map((d) => (
              <div key={d.label} className="border-t border-primary/15 py-5">
                <dt className="label-caps text-primary">{d.label}</dt>
                <dd className="mt-1">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {}
        <div>
          <div className="relative aspect-[4/3]">
            <Image
              src={main.src}
              alt={main.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          {}
          {rest.length === 1 && (
            <div className="relative -mt-[8%] ml-auto aspect-[4/3] w-[62%] border-[0.6vw] border-bg">
              <Image
                src={rest[0].src}
                alt={rest[0].alt}
                fill
                sizes="(min-width: 768px) 32vw, 62vw"
                className="object-cover"
              />
            </div>
          )}
          {rest.length > 1 && (
            <div
              className="mt-[1.4vw] grid gap-[1.4vw]"
              style={{ gridTemplateColumns: `repeat(${rest.length}, minmax(0, 1fr))` }}
            >
              {rest.map((img) => (
                <div key={img.src} className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
