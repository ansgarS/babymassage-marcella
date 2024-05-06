import React from "react";
import { Collapse } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import TypographyComponent from "@/shared/Typography";
import NavbarComponent from "@/shared/Navbar";
import ButtonComponent, { IconButtonComponent } from "@/shared/ButtonComponent";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <TypographyComponent
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
      >
        {children}
      </TypographyComponent>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarComponent
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <TypographyComponent
          as="a"
          href="https://www.material-tailwind.com"
          target="_blank"
          variant="h6"
          color={isScrolling ? "gray" : "white"}
        >
          HIER LOGO EINFÜGEN
        </TypographyComponent>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem>Kurse</NavItem>
          <NavItem>Kursort</NavItem>
          <NavItem>Kosten</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <IconButtonComponent
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-twitter text-base" />
          </IconButtonComponent>
          <IconButtonComponent
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButtonComponent>
          <IconButtonComponent
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButtonComponent>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <ButtonComponent color={isScrolling ? "pink" : "white"} size="sm">
              Kontakt
            </ButtonComponent>
          </a>
        </div>
        <IconButtonComponent
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButtonComponent>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
            <NavItem href="https://www.material-tailwind.com/docs/react/installation">
              Docs
            </NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <IconButtonComponent variant="text" color="gray" size="sm">
              <i className="fa-brands fa-twitter text-base" />
            </IconButtonComponent>
            <IconButtonComponent variant="text" color="gray" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </IconButtonComponent>
            <IconButtonComponent variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButtonComponent>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <ButtonComponent color="gray" size="sm" className="ml-auto">
                Blocks
              </ButtonComponent>
            </a>
          </div>
        </div>
      </Collapse>
    </NavbarComponent>
  );
}

export default Navbar;
