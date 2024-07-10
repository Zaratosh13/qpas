import React from 'react';
import { coveragesData } from './data';

const ProductContent = () => {
  return (
    <div className="h-full overflow-y-auto custom-scrollbar p-3" style={{ paddingRight: '8px' }}> {/* Adjusted padding from p-4 to p-3 */}
      <div className="space-y-4">
        {coveragesData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl mb-3">{/* Adjusted mb-4 to mb-3 */}
          
            <h4 className="text-lg font-semibold mb-2 text-gray-900">{item.lineOfBusiness}</h4>
            <div className="flex space-x-2 mt-3"> {/* Adjusted mt-4 to mt-3 */}
              <a href="#!" className="text-blue-600 text-md hover:underline">Read More</a>
            </div>
          </div>
        ))}
      </div>  
    </div>
  );
};

export default ProductContent;
