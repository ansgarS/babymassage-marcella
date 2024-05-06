import { Navbar, NavbarProps } from "@material-tailwind/react";

export function NavbarComponent(props: Partial<NavbarProps>) {
  return <Navbar {...(props as any)} />;
}

export default NavbarComponent;
