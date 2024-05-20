"use client";

import React from "react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";
import TypographyComponent from "@/components/shared/Typography";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Kurs 1",
    children:
      `Kurs 1 ist ein Kurs für Eltern und Kinder, die gemeinsam lernen und wachsen möchten.
      Der Kurs umfasst eine Gesamtdauer von 90 Minuten und findet aktuell Dienstags und Mittwochs statt`,
  },
  {
    icon: HeartIcon,
    title: "Kurs 2",
    children:
    `Kurs 2 ist ein Kurs für Eltern und Kinder, die gemeinsam lernen und wachsen möchten.
    Der Kurs umfasst eine Gesamtdauer von 90 Minuten und findet aktuell Dienstags und Mittwochs statt`,
  },
  {
    icon: LockClosedIcon,
    title: "Kurs 3",
    children:
    `Kurs 3 ist ein Kurs für Eltern und Kinder, die gemeinsam lernen und wachsen möchten.
    Der Kurs umfasst eine Gesamtdauer von 90 Minuten und findet aktuell Dienstags und Mittwochs statt`,
  },
  {
    icon: LightBulbIcon,
    title: "Kurs 4",
    children:
    `Kurs 4 ist ein Kurs für Eltern und Kinder, die gemeinsam lernen und wachsen möchten.
    Der Kurs umfasst eine Gesamtdauer von 90 Minuten und findet aktuell Dienstags und Mittwochs statt`,
  },
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
