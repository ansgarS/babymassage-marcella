"use client";
import Image from "next/image";
import TypographyComponent from "@/components/shared/Typography";
import ButtonComponent, {
  IconButtonComponent,
} from "@/components/shared/ButtonComponent";

const LINKS = [
  { id: "#top-of-site", title: "Start" },
  { id: "#ueber-uns", title: "Über uns" },
  { id: "#course-offers", title: "Kurse" },
  { id: "#course-location", title: "Kursort" },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer(props: {
  requestCourseBooking: VoidFunction;
  requestPhoneContact: VoidFunction;
}) {
  const scrollTo = (ref: string) => {
    const section = document.querySelector(ref);
    section?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

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
              Zwergenstube Lahnstein
            </TypographyComponent>
            <TypographyComponent color="white" className="mb-12 font-normal">
              Sinnliche Momente mit deinem Baby und dir.
            </TypographyComponent>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li onClick={() => scrollTo(link.id)} key={link.id}>
                  <TypographyComponent
                    color="white"
                    className={`cursor-pointer py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link.title}
                  </TypographyComponent>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <TypographyComponent variant="h6" color="white" className="mb-3">
              Buche deine Erlebnis
            </TypographyComponent>
            <div className="flex flex-col gap-2">
              <ButtonComponent
                color="white"
                className="flex items-center justify-center gap-3"
                onClick={props.requestCourseBooking}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/umschlag.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Buchung
              </ButtonComponent>
              <ButtonComponent
                color="white"
                className="flex items-center justify-center gap-3"
                onClick={props.requestPhoneContact}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/anruf.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Kontakt
              </ButtonComponent>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <TypographyComponent
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} Made with ❤️ by{" "}
            <a href="https://www.ansgar-sachs.de" target="_blank">
              Ansgar
            </a>
            .
          </TypographyComponent>

          <div className="flex gap-2">
            <TypographyComponent
              as="a"
              href="/imprint.html"
              color="white"
              className={`cursor-pointer py-1 font-medium transition-colors`}
            >
              Impressum
            </TypographyComponent>
            <IconButtonComponent variant="text" color="white">
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
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
