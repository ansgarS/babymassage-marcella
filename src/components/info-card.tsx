import React from "react";

import CardComponent, { CardBodyComponent } from "@/shared/Card";
import TypographyComponent from "@/shared/Typography";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}


export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <CardComponent color="transparent" shadow={false}>
      <CardBodyComponent className="grid px-0">
        <TypographyComponent variant="h2" color="blue-gray" className="mb-2">
          {title}
        </TypographyComponent>
        <TypographyComponent className=" font-normal">{children}</TypographyComponent>
      </CardBodyComponent>
    </CardComponent>
  );
}

export default InfoCard;