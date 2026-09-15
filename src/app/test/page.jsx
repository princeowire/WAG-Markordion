'use client';


import React, { useState } from 'react';

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

  return (
    <div
      className="text-base rounded-2xl p-5"
      style={{
        backgroundColor: '#020B0C',
        color: '#E9EDE1'
      }}
    >
      {accordions.map((acc, i) => {
        const isOpen = false ? openIndex === i : undefined;

        return (
          <details
            key={i}
            open={isOpen}
            onClick={(e) => {
              if (!false) return;

              e.preventDefault();
              setOpenIndex(isOpen ? null : i);
            }}
            className="group p-5 rounded-xl mb-3 relative border border-white/10"
            style={{
              backgroundColor: '#071516'
            }}
          >
            <summary
              className="cursor-pointer font-medium list-none flex items-center justify-between"
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
                          color: '#020B0C',
                          backgroundColor: '#E9EDE1',
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
                textAlign: 'left'
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