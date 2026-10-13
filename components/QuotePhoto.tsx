import Image from "next/image";
import { quotePhoto } from "@/lib/content";

export default function QuotePhoto() {
  return (
    <section className="bg-paper py-[12vw] lg:py-[7vw]">
      <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[53%_1fr] lg:gap-0">
        <div className="relative aspect-[29/20]">
          <Image
            src={quotePhoto.image.src}
            alt={quotePhoto.image.alt}
            fill
            sizes="(min-width: 1024px) 53vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="px-[6vw] lg:self-end lg:px-[5vw]">
          <p className="font-heading text-h2 max-w-[14em]">
            {quotePhoto.before} <span className="script-word">{quotePhoto.script}</span> {quotePhoto.after}
          </p>
        </div>
      </div>
    </section>
  );
}
