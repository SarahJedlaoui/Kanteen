
import Persona from "@/components/Persona";
import Restaurant from "@/components/Persona/restau";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tokyo Hot Fried Chicken Page",
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
