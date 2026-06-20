import React from "react";
import logo from "../assets/img/Logo-1.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/5 bg-[#05010a]/40 py-16 font-body text-white backdrop-blur-sm">
      {/* Subtle bottom-center glow directly inside footer container for extra depth */}
      <div className="absolute bottom-0 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-[100px] opacity-75" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="BEEONIX Symbol" className="h-8 w-auto" />
              <span className="font-heading text-lg font-extrabold tracking-widest text-white uppercase select-none">
                BEEONIX
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              We create high-converting, premium digital experiences through
              cutting-edge video editing, motion graphics, UI/UX, and web
              development.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="transition-colors hover:text-brand-gold">
                {/* Twitter / X Icon */}
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="transition-colors hover:text-brand-gold">
                {/* LinkedIn Icon */}
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>
              <a href="#" className="transition-colors hover:text-brand-gold">
                {/* Dribbble Icon */}
                <svg
                  className="h-5 w-5 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8.5 2.5c3 4 5.5 8 5.5 13.5M2 12c7.5-1.5 13-1 20-3.5M5 19c6-5.5 11.5-6.5 17-3.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-gold">
              Services
            </span>
            <ul className="flex flex-col space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-white"
                >
                  Video Editing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-white"
                >
                  Motion Graphics
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-white"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-white"
                >
                  Web Development
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-gold">
              Company
            </span>
            <ul className="flex flex-col space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#company"
                  className="transition-colors hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="transition-colors hover:text-white"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="transition-colors hover:text-white"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-gold">
              Stay Updated
            </span>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for curated design inspiration and
              case studies.
            </p>
            {/* Input Form with gold accent focus states */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-brand-gold px-4 py-2.5 text-xs font-bold text-[#0a0212] hover:bg-yellow-400 transition-colors cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Policy Links */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/5 pt-8 text-xs text-gray-500 sm:flex-row">
          <p>© {currentYear} BEEONIX. All rights reserved.</p>
          <div className="mt-4 flex items-center gap-6 sm:mt-0">
            <a
              href="#privacy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
