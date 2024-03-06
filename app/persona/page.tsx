
import Persona from "@/components/Persona";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page ",
  description: "This is About Page ",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <ScrollUp />
      <Persona />
    </>
  );
};

export default AboutPage;
