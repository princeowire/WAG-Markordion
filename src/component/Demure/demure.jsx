
'use client';

import React, { useState } from 'react';

const fontSizes = [
  { label: 'Small', value: 'text-sm' },
  { label: 'Medium', value: 'text-base' },
  { label: 'Large', value: 'text-lg' },
];

const presets = {
  Dark: {
    bgColor: '#1A1A1A',
    textColor: '#F5F5F5',
    detailsColor: '#2D2D2D',
    borderColor: '#3A3A3A',
  },
  Light: {
    bgColor: '#F9F9F9',
    textColor: '#222222',
    detailsColor: '#E2E2E2',
  },
};

const defaultData = [
  {
    question: 'What is Accordion Maker?',
    answer:
      'It lets you copy and use reusable accordion code in React + Tailwind in your project.',
  },
  {
    question: 'Can I style it?',
    answer:
      'Yes! Choose colors, font size, marker position and  more, you have the freedom to make any changes.',
  },
  {
    question: 'How do I use the code?',
    answer:
      'Just click "Copy" and paste it into your file. it is a copyable component.',
  },
  {
    question: 'What dependencies do I need?',
    answer:
      'just React and Tailwind CSS. No additional libraries are required.',
  },
];

export default function AccordionMaker() {
  const [bgColor, setBgColor] = useState(presets.Dark.bgColor);
  const [textColor, setTextColor] = useState(presets.Dark.textColor);
  const [detailsColor, setDetailsColor] = useState(
    presets.Dark.detailsColor
  );
  const [borderColor, setBorderColor] = useState(
    presets.Dark.borderColor
  );

  const [fontSize, setFontSize] = useState('text-base');
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedPreset, setSelectedPreset] = useState('Dark');

  const data = defaultData;

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const applyPreset = (presetKey) => {
    const preset = presets[presetKey];

    setBgColor(preset.bgColor);
    setTextColor(preset.textColor);
    setDetailsColor(preset.detailsColor);
    setBorderColor(preset.borderColor || '#000000');

    setSelectedPreset(presetKey);
  };

  const handleCopy = async () => {
    const code = `
import React, { useState } from 'react';

const data = ${JSON.stringify(data, null, 2)};

export default function CustomAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[75%] mx-auto mt-10 flex flex-col gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="shadow-inner border-r-8 border-b-8 border-[1px]"
          style={{
            backgroundColor: '${bgColor}',
            borderColor: '${borderColor}',
            borderRadius: '50px',
          }}
        >
          <div
            className="flex justify-between items-center py-4 cursor-pointer pl-5 pr-3"
            onClick={() => toggleIndex(index)}
          >
            <h3
              className="${fontSize} font-normal"
              style={{
                color: '${textColor}',
                lineHeight: 'normal',
              }}
            >
              {item.question}
            </h3>

            <div
              className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full select-none"
              style={{
                backgroundColor: '${textColor}',
              }}
            >
              <span
                className={\`absolute h-1 w-5 origin-center rounded-full transition-transform duration-300 ease-in-out \${
                  activeIndex === index ? 'rotate-45' : 'rotate-0'
                }\`}
                style={{ backgroundColor: '${bgColor}' }}
              />
 
              <span
                className={\`absolute h-1 w-5 origin-center rounded-full transition-transform duration-300 ease-in-out \${
                  activeIndex === index ? 'rotate-[135deg]' : 'rotate-90'
                }\`}
                style={{ backgroundColor: '${bgColor}' }}
              />
            </div>
          </div>

          <div
            className={\`overflow-hidden transition-all duration-300 \${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}\`}
          >
            <p
              className="text-sm font-normal leading-7 px-10 pb-5"
              style={{ color: '${textColor}' }}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
}
    `.trim();

    try {
      await navigator.clipboard.writeText(code);
      alert('React code copied!');
    } catch (err) {
      alert('Failed to copy: ' + err.message);
    }
  };

  const renderColorInput = (label, value, onChange) => (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-[#A8B1AD]">
        {label}
      </label>

      <div className="flex items-center gap-3">

        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-11 h-11 min-w-11 cursor-pointer appearance-none rounded-full border border-[#385052] bg-transparent p-0 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none [&::-webkit-color-swatch]:rounded-full [&::-moz-color-swatch]:border-none [&::-moz-color-swatch]:rounded-full"
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
          className="w-full rounded-xl border border-[#304143] bg-[#0B2021] px-4 py-3 text-sm text-[#E9EDE1] outline-none transition placeholder:text-[#71817D] focus:border-[#AABDB3]"
          maxLength={7}
          aria-label={`${label} hex value`}
        />
      </div>
    </div>
  );

  return (
    <main className="
        min-h-screen
        text-[#E9EDE1]
        px-5 py-8
        sm:px-8 sm:py-10
        lg:px-12 lg:py-12
        relative overflow-hidden">

      {/* Atmospheric Background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#214D4C]/20 blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#173B3C]/20 blur-[140px]" />
      </div>

      {/* Existing Page Structure */}
      <div className="relative z-10 mx-auto max-w-7xl">

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
            Demure
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-[#9DAAA4]">
            Shape your interface with a refined accordion system designed
            around clarity, material, and understated interaction.
          </p>
        </div>

        {/* Preset Tabs */}
        <div className="mb-10">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-sm font-medium text-[#C4CEC6]">
              Choose a style
            </h2>

            <span className="text-xs text-[#71817D]">
              {selectedPreset}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="flex rounded-full gap-2 border border-[#30413F] bg-[#0B2021] p-1">
            {Object.keys(presets).map((preset) => {
              const isActive = selectedPreset === preset;

              return (
                <button
                  key={preset}
                  onClick={() => applyPreset(preset)}
                  className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${
                    isActive
                      ? 'border-[#E9EDE1] bg-[#E9EDE1] text-[#071516]'
                      : 'border-[#26393A] bg-[#0B2021]/80 text-[#A8B1AD] hover:border-[#71817D] hover:bg-[#13292A]'
                  }`}
                  aria-pressed={isActive}
                >
                  {preset}
                </button>
              );
            })}

            </div>
          </div>
        </div>

        {/* Existing Two-Column Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">

          {/* Customization Section */}
          <section className="rounded-[28px] border border-[#1C3031] bg-[#071516]/90 p-5 shadow-2xl shadow-black/20 sm:p-7">

            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#71817D]">
                  Customize
                </p>

                <h2 className="font-serif text-3xl font-normal text-[#E9EDE1]">
                  Your settings
                </h2>
              </div>

              <span className="text-xl text-[#8FA39D]">✳</span>
            </div>

            <div className="space-y-7">

              {/* Color Controls */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-[#D9DFD1]">
                    Color palette
                  </h3>

                  <span className="text-xs text-[#71817D]">
                    04 controls
                  </span>
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
                  'Details Color',
                  detailsColor,
                  setDetailsColor
                )}

                {renderColorInput(
                  'Border Color',
                  borderColor,
                  setBorderColor
                )}
              </div>

              <div className="h-px bg-[#1C3031]" />

              {/* Font Size — TAB BUTTONS */}
              <div>
                <label className="mb-3 block text-sm font-medium text-[#D9DFD1]">
                  Font Size
                </label>

                <div className="flex w-full rounded-full border border-[#304143] bg-[#0B2021] p-1">
                  {fontSizes.map((size) => {
                    const isActive = fontSize === size.value;

                    return (
                      <button
                        key={size.value}
                        onClick={() => setFontSize(size.value)}
                        className={`flex-1 rounded-full px-3 py-2.5 text-sm transition-all duration-300 ${
                          isActive
                            ? 'bg-[#E9EDE1] text-[#071516]'
                            : 'text-[#91A09C] hover:text-[#E9EDE1]'
                        }`}
                        aria-pressed={isActive}
                      >
                        {size.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Existing Auto-close functionality not present in this version */}

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="group mt-2 flex w-full items-center justify-between rounded-full bg-[#E9EDE1] px-6 py-4 text-sm font-medium text-[#071516] transition-all duration-300 hover:bg-[#D9DFD1]"
              >
                <span>Copy React Code</span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </div>
          </section>

          {/* Preview Section */}
          <section className="relative overflow-hidden rounded-[28px] border border-[#1C3031] bg-[#071516]/90 p-5 shadow-2xl shadow-black/20 sm:p-7">

            {/* Preview Header */}
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#71817D]">
                  Live output
                </p>

                <h2 className="font-serif text-3xl font-normal text-[#E9EDE1]">
                  Preview
                </h2>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#304143] bg-[#0B2021] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A8BDAE]" />
                <span className="text-xs text-[#A8B1AD]">
                  Live
                </span>
              </div>
            </div>

            {/* Existing Accordion Preview */}
            <div
              className={`${fontSize} flex flex-col gap-4 rounded-[24px] p-4 sm:p-6`}
              style={{
                backgroundColor: bgColor,
                color: textColor,
              }}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden shadow-inner transition-all duration-300"
                  style={{
                    backgroundColor: bgColor,
                    borderColor: borderColor,
                    borderWidth: '1px',
                    borderRightWidth: '8px',
                    borderBottomWidth: '8px',
                    borderRadius: '60px',
                  }}
                >
                  <div
                    className="relative flex cursor-pointer items-center justify-between gap-4 p-4 pl-6 pr-4 sm:pl-8"
                    onClick={() => toggleIndex(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        toggleIndex(index);
                      }
                    }}
                  >
                    <h3
                      className={`${fontSize} min-w-0 font-normal`}
                      style={{
                        color: textColor,
                        lineHeight: 'normal',
                      }}
                    >
                      {item.question}
                    </h3>

                    <div
                      className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full select-none"
                      style={{
                        backgroundColor: textColor,
                      }}
                    >
                      <span
                        className={`absolute h-1 w-5 origin-center rounded-full transition-transform duration-300 ease-in-out ${
                          activeIndex === index ? 'rotate-45' : 'rotate-0'
                        }`}
                        style={{ backgroundColor: bgColor }}
                      />

                      <span
                        className={`absolute h-1 w-5 origin-center rounded-full transition-transform duration-300 ease-in-out ${
                          activeIndex === index ? 'rotate-[135deg]' : 'rotate-90'
                        }`}
                        style={{ backgroundColor: bgColor }}
                      />
                    </div>

                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index
                        ? 'max-h-40 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p
                      className="px-8 pb-6 text-sm font-normal leading-7 sm:px-10"
                      style={{ color: textColor }}
                      dangerouslySetInnerHTML={{
                        __html: item.answer,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Preview Footer */}
            <div className="mt-6 flex items-center justify-between gap-4 text-xs text-[#71817D]">
              <span> Maccordion Studio / Demure</span>
              <span> 02 / 02</span>
            </div>

          </section>

        </div>
      </div>
    </main>
  );
}