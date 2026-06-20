import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Authentic reviews showing only Google Auth details (Name, Photo) and ordered service
const reviewsRow1 = [
  {
    id: 1,
    name: "Sarah Lindqvist",
    service: "UI/UX Design Client",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Outstanding UI/UX design. They turned our complex SaaS platform into an elegant, highly intuitive, and user-friendly product. The client dashboard is incredibly clean.",
  },
  {
    id: 2,
    name: "Michael Kross",
    service: "Video Editing Client",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The motion graphics and video editing exceeded our wildest expectations. Our high-converting ad campaigns saw an immediate 40% increase in engagement. Highly recommended!",
  },
  {
    id: 3,
    name: "David Harrison",
    service: "Web Development Client",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Incredible communication and robust web development. The final product is lightning fast, fully responsive, and the transition animations are exceptionally smooth.",
  },
];

const reviewsRow2 = [
  {
    id: 4,
    name: "Emily Rodriguez",
    service: "Video Editing Client",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "BEEONIX delivered a cinematic edit on a very tight deadline. Their attention to sound design, pacing, and color grading was absolutely flawless.",
  },
  {
    id: 5,
    name: "Alex Mercer",
    service: "Full Suite Client",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The dedicated project status tracker on their platform built so much trust. I was kept updated at every single stage from wireframe to deployment. A masterclass in client service.",
  },
  {
    id: 6,
    name: "Jessica Taylor",
    service: "Motion Graphics Client",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The custom transitions and motion templates they created saved our internal team hours. Their eye for modern design trends is truly exceptional.",
  },
];

export default function Reviews() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  // GSAP Timeline for sequential scroll reveal animations
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Triggers when the section reaches 75% of viewport height
          toggleActions: "play none none none", // Plays once on scroll enter
        },
      });

      // Step 1: Animate title block from top to bottom
      tl.fromTo(
        headerRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      );

      // Step 2: Animate cards area from bottom to top with a slight fade-in
      tl.fromTo(
        cardsRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: "power2.out" },
        "-=0.4", // Overlaps slightly with the title animation for fluidity
      );
    },
    { scope: sectionRef },
  );

  // Helper to render gold stars
  const renderStars = (rating) => (
    <div className="flex items-center gap-1">
      {[...Array(rating)].map((_, index) => (
        <svg
          key={index}
          className="h-4 w-4 fill-brand-gold text-brand-gold"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="relative w-full py-20 pb-36 bg-transparent font-body text-white overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-[20%] left-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-brand-purple/10 blur-[120px] opacity-50" />
      <div className="absolute bottom-[20%] right-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-brand-blue/10 blur-[120px] opacity-50" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header (Animated Top to Bottom) */}
        <div
          ref={headerRef}
          className="flex flex-col items-center text-center space-y-4 mb-16 opacity-0"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Client Testimonials
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl max-w-3xl leading-[1.15]">
            Trusted by creators, founders, and teams worldwide.
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            See how we help businesses transform their ideas into
            high-converting premium digital assets.
          </p>
        </div>

        {/* Bi-directional Testimonials Marquees (Animated Bottom to Top) */}
        <div ref={cardsRef} className="flex flex-col gap-8 w-full opacity-0">
          {/* Row 1: Scrolls Left to Right */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="flex w-max animate-marquee-left gap-6 py-4">
              {[...reviewsRow1, ...reviewsRow1].map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="group flex flex-col justify-between p-6 w-[280px] md:w-[350px] rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.02] hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5 card-reflect flex-shrink-0"
                >
                  <div className="space-y-4">
                    {renderStars(review.rating)}
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-6 mt-6 border-t border-white/5">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="h-10 w-10 rounded-full object-cover border border-white/10"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white group-hover:text-brand-gold transition-colors duration-300">
                        {review.name}
                      </span>
                      <span className="text-xs text-brand-gold font-medium mt-1">
                        {review.service}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolls Right to Left */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="flex w-max animate-marquee-right gap-6 py-4">
              {[...reviewsRow2, ...reviewsRow2].map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="group flex flex-col justify-between p-6 w-[280px] md:w-[350px] rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.02] hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5 card-reflect flex-shrink-0"
                >
                  <div className="space-y-4">
                    {renderStars(review.rating)}
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-6 mt-6 border-t border-white/5">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="h-10 w-10 rounded-full object-cover border border-white/10"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white group-hover:text-brand-gold transition-colors duration-300">
                        {review.name}
                      </span>
                      <span className="text-xs text-brand-gold font-medium mt-1">
                        {review.service}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
