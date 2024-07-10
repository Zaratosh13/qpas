import React, { useState } from 'react';
import { FaProductHunt, FaShieldAlt, FaFileAlt } from 'react-icons/fa';
import RiskContent from './TabContents/RiskContent';
import ProductContent from './TabContents/ProductContent';
import CoveragesContent from './TabContents/CoveragesContent';
import { commercialLines, coveragesData, Product } from './TabContents/data';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Card = () => {
  const [activeTab, setActiveTab] = useState('Product');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const combinedData = [
    ...commercialLines.map(item => ({ type: 'Product', ...item })),
    ...coveragesData.flatMap(item =>
      item.coverages.map(coverage => ({
        type: 'Coverage',
        lineOfBusiness: item.lineOfBusiness,
        title: coverage.title,
        details: coverage.details
      }))
    ),
    ...Product.map(item => ({ type: 'Product', lineOfBusiness: item.list }))
  ];

  const handleSearchChange = e => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query === '') {
      setFilteredResults([]);
    } else {
      setFilteredResults(
        combinedData.filter(
          item =>
            item.lineOfBusiness.toLowerCase().includes(query) ||
            (item.title && item.title.toLowerCase().includes(query)) ||
            item.details.toLowerCase().includes(query)
        )
      );
    }
  };

  const handleNewProduct = () => {
    navigate('/components/layerSubNav'); // Navigate to LayerSubNav
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Product':
        return <ProductContent commercialLines={commercialLines} />;
      case 'Risk':
        return <RiskContent />;
      case 'Coverages':
        return <CoveragesContent coveragesData={coveragesData} />;
      default:
        return null;
    }
  };

  return (
    <div className="container max-w-full p-4">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6 p-6 bg-blue-100 rounded-lg shadow-xl overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Manage Product</h2>
            <div className="ml-auto">
              <button
                className="bg-blue-500 text-white px-3 py-2 rounded-md shadow-md hover:bg-blue-600"
                onClick={handleNewProduct} // Navigate on button click
              >
                New Product
              </button>
            </div>
          </div>
          <div className="h-96 overflow-y-auto custom-scrollbar" style={{ paddingRight: '10px' }}>
            {(filteredResults.length > 0
              ? filteredResults
              : Product.map(item => ({ type: 'Product', lineOfBusiness: item.list }))
            )
              .filter(item => item.type === 'Product')
              .map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm mb-2">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.lineOfBusiness}</h3>
                  <div className="flex space-x-4">
                    <a href="#!" className="text-blue-500 hover:underline">
                      Add
                    </a>
                    <a href="#!" className="text-blue-500 hover:underline">
                      Manage
                    </a>
                    <a href="#!" className="text-blue-500 hover:underline">
                      List
                    </a>
                    <a href="#!" className="text-green-500 hover:underline">
                      Export
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="col-span-6 p-6 bg-blue-100 rounded-lg shadow-xl overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">All Latest Search</h2>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex mb-4 space-x-4">
            <div
              className={`flex items-center justify-center cursor-pointer p-2 rounded-full border border-blue-500 transition duration-300 
              ${activeTab === 'Product' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
              onClick={() => setActiveTab('Product')}
            >
              <FaProductHunt className="mr-2" size={24} />
              <span>Product</span>
            </div>

            <div
              className={`flex items-center justify-center cursor-pointer p-2 rounded-full border border-blue-500 transition duration-300 
              ${activeTab === 'Risk' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
              onClick={() => setActiveTab('Risk')}
            >
              <FaShieldAlt className="mr-2" size={24} />
              <span>Risk</span>
            </div>

            <div
              className={`flex items-center justify-center cursor-pointer p-2 rounded-full border border-blue-500 transition duration-300 
              ${activeTab === 'Coverages' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
              onClick={() => setActiveTab('Coverages')}
            >
              <FaFileAlt className="mr-2" size={24} />
              <span>Coverages</span>
            </div>
          </div>
          <div className="h-80 p-2 bg-blue-100 rounded-lg shadow-inner overflow-hidden">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
