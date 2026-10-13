import { footer, nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-4 bg-paper">
      <div className="mx-auto grid max-w-[1800px] gap-12 px-[6vw] py-[12vw] lg:grid-cols-[1.5fr_0.9fr_1fr_1.1fr] lg:gap-[3vw] lg:px-[5vw] lg:py-[5vw]">
        <div>
          <p className="font-heading text-[clamp(2.2rem,1.4rem+2.6vw,4.2rem)] leading-none">{site.name}</p>
          <p className="label-caps mt-4 text-[clamp(0.6rem,0.5rem+0.4vw,0.95rem)] tracking-[0.42em] text-primary">
            {site.role}
          </p>
          <p className="mt-8 max-w-[26em]">{footer.blurb}</p>
        </div>

        <div>
          <h2 className="label-caps mb-5 font-body text-[length:var(--text-label)] tracking-[0.12em]">{footer.navigateHeading}</h2>
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="label-caps mb-5 font-body text-[length:var(--text-label)]">{footer.sessionsHeading}</h2>
          <ul className="space-y-1">
            {footer.sessions.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="label-caps mb-5 font-body text-[length:var(--text-label)]">{footer.contactHeading}</h2>
          <address className="not-italic">
            {site.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-6 italic">{footer.contactNote}</p>
        </div>
      </div>

      <div className="bg-primary text-on-primary">
        <div className="mx-auto flex max-w-[1800px] flex-col gap-2 px-[6vw] py-5 text-[0.9rem] lg:flex-row lg:items-center lg:justify-between lg:px-[5vw]">
          <p>
            {footer.legal.join(" | ")} | {footer.credit}
          </p>
          <p>{footer.demoNote}</p>
        </div>
      </div>
    </footer>
  );
}
