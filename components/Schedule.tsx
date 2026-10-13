import Image from "next/image";
import { schedule } from "@/lib/content";

export default function Schedule() {
  return (
    <section className="overflow-hidden bg-bg py-[12vw] lg:py-[7vw]">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-12 lg:flex-row lg:items-center lg:gap-0">
        {/* Thin photo cut off at the left edge (desktop only) */}
        <div className="relative hidden h-[32vw] w-[12%] lg:block">
          <Image
            src={schedule.imageSliver.src}
            alt={schedule.imageSliver.alt}
            fill
            sizes="12vw"
            className="object-cover"
          />
        </div>

        <div className="px-[6vw] lg:w-[48%] lg:px-[6vw]">
          <p className="label-caps">{schedule.eyebrow}</p>
          <h2 className="text-h2 mt-8 max-w-[11em] lg:mt-[3vw]">
            {schedule.heading} <span className="script-word">{schedule.scriptWord}</span>.
          </h2>
          <p className="mt-8 max-w-[32em] lg:mt-[2.5vw]">{schedule.body}</p>
          <a href={schedule.cta.href} className="btn-oval label-caps mt-10 transition-colors hover:bg-primary hover:text-on-primary lg:mt-[3vw]">
            {schedule.cta.label}
          </a>
        </div>

        <div className="relative aspect-[4/5] lg:ml-auto lg:w-[32%]">
          <Image
            src={schedule.imageMain.src}
            alt={schedule.imageMain.alt}
            fill
            sizes="(min-width: 1024px) 32vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
