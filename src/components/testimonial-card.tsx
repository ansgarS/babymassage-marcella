import React from "react";
import CardComponent, { CardBodyComponent } from "@/components/shared/Card";
import AvatarComponent from "@/components/shared/Avatar";
import TypographyComponent from "@/components/shared/Typography";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    <CardComponent shadow={false} className="items-center text-center">
      <CardBodyComponent>
        <AvatarComponent src={img} className="mb-3" alt={client} size="lg" />
        <TypographyComponent variant="h6" color="blue-gray">
          {client}
        </TypographyComponent>
        <TypographyComponent variant="small" className="mb-3 font-medium !text-gray-700">
          {title}
        </TypographyComponent>
        <TypographyComponent
          variant="paragraph"
          className="mb-5 font-normal !text-gray-500"
        >
          &quot;{feedback}&quot;
        </TypographyComponent>
      </CardBodyComponent>
    </CardComponent>
  );
}

export default TestimonialCard;