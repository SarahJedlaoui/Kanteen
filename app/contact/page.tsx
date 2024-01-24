import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "This is Contact Page.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with us to explore how we can elevate your restaurant's social media impact. Our team is eager to assist you in creating content that not only captures attention but also amplifies your brand's voice. Connect with us today, and let's start crafting those unforgettable stories for your restaurant."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
