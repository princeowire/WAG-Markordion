'use client';

import { useState } from 'react';

const fontSizes = [
  { label: 'Small', value: 'text-sm' },
  { label: 'Medium', value: 'text-base' },
  { label: 'Large', value: 'text-lg' },
];

const iconPresets = {
  PlusMinus: { closed: '+', open: '−' },
  Arrow: { closed: '→', open: '↓' },
  DouArrow: { closed: '⇊', open: '⇈' },
  Caret: { closed: '▷', open: '▽' },
  CircleMath: { closed: '⊕', open: '⊖' },
  CrossClose: { closed: '✚', open: '⨉' },
  Square: { closed: '▢', open: '■' },
};

const presets = {
  Dark: {
    bgColor: '#1A1A1A',
    textColor: '#FFFFFF',
    detailsColor: '#2D2D2D',
  },
  Light: {
    bgColor: '#F9F9F9',
    textColor: '#222222',
    detailsColor: '#E2E2E2',
  },
  Teal: {
    bgColor: '#153B3F',
    textColor: '#D3E4CD',
    detailsColor: '#1E5943',
  },
  WarmGray: {
    bgColor: '#F5F1E9',
    textColor: '#5B4B3A',
    detailsColor: '#D6C9B3',
  },
  SlateBlue: {
    bgColor: '#2E3A59',
    textColor: '#D4D9E2',
    detailsColor: '#394E7A',
  },
  Olive: {
    bgColor: '#3A4A24',
    textColor: '#D6D9C3',
    detailsColor: '#566B2A',
  },
};

export default function AccordionMaker() {
  const [bgColor, setBgColor] = useState(presets.Dark.bgColor);
  const [textColor, setTextColor] = useState(presets.Dark.textColor);
  const [detailsColor, setDetailsColor] = useState(presets.Dark.detailsColor);
  const [fontSize, setFontSize] = useState('text-base');
  const [markerPosition, setMarkerPosition] = useState('left');
  const [autoClose, setAutoClose] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState('PlusMinus');

  const accordions = [
    { title: 'What is Accordion Maker?', content: 'It lets you customize and copy accordion code in React + Tailwind.' },
    { title: 'Can I style it?', content: 'Yes! Choose colors, font size, marker position, and auto-close.' },
    { title: 'How do I use the code?', content: 'Just click "Copy" and paste it into your React project.' },
  ];

  const resetToDefaults = () => {
    setBgColor(presets.Dark.bgColor);
    setTextColor(presets.Dark.textColor);
    setDetailsColor(presets.Dark.detailsColor);
    setFontSize('text-base');
    setMarkerPosition('left');
    setAutoClose(false);
    setOpenIndex(null);
    setSelectedIcon('PlusMinus');
  };

  const applyPreset = (preset) => {
    setBgColor(presets[preset].bgColor);
    setTextColor(presets[preset].textColor);
    setDetailsColor(presets[preset].detailsColor);
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

  const generatedCode = `
import React, { useState } from 'react';

export default function CustomAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const accordions = ${JSON.stringify(accordions, null, 2)};

  return (
    <div className="${fontSize} rounded p-4" style={{ backgroundColor: '${bgColor}', color: '${textColor}' }}>
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
            className="group p-4 rounded-lg mb-4 relative"
            style={{ backgroundColor: '${detailsColor}' }}
          >
            <summary className="cursor-pointer font-semibold list-none flex items-center ${markerPosition === 'right' ? 'justify-between' : 'justify-between flex-row-reverse'}">
              {acc.title}
              <span
                className="w-5 h-5 flex items-center justify-center text-sm font-bold select-none"
                style={{ color: '${bgColor}', backgroundColor: '${textColor}' }}
              >
                <span className="group-open:hidden">${iconPresets[selectedIcon].closed}</span>
                <span className="hidden group-open:inline">${iconPresets[selectedIcon].open}</span>
              </span>
            </summary>
            <div className="mt-2" style={{ textAlign: '${markerPosition === 'right' ? 'left' : 'right'}' }}>
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
    <main className="min-h-screen p-10 max-sm:p-4 pb-0 bg-gradient-to-b from-gray-50 to-gray-100 text-black">
      <h1 className="text-4xl max-sm:text-center font-extrabold mb-8 ">WAG-Markordion</h1>

      <div className="flex flex-wrap gap-3 mb-8">
        {Object.entries(presets).map(([key, colors]) => (
          <button
            key={key}
            onClick={() => applyPreset(key)}
            className="px-5 py-2 rounded-md shadow-md"
            style={{
              backgroundColor: colors.bgColor,
              color: colors.textColor,
              border: `2px solid ${colors.detailsColor}`,
            }}
          >
            {key}
          </button>
        ))}
        <button
          onClick={resetToDefaults}
          className="px-5 py-2 rounded-md bg-red-600 text-white shadow-md hover:bg-red-700"
        >
          Reset Defaults
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        <section className="space-y-6 bg-white p-4 rounded-xl shadow-lg">
          {renderColorInput('Background Color', bgColor, setBgColor)}
          {renderColorInput('Text Color', textColor, setTextColor)}
          {renderColorInput('Details Background Color', detailsColor, setDetailsColor)}

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

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Marker Position</label>
            <select
              className="border rounded-md px-3 py-2 w-full"
              value={markerPosition}
              onChange={(e) => setMarkerPosition(e.target.value)}
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Accordion Icon</label>
            <select
              className="border rounded-md px-3 py-2 w-full"
              value={selectedIcon}
              onChange={(e) => setSelectedIcon(e.target.value)}
            >
              {Object.keys(iconPresets).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="autoClose"
              checked={autoClose}
              onChange={() => {
                setAutoClose(!autoClose);
                setOpenIndex(null);
              }}
              className="w-5 h-5"
            />
            <label htmlFor="autoClose" className="font-semibold">
              Auto-close (Only one open at a time)
            </label>
          </div>

          <button
            onClick={handleCopy}
            className="w-full bg-blue-600 text-white py-3 rounded-md shadow-md hover:bg-blue-700"
          >
            Copy React Code
          </button>
        </section>

        <section className="bg-white p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Preview</h2>
          <div className={`${fontSize} rounded p-4`} style={{ backgroundColor: bgColor, color: textColor }}>
            {accordions.map((acc, i) => {
              const isOpen = autoClose ? openIndex === i : undefined;
              return (
                <details
                  key={i}
                  open={isOpen}
                  onClick={(e) => {
                    if (!autoClose) return;
                    e.preventDefault();
                    setOpenIndex(isOpen ? null : i);
                  }}
                  className="group p-4 rounded-lg mb-4"
                  style={{ backgroundColor: detailsColor }}
                >
                  <summary
                    className={`cursor-pointer font-semibold list-none flex items-center ${markerPosition === 'right' ? 'justify-between' : 'justify-between flex-row-reverse'}`}
                  >
                    {acc.title}
                    <span
                      className="w-5 h-5 flex items-center justify-center text-sm font-bold select-none rounded-full"
                      style={{ color: bgColor, backgroundColor: textColor }}
                    >
                      <span className="group-open:hidden">{iconPresets[selectedIcon].closed}</span>
                      <span className="hidden group-open:inline">{iconPresets[selectedIcon].open}</span>
                    </span>

                  </summary>
                  <div className="mt-2" style={{ textAlign: markerPosition === 'right' ? 'left' : 'right' }}>
                    {acc.content}
                  </div>
                </details>
              );
            })}
          </div>
        </section>
      </div>

      <footer className="mt-12 py-4 border-t text-center text-sm text-gray-600 bg-gray-50">
        <p>
          React Tailwind Accordion Maker |{' '}
          <a
            href="https://www.linkedin.com/in/prince-owire-841187250"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Prince Owire
          </a>{' '}
          | © 2025
        </p>
      </footer>
    </main>
  );
}
