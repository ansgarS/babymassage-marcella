"use client";

// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Feature from "./courses";
import CourseLocation from "./course-location";
import Testimonials from "./testimonials";
import Faqs from "./faqs";
import { CourseBookingModal } from "@/components/Coursebooking";
import { useState } from "react";
import { PhoneContact } from "@/components/PhoneContact";

export default function Homepage() {
  const [showCourseBookingModal, setShowCourseBookingModal] = useState(false);
  const [showPhoneContact, setShowPhoneContact] = useState(false);

  console.log("Show phone contact", showPhoneContact)
  return (
    <>
      <Navbar requestPhoneContact={() => setShowPhoneContact(true)} />
      <PhoneContact
        open={showPhoneContact}
        closeModal={() => setShowPhoneContact(false)}
      />
      <CourseBookingModal
        showCourseBookingModal={showCourseBookingModal}
        closeModal={() => setShowCourseBookingModal(false)}
      />
      <Hero requestCourseBooking={() => setShowCourseBookingModal(true)} requestPhoneContact={() => setShowPhoneContact(true)} />
      <Feature />
      <CourseLocation />
      <Testimonials />
      <Faqs />
      <Footer requestCourseBooking={() => setShowCourseBookingModal(true)} requestPhoneContact={() => setShowPhoneContact(true)} />
    </>
  );
}
