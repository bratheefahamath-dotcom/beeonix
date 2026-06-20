import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// List of realistic FAQ items tailored for BEEONIX services and workflow
const faqData = [
  {
    id: 1,
    question: "What creative services does BEEONIX offer?",
    answer:
      "We offer a fully integrated suite of creative digital services including high-end video editing, custom motion graphics (templates, intros, 3D reveals), intuitive UI/UX interface design, and lightning-fast web development (using modern frameworks like React and Tailwind CSS).",
  },
  {
    id: 2,
    question: "How do I track the progress of my project?",
    answer:
      "Once you sign up and start a project, you will receive access to your secure Client Dashboard. Here, you can view your live project timeline, check real-time status updates (e.g., 'In Progress', 'Under Review', 'Delivered'), and chat directly with your assigned project in-charge.",
  },
  {
    id: 3,
    question: "What is your typical turnaround time?",
    answer:
      "Turnaround time varies based on the complexity of the service. On average, standard motion graphics and video editing tasks take between 24 to 72 hours, while full UI/UX design and custom web development projects range from 1 to 3 weeks.",
  },
  {
    id: 4,
    question: "How do revisions and feedback cycles work?",
    answer:
      "We offer a transparent feedback process. You can submit your revision requests directly through the Client Dashboard or chat portal. We provide unlimited minor adjustments and structured revision rounds to ensure the final assets align perfectly with your creative vision.",
  },
  {
    id: 5,
    question: "What is your payment structure?",
    answer:
      "We follow a milestone-based payment structure. To initiate work on any project, we require a standard 50% advance payment. The remaining 50% is due once the final product is approved by you and ready for delivery through your dashboard.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  // GSAP Timeline for staggered reveal animations on scroll
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Triggers when the section top reaches 75% of viewport height
          toggleActions: "play none none none", // Plays once
        },
      });

      // Step 1: Animate title header from bottom to top (y: 40 to y: 0)
      tl.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      );

      // Step 2: Animate each FAQ card one after another (stagger) from bottom to top
      const faqItems = gsap.utils.toArray(".faq-item");
      tl.fromTo(
        faqItems,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15, // 0.15s delay between each card's entry
          ease: "power2.out",
        },
        "-=0.4", // Slight overlap with header animation for fluid motion
      );
    },
    { scope: sectionRef },
  );

  // Toggle active accordion index
  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open selected
    }
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative w-full py-20 bg-transparent font-body text-white overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-[40%] right-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-brand-purple/10 blur-[130px] opacity-40" />
      <div className="absolute bottom-[10%] left-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-brand-blue/10 blur-[120px] opacity-45" />

      <div className="mx-auto max-w-4xl px-6 md:px-12">
        {/* Section Header (Animated Bottom to Top) */}
        <div
          ref={headerRef}
          className="flex flex-col items-center text-center space-y-4 mb-16 opacity-0"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            FAQ
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl leading-[1.15] text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            Got questions about our services or workflow? Find answers to
            commonly asked questions below.
          </p>
        </div>

        {/* Accordion List (Staggered Animation Items) */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="faq-item rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.03] overflow-hidden opacity-0"
              >
                {/* Accordion Question Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-heading text-sm md:text-base font-semibold text-white hover:text-brand-gold transition-colors duration-300 cursor-pointer focus:outline-none"
                >
                  <span>{faq.question}</span>

                  {/* Rotating Indicator Arrow / Icon */}
                  <span className="ml-4 flex-shrink-0">
                    <svg
                      className={`h-5 w-5 text-brand-gold transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Accordion Answer Content (Collapsible Height transition) */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[500px] opacity-100 border-t border-white/5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 text-xs md:text-sm text-gray-400 leading-relaxed font-light bg-black/[0.05]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
