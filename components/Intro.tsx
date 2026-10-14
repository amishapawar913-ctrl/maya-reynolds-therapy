import Image from "next/image";
import { intro } from "@/lib/content";

export default function Intro() {
  return (
    <section id="approach" className="scroll-mt-4 bg-bg pb-[10vw] pt-[4vw] lg:pb-[7vw]">
      {/* Mobile: one column, order = heading, left text, photo (inset), right text.
          Tablet+: text block on the left, photo touching the right edge. */}
      <div className="mx-auto grid max-w-[1800px] gap-12 md:grid-cols-[1fr_30%] md:gap-0">
        <div className="contents md:block md:pl-[9vw] md:pr-[3vw] md:pt-[12vw] lg:px-[5vw] lg:pt-[4vw]">
          <h2 className="text-h2 order-1 max-w-[17em] px-[6vw] md:px-0">{intro.statement}</h2>
          <div className="contents md:mt-[4.5vw] md:grid md:grid-cols-2 md:gap-[3vw]">
            <div className="order-2 px-[6vw] md:px-0">
              <h3 className="label-caps mb-6 max-w-[22em]">{intro.leftHeading}</h3>
              <p>{intro.leftBody}</p>
            </div>
            <p className="order-4 px-[6vw] md:px-0">{intro.rightBody}</p>
          </div>
        </div>
        <div className="relative order-3 mx-[6vw] aspect-[3/2] md:mx-0 md:aspect-auto md:min-h-[80vw] lg:min-h-[42vw]">
          <Image
            src={intro.image.src}
            alt={intro.image.alt}
            fill
            sizes="(min-width: 768px) 30vw, 88vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}