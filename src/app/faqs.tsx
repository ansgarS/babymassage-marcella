"use client";

import React from "react";
import TypographyComponent from "@/components/shared/Typography";
import CardComponent from "@/components/shared/Card";

const FAQS = [
  {
    title: "Wie alt sollte mein Kind mindestens sein?",
    desc: "Unsere Kurse richten sich grundsätzlich an Kinder ab einem Alter von 4 Monaten. Je nach Kurs variiert das Mindestalter jedoch",
  },
  {
    title: "Kann ich zu einem Schnupperkurs kommen bevor ich mich entscheide?",
    desc: "Ja, wir bieten regelmäßig Schnupperkurse an, damit du dir ein Bild von unserem Angebot machen kannst. Melde dich einfach bei uns und wir vereinbaren einen Termin.",
  },
  {
    title: "Wie kann ich Feedback an die Kursleitung geben?",
    desc: "Wir freuen uns über jedes Feedback, das wir von unseren Teilnehmern erhalten. Du kannst uns jederzeit eine E-Mail schreiben oder uns während der Kurse persönlich ansprechen.",
  },
  {
    title: "Kann ich meine Kursbuchung stornieren?",
    desc: "Ja, du kannst deine Kursbuchung bis zu 24 Stunden vor Kursbeginn stornieren. Bitte beachte, dass wir bei späteren Stornierungen eine Gebühr erheben.",
  },
  {
    title: "Können Vater und Mutter gemeinsam mit Kind an einem Kurs teilnehmen?",
    desc: "Ja, unsere Kurse richten sich an beide Elternteile. Wir freuen uns über jede Familie, die gemeinsam an unseren Kursen teilnimmt.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <TypographyComponent variant="h1" color="blue-gray" className="mb-4">
            Häufig gestellte Fragen
          </TypographyComponent>
          <TypographyComponent
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
          >
            Ist deine Frage nicht dabei? Dann lass uns in Kontakt treten.
          </TypographyComponent>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <CardComponent key={title} shadow={false} color="transparent">
              <TypographyComponent color="blue-gray" className="pb-6" variant="h4">
                {title}
              </TypographyComponent>
              <div className="pt-2">
                <TypographyComponent className="font-normal !text-gray-500">
                  {desc}
                </TypographyComponent>
              </div>
            </CardComponent>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
