import AboutUs from "@/components/about-us";
import Contact from "@/components/contact";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Education from "@/components/education";
import Team from "@/components/team";
import Values from "@/components/values";
import WhatWeDo from "@/components/what-we-do";
import { getContacts } from "@/components/contact/action";
import NewHeader from "@/components/header/new";

export default async function Home() {
  const { data } = await getContacts();
  return (
    <>
      <NewHeader />
      <AboutUs />
      <WhatWeDo />
      <Education />
      <Team />
      <Values />
      <Faqs />
      <div id="contact_scroll">
        <br />
      </div>
      <Contact />
      <Footer />
    </>
  );
}
