import AboutUs from "@/components/about-us";
import Contact from "@/components/contact";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Education from "@/components/education";
import Team from "@/components/team";
import Values from "@/components/values";
import WhatWeDo from "@/components/what-we-do";

export default function Home() {
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
