import Head from 'next/head';
import Link from 'next/link';

function Hero() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" />
            </Head>
            <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between py-5 px-4 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 font-poppins">
                <div
                    className="w-full md:w-1/2 h-64 md:h-screen flex justify-center items-center bg-no-repeat bg-center bg-contain"
                    style={{
                        backgroundImage: "url('/gl.webp')",
                    }}
                ></div>

                <div className="bg-gray-700 bg-opacity-90 p-8 md:p-10 rounded-lg text-white text-center md:text-left w-full md:w-1/2 shadow-lg">
                    <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl">
                        Footwear New Collection
                    </h1>
                    <p className="text-gray-200 w-full md:w-4/5 lg:w-3/4 mx-auto md:mx-0 text-justify mt-4 text-base md:text-lg">
                        Discover the finest collection of shoes designed for both men and women, blending comfort with style.
                    </p>

                    <div className="flex justify-center md:justify-start space-x-4 mt-5">
                        <Link href="/men">
                            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800 w-32 transition duration-200">
                                Men
                            </button>
                        </Link>

                        <Link href="/women">
                            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800 w-32 transition duration-200">
                                Women
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
