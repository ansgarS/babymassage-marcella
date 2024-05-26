"use client";

import React from "react";

import {
  // CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  // LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";
import TypographyComponent from "@/components/shared/Typography";

const FEATURES = [
  {
    icon: LightBulbIcon,
    title: "Babymassage",
    children: (
      <>
        <p className="mb-4">
          Berührungen sind Nahrung für Körper, Geist und Seele
        </p>
        <p>
          Hinter den tragenden Säulen der Babymassage für unsere jüngsten
          Erdenbürger steckt die Bedeutsamkeit der Berührungen als Symbol von
          Liebe und Geborgenheit. Nicht nur für Babys, sondern für jeden
          Menschen ist der moralisch und ethisch vertretbare Austausch von
          Streicheleinheiten, Nähe und Zärtlichkeit ein elementarer Bestandteil
          des Daseins. Berührungen sind Nahrung, aber auch Balsam für die Seele,
          sie geben Vertrauen und spenden Kraft, sie lassen uns wissen, dass wir
          geliebt werden und unterstützen uns darin, selbstsicher, stark sowie
          empathisch durch das Leben zu schreiten. Die präventive Babymassage
          nutzt genau jenen Ansatz und ist das Grundgerüst einer ganzheitlich
          stabilen Entwicklung.
        </p>
        <TypographyComponent
          color="blue-gray"
          className="mb-2 mt-4 font-bold uppercase"
        >
          Ab wann?
        </TypographyComponent>
        <p>
          Das empfohlene Mindestalter für den Start der Babymassage liegt bei
          4-6 Wochen. Der Nabel sollte vollständig abgeheilt sein. Ab dem 4.
          Lebensmonat kommt es ganz auf das Kind an, ob es sich auf die
          Anwendung einlassen kann und möchte, da sich ab diesem Alter die
          Mobilität und der Bewegungsdrang immens steigert. Ein direktes
          Höchstalter findet sich bezüglich der klassischen Babymassage
          allerdings nicht. Die Entscheidung wird hier direkt vom Kind selbst
          getroffen und fällt erfahrungsgemäß sehr individuell aus.
        </p>
        <TypographyComponent
          color="blue-gray"
          className="mb-2  mt-4 font-bold uppercase"
        >
          Kosten
        </TypographyComponent>
        <p>6 Termine/Kursgebühr 89,00 €</p>
      </>
    ),
  },
  {
    icon: HeartIcon,
    title: "Elterntreffs/Krabbelgruppen",
    children: (
      <>
        <p className="mb-4">
          Zeit für dich und dein Kind - Austausch und Beisammensein
        </p>
        <p>
        Hierbei geht es um das Beisammensein und den Austausch unter „Gleichgesinnten“.  
        Ihr könnt Fragen stellen und euch gegenseitig „connecten“, das was ganz vielen Mamas 
        in der herausfordernden Zeit mit Baby/Kleinkind gut tut. Einfach wohl fühlen und Kraft 
        tanken während sich die Kleinen im „freien Spiel“ befinden. Hierfür werden selbstverständlich 
        kleinere Spielangebote bereitgelegt. 
        </p>
        <TypographyComponent
          color="blue-gray"
          className="mb-2 mt-4 font-bold uppercase"
        >
          Für welches Alter?
        </TypographyComponent>
        <p>
          Die Gruppe richtet sich an alle Kinder bis ca. 2 Jahre. Es dürfen auch die allerkleinsten mitspielen.
          Bitte beachte, dasss du alles notwendige für dein Kind dabei hast. Für Getränke und Snacks ist jedoch gesorgt.
        </p>
        <TypographyComponent
          color="blue-gray"
          className="mb-2  mt-4 font-bold uppercase"
        >
          Kosten
        </TypographyComponent>
        <p>Für diesen Treff fallen keine Kosten an</p>
      </>
    ),
  },
  // {
  //   icon: LockClosedIcon,
  //   title: "Kurs 3",
  //   children:
  //   `Kurs 3 ist ein Kurs für Eltern und Kinder, die gemeinsam lernen und wachsen möchten.
  //   Der Kurs umfasst eine Gesamtdauer von 90 Minuten und findet aktuell Dienstags und Mittwochs statt`,
  // },
  // {
  //   icon: LightBulbIcon,
  //   title: "Kurs 4",
  //   children:
  //   `Kurs 4 ist ein Kurs für Eltern und Kinder, die gemeinsam lernen und wachsen möchten.
  //   Der Kurs umfasst eine Gesamtdauer von 90 Minuten und findet aktuell Dienstags und Mittwochs statt`,
  // },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <TypographyComponent
          color="blue-gray"
          className="mb-2 font-bold uppercase"
        >
          Dein Weg zu uns
        </TypographyComponent>
        <TypographyComponent
          id="course-offers"
          variant="h1"
          color="blue-gray"
          className="mb-4"
        >
          Unsere Kursangebote
        </TypographyComponent>
        <TypographyComponent
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Im folgenden findest du eine Übersicht unserer Kursangebote. Die
          angebotetenen Kurse richten sich grundsätzlich an beide Elternteile
          mit Kindern. Bei Fragen schreib uns doch gerne eine Nachricht.
        </TypographyComponent>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
