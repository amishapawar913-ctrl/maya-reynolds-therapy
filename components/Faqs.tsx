import { faqs } from "@/lib/content";

export default function Faqs() {
  return (
    <section id="faqs" className="scroll-mt-4 bg-paper py-[12vw] lg:py-[7vw]">
      <div className="mx-auto grid max-w-[1800px] gap-10 px-[6vw] lg:grid-cols-[1fr_1.75fr] lg:px-[5vw]">
        <h2 className="text-h2 lg:pl-[4vw]">
          {faqs.heading} <span className="script-word block">{faqs.scriptWord}</span>
        </h2>
        <div>
          {faqs.items.map((item) => (
            <details key={item.q} className="group border-b border-primary/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-h3 font-heading [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden="true" className="shrink-0 text-[1.6rem] font-light transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-[42em] pb-8">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
