import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import NewsLatterBox from "../components/Contact/Waitlist";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kanteen",
  description: "Our Al Content Creator Transforms Your Phone Videos into Captivating Stories for Your Restaurant s Social Media.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree/>
    
    </>
  );
}
