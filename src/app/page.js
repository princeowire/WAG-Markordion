'use client';

import { useState } from 'react';
import ClassicAccordion from '@/component/Clasic/clasic'
import DemureAccordion from '@/component/Demure/demure';

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
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white p-4 rounded shadow mb-6">
        <h1 className="text-2xl font-bold">WAG-Markordion</h1>
        <select
          value={accordionType}
          onChange={(e) => setAccordionType(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
        >
          <option value="classic">Classic Accordion</option>
          <option value="demure">Demure Accordion</option>
        </select>
      </nav>

      {/* Dynamic Accordion */}
      <div className="bg-white p-6 rounded shadow">
        {renderAccordion()}
      </div>
    </div>
  );
}
