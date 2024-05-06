import { Avatar, AvatarProps } from "@material-tailwind/react";

export function AvatarComponent(props: Partial<AvatarProps>) {
    return (<Avatar {...props as any} />);
  }
  
  
  export default AvatarComponent;