import { ButtonProps, IconButton, IconButtonProps } from "@material-tailwind/react";

export function ButtonComponent(props: Partial<ButtonProps>) {
  return <ButtonComponent {...(props as any)} />;
}

export function IconButtonComponent(props: Partial<IconButtonProps>) {
    return <IconButton {...(props as any)} />;
}

export default ButtonComponent;
