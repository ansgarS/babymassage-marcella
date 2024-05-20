// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Feature from "./courses";
import CourseLocation from "./course-location";
import Testimonials from "./testimonials";
import Faqs from "./faqs";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <CourseLocation />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
}
