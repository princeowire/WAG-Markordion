'use client';

import React, { useState } from 'react';

export default function CustomAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordions = [
    { title: 'What is Accordion Maker?', content: 'It lets you customize and copy accordion code in React + Tailwind.' },
    { title: 'Can I style it?', content: 'Yes! Choose colors, font size, marker position, and auto-close.' },
    { title: 'How do I use the code?', content: 'Just click "Copy" and paste it into your React project.' },
  ];

  return (
    <div
      className="text-base rounded p-4"
      style={{ backgroundColor: '#3A4A24', color: '#D6D9C3' }}
    >
      {accordions.map((acc, i) => {
        const isOpen = true ? openIndex === i : undefined;
        return (
          <details
            key={i}
            open={isOpen}
            onClick={(e) => {
              if (!true) return;
              e.preventDefault();
              setOpenIndex(isOpen ? null : i);
            }}
            className="group p-4 rounded-lg mb-4 relative"
            style={{ color: '#D6D9C3', backgroundColor: '#566B2A' }}
          >
            <summary
              className={`cursor-pointer font-semibold list-none flex items-center ${'left' === 'right' ? 'justify-between' : 'justify-between flex-row-reverse'}`}
              style={{ backgroundColor: '#566B2A' }}
            >
              {acc.title}
              <span
                className="w-5 h-5 rounded-full text-white flex items-center justify-center text-sm font-bold select-none text-center p-2"
                style={{ color: '#3A4A24', backgroundColor: '#D6D9C3' }}
              >
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">−</span>
              </span>
            </summary>
            <div
              className="mt-2"
              style={{ textAlign: 'left' === 'right' ? 'left' : 'right' }}
            >
              {acc.content}
            </div>
          </details>
        );
      })}
    </div>
  );
}
