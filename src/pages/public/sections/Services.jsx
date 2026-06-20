import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import VideoEditingImage from "../../../assets/img/Video Editing.jpg";
import MotionGraphicsImage from "../../../assets/img/Motion Graphics.jpg";
import UIUXDesignImage from "../../../assets/img/UIUX Design.jpg";
import WebDevelopmentImage from "../../../assets/img/Web Development.jpg";
import MobileAppsImage from "../../../assets/img/Mobile Apps.jpg";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Exactly 5 services with curated high-quality cover images
const services = [
  {
    id: "01",
    title: "Video Editing",
    image: VideoEditingImage,
    text: "Cinematic pacing, expert color grading, advanced sound design, and premium edits tailored to capture your audience.",
  },
  {
    id: "02",
    title: "Motion Graphics",
    image: MotionGraphicsImage,
    text: "High-impact transitions, custom intro templates, 3D title reveals, and custom animations to elevate your videos.",
  },
  {
    id: "03",
    title: "UI/UX Design",
    image: UIUXDesignImage,
    text: "Beautiful, clean, and user-centric web and mobile interfaces designed on Figma to maximize usability and conversions.",
  },
  {
    id: "04",
    title: "Web Development",
    image: WebDevelopmentImage,
    text: "Lightning-fast, responsive web applications built with React, Tailwind CSS v4, and clean scalable architectures.",
  },
  {
    id: "05",
    title: "Mobile Apps",
    image: MobileAppsImage,
    text: "Sleek and robust cross-platform iOS and Android mobile app interfaces with smooth native integrations.",
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const scrollRef = useRef(null);
  const targetX = useRef(0); // Persistent accumulator to store destination scroll offset smoothly

  // GSAP Timeline for deliberate, sequential scroll reveal animations
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%", // Triggers when the section is comfortably inside the viewport (65% from top)
          toggleActions: "play none none none", // Plays once on scroll enter
        },
      });

      // Step 1: Left title column slides up gracefully (y: 40 to y: 0)
      tl.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      );

      // Step 2: Individual cards slide in from the right one-by-one (stagger)
      // This completely removes the sudden blocky movement for ultra-smooth fluid flow
      const cards = gsap.utils.toArray(".service-card");
      tl.fromTo(
        cards,
        { x: 120, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.3, stagger: 0.15, ease: "power4.out" },
        "-=0.4",
      );
    },
    { scope: containerRef },
  );

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Sync accumulator state if scrolled outside GSAP (e.g. manual touch swipe on mobile)
    const handleScrollSync = () => {
      if (!gsap.isTweening(container)) {
        targetX.current = container.scrollLeft;
      }
    };

    // Smooth horizontal scroll handler using GSAP's high-performance tween engine
    const handleWheel = (e) => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const isAtStart = container.scrollLeft === 0;
      const isAtEnd =
        Math.ceil(container.scrollLeft + container.clientWidth) >=
        container.scrollWidth;

      // Intercept only when horizontally scrolling between boundaries
      if ((e.deltaY > 0 && !isAtEnd) || (e.deltaY < 0 && !isAtStart)) {
        e.preventDefault();

        // Increment target destination offset based on wheel delta
        targetX.current += e.deltaY * 1.5;
        targetX.current = Math.max(0, Math.min(targetX.current, maxScroll));

        // GSAP animate scrollLeft to the independent accumulated destination
        gsap.to(container, {
          scrollLeft: targetX.current,
          duration: 0.8, // Elegant momentum deceleration
          ease: "power3.out",
          overwrite: "auto",
        });
      }
    };

    // Bind wheel listener strictly on mouse hover interaction
    const handleMouseEnter = () => {
      targetX.current = container.scrollLeft; // Sync on enter
      container.addEventListener("wheel", handleWheel, { passive: false });
    };

    const handleMouseLeave = () => {
      container.removeEventListener("wheel", handleWheel);
    };

    container.addEventListener("scroll", handleScrollSync);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("scroll", handleScrollSync);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 bg-transparent overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-[30%] left-[-10%] -z-10 h-[450px] w-[450px] rounded-full bg-brand-purple/10 blur-[130px] opacity-40" />

      {/* Two-Division Layout Wrapper */}
      <div className="mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-7xl px-6 md:px-12 gap-10 lg:gap-12">
        {/* Division 1: Left Sticky Title Column */}
        <div
          ref={titleRef}
          className="w-full lg:w-[400px] flex flex-col space-y-6 flex-shrink-0 opacity-0"
        >
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Our Expertise
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Services <br className="hidden lg:block" /> We Provide.
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              We design, craft, and build top-tier creative digital assets to
              scale your business presence and revenue.
            </p>
          </div>

          {/* User Interaction Guide Badge */}
          <div className="flex items-center gap-2 text-xs text-brand-gold bg-brand-gold/10 border border-brand-gold/20 py-2.5 px-4 rounded-full w-fit animate-pulse select-none">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <rect x="5" y="2" width="14" height="20" rx="7" />
              <path d="M12 6v4" />
            </svg>
            <span>Hover & scroll on cards to explore services</span>
          </div>
        </div>

        {/* Division 2: Right Cards Row (Staggered fade-in on entry with custom dimensions & gold hover glow) */}
        <div
          ref={scrollRef}
          className="w-full lg:max-w-[calc(100vw-540px)] flex gap-6 md:gap-8 overflow-x-auto scrollbar-none py-10 pb-28 pr-12 flex-shrink-0"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card relative w-[260px] md:w-[300px] h-[380px] md:h-[430px] rounded-3xl overflow-hidden flex-shrink-0 card-reflect border border-white/10 bg-white/[0.01] backdrop-blur-sm group hover:border-brand-gold/40 hover:bg-white/[0.02] hover:shadow-[0_0_30px_rgba(225,176,69,0.15)] transition-all duration-500 cursor-pointer opacity-0"
            >
              {/* 100% Covered Background Image with hover zoom */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Rich dark overlay gradient for maximum text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05010a] via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Content Container (Absoluted at the bottom) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                {/* Sliding Content Wrapper (Moves up on hover to reveal the description) */}
                <div className="transform transition-transform duration-500 ease-out translate-y-16 group-hover:translate-y-0">
                  {/* Service Number */}
                  <div className="text-[10px] font-bold tracking-widest text-brand-gold font-heading uppercase mb-1">
                    Service {service.id}
                  </div>

                  {/* Service Title */}
                  <h3 className="font-heading text-lg md:text-xl font-bold text-white transition-colors duration-300 group-hover:text-brand-gold">
                    {service.title}
                  </h3>

                  {/* Service Description (Fades in on hover) */}
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light mt-3 opacity-0 transition-opacity duration-500 delay-75 group-hover:opacity-100">
                    {service.text}
                  </p>

                  {/* Accent Underline */}
                  <div className="w-8 h-[2px] bg-brand-purple mt-4 transition-all duration-300 group-hover:w-full group-hover:bg-brand-gold" />
                </div>
              </div>
            </div>
          ))}

          {/* Trailing Spacer Element to prevent the 5th card from getting clipped */}
          <div className="w-16 lg:w-32 flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
