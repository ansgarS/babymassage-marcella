import { Avatar, AvatarProps, Typography, TypographyProps } from "@material-tailwind/react";

export function TypographyComponent(props: Partial<TypographyProps>) {
    return (<Typography {...props as any} />);
  }
  
  
  export default TypographyComponent;