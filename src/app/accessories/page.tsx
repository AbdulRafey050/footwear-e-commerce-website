import React from 'react';
import Image from 'next/image';
import belt1 from "../../../public/belt1.webp";
import belt2 from "../../../public/belt2.webp";
import belt3 from "../../../public/belt3.webp";
import cap1 from "../../../public/cap1.webp";
import cap2 from "../../../public/cap2.webp";
import cap3 from "../../../public/cap3.webp";
import socks1 from "../../../public/socks1.webp";
import socks2 from "../../../public/socks2.webp";
import socks3 from "../../../public/socks3.webp";

const Accessories = () => {
    return (
      <div className="mx-4 md:mx-8 lg:mx-28 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-between">
        <div className="max-w-full bg-white shadow-lg rounded-lg border">
          <div className="relative">
            <Image
              src={belt1}
              alt="Premium Leather Oxford Brown Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Dark Green Leather Belt
            </h2>
            <div className="mt-2">
              <span className="text-black font-bold text-sm">Rs.4,000</span>
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
            <Image
              src={belt2}
              alt="Premium Leather Oxford Black Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Black Leather Belt
            </h2>
            <div className="mt-2">
              <span className="text-black font-bold text-sm">Rs.4,000</span>
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
           
            <Image
              src={belt3}
              alt="Premium Leather Moccasin Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Brown Leather Belt
            </h2>
            <div className="mt-2">
              <span className="text-black font-bold text-sm">Rs.4,000</span>
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
            <Image
              src={cap1}
              alt="Premium Leather Oxford Brown Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Black Baseball Cap
            </h2>
            <div className="mt-2">
              <span className="text-black font-bold text-sm">Rs.3,000</span>
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
            <Image
              src={cap2}
              alt="Premium Leather Oxford Black Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Olive Baseball Cap
            </h2>
            <div className="mt-2">
              <span className="text-black font-bold text-sm">Rs.3,000</span>
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

            <Image
              src={cap3}
              alt="Premium Leather Moccasin Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Baseball Cap
            </h2>
            <div className="mt-2">
              <span className="text-black font-bold text-sm">Rs.3,000</span>
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
            <Image
              src={socks1}
              alt="Premium Leather Moccasin Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Pack Of 2 Black & Navy Blue Socks
            </h2>
            <div className="mt-2">
              <span className="text-black font-bold text-sm">Rs.650</span>
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
            <Image
              src={socks2}
              alt="Premium Leather Moccasin Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Pack Of 2 Multi Socks
            </h2>
            <div className="mt-2">
              <span className="text-black font-bold text-sm">Rs.650</span>
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
            <Image
              src={socks3}
              alt="Premium Leather Moccasin Shoes"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-gray-700 font-semibold text-lg">
            Pack Of 2 Multi Socks
            </h2>
            <div className="mt-2">
              <span className="text-black font-bold text-sm">Rs.650</span>
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

export default Accessories;