import React from "react";
import { Avatar, AvatarProps } from "@material-tailwind/react";

export const AvatarComponent = Avatar as unknown as React.FC<
  Partial<AvatarProps>
>;

export default AvatarComponent;
