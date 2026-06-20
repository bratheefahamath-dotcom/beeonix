import React from "react";

// Importing all collaboration logos from the local assets folder
import collab1 from "../../../assets/img/Collab1.png"; // Google
import collab2 from "../../../assets/img/Collab2.webp"; // Microsoft (WebP)
import collab3 from "../../../assets/img/Collab3.png"; // Slack
import collab4 from "../../../assets/img/Collab4.png"; // HubSpot
import collab5 from "../../../assets/img/Collab5.png"; // Figma
import collab6 from "../../../assets/img/Collab6.png"; // Adobe
import collab7 from "../../../assets/img/Collab7.png"; // Asana

export default function Collab() {
  const logos = [collab1, collab2, collab3, collab4, collab5, collab6, collab7];

  return (
    <section className="relative w-full border-y border-white/5 bg-transparent py-10 font-body text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Tagline */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-gold mb-8 opacity-75">
          Powering creative assets for industry-leading brands
        </p>

        {/* Marquee Container with overflow-hidden for seamless cropping */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          {/* Marquee Inner Wrapper (Duplicates the logos array for seamless looping) */}
          <div className="flex w-max animate-marquee gap-16 md:gap-24 items-center">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner Brand Logo ${index + 1}`}
                className="h-7 md:h-9 w-auto object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
