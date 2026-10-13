import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhoIHelp from "@/components/WhoIHelp";
import QuoteBanner from "@/components/QuoteBanner";
import Expertise from "@/components/Expertise";
import About from "@/components/About";
import QuotePhoto from "@/components/QuotePhoto";
import Specialties from "@/components/Specialties";
import OurOffice from "@/components/OurOffice";
import Faqs from "@/components/Faqs";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";
import { faqs } from "@/lib/content";

// Structured data so search engines can show the FAQs (SEO).
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <WhoIHelp />
        <QuoteBanner />
        <Expertise />
        <About />
        <QuotePhoto />
        <Specialties />
        <OurOffice />
        <Faqs />
        <Schedule />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
