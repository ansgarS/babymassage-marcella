import React from "react";
import {
  Card,
  CardBody,
  CardBodyProps,
  CardProps,
} from "@material-tailwind/react";

export const CardComponent = Card as unknown as React.FC<Partial<CardProps>>;
export const CardBodyComponent = CardBody as unknown as React.FC<Partial<CardBodyProps>>


export default CardComponent;
