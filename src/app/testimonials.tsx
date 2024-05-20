"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";
import TypographyComponent from "@/components/shared/Typography";


const TESTIMONIALS = [
  {
    feedback:
      "Die Kurse waren sehr hilfreich und haben mir geholfen, mich sicherer zu fühlen. Ich kann die Kurse nur weiterempfehlen.",
    client: "Ansgar S.",
    title: "Vater von einem zweijähren Sohn",
    img: "/image/avatar2.jpg",
  },
  {
    feedback:
    "Ich habe mich sehr wohl gefühlt und konnte viele neue Dinge lernen. Ich kann die Kurse nur weiterempfehlen.",
    client: "Lisa R.",
    title: "Mutter eines 6 Monate alten Babies.",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "Die Kurse waren sehr hilfreich und haben mir geholfen, mich sicherer zu fühlen. Ich kann die Kurse nur weiterempfehlen.",
    client: "Ava D.",
    title: "Zweifache Mutter",
    img: "/image/avatar3.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
            <UserIcon className="h-6 w-6" />
          </div>
          <TypographyComponent variant="h2" color="blue-gray" className="mb-2">
            Was unsere bisherigen Gruppen sagen
          </TypographyComponent>
          <TypographyComponent
            variant="lead"
            className="mb-10 max-w-3xl text-center !text-gray-600"
          >
            Wer will schon einfach einen Kurs buchen, ohne zu wissen, was ihn erwartet? <br/>
            Lass dich von anderen inspieren, die bereits an unseren Kursen teilgenommen haben.
          </TypographyComponent>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
