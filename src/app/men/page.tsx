import React from 'react';
import Image from 'next/image';
import men1 from "../../../public/men1.webp";
import men2 from "../../../public/men2.webp";
import men3 from "../../../public/mens.webp";
import men4 from "../../../public/men4.webp";
import men5 from "../../../public/men5.webp";
import men6 from "../../../public/men6.webp";
import men7 from "../../../public/men7.jpg";
import men8 from "../../../public/men8.jpg";
import men9 from "../../../public/men9.jpg";


const Men = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-28 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-between">
    
        <div className="max-w-full bg-white shadow-lg rounded-lg border">
          <div className="relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
              -50%
            </div>
            <Image
              src={men1}
              alt="Premium Leather Oxford Brown Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Penny Perforated Loafers
            </h2>
            <div className="mt-2">
              <span className="text-gray-400 line-through text-sm">Rs.22,000</span>
              <span className="text-red-600 font-bold text-lg ml-2">Rs.11,000</span>
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
              -40%
            </div>
            <Image
              src={men2}
              alt="Premium Leather Oxford Black Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Double Buckle Loafers
            </h2>
            <div className="mt-2">
              <span className="text-gray-400 line-through text-sm">Rs.25,000</span>
              <span className="text-red-600 font-bold text-lg ml-2">Rs.15,000</span>
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
              -50%
            </div>
            <Image
              src={men3}
              alt="Premium Leather Moccasin Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
              Brown Perforated Loafers
            </h2>
            <div className="mt-2">
              <span className="text-gray-400 line-through text-sm">Rs.22,000</span>
              <span className="text-red-600 font-bold text-lg ml-2">Rs.11,000</span>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-between mt-10">
    
        <div className="max-w-full bg-white shadow-lg rounded-lg border">
          <div className="relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
              -50%
            </div>
            <Image
              src={men4}
              alt="Premium Leather Oxford Brown Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
              Premium Leather Oxford Brown Shoes
            </h2>
            <div className="mt-2">
              <span className="text-gray-400 line-through text-sm">Rs.36,000</span>
              <span className="text-red-600 font-bold text-lg ml-2">Rs.18,000</span>
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
              -40%
            </div>
            <Image
              src={men5}
              alt="Premium Leather Oxford Black Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
              Premium Leather Oxford Black Shoes
            </h2>
            <div className="mt-2">
              <span className="text-gray-400 line-through text-sm">Rs.32,000</span>
              <span className="text-red-600 font-bold text-lg ml-2">Rs.19,200</span>
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
              -40%
            </div>
            <Image
              src={men6}
              alt="Premium Leather Moccasin Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
              Premium Leather Moccasin Shoes
            </h2>
            <div className="mt-2">
              <span className="text-gray-400 line-through text-sm">Rs.32,000</span>
              <span className="text-red-600 font-bold text-lg ml-2">Rs.19,200</span>
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
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-between mt-10">
    
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
      </div>
    </div>
  );
};

export default Men;
