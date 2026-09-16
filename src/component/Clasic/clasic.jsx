'use client';

import { useState } from 'react';
import TabGroup from '../tabgroup';

const fontSizes = [
  { label: 'Small', value: 'text-sm' },
  { label: 'Medium', value: 'text-base' },
  { label: 'Large', value: 'text-lg' },
];

const presets = {
  Dark: {
    bgColor: '#020B0C',
    textColor: '#E9EDE1',
    detailsColor: '#071516',
  },
  Light: {
    bgColor: '#F9F9F9',
    textColor: '#222222',
    detailsColor: '#E2E2E2',
  },
};


export default function ClasicAccordion() {
  const [bgColor, setBgColor] = useState(presets.Dark.bgColor);
  const [textColor, setTextColor] = useState(presets.Dark.textColor);
  const [detailsColor, setDetailsColor] = useState(presets.Dark.detailsColor);
  const [fontSize, setFontSize] = useState('text-base');
  const [markerPosition, setMarkerPosition] = useState('right');
  const [autoClose, setAutoClose] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [activePreset, setActivePreset] = useState('Dark');

  const accordions = [
    {
      title: 'What is Accordion Maker?',
      content:
        'It lets you copy and use reusable accordion code in React + Tailwind in your project.',
    },
    {
      title: 'Can I style it?',
      content:
        'Yes! Choose colors, font size, marker position and  more, you have the freedom to make any changes.',
    },
    {
      title: 'How do I use the code?',
      content:
        'Just click "Copy" and paste it into your React project.',
    },
     {
      title: 'What dependencies do I need?',
      content:
        'just React and Tailwind CSS. No additional libraries are required.',
    },
  ];

  const applyPreset = (preset) => {
    setBgColor(presets[preset].bgColor);
    setTextColor(presets[preset].textColor);
    setDetailsColor(presets[preset].detailsColor);
    setActivePreset(preset)
  };

  const renderColorInput = (label, value, onChange) => (
    <div>
      <label className="block mb-3 text-[11px] uppercase tracking-[0.18em] text-[#9DAAA4]">
        {label}
      </label>

      <div className="flex items-center gap-3">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-11 h-11 cursor-pointer appearance-none rounded-full border border-[#385052] bg-transparent p-0 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none [&::-webkit-color-swatch]:rounded-full [&::-moz-color-swatch]:border-none [&::-moz-color-swatch]:rounded-full"
        />

        <input
          type="text"
          value={value}
          onChange={(e) => {
            const val = e.target.value;

            if (/^#([0-9A-Fa-f]{0,6})$/.test(val)) {
              onChange(val);
            }
          }}
          className="w-28 rounded-full border border-[#263D3E] bg-[#071516] px-4 py-2 text-sm text-[#E9EDE1] outline-none transition-all focus:border-[#819D98] focus:ring-1 focus:ring-[#819D98]"
          maxLength={7}
        />
      </div>
    </div>
  );

  const generatedCode = `
import React, { useState } from 'react';

export default function CustomAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordions = ${JSON.stringify(accordions, null, 2)};

  return (
    <div
      className="${fontSize} rounded-2xl p-5"
      style={{
        backgroundColor: '${bgColor}',
        color: '${textColor}'
      }}
    >
      {accordions.map((acc, i) => {
        const isOpen = ${autoClose} ? openIndex === i : undefined;

        return (
          <details
            key={i}
            open={isOpen}
            onClick={(e) => {
              if (!${autoClose}) return;

              e.preventDefault();
              setOpenIndex(isOpen ? null : i);
            }}
            className="group p-5 rounded-xl mb-3 relative border border-white/10"
            style={{
              backgroundColor: '${detailsColor}'
            }}
          >
            <summary
              className="cursor-pointer font-medium list-none flex items-center ${markerPosition === 'right' ? 'justify-between' : 'justify-between flex-row-reverse'}"
            >
              {acc.title}



                      <span
                        className="
                          w-8
                          h-8
                          shrink-0
                          flex
                          items-center
                          justify-center
                          select-none
                          rounded-full
                          border
                          border-white/10
                          transition-transform
                          duration-300
                          group-open:rotate-180
                        "
                        style={{
                          color: '${bgColor}',
                          backgroundColor: '${textColor}',
                        }}
                      >
                        {/* Plus icon */}
                        <span className="group-open:hidden relative block h-4 w-4">
                          <span className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-current" />
                          <span className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-current" />
                        </span>

                        {/* Minus icon */}
                        <span className="hidden group-open:block relative h-4 w-4">
                          <span className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-current" />
                        </span>
                      </span>
            </summary>

            <div
              className="mt-4 pt-4 border-t border-white/10 opacity-75 leading-relaxed"
              style={{
                textAlign: '${markerPosition === 'right' ? 'left' : 'right'}'
              }}
            >
              {acc.content}
            </div>
          </details>
        );
      })}
    </div>
  );
}
`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      alert('React component code copied!');
    } catch (err) {
      alert('Failed to copy code: ' + err.message);
    }
  };

  return (
    <main
      className="
        min-h-screen
        text-[#E9EDE1]
        px-5 py-8
        sm:px-8 sm:py-10
        lg:px-12 lg:py-12
        relative overflow-hidden
      "
      style={{
        background:
          'radial-gradient(circle at 85% 10%, rgba(73, 111, 106, 0.16), transparent 28%), #020B0C',
      }}
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-[#1B4140]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#163333]/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10 lg:mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[#9DAAA4] text-lg">✦</span>

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#9DAAA4]">
              Maccordion Studio
            </span>
          </div>

          <h1
            className="
              text-5xl
              sm:text-6xl
              lg:text-8xl
              font-normal
              tracking-[-0.055em]
              leading-[0.88]
              text-[#E9EDE1]
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Clasic
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-[#9DAAA4]">
            Shape your interface with a refined accordion system designed
            around clarity, material, and understated interaction.
          </p>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <div className="flex rounded-full gap-2 border border-[#30413F] bg-[#0B2021] p-1">
            {Object.entries(presets).map(([key, colors]) => (
                <button
                  key={key}
                  onClick={() => applyPreset(key)}
                  className={`
                  px-4 py-2.5
                  rounded-full
                  text-xs
                  tracking-wide
                  ${activePreset === key ? 'bg-[#D9DFD1] text-[#071516] shadow-sm' : 'text-[#8EA098] hover:text-[#E9EDE1]'}`
                }
                    >
                    {key}
                </button>
            ))}
          </div>
        </div>

        {/* Main workspace */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          
          {/* Controls */}
          <section
            className="
              space-y-7
              rounded-2xl
              p-6
              lg:p-8
              border
              border-white/[0.08]
              bg-[#071516]/75
              backdrop-blur-xl
              shadow-[0_30px_80px_rgba(0,0,0,0.25)]
            "
          >
            <div className="pb-5 border-b border-white/[0.08]">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#81938F] mb-2">
                Configuration
              </p>

              <h2
                className="text-2xl text-[#E9EDE1]"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                Refine the details
              </h2>
            </div>

            {renderColorInput(
              'Background Color',
              bgColor,
              setBgColor
            )}

            {renderColorInput(
              'Text Color',
              textColor,
              setTextColor
            )}

            {renderColorInput(
              'Details Background Color',
              detailsColor,
              setDetailsColor
            )}

            <TabGroup
              label="Font Size"
              options={fontSizes}
              value={fontSize}
              onChange={setFontSize}
            />

            <TabGroup
              label="Marker Position"
              options={[
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' },
              ]}
              value={markerPosition}
              onChange={setMarkerPosition}
            />

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="autoClose"
                checked={autoClose}
                onChange={() => {
                  setAutoClose(!autoClose);
                  setOpenIndex(null);
                }}
                className="
                  w-4 h-4
                  accent-[#D9DFD1]
                  cursor-pointer
                "
              />

              <label
                htmlFor="autoClose"
                className="text-sm text-[#B4BEB8] cursor-pointer"
              >
                Auto-close (Only one open at a time)
              </label>
            </div>

              <button
                onClick={handleCopy}
                className="group mt-2 flex w-full items-center justify-between rounded-full bg-[#E9EDE1] px-6 py-4 text-sm font-medium text-[#071516] transition-all duration-300 hover:bg-[#D9DFD1]"
              >
                <span>Copy React Code</span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
          </section>

          {/* Preview */}
          <section
            className="
              rounded-2xl
              p-6
              min-sm:p-0
              lg:p-8
              border
              border-white/[0.08]
              bg-[#071516]/55
              backdrop-blur-xl
              shadow-[0_30px_80px_rgba(0,0,0,0.2)]
            "
          >
            <div className="flex items-center justify-between mb-7">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#81938F] mb-2">
                  Live Environment
                </p>

                <h2
                  className="text-3xl text-[#E9EDE1]"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  Preview
                </h2>
              </div>

              <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-[#81938F]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9BB7AE]" />
                Live
              </span>
            </div>

            <div
              className={`${fontSize} rounded-2xl p-0 sm:p-5 border border-white/10`}
              style={{
                backgroundColor: bgColor,
                color: textColor,
              }}
            >
              {accordions.map((acc, i) => {
                const isOpen = autoClose
                  ? openIndex === i
                  : undefined;

                return (
                  <details
                    key={i}
                    open={isOpen}
                    onClick={(e) => {
                      if (!autoClose) return;

                      e.preventDefault();
                      setOpenIndex(isOpen ? null : i);
                    }}
                    className="
                      group
                      p-5
                      rounded-xl
                      mb-3
                      relative
                      border
                      border-white/10
                      transition-all
                      duration-500
                      hover:border-white/20
                    "
                    style={{
                      backgroundColor: detailsColor,
                    }}
                  >
                    <summary
                      className={`
                        cursor-pointer
                        font-medium
                        list-none
                        flex
                        items-center
                        gap-4
                        ${markerPosition === 'right'
                          ? 'justify-between'
                          : 'justify-between flex-row-reverse'}
                      `}
                    >
                      <span className="leading-6">
                        {acc.title}
                      </span>

                      <span
                        className="
                          w-8
                          h-8
                          shrink-0
                          flex
                          items-center
                          justify-center
                          select-none
                          rounded-full
                          border
                          border-white/10
                          transition-transform
                          duration-300
                          group-open:rotate-180
                        "
                        style={{
                          color: bgColor,
                          backgroundColor: textColor,
                        }}
                      >
                        {/* Plus icon */}
                        <span className="group-open:hidden relative block h-4 w-4">
                          <span className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-current" />
                          <span className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-current" />
                        </span>

                        {/* Minus icon */}
                        <span className="hidden group-open:block relative h-4 w-4">
                          <span className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-current" />
                        </span>
                      </span>
                    </summary>

                    <div
                      className="
                        mt-5
                        pt-4
                        border-t
                        border-white/10
                        text-sm
                        leading-6
                        opacity-70
                      "
                      style={{
                        textAlign:
                          markerPosition === 'right'
                            ? 'left'
                            : 'right',
                      }}
                    >
                      {acc.content}
                    </div>
                  </details>
                );
              })}
            </div>

            {/* Preview Footer */}

            <div className="mt-6 flex items-center justify-between gap-4 text-xs text-[#71817D]">
              <span> Maccordion Studio / Classic </span>
              <span> 01 / 02</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}