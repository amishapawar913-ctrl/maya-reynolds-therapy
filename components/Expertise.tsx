import { expertise } from "@/lib/content";

export default function Expertise() {
  return (
    <section className="bg-paper pb-[12vw] pt-[6vw] lg:pb-[8vw]">
      <div className="mx-auto grid max-w-[1800px] gap-10 px-[6vw] lg:grid-cols-[1fr_1.75fr] lg:px-[5vw]">
        <h2 className="text-h2 lg:pl-[4vw]">
          {expertise.heading} <span className="script-word block">{expertise.scriptWord}</span>
        </h2>
        <ul className="grid sm:grid-cols-2 sm:gap-x-[4vw]">
          {expertise.items.map((item) => (
            <li key={item} className="label-caps border-b border-primary/15 py-6 lg:py-8">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
