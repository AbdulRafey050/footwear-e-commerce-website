import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div>
            <h3 className="text-xl font-bold mb-2">FOOTWEAR</h3>
            <ul className="space-y-1">
              {["Shop All", "Men Shoes", "Women Shoes", "Terms of Service", "Refund Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-400 transition duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">CUSTOMER CARE</h3>
            <ul className="space-y-1">
              {["FAQs", "Contact Us", "Return & Exchange Policy", "Retail Policy", "Shipping Policy", "Modes of Payment", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-400 transition duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">CONTACT</h3>
            <div className="space-y-2 text-sm">
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-1 text-lg" /> St-4, F9 - ISLAMABAD
              </span>
              <span className="flex items-center">
                <FaPhoneAlt className="mr-1 text-lg" /> +92 312 3456790
              </span>
              <span className="flex items-center">
                <IoMdMail className="mr-1 text-lg" /> 
                <a href="mailto:ContactFootwear@gmail.com" className="hover:text-yellow-400 transition duration-300">ContactFootwear@gmail.com</a>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-600 pt-4">
          <h3 className="text-xl font-bold mb-2">FOLLOW US</h3>
          <div className="flex justify-center gap-4 text-2xl">
            <a href="#" aria-label="Instagram" className="hover:text-yellow-400 transition duration-300"><FaInstagram /></a>
            <a href="#" aria-label="Facebook" className="hover:text-yellow-400 transition duration-300"><FaFacebook /></a>
            <a href="#" aria-label="TikTok" className="hover:text-yellow-400 transition duration-300"><FaTiktok /></a>
          </div>
        </div>
        
        <div className="text-center mt-4 text-sm">
          <p>© {new Date().getFullYear()} Footwear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
