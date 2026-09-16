import Hero from "../../components/Hero/Hero";
import CurveDivider from "../../components/CurveDivider/CurveDivider";
import Services from "../../components/Services/Services";
import Product from "../../components/Product/Product";
import Works from "../../components/Works/Works";
import Tools from "../../components/Tools/Tools";
import Tips from "../../components/Tips/Tips";
import Recruit from "../../components/Recruit/Recruit";
import News from "../../components/News/News";
import ContactBand from "../../components/ContactBand/ContactBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* 100vh の FV 直下に、次セクションのカーブの頂点が来る */}
      <CurveDivider direction="up" background="#faf9f7" />
      <Services />
      <CurveDivider direction="down" />
      <Product />
      <Works />
      <Tools />
      <CurveDivider direction="up" />
      <Tips />
      <CurveDivider direction="down" />
      <Recruit />
      <News />
      <ContactBand />
    </>
  );
}
