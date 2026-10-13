import Image from "next/image";
import { intro } from "@/lib/content";

export default function Intro() {
  return (
    <section id="approach" className="scroll-mt-4 bg-bg pb-[10vw] pt-[4vw] lg:pb-[7vw]">
      <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-[1fr_30%] lg:gap-0">
        <div className="px-[6vw] lg:px-[5vw] lg:pt-[4vw]">
          <h2 className="text-h2 max-w-[17em]">{intro.statement}</h2>
          <div className="mt-12 grid gap-8 lg:mt-[4.5vw] lg:grid-cols-2 lg:gap-[3vw]">
            <div>
              <h3 className="label-caps mb-6 max-w-[22em]">{intro.leftHeading}</h3>
              <p>{intro.leftBody}</p>
            </div>
            <p>{intro.rightBody}</p>
          </div>
        </div>
        <div className="relative aspect-[3/4] lg:aspect-auto lg:min-h-[42vw]">
          <Image
            src={intro.image.src}
            alt={intro.image.alt}
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
