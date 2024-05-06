import React from "react";
import {
  Card,
  CardBody,
  CardBodyProps,
  CardProps,
} from "@material-tailwind/react";


export function CardComponent(props: Partial<CardProps>) {
  return (<Card {...props as any} />);;
}

export function CardBodyComponent(props: Partial<CardBodyProps>) {
  return (<CardBody {...props as any} />);
}


export default CardComponent;
