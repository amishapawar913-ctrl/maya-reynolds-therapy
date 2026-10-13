import Image from "next/image";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-4 bg-surface">
      <div className="mx-auto grid max-w-[1800px] lg:grid-cols-[1fr_28%]">
        <div className="px-[6vw] py-[12vw] lg:px-[5vw] lg:py-[7vw] lg:pl-[9vw]">
          <p className="label-caps">{about.eyebrow}</p>
          <h2 className="text-h2 mt-10 lg:mt-[5vw]">{about.title}</h2>
          <div className="mt-12 grid gap-8 lg:mt-[4vw] lg:grid-cols-2 lg:gap-[3vw]">
            <div>
              <h3 className="label-caps mb-6 max-w-[20em]">{about.leftHeading}</h3>
              <p>{about.leftBody}</p>
            </div>
            <p>{about.rightBody}</p>
          </div>
          <a href={about.link.href} className="label-caps link-underline mt-12 lg:mt-[4vw]">
            {about.link.label}
          </a>
        </div>
        <figure className="lg:pt-[1vw]">
          <div className="relative aspect-[3/4] lg:aspect-[3/5]">
            <Image
              src={about.portrait.src}
              alt={about.portrait.alt}
              fill
              sizes="(min-width: 1024px) 28vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="px-[6vw] py-4 text-[0.9rem] lg:px-[1.5vw]">{about.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
