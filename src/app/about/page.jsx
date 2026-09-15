
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#020B0C] text-[#E9EDE1]">

      {/* Atmospheric background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute right-[-15%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#173D3D] opacity-20 blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#0B2021] opacity-60 blur-[120px]" />
      </div>

      {/* Navigation */}
      <header className="relative z-20 mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <nav
          className="flex items-center justify-between gap-4 py-6"
          aria-label="Main navigation"
        >

          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            aria-label="Marccordion home"
          >
            <span className="text-xl text-[#D9DFD1] sm:text-2xl">
              ✳
            </span>

            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[-0.04em] text-[#E9EDE1] sm:text-xl">
                Maccordion Studio
              </span>

              <span className="hidden text-[9px] uppercase tracking-[0.25em] text-[#7F918B] sm:block">
                Crafted Interface Studio
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 rounded-full border border-[#314342]/40 bg-[#142627]/70 p-1 backdrop-blur-xl lg:flex">

            <Link
              href="/"
              className="rounded-full px-5 py-2 text-[11px] text-[#9DAAA4] transition-colors hover:bg-[#2A3C3C] hover:text-[#E9EDE1]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="rounded-full bg-[#2A3C3C] px-5 py-2 text-[11px] text-[#E9EDE1]"
              aria-current="page"
            >
              About
            </Link>

          </div>

          {/* Desktop contact */}
          <a
            href="https://princedotdev.vercel.app/contact"
            target="_blank"
            className="hidden rounded-full bg-[#E9EDE1] px-6 py-2.5 text-[11px] font-medium text-[#071516] transition-transform duration-300 hover:scale-105 sm:block"
          >
            Contact Us
          </a>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="rounded-full border border-[#344642] px-4 py-2 text-[11px] text-[#D9DFD1] lg:hidden"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>

        </nav>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="mb-4 rounded-2xl border border-[#30413F] bg-[#0B2021]/95 p-4 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-[#A8B1AD] hover:bg-[#1A3331]"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-[#1A3331] px-4 py-3 text-sm text-[#E9EDE1]"
              >
                About
              </Link>

              <Link
                href="/#materials"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-[#A8B1AD] hover:bg-[#1A3331]"
              >
                Materials
              </Link>

              <Link
                href="/#products"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-[#A8B1AD] hover:bg-[#1A3331]"
              >
                Products
              </Link>

              <a
                href="mailto:your-email@example.com"
                className="mt-3 rounded-full bg-[#E9EDE1] px-5 py-3 text-center text-sm font-medium text-[#071516]"
              >
                Contact Us
              </a>

            </div>
          </div>
        )}

      </header>

      {/* Hero */}
      <section
        className="relative z-10 mx-auto flex min-h-[75vh] w-full max-w-[1600px] flex-col justify-center px-5 pb-16 pt-16 sm:px-8 lg:px-12 lg:pb-24 lg:pt-20"
        aria-labelledby="about-heading"
      >

        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_340px]">

          {/* Editorial heading */}
          <div className="max-w-[900px]">

            <div className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#8B9D96]">
              <span className="h-px w-8 bg-[#8B9D96]" />
              <span>About the studio / 001</span>
            </div>

            <h1
              id="about-heading"
              className="font-serif text-[clamp(3.5rem,8vw,8rem)] font-normal leading-[0.87] tracking-[-0.06em] text-[#E9EDE1]"
            >
              Built with
              <br />
              intention.
              <br />
              <span className="text-[#AABAB0]">
                Designed
              </span>
              <br />
              to unfold.
            </h1>

            <p className="mt-8 max-w-[440px] text-sm leading-[1.8] text-[#8E9F98] lg:hidden">
              A frontend developer exploring the intersection
              of thoughtful interaction, expressive design,
              and modern web experiences.
            </p>

          </div>

          {/* Supporting statement */}
          <div className="pb-2">

            <div className="mb-8 text-3xl font-extralight text-[#83958D]">
              ✳
            </div>

            <p className="max-w-[250px] text-[13px] leading-[1.7] text-[#9DAAA4]">
              I’m Prince Owire, a frontend developer
              focused on creating interfaces that feel
              purposeful, intuitive, and refined.
            </p>

            <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#7F918B]">
              <span className="h-px w-6 bg-[#526762]" />
              <span>The developer behind the project</span>
            </div>

          </div>

        </div>

      </section>

      {/* About Prince */}
      <section
        id="about"
        className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32"
        aria-labelledby="developer-heading"
      >

        <div className="grid gap-10 border-t border-[#2B3B3A] pt-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#7F918B]">
              01 / The developer
            </p>

            <h2
              id="developer-heading"
              className="mt-5 max-w-[400px] font-serif text-4xl leading-[0.95] tracking-[-0.04em] text-[#E9EDE1] sm:text-5xl"
            >
              A passion for
              <br />
              meaningful
              <br />
              interfaces.
            </h2>
          </div>

          <div className="max-w-[650px] space-y-6 text-[15px] leading-[1.85] text-[#A8B1AD]">

            <p>
              My name is Prince Owire, and I’m a frontend
              JavaScript developer passionate about building
              digital experiences that combine clean
              functionality with thoughtful visual design.
            </p>

            <p>
              My journey into web development began in 2022.
              Since then, I have been learning, building,
              and refining my skills through personal projects,
              freelance work, and hands-on experimentation
              with modern web technologies.
            </p>

            <p>
              I enjoy turning ideas into responsive,
              interactive websites that are not only visually
              engaging but also easy to use. For me, good
              frontend development is about finding the balance
              between design, performance, and usability.
            </p>

            <div className="flex flex-wrap gap-2 pt-3">
              <span className="rounded-full border border-[#344642] px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-[#A8B1AD]">
                JavaScript
              </span>

              <span className="rounded-full border border-[#344642] px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-[#A8B1AD]">
                React
              </span>

              <span className="rounded-full border border-[#344642] px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-[#A8B1AD]">
                Next.js
              </span>

              <span className="rounded-full border border-[#344642] px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-[#A8B1AD]">
                Tailwind CSS
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* Project story */}
      <section
        id="project"
        className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32"
        aria-labelledby="project-heading"
      >

        <div className="grid gap-12 border-t border-[#2B3B3A] pt-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#7F918B]">
              02 / The project
            </p>

            <h2
              id="project-heading"
              className="mt-5 max-w-[450px] font-serif text-4xl leading-[0.95] tracking-[-0.04em] text-[#E9EDE1] sm:text-5xl"
            >
              Maccordion 
              <br />
              Studio
            </h2>

            <p className="mt-6 max-w-[280px] text-sm leading-relaxed text-[#8E9F98]">
              A collection of accordion interfaces
              created to explore the relationship
              between interaction and design.
            </p>
          </div>

          <div className="space-y-8">

            {/* Project visual */}
            <div className="relative overflow-hidden rounded-2xl border border-[#30413F]/70 bg-[#0B2021] p-5 sm:p-8">

              <div className="mb-6 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#7F918B]">
                  Interface / 001
                </span>

                <span className="text-xs text-[#83958D]">
                  ↗
                </span>
              </div>

              <div className="rounded-xl border border-[#344642] bg-[#071516] p-4 sm:p-6">

                <div className="mb-5 flex items-center justify-between border-b border-[#2B3B3A] pb-4">
                  <span className="font-serif text-xl text-[#E9EDE1]">
                    Accordion Collection
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#7F918B]">
                    02 Styles
                  </span>
                </div>

                <div className="space-y-2">

                  <div className="flex items-center justify-between rounded-lg border border-[#344642] bg-[#142627] px-4 py-4">
                    <span className="text-sm text-[#D9DFD1]">
                      Classic Accordion
                    </span>

                    <span className="text-[#A8B1AD]">
                      +
                    </span>
                  </div>

                  <div className="rounded-lg border border-[#344642] bg-[#142627] px-4 py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#D9DFD1]">
                        Demure Accordion
                      </span>

                      <span className="text-[#A8B1AD]">
                        +
                      </span>
                    </div>
                  </div>

                </div>

              </div>

              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-[#657A72]">
                Crafted interaction study
              </p>

            </div>

            {/* Project explanation */}
            <div className="space-y-6 text-[15px] leading-[1.85] text-[#A8B1AD]">

              <p>
                Maccordion Studio is a frontend project built
                around a simple idea: an accordion should
                be more than a functional list of expandable
                content. It can also be an opportunity
                to explore visual identity, interaction,
                and user experience.
              </p>

              <p>
                The project brings together different
                accordion styles, including Classic and
                Demure, allowing visitors to explore
                alternative approaches to presenting
                information on the web.
              </p>

              <p>
                I created this project to practice building
                reusable React components, managing
                interactive state, and designing interfaces
                that feel intentional from the first interaction.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Philosophy */}
      <section
        id="services"
        className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32"
        aria-labelledby="philosophy-heading"
      >

        <div className="grid gap-12 border-t border-[#2B3B3A] pt-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#7F918B]">
              03 / The philosophy
            </p>

            <h2
              id="philosophy-heading"
              className="mt-5 max-w-[420px] font-serif text-4xl leading-[0.95] tracking-[-0.04em] text-[#E9EDE1] sm:text-5xl"
            >
              Function
              <br />
              meets
              <br />
              expression.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">

            <div className="border-t border-[#344642] pt-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#7F918B]">
                01
              </span>

              <h3 className="mt-4 font-serif text-2xl text-[#E9EDE1]">
                Thoughtful design
              </h3>

              <p className="mt-3 text-sm leading-[1.8] text-[#8E9F98]">
                Every interaction should have a purpose.
                Good design makes the experience
                clearer, not more complicated.
              </p>
            </div>

            <div className="border-t border-[#344642] pt-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#7F918B]">
                02
              </span>

              <h3 className="mt-4 font-serif text-2xl text-[#E9EDE1]">
                Clean development
              </h3>

              <p className="mt-3 text-sm leading-[1.8] text-[#8E9F98]">
                Reusable components, clear structure,
                and responsive layouts create
                better experiences for everyone.
              </p>
            </div>

            <div className="border-t border-[#344642] pt-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#7F918B]">
                03
              </span>

              <h3 className="mt-4 font-serif text-2xl text-[#E9EDE1]">
                Continuous learning
              </h3>

              <p className="mt-3 text-sm leading-[1.8] text-[#8E9F98]">
                Each project is an opportunity to
                learn something new, experiment,
                and improve as a developer.
              </p>
            </div>

            <div className="border-t border-[#344642] pt-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#7F918B]">
                04
              </span>

              <h3 className="mt-4 font-serif text-2xl text-[#E9EDE1]">
                Built for people
              </h3>

              <p className="mt-3 text-sm leading-[1.8] text-[#8E9F98]">
                The best interfaces are intuitive,
                accessible, and enjoyable to use
                across different screen sizes.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 sm:px-8 lg:px-12 lg:pb-20"
        aria-labelledby="contact-heading"
      >

        <div className="relative overflow-hidden rounded-2xl border border-[#30413F] bg-[#0B2021] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

          <div className="pointer-events-none absolute right-[-5%] top-[-60%] h-[400px] w-[400px] rounded-full bg-[#31534C] opacity-20 blur-[100px]" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#7F918B]">
                Let’s create something
              </p>

              <h2
                id="contact-heading"
                className="max-w-[650px] font-serif text-4xl leading-[0.95] tracking-[-0.04em] text-[#E9EDE1] sm:text-6xl lg:text-7xl"
              >
                Good ideas
                <br />
                deserve good
                <br />
                interfaces.
              </h2>
            </div>

            <div className="shrink-0">
              <a
                href="https://princedotdev.vercel.app/contact"
                target="_blank"
                className="inline-flex items-center gap-6 rounded-full bg-[#E9EDE1] px-6 py-4 text-sm font-medium text-[#071516] transition-transform duration-300 hover:scale-105"
              >
                Start a conversation
                <span className="text-lg">
                  →
                </span>
              </a>
            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col justify-between gap-4 border-t border-[#273837]/60 px-5 py-6 text-[10px] uppercase tracking-[0.18em] text-[#657A72] sm:flex-row sm:px-8 lg:px-12">

        <div className="flex items-center justify-between gap-4 sm:gap-6">
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

            <span>
              Est. {new Date().getFullYear()} Maccordion Studio.
            </span>
        </div>

        <span>
          Designed & developed by <a href="https://princedotdev.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#E9EDE1] hover:no-underline">Prince Owire</a>
        </span>

      </footer>

    </main>
  );
}