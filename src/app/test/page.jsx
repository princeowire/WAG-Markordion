'use client';


// This code uses divs instead of <details>, with state and smooth transitions:

import React, { useState, useRef, useEffect } from 'react';

export default function CustomAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const accordions = [
  {
    "title": "What is Accordion Maker?",
    "content": "It lets you customize and copy accordion code in React + Tailwind."
  },
  {
    "title": "Can I style it?",
    "content": "Yes! Choose colors, font size, marker position, and auto-close."
  },
  {
    "title": "How do I use the code?",
    "content": "Just click \"Copy\" and paste it into your React project."
  }
];
  const autoClose = true;
  const markerPosition = 'left';
  const fontSize = 'text-lg';
  const bgColor = '#F5F1E9';
  const textColor = '#5B4B3A';
  const detailsColor = '#D6C9B3';
  const selectedIcon = 'Square';

  function AccordionContent({ isOpen, children }) {
    const ref = useRef(null);
    const [height, setHeight] = useState('0px');

    useEffect(() => {
      if (ref.current) {
        setHeight(isOpen ? `${ref.current.scrollHeight}px` : '0px');
      }
    }, [isOpen]);

    return (
      <div
        ref={ref}
        style={{ height }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
      >
        <div className="py-2">{children}</div>
      </div>
    );
  }

  return (
    <div className={fontSize} style={{ backgroundColor: bgColor, color: textColor, borderRadius: 8, padding: 16 }}>
      {accordions.map((acc, i) => {
        const isOpen = autoClose ? openIndex === i : false;

        const toggle = () => {
          if (!autoClose) {
            setOpenIndex(openIndex === i ? null : i);
          } else {
            setOpenIndex(isOpen ? null : i);
          }
        };

        return (
          <div
            key={i}
            style={{ backgroundColor: detailsColor, borderRadius: 8, marginBottom: 16, padding: 16 }}
          >
            <button
              onClick={toggle}
              className={`w-full flex items-center justify-between font-semibold cursor-pointer select-none ${markerPosition === 'right' ? 'flex-row-reverse' : ''}`}
              style={{ color: textColor, backgroundColor: detailsColor, border: 'none', padding: 0 }}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${i}`}
              id={`accordion-header-${i}`}
            >
              {acc.title}
              <span
                className="w-5 h-5 flex items-center justify-center text-sm font-bold select-none rounded-full"
                style={{ color: bgColor, backgroundColor: textColor }}
              >
                {isOpen ? '■' : '▢'}
              </span>
            </button>
            <AccordionContent isOpen={isOpen} id={`accordion-content-${i}`} aria-labelledby={`accordion-header-${i}`}>
              {acc.content}
            </AccordionContent>
          </div>
        );
      })}
    </div>
  );
}
