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
  Teal: {
    bgColor: '#153B3F',
    textColor: '#D3E4CD',
    detailsColor: '#1E5943',
    borderColor: '#1E5943',
  },
  WarmGray: {
    bgColor: '#F5F1E9',
    textColor: '#5B4B3A',
    detailsColor: '#D6C9B3',
    borderColor: '#D6C9B3',
  },
  SlateBlue: {
    bgColor: '#2E3A59',
    textColor: '#D4D9E2',
    detailsColor: '#394E7A',
    borderColor: '#394E7A',
  },
  Olive: {
    bgColor: '#3A4A24',
    textColor: '#D6D9C3',
    detailsColor: '#566B2A',
    borderColor: '#566B2A',
  },
};

const defaultData = [
  {
    question: 'What is Accordion Maker?',
    answer: 'It lets you customize and copy accordion code in React + Tailwind.',
  },
  {
    question: 'WHO IS BEHIND $Doug THE PUG?',
    answer: `$DOUG's lead ideatoor is an experienced entrepreneur with a strong background in decentralized finance (DeFi).<br />
      He's got a proven track record in leading successful projects and creating innovative campaigns in web3!`,
  },
];

export default function AccordionMaker() {
  const [bgColor, setBgColor] = useState(presets.Dark.bgColor);
  const [textColor, setTextColor] = useState(presets.Dark.textColor);
  const [detailsColor, setDetailsColor] = useState(presets.Dark.detailsColor);
  const [borderColor, setBorderColor] = useState(presets.Dark.borderColor);
  const [fontSize, setFontSize] = useState('text-base');
  const [activeIndex, setActiveIndex] = useState(null);

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
              className="flex items-center justify-center rounded-full select-none transition-transform duration-100"
              style={{
                width: '3rem',
                height: '3rem',
                backgroundColor: '${textColor}',
                color: '${bgColor}',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                transform: activeIndex === index ? 'rotate(90deg)' : 'rotate(0deg)',
                transformOrigin: 'center',
              }}
            >
              {activeIndex === index ? '×' : '+'}
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
    <div>
      <label className="block font-semibold mb-2 text-gray-700">{label}</label>
      <div className="flex items-center space-x-3">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-10 h-10 rounded-md border border-gray-300 shadow-sm"
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
          className="border rounded-md px-3 py-1 w-24"
          maxLength={7}
        />
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-black p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Accordion Maker</h1>

      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {Object.keys(presets).map((preset) => (
          <button
            key={preset}
            onClick={() => applyPreset(preset)}
            className="px-4 py-2 rounded-md shadow"
            style={{
              backgroundColor: presets[preset].bgColor,
              color: presets[preset].textColor,
              border: `2px solid ${presets[preset].detailsColor}`,
            }}
          >
            {preset}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        <section className="space-y-6 bg-white p-4 rounded-xl shadow-lg">
          {renderColorInput('Background Color', bgColor, setBgColor)}
          {renderColorInput('Text Color', textColor, setTextColor)}
          {renderColorInput('Details Color', detailsColor, setDetailsColor)}
          {renderColorInput('Border Color', borderColor, setBorderColor)}

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Font Size</label>
            <select
              className="border rounded-md px-3 py-2 w-full"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            >
              {fontSizes.map((size) => (
                <option key={size.value} value={size.value}>
                  {size.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleCopy}
            className="mt-6 w-full px-5 py-2 rounded-md bg-blue-600 text-white shadow-md hover:bg-blue-700"
          >
            Copy React Code
          </button>
        </section>

        <section className="bg-white p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Preview</h2>
          <div className="flex flex-col gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="shadow-inner border-r-8 border-b-8 border-[1px]"
                style={{
                  backgroundColor: bgColor,
                  borderColor: borderColor,
                  borderRadius: '50px',
                }}
              >
                <div
                  className="flex justify-between items-center py-4 cursor-pointer pl-5 pr-3"
                  onClick={() => toggleIndex(index)}
                >
                  <h3
                    className={`${fontSize} font-normal`}
                    style={{ color: textColor, lineHeight: 'normal' }}
                  >
                    {item.question}
                  </h3>
                  <div
                    className="flex items-center justify-center rounded-full select-none transition-transform duration-100"
                    style={{
                      width: '3rem',
                      height: '3rem',
                      backgroundColor: textColor,
                      color: bgColor,
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                      transform: activeIndex === index ? 'rotate(90deg)' : 'rotate(0deg)',
                      transformOrigin: 'center',
                    }}
                  >
                    {activeIndex === index ? '×' : '+'}
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p
                    className="font-normal text-sm leading-7 px-10 pb-5"
                    style={{ color: textColor }}
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
