import React from 'react';
import Image from 'next/image';
import men7 from "../../../public/men7.jpg";
import men8 from "../../../public/men8.jpg";
import men9 from "../../../public/men9.jpg";
import women7 from "../../../public/women7.webp";
import women8 from "../../../public/women8.webp";
import women9 from "../../../public/women9.webp";

const Arrivals = () => {
    return (
        <div className="mx-4 md:mx-8 lg:mx-28 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-between">
      <div className="max-w-full bg-white shadow-lg rounded-lg border">
          <div className="relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
              New Arrivals
            </div>
            <Image
              src={men7}
              alt="Premium Leather Moccasin Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Dynamic Slip-On Sneakers
            </h2>
            <div className="mt-2">
              <span className="text-black font-bold text-sm">Rs.45,000</span>
            </div>
            <button className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
              BUY
            </button>
            <button className="mt-4 px-4 mx-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="max-w-full bg-white shadow-lg rounded-lg border">
          <div className="relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
              New Arrivlas
            </div>
            <Image
              src={men8}
              alt="Premium Leather Moccasin Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Sporty Slip-On Sneakers
            </h2>
            <div className="mt-2">
              <span className="text-black font-bold text-sm">Rs.45,000</span>
            </div>
            <button className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
              BUY
            </button>
            <button className="mt-4 px-4 mx-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="max-w-full bg-white shadow-lg rounded-lg border">
          <div className="relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
              New Arrivals
            </div>
            <Image
              src={men9}
              alt="Premium Leather Moccasin Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Breathable Slip-On Sneakers
            </h2>
            <div className="mt-2">
              <span className="text-black font-bold text-sm">Rs.45,000</span>
            </div>
            <button className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
              BUY
            </button>
            <button className="mt-4 px-4 mx-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
              ADD TO CART
            </button>
          </div>
        </div>

        <div className="max-w-full bg-white shadow-lg rounded-lg border">
          <div className="relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
            New Arrivals 
            </div>
            <Image
              src={women7}
              alt="Premium Leather Moccasin Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Chunky Plaid Sneakers
            </h2>
            <div className="mt-2">
              <span className="text-black font-bold text-sm">Rs.30,000.00</span>
            </div>
            <button className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
              BUY
            </button>
            <button className="mt-4 px-4 mx-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="max-w-full bg-white shadow-lg rounded-lg border">
          <div className="relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
              New Arrivals
            </div>
            <Image
              src={women8}
              alt="Premium Leather Moccasin Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Croc-Effect Sneakers
            </h2>
            <div className="mt-2">
              <span className="text-black font-bold text-sm">Rs.30,000.00</span>
            </div>
            <button className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
              BUY
            </button>
            <button className="mt-4 px-4 mx-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="max-w-full bg-white shadow-lg rounded-lg border">
          <div className="relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
              New Arrivals
            </div>
            <Image
              src={women9}
              alt="Premium Leather Moccasin Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Textured Chunky Sneakers
            </h2>
            <div className="mt-2">
              <span className="text text-sm font-bold">Rs.30,000.00</span>
          
            </div>
            <button className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
              BUY
            </button>
            <button className="mt-4 px-4 mx-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
              ADD TO CART
            </button>
          </div>
        </div>
    </div>
    </div>
    )
}
export default Arrivals 