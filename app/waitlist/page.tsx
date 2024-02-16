import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import NewsLatterBox from "../../components/Contact/Waitlist";
export const metadata: Metadata = {
  title: "Waitlist Page ",
  description: "This is Waitlist Page.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Waitlist Page"
        description="Join our Kanteen waitlist to put your restaurant on the food map! This exclusive opportunity connects you with our cutting-edge, AI-powered promotional tools, designed to elevate your visibility and draw in a dedicated foodie crowd. Secure your spot now to be among the first we partner with, amplifying your reach and filling your tables. Don't let this chance to boost your restaurant's profile pass by."
      />

      <NewsLatterBox />
    </>
  );
};

export default ContactPage;
