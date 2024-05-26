"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import TypographyComponent from "@/components/shared/Typography";

const OPTIONS = [
  {
    title: "Verpflegung",
    description: "Für kleinere Snacks und Getränke ist gesorgt",
  },
  {
    title: "Kindgerecht",
    description: "Still- und Wickelraum verfügbar",
  },
  {
    title: "Geöffnet",
    description: "2h Stunden am Tag",
  },
  {
    title: "Professionell",
    description: "Geleitet durch gut geschultes Personal",
  },
];

export function CourseLocation() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={256}
          height={256}
          src="/image/course-location.jpeg"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12 blur-sm"
          alt="Kursort"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <TypographyComponent
            id="course-location"
            variant="h2"
            color="blue-gray"
            className="mb-4"
          >
            Der Kursort
          </TypographyComponent>
          <TypographyComponent
            variant="lead"
            className="mb-5 px-4 text-left  text-xl !text-gray-800 lg:px-0  "
          >
            Zwergenstube Lahnstein (Kursraum) <br />
            Adolfstraße 99 <br />
            56112 Lahnstein <br />
          </TypographyComponent>
          <TypographyComponent
            variant="lead"
            className="mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  "
          >
            Eine Wohlfühloase für Groß und Klein
          </TypographyComponent>

          <div className="col-span-1 md:col-span-2 grid gap-1 md:gap-5 grid-cols-1 md:grid-cols-2 ">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default CourseLocation;
