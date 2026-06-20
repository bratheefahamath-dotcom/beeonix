import React from "react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen lg:h-screen lg:min-h-0 w-full flex-col justify-center bg-transparent font-body text-white py-12 pt-24 pb-12 lg:py-0">
      {/* Main Hero Wrapper */}
      <div className="mx-auto flex w-full max-w-7xl items-center px-6 md:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Side Content */}
          <div className="flex flex-col space-y-4 lg:col-span-6">
            <span className="inline-flex w-fit items-center rounded-full bg-brand-purple/20 border border-brand-purple/30 px-3 py-1 text-[10px] md:text-xs font-semibold tracking-wider text-purple-300 uppercase">
              Premium Creative Services for Brands & Businesses
            </span>

            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-[2.6rem] xl:text-[3.2rem] leading-[1.15]">
              Stop wasting time on <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-pink-500 to-brand-gold">
                mediocre designs.
              </span>{" "}
              <br />
              Get digital assets that actually convert.
            </h1>

            <div className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed max-w-[500px]">
              <p>
                <strong className="text-brand-gold font-semibold">
                  The Struggle:
                </strong>{" "}
                Slow delivery, boring templates, and video edits that lack the
                "wow" factor.
              </p>
              <p>
                <strong className="text-brand-gold font-semibold">
                  The BEEONIX Solution:
                </strong>{" "}
                Custom UI/UX, premium motion graphics, video editing, and web
                development to scale your brand.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button className="rounded-full bg-gradient-to-r from-brand-purple to-brand-blue hover:from-purple-600 hover:to-blue-700 px-6 py-3 text-sm font-bold text-white transition-all hover:shadow-lg hover:shadow-brand-purple/20 active:scale-95 cursor-pointer">
                Start Your Project
              </button>
              <button className="rounded-full border border-gray-600 px-6 py-3 text-sm font-bold text-gray-300 hover:bg-white/5 hover:text-white transition-all cursor-pointer">
                Explore Services
              </button>
            </div>
          </div>

          {/* Right Side Staggered Image Grid with Mirror Reflection */}
          <div className="relative flex justify-center lg:col-span-6 py-2 pb-16">
            <div className="grid grid-cols-3 gap-2 md:gap-3 max-w-[410px] w-full">
              {/* Column 1 - Left Column (Pushed down slightly) */}
              <div className="flex flex-col gap-2 md:gap-3 pt-6">
                <div className="rounded-xl md:rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/5">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80"
                    alt="UI UX design preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=400&q=80"
                    alt="3D product branding"
                    className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-2xl border border-white/5 image-reflect"
                  />
                </div>
              </div>

              {/* Column 2 - Middle Column (Standard alignment) */}
              <div className="flex flex-col gap-2 md:gap-3 pt-0">
                <div className="rounded-xl md:rounded-2xl overflow-hidden aspect-video shadow-2xl border border-white/5">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
                    alt="Creative team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl md:rounded-2xl overflow-hidden aspect-video shadow-2xl border border-white/5">
                  <img
                    src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80"
                    alt="Video editing preset"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[2/3] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                    alt="Content creator"
                    className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-2xl border border-white/5 image-reflect"
                  />
                </div>
              </div>

              {/* Column 3 - Right Column (Pushed down for staggering) */}
              <div className="flex flex-col gap-2 md:gap-3 pt-10">
                <div className="rounded-xl md:rounded-2xl overflow-hidden aspect-square shadow-2xl border border-white/5">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80"
                    alt="Creative director consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl md:rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl border border-white/5">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
                    alt="Web development code"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
                    alt="Mobile app UI dashboard"
                    className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-2xl border border-white/5 image-reflect"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
