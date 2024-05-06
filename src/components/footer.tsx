"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";
import TypographyComponent from "@/shared/Typography";
import ButtonComponent, { IconButtonComponent } from "@/shared/ButtonComponent";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <TypographyComponent
              as="a"
              href="https://www.material-tailwind.com"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4"
            >
              Material Tailwind
            </TypographyComponent>
            <TypographyComponent color="white" className="mb-12 font-normal">
              The reward for getting on the stage is fame.
            </TypographyComponent>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <TypographyComponent
                    as="a"
                    href="#"
                    color="white"
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </TypographyComponent>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <TypographyComponent variant="h6" color="white" className="mb-3">
              Get the app
            </TypographyComponent>
            <div className="flex flex-col gap-2">
              <ButtonComponent
                color="white"
                className="flex items-center justify-center"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                App Store
              </ButtonComponent>
              <ButtonComponent
                color="white"
                className="flex items-center justify-center"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                Google Play
              </ButtonComponent>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <TypographyComponent
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Material Tailwind
            </a>{" "}
            by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Creative Tim
            </a>
            .
          </TypographyComponent>

          <div className="flex gap-2">
            <IconButtonComponent variant="text" color="white">
              <i className="fa-brands fa-twitter text-2xl not-italic opacity-75"></i>
            </IconButtonComponent>
            <IconButtonComponent variant="text" color="white">
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
            </IconButtonComponent>
            <IconButtonComponent variant="text" color="white">
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButtonComponent>
            <IconButtonComponent variant="text" color="white">
              <i className="fa-brands fa-github text-2xl not-italic opacity-75"></i>
            </IconButtonComponent>
            <IconButtonComponent variant="text" color="white">
              <i className="fa-brands fa-dribbble text-2xl not-italic opacity-75"></i>
            </IconButtonComponent>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
