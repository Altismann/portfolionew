import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sitecraft Portfolio",
  description: "Hej! Jag heter Anders... en produktdesigner och webbutvecklare plaserad i Stockholm. Jag skapar enklare gränssnitt för hobbyister och skapare.",
  languages:
    'sv-SE': '/sv-SE',
  },
},
};


}
