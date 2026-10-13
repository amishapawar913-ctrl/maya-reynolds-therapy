import Image from "next/image";
import { banner } from "@/lib/content";

export default function QuoteBanner() {
  return (
    <section className="relative min-h-[110vw] overflow-hidden sm:min-h-[60vw] lg:min-h-[40vw]">
      <Image src={banner.image.src} alt={banner.image.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-primary/60" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1800px] px-[6vw] pb-[12vw] lg:px-[9vw] lg:pb-[6vw]">
        <p className="font-heading text-h2 max-w-[19em] text-on-primary">
          {banner.first} <em>{banner.italic}</em>
        </p>
      </div>
    </section>
  );
}
