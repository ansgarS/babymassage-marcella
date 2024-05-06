import React from "react";
import {
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
} from "@material-tailwind/react";

export const ButtonComponent = Button as unknown as React.FC<
  Partial<ButtonProps>
>;
export const IconButtonComponent = IconButton as unknown as React.FC<
  Partial<IconButtonProps>
>;

export default ButtonComponent;
