import React from "react";
import Hero from "./sections/Hero";
import Reviews from "./sections/Reviews";
import Collab from "./sections/Collab";
import Services from "./sections/Services";
import FAQ from "./sections/FAQ";

export default function Home() {
  return (
    <div className="w-full">
      {/* Home Page Sections */}
      <Hero />

      <Reviews />

      <Collab/>

      <Services/>

      <FAQ/>
      {/* <FAQ /> */}
    </div>
  );
}
