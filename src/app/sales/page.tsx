import React from 'react';
import Image from 'next/image';
import men1 from "../../../public/men1.webp";
import men2 from "../../../public/men2.webp";
import men3 from "../../../public/mens.webp";
import men4 from "../../../public/men4.webp";
import men5 from "../../../public/men5.webp";
import men6 from "../../../public/men6.webp";
import women1 from "../../../public/women1.webp";
import women2 from "../../../public/women2.webp";
import women3 from "../../../public/women3.webp";
import women4 from "../../../public/women4.webp";
import women5 from "../../../public/women5.webp";
import women6 from "../../../public/women6.webp";

const Sales = () => {
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
              -50%
            </div>
            <Image
              src={women1}
              alt="Premium Leather Oxford Brown Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Floral Fusion Khussa
            </h2>
            <div className="mt-2">
              <span className="text-gray-400 line-through text-sm">Rs.11,000</span>
              <span className="text-red-600 font-bold text-lg ml-2">Rs.5,500</span>
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
              src={women2}
              alt="Premium Leather Oxford Black Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Turquoise Tapestry Khussa
            </h2>
            <div className="mt-2">
              <span className="text-gray-400 line-through text-sm">Rs.11,000</span>
              <span className="text-red-600 font-bold text-lg ml-2">Rs.5,500</span>
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
              -30%
            </div>
            <Image
              src={women3}
              alt="Premium Leather Moccasin Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Knotted Elegance Slippers
            </h2>
            <div className="mt-2">
              <span className="text-gray-400 line-through text-sm">Rs.12,000</span>
              <span className="text-red-600 font-bold text-lg ml-2">Rs.8,400</span>
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
              src={women4}
              alt="Premium Leather Oxford Brown Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Black Moccasin
            </h2>
            <div className="mt-2">
              <span className="text-gray-400 line-through text-sm">Rs.18,000</span>
              <span className="text-red-600 font-bold text-lg ml-2">Rs.9,000</span>
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
              src={women5}
              alt="Premium Leather Oxford Black Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Buckle Detail Loafers
            </h2>
            <div className="mt-2">
              <span className="text-gray-400 line-through text-sm">Rs.16,000</span>
              <span className="text-red-600 font-bold text-lg ml-2">Rs.9,600</span>
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
              -30%
            </div>
            <Image
              src={women6}
              alt="Premium Leather Moccasin Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Croc Embossed Loafers
            </h2>
            <div className="mt-2">
              <span className="text-gray-400 line-through text-sm">Rs.13,000</span>
              <span className="text-red-600 font-bold text-lg ml-2">Rs.9,100</span>
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

    </div>
    </div>
    
    )
}

export default Sales 
