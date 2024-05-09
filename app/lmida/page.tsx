
import Persona from "@/components/Persona";
import Restaurant from "@/components/Persona/restaurant";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lmida Page",
  description: "This is Restaurant Page ",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <ScrollUp />
      <Restaurant />
    </>
  );
};

export default AboutPage;
