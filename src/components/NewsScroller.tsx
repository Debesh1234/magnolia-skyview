
import React from 'react';
import { AlertCircle } from 'lucide-react';

const NewsScroller = () => {
  const news = [
    "Next AGM scheduled for March 15th, 2024 at 6 PM in Community Hall",
    "Water supply will be interrupted on Sunday from 10 AM to 2 PM for maintenance",
    "New security protocols implemented - Please carry your resident ID cards",
    "Society maintenance dues for Q1 2024 are now due - Pay by March 31st",
    "Holi celebration on March 25th - Register your family at the office"
  ];

  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 overflow-hidden">
      <div className="flex items-center">
        <div className="flex items-center space-x-2 px-4 whitespace-nowrap">
          <AlertCircle className="w-5 h-5 animate-pulse" />
          <span className="font-semibold">ALERTS:</span>
        </div>
        <div className="animate-scroll whitespace-nowrap">
          {news.map((item, index) => (
            <span key={index} className="mx-8">
              • {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsScroller;
