"use client";

import Image from "next/image";
import TypographyComponent from "@/components/shared/Typography";
import ButtonComponent from "@/components/shared/ButtonComponent";

function Hero(props: { requestCourseBooking: VoidFunction, requestPhoneContact: VoidFunction }) {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-primary px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1 pl-2">
            <TypographyComponent
              id="top-of-site"
              variant="h1"
              color="white"
              className="mb-4"
            >
              Zwergenstube <br /> Lahnstein
            </TypographyComponent>
            <TypographyComponent
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Hey, ich bin Marcella, staatlich anerkannte Erzieherin und selbst
              Mutter zweier Töchter. In meiner Zwergenstube findest du jede
              Menge Kurse für dich und dein Kind.
            </TypographyComponent>
            <TypographyComponent className="mb-4" color="white" variant="h6">
              Mit wenigen Klicks buchen
            </TypographyComponent>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <ButtonComponent
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                onClick={() => props.requestCourseBooking()}
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
                onClick={() => props.requestPhoneContact()}
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
            priority={true}
            src="/logos/logo-zwergenstube.png"
            alt="Zwergenstube Logo Gross"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <TypographyComponent
            id="ueber-uns"
            variant="h3"
            color="blue-gray"
            className="mb-3"
          >
            Über uns
          </TypographyComponent>
          <TypographyComponent
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-8/12"
          >
            Ich bin Marcella Tarricone, staatl. Anerkannte Erzieherin und selbst Mutter zweier Töchter. 
            Während meiner Tätigkeit als Erzieherin absolvierte ich eine Ausbildung zur Heilpraktikerin 
            für Psychotherapie und zur Kursleiterin für Babymassage. Ich arbeite leidenschaftlich gerne 
            am Menschen, insbesondere mit Kindern und (werdenden) Mütter zusammen und habe genau aus diesem 
            Grund 2024 den Schritt in die Selbstständigkeit gewagt. Mit meinem Kursangebot möchte ich frischgebackenen 
            Eltern auf ihrem Weg begleiten und den Rahmen für schöne und intensive Momente schaffen.
          </TypographyComponent>
        </div>
      </div>
    </div>
  );
}
export default Hero;
