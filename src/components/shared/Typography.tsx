import { Typography, TypographyProps } from "@material-tailwind/react";
import React from "react";

export const TypographyComponent = Typography as unknown as React.FC<
  Partial<TypographyProps>
>;

export default TypographyComponent;
