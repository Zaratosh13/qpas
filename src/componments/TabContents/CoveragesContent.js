import React from 'react';
import { coveragesData } from './data';

const CoveragesContent = () => {
  return (
    <div className="max-h-80 overflow-y-auto custom-scrollbar" style={{ paddingRight: '5px' }}>
      <div className="p-2"> {/* Adjusted padding from p-4 to p-2 */}
        {coveragesData.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md mb-2">
            <h4 className="text-lg font-semibold mb-2 text-gray-900">{item.lineOfBusiness}</h4>
            <ul className="list-disc pl-5">
              {item.coverages.map((coverage, covIndex) => (
                <li key={covIndex} className="mb-2">
                  <h5 className="text-md font-semibold text-gray-900">{coverage.title}</h5>
                  <p className="text-sm text-gray-700">{coverage.details}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoveragesContent;
