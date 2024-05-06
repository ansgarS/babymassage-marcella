"use client";

import Image from "next/image";
import TypographyComponent from "@/components/shared/Typography";
import ButtonComponent from "@/components/shared/ButtonComponent";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-primary px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <TypographyComponent variant="h1" color="white" className="mb-4">
              Marcellas <br /> Babymassage
            </TypographyComponent>
            <TypographyComponent
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Hier eine Kurzbeschreibung deiner Dienstleistungen.
              Ein zweiter Satz passt auch noch hin.
            </TypographyComponent>
            <TypographyComponent className="mb-4" color="white" variant="h6">
              Mit wenigen Klicks buchen
            </TypographyComponent>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <ButtonComponent
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/umschlag.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Kursbuchung
              </ButtonComponent>
              <ButtonComponent
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/anruf.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Kontakt
              </ButtonComponent>
            </div>
          </div>
          <Image
            width={570}
            height={576}
            src="/image/babymassage_hero_2.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <TypographyComponent variant="h3" color="blue-gray" className="mb-3">
            Kurs Essentials
          </TypographyComponent>
          <TypographyComponent
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Hier ein Text zu den Kursen. Hier ein Text zu den Kursen. Hier ein
            Text zu den Kursen. Hier ein Text zu den Kursen. Hier ein Text zu den
            Kursen. 
          </TypographyComponent>
        </div>
      </div>
    </div>
  );
}
export default Hero;
