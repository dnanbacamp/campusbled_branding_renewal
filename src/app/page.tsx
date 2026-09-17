import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { CaseStories } from "@/components/CaseStories";
import { GettingStarted } from "@/components/GettingStarted";
import { News } from "@/components/News";
import { Careers } from "@/components/Careers";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStories />
        <GettingStarted />
        <News />
        <Careers />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
