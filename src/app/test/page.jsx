'use client';
import React, { useState } from 'react';

const data = [
  {
    "question": "What is Accordion Maker?",
    "answer": "It lets you customize and copy accordion code in React + Tailwind."
  },
  {
    "question": "Can I style it?",
    "answer": "Yes! Choose colors, font size, marker position, and auto-close."
  },
  {
    "question": "How do I use the code?",
    "answer": "Just click \"Copy\" and paste it into your React project."
  }
];

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
            backgroundColor: '#F5F1E9',
            borderColor: '#D6C9B3',
            borderRadius: '50px',
          }}
        >
          <div
            className="flex justify-between items-center py-4 cursor-pointer pl-5 pr-3"
            onClick={() => toggleIndex(index)}
          >
            <h3
              className="text-base font-normal"
              style={{
                color: '#5B4B3A',
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
                backgroundColor: '#5B4B3A',
                color: '#F5F1E9',
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
            className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <p
              className="text-sm font-normal leading-7 px-10 pb-5"
              style={{ color: '#5B4B3A' }}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
}