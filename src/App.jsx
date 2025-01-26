import React from "react";
import RootLayout from "./RootLayout/Layout";
import {
  Action,
  AboutUs,
  Experience,
  FAQ,
  HeroSection,
  HowItWorks,
  SocialProofs,
  WhyChooseUs,
} from "./component/containers";

const App = () => {
  return (
    <RootLayout>
      <HeroSection />
      <Action />
      <WhyChooseUs />
      <Experience />
      <SocialProofs />
      <AboutUs />
      <HowItWorks />
      <FAQ />
    </RootLayout>
  );
};

export default App;
