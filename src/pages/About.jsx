
import OurApproach from "../components/sections/about/OurApproach";
import OurSolution from "../components/sections/about/OurSolution";
import TeamPreview from "../components/sections/about/TeamPreview";
import WhatWeDo from "../components/sections/about/WhatWeDo";
import AboutUs from "../components/sections/shared/AboutUs";
import KeyFacts from "../components/sections/shared/KeyFacts";
import OurFaqs from "../components/sections/shared/OurFaqs";
import OurTestimonial from "../components/sections/shared/OurTestimonial";
import ScrollingTicker from "../components/sections/shared/ScrollingTicker";
import WhyChooseUs from "../components/sections/shared/WhyChooseUs";
import PageHeader from "../components/ui/PageHeader";

const About = () => {
  return (
    <>
      <PageHeader
        title="about"
        accent="us"
        current="about us"
      />

      <ScrollingTicker />

      <AboutUs />

      <OurApproach />

      <WhyChooseUs />

      <WhatWeDo />

      <KeyFacts />

      <TeamPreview />

      <OurSolution />

      <OurTestimonial />

      <OurFaqs />
    </>
  )
}

export default About