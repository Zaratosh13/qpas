import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    arrows: false, // Disable default arrows
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true, // Add dots navigation
  };

  const commercialLines = [
    {
      lineOfBusiness: "Writing Company"
    },
    {
      lineOfBusiness: "Product"
    },
    {
      lineOfBusiness: "Sub Product"
    },
    {
      lineOfBusiness: "Risk"
    },
    {
      lineOfBusiness: "Coverage Group"
    },
    {
      lineOfBusiness: "Coverage"
    },
    {
      lineOfBusiness: "Base Rate"
    },
    {
      lineOfBusiness: "Factor"
    },
    {
      lineOfBusiness: "Rating"
    },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 flex justify-center items-center text-violet-900">QPAS</h2>
      <Slider {...settings} ref={sliderRef}>
        {commercialLines.map((d, index) => (
          <div key={index} className='slide-item'>
            <div className='flex flex-col justify-start items-center gap-4 p-4'>
              <h4 className='text-black text-xl font-semibold'>{d.lineOfBusiness}</h4>
              <div className="button-container flex flex-row items-center gap-2 flex-wrap justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-sm"> {/* Adjusted padding and font size */}
                  Add
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-sm"> {/* Adjusted padding and font size */}
                  Manage
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-sm"> {/* Adjusted padding and font size */}
                  List
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-sm"> {/* Adjusted padding and font size */}
                  Export
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};



export default CardSlider;


<div className="mt-auto space-x-2">
<a href="#!" className="text-blue-500 hover:underline">Add</a>
<a href="#!" className="text-blue-500 hover:underline">Manage</a>
<a href="#!" className="text-blue-500 hover:underline">List</a>
<a href="#!" className="text-green-500 hover:underline">Export</a>
</div>