import type { Metadata } from "next";
import { Cormorant_Infant, Mulish, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";


const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mulish",
  display: "swap",
});


const script = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Licensed clinical psychologist in Santa Monica offering anxiety, trauma, EMDR and burnout therapy for adults, in person or by secure telehealth across California.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${mulish.variable} ${script.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}