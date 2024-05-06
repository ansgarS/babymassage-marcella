import React from "react";
import { Navbar, NavbarProps } from "@material-tailwind/react";

export const NavbarComponent = Navbar as unknown as React.FC<
  Partial<NavbarProps>
>;

export default NavbarComponent;
