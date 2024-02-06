import AboutUs from "@/components/about-us";
import Contact from "@/components/contact";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Education from "@/components/education";
import Team from "@/components/team";
import Values from "@/components/values";
import WhatWeDo from "@/components/what-we-do";
import { getContacts } from "@/components/contact/action";

export default async function Home() {
  const { data } = await getContacts();
  console.log(data);
  return (
    <>
      <Header />
      <AboutUs />
      <WhatWeDo />
      <Education />
      <Team />
      <Values />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
}
