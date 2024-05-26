import React from "react";

import CardComponent, { CardBodyComponent } from "@/components/shared/Card";
import TypographyComponent from "@/components/shared/Typography";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}


export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <CardComponent color="transparent" shadow={false}>
      <CardBodyComponent className="grid px-0">
        <TypographyComponent variant="h2" color="blue-gray" className="md:mb-2 text-lg md:text-3xl">
          {title}
        </TypographyComponent>
        <TypographyComponent className=" font-normal">{children}</TypographyComponent>
      </CardBodyComponent>
    </CardComponent>
  );
}

export default InfoCard;