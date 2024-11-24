'use client'

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function PortfolioPage() {
  return (
    <div className="w-full relative bg-white flex flex-col items-center justify-start py-[97px] px-0 box-border gap-14 leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-center justify-start py-[30px] px-1 box-border gap-[100px] max-w-full text-center text-[130px] text-gray-200 font-montserrat">
        <h1 className="m-0 w-[347px] h-20 relative text-inherit leading-[80px] font-black font-[inherit] inline-block shrink-0 break-all max-w-full">
          Sitecraft
        </h1>
     

        <h2 className="m-0 relative text-5xl leading-[20px] font-normal font-[inherit]">
          Hej! Jag heter Anders, en produktdesigner och webbutvecklare plaserad
          i Stockholm. Jag skapar enklare gränssnitt för hobbyister och skapare.
        </h2>
      </section>
      <section className="self-stretch flex flex-col items-center justify-start py-24 px-0 box-border gap-[22.9px] max-w-full text-center text-sm text-black font-montserrat">
        <h2 className="m-0 self-stretch relative text-5xl tracking-[10px] leading-[28px] font-normal font-permanent-marker">
          Certifieringar
        </h2>
        <div className="self-stretch relative leading-[24px] font-medium">
          Web Developer (Mimo)
        </div>
        <div className="self-stretch relative text-xs leading-[20px] text-dimgray-100">
          (Dec 2021)
        </div>
        <div className="self-stretch relative leading-[24px] font-medium">
          ITIL (IT-Support)
        </div>
        <div className="self-stretch relative text-xs leading-[20px] text-dimgray-100">
          (Juni 2021)
        </div>
        <div className="self-stretch relative leading-[24px] font-medium">
          MS 900, Office 365 (IT-Support)
        </div>
        <div className="self-stretch relative text-xs leading-[20px] text-dimgray-100">
          (Juni 2021)
        </div>
        <h2 className="m-0 self-stretch relative text-5xl tracking-[10px] leading-[28px] font-normal font-permanent-marker">
          Mina Projekt
        </h2>
        <a
          className="self-stretch relative [text-decoration:underline] leading-[24px] font-medium text-[inherit]"
          href="https://dyoid.se/"
          target="_blank"
        >
          bydyoid
        </a>
        <div className="self-stretch relative text-smi leading-[20px] text-dimgray-100">
          Webflow/Wordpress (Sep 2024)
        </div>
        <a
          className="self-stretch relative [text-decoration:underline] leading-[24px] font-medium text-[inherit]"
          href="https://www.sitecraft.se/"
          target="_blank"
        >
          Sitecraft
        </a>
        <div className="self-stretch relative text-smi leading-[20px] text-dimgray-100">
          Nextjs, (den här sidan) (Sep 2024)
        </div>
        <h2 className="m-0 self-stretch relative text-5xl tracking-[10px] leading-[28px] font-normal font-permanent-marker">
          Övrigt
        </h2>
        <div className="self-stretch relative leading-[24px] font-medium">
          Windows operativsystem
        </div>
        <div className="self-stretch relative text-xs leading-[20px] text-dimgray-100">
          Har erfarenhet av Windows 10 MacOS CromeOS
        </div>
        <div className="self-stretch relative leading-[24px] font-medium text-dimgray-200">
          PC-datorer
        </div>
        <div className="w-[368px] relative text-xs leading-[20px] text-dimgray-100 inline-block max-w-full">
          Installation och gott underhåll på företagets PC maskiner Dell, HP,
          Acer, Lenovo
        </div>
        <div className="self-stretch relative leading-[24px] text-gray-400">
          Mobiltelefoni
        </div>
        <div className="self-stretch relative text-xs leading-[20px] text-dimgray-100">
          Google Android OS, iPhone iOS och iPad iOS
        </div>
        <div className="self-stretch relative leading-[24px] font-medium text-dimgray-200">
          Remote verktyg
        </div>
        <div className="self-stretch relative text-xs leading-[20px] text-dimgray-100">
          TeamViewer, RDP, Teams och AnyDesk
        </div>
      </section>
      <section className="flex flex-col items-center justify-start py-[52px] px-[57px] gap-[34px] text-center text-9xl text-gainsboro font-lato mq306:gap-[17px] mq306:pl-5 mq306:pr-5 mq306:box-border">
        <h1 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-[inherit]">
          Wordpress
        </h1>
        <h1 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-[inherit]">
          React.js
        </h1>
        <h1 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-[inherit]">
          NextJs
        </h1>
        <h1 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-[inherit]">
          Github
        </h1>
        <h1 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-[inherit]">
          Figma
        </h1>
        <h1 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-[inherit]">
          Shopify
        </h1>
        <h1 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-[inherit]">
          Webflow
        </h1>
        <h1 className="m-0 relative text-inherit leading-[24px] font-bold font-[inherit] text-left">
          Woocommerce
        </h1>
      </section>
      <section className="self-stretch flex flex-col items-center justify-start pt-3 px-0 pb-[127.4px] box-border gap-[51px] max-w-full text-left text-17xl text-gray-200 font-montserrat">
        <div className="self-stretch h-[93px] relative text-base tracking-[20px] leading-[50px] lowercase text-gray-100 text-center flex items-center justify-center shrink-0">
          Våra tjänster
        </div>
        <div className="w-[350.4px] flex flex-col items-start justify-start gap-[31px] max-w-full mq350small:gap-[15px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[50px] font-light font-[inherit]">
            GOOGLE
          </h1>
          <div className="h-[378.8px] relative text-base leading-[28px] inline-block shrink-0">
            Vi hjälper dig att ställa in alla viktiga parametrar rätt så att din
            text kan tolkas av Google på ett optimalt sätt. Vi kan i dagsläget
            inte hjälpa till med marknadsföring av en butiks produkter eller
            liknande känslig information som bär upp din verksamhet. Vi
            rekommenderar alltid att kunder anlitar en marknadsföringsexpert som
            kan SOE Marknadsföring och försäljning med hjälp av Google. Det är
            avgörande för dig att få rätt hjälp hos oss och framåt. Välj en
            expert som passar dina mål och din budget.
          </div>
        </div>
        <div className="w-[356.5px] flex flex-col items-start justify-start gap-[43px] max-w-full mq356:gap-[21px]">
          <h1 className="m-0 self-stretch h-[59.1px] relative text-inherit leading-[50px] font-light font-[inherit] inline-block shrink-0">
            E-SKYLT
          </h1>
          <div className="h-[287.5px] relative text-base leading-[28px] inline-block shrink-0">
            Våra enkla hemsidor ger dig ett skyltfönster därav "E-Skylt" till
            din hobbyverksamhet eller dina småskaliga projekt. Vi gör allting
            effektivt så du slipper bli påtvingad onödiga och dyra lösningar. Ta
            sedan med fördel hjälp av en expert på marknadsföring om du vill
            öppna ett riktigt företag i framtiden. Du kan få en E-skylt för så
            lite som 2000kr första året.
          </div>
        </div>
        <div className="w-[350px] flex flex-col items-start justify-start pt-0 px-0 pb-[47px] box-border gap-[23px] max-w-full">
          <h1 className="m-0 self-stretch h-[66.6px] relative text-inherit leading-[50px] font-light font-[inherit] inline-block shrink-0">
            E-Butik
          </h1>
          <div className="self-stretch h-[64.3px] relative text-base leading-[28px] inline-block shrink-0">
            Vill du ha en liten butik för att testa dina ideér? Nu är det
            billigare och bättre än någonsin att sälja produkter på nätet. Du
            kan du driva en riktig E-butik med möjlighet till att göra de
            viktigaste sakerna som du behöver.
          </div>
        </div>
      </section>
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[30.5px] px-[110px] text-center text-[18px] text-gray-300 font-montserrat">
        <a
          className="self-stretch relative [text-decoration:underline] tracking-[-0.32px] leading-[25.2px] font-bold text-[inherit]"
          href="mailto:aaltismann@gmail.com"
          target="_blank"
        >
          aaltismann@gmail.com
        </a>
      </section>
      <section className="self-stretch rounded-xl bg-white flex flex-col items-center justify-start py-[31px] px-0 gap-[17px] text-center text-sm text-black font-open-sans">
        <div className="self-stretch relative tracking-[10px] leading-[28px]">
          Kontakt
        </div>
        <div className="h-[52px] relative text-smi leading-[20px] font-montserrat text-dimgray-100 inline-block shrink-0">
          Anders Altmann, 48 år, bor på adressen Enlundavägen 46 Stensborg, 179
          75 i Skå. Telefonnummer 070-231 21 73
        </div>
      </section>
    </div>
  );
};
