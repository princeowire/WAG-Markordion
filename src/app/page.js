
'use client';

import { useState } from 'react';
import ClassicAccordion from '@/component/Clasic/clasic';
import DemureAccordion from '@/component/Demure/demure';
import ClientTestRouter from '@/component/clientTestRouter';
import Nav from '@/component/nav';
import Link from 'next/link';

export default function Page() {
  const [accordionType, setAccordionType] = useState('classic');

  const renderAccordion = () => {
    switch (accordionType) {
      case 'classic':
        return <ClassicAccordion />;
      case 'demure':
        return <DemureAccordion />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#020B0C] text-[#E9EDE1]">

      {/* Ambient background atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute right-[-15%] top-[-15%] h-[550px] w-[550px] rounded-full bg-[#173D3D] opacity-20 blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-15%] h-[500px] w-[500px] rounded-full bg-[#0B2021] opacity-60 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-5 py-6 sm:px-8 lg:px-12">

        {/* Brand */}
        <div className="flex shrink-0 items-center gap-3">
          <span className="text-xl text-[#D9DFD1] sm:text-2xl">
            ✳
          </span>

          <div className="flex flex-col">
            <h1 className="font-serif text-lg tracking-[-0.04em] text-[#E9EDE1] sm:text-xl">
              Maccordion Studio
            </h1>

            <span className="hidden text-[9px] uppercase tracking-[0.25em] text-[#7F918B] sm:block">
              Crafted Interface Studio
            </span>
          </div>
        </div>

        {/* Navigation */}
        <Nav />

        {/* Contact CTA */}
        <button
          type="button"
          className="rounded-full bg-[#E9EDE1] px-4 py-2.5 text-[11px] font-medium text-[#071516] transition-transform duration-300 hover:scale-105 sm:px-6"
        >
          Contact Us
        </button>

      </nav>

      {/* Hero Section */}
      <main
        id="home"
        className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)] w-full max-w-[1600px] flex-col px-5 pb-8 sm:px-8 lg:px-12"
      >

        {/* Decorative motifs */}
        <div className="pointer-events-none absolute right-[12%] top-[4%] hidden items-center gap-7 text-[#A8B1AD]/50 md:flex">
          <span className="text-3xl font-extralight">✳</span>
          <span className="text-xl font-extralight">✣</span>
          <span className="text-3xl font-extralight">✳</span>
        </div>

        {/* Hero Content */}
        <div className="flex flex-1 flex-col justify-center pb-10 pt-12 lg:pt-20">

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_300px]">

            {/* Left — Editorial Heading */}
            <div className="max-w-[850px]">

              <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#8B9D96]">
                <span className="h-px w-8 bg-[#8B9D96]" />
                <span>Interface Collection / 001</span>
              </div>

              <h2 className="font-serif text-[clamp(3.2rem,7.5vw,7.2rem)] font-normal leading-[0.88] tracking-[-0.055em] text-[#E9EDE1]">
                From texture
                <br />
                to shape —
                <br />
                <span className="text-[#AABAB0]">
                  from vision
                </span>
                <br />
                to reality.
              </h2>

              <p className="mt-8 max-w-[340px] text-sm leading-relaxed text-[#8E9F98] lg:hidden">
                Explore a curated collection of accordion interfaces,
                crafted with precision and designed for modern digital
                experiences.
              </p>

            </div>

            {/* Right — Supporting Copy */}
            <div className="hidden lg:block">

              <div className="mb-8 text-3xl font-extralight text-[#83958D]">
                ✳
              </div>

              <p className="max-w-[240px] text-[13px] leading-[1.65] text-[#9DAAA4]">
                Thoughtfully crafted interfaces
                <br />
                where structure meets elegance.
                <br />
                Explore refined accordion
                <br />
                experiences built for the modern web.
              </p>

              <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#7F918B]">
                <span className="h-px w-6 bg-[#526762]" />
                <span>Discover the collection</span>
              </div>

            </div>

          </div>

          {/* Accordion Showcase */}
          <div
            id="materials"
            className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_250px] lg:items-end xl:grid-cols-[minmax(0,1fr)_280px]"
          >

            {/* Dynamic Accordion */}
            <div className="min-w-0">

              <div className="mb-5 flex items-end justify-between gap-4 border-b border-[#2B3B3A] pb-4">

                <div>
                  <p className="mb-2 text-[9px] uppercase tracking-[0.28em] text-[#7F918B]">
                    Collection / 01
                  </p>

                  <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#E9EDE1] sm:text-3xl">
                    Accordion Experiences
                  </h3>
                </div>

                <span className="hidden text-[10px] text-[#657A72] sm:block">
                  02 Styles
                </span>

              </div>

              <div className="rounded-2xl border border-[#30413F]/60 bg-[#071516]/80 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6 lg:p-8">

                {/* Style Switcher */}
                <div className="mb-7 flex flex-wrap items-center justify-between gap-3">

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#80928A]">
                    Select a style
                  </span>

                  <div className="flex rounded-full border border-[#30413F] bg-[#0B2021] p-1">

                    <button
                      type="button"
                      onClick={() => setAccordionType('classic')}
                      className={`rounded-full px-4 py-2 text-[11px] transition-all duration-300 ${
                        accordionType === 'classic'
                          ? 'bg-[#D9DFD1] text-[#071516] shadow-sm'
                          : 'text-[#8EA098] hover:text-[#E9EDE1]'
                      }`}
                    >
                      Classic
                    </button>

                    <button
                      type="button"
                      onClick={() => setAccordionType('demure')}
                      className={`rounded-full px-4 py-2 text-[11px] transition-all duration-300 ${
                        accordionType === 'demure'
                          ? 'bg-[#D9DFD1] text-[#071516] shadow-sm'
                          : 'text-[#8EA098] hover:text-[#E9EDE1]'
                      }`}
                    >
                      Demure
                    </button>

                  </div>

                </div>

                {/* Preserve existing dynamic component */}
                <div className="min-w-0 text-[#E9EDE1]">
                  {renderAccordion()}
                </div>

              </div>

            </div>

            {/* Product Preview Card */}
            <ClientTestRouter />

          </div>

        </div>

        {/* Footer / Hero Controls */}
        <div className="flex items-center justify-between gap-4 border-t border-[#273837]/60 pt-5">

          <div className="flex items-center gap-3">
            <Link href="/">
              <button
                type="button"
                aria-label="Previous collection"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#344642] bg-[#0B2021]/80 text-[#A8B1AD] transition-all duration-300 hover:border-[#839D91] hover:bg-[#1A3331]"
              >
                ←
              </button>
            </Link >

            <Link href='about'>
              <button
                type="button"
                aria-label="Next collection"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#344642] bg-[#0B2021]/80 text-[#A8B1AD] transition-all duration-300 hover:border-[#839D91] hover:bg-[#1A3331]"
              >
                →
              </button>
            </Link>

          </div>

          <div className="hidden items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#657A72] sm:flex">
            <span>Maccordion Studio</span>
            <span className="h-px w-8 bg-[#40534D]" />
            <span>Est. {new Date().getFullYear()}</span>
          </div>

          <div className="text-right text-[10px] uppercase tracking-[0.18em] text-[#657A72]">
            <span className="block">Crafted for</span>
            <span className="text-[#A8B1AD]">Digital Experiences</span>
          </div>

        </div>

      </main>

    </div>
  );
}