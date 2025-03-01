import React from 'react';
import { Link } from 'react-router-dom'; 
import '../../index.css';

const Footer = () => {
  return (
    <div className='container mx-auto px-4 pt-[50px] bg-gray-800 text-white' style={{ clipPath: "circle(151% at 52% 117%)" }}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
        <div>
          <h3 className="text-2xl font-bold text-[#ffffff] mb-6">Vaibhav Enterprises</h3>
          <p className="text-gray-300 mb-6">
            Leading the way in solar energy solutions with professional installation services and cutting-edge technology.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61561602052171#" target='_blank' rel="noopener noreferrer" className="bg-white rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 m-2" stroke="currentColor" viewBox="0 0 512 512">
                <path fill="#106aff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@vaibhavsharma-t5g" target='_blank' rel="noopener noreferrer" className="bg-white rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-7 h-7 m-2" stroke="currentColor">
                <path fill="#ff0000" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/vaibhavsolarpower/?fbclid=IwZXh0bgNhZW0CMTEAAR3Ljy1fzy6NPt7JXxEnLNQtmB_bB0koR6JVOeKeHzIqZwkz0YwOTS3uKYU_aem_1sgNMfxg3oqdNWc9nZCtlQ" target='_blank' rel="noopener noreferrer" className="bg-white rounded-full transition-colors">
              <img src="/instagram_logo.png" className="m-2 mt-2.5 w-6.5 h-6.5" alt="Instagram" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-gray-300 hover:text-[#1230AE] transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-[#1230AE] transition-colors">About</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-[#1230AE] transition-colors">Services</Link></li>
            <li><Link to="/products" className="text-gray-300 hover:text-[#1230AE] transition-colors">Products</Link></li>
            <li><Link to="/offers" className="text-gray-300 hover:text-[#1230AE] transition-colors">Offers</Link></li>
            <li><Link to="/portfolio" className="text-gray-300 hover:text-[#1230AE] transition-colors">Portfolio</Link></li>
            <li><Link to="/contactus" className="text-gray-300 hover:text-[#1230AE] transition-colors">Contact</Link></li>
          </ul>
        </div>


        <div>
          <h4 className="text-lg font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span className="text-gray-300">Ravi Nagar, Near Anjani Medical Mugalsarai, 232101</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span className="text-gray-300">
                <a href="tel:+918299053022" className="hover:text-blue-400 transition inline-block sm:inline">+91-8299053022</a>,
                <a href="tel:+918299179550" className="hover:text-blue-400 transition inline-block sm:inline">+91-8299179550</a>,
                <a href="tel:+919250755909" className="hover:text-blue-400 transition inline-block sm:inline">+91-9250755909</a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <a href="mailto:vaibhav01enterprises@gmail.com" className="text-gray-300 hover:text-blue-400 transition">
                vaibhav01enterprises@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black pt-8">
        <div className="flex justify-center">
          <div className="text-gray-400 text-sm">
            &copy; 2025 Vaibhav Enterprises. All rights reserved.
          </div>
        </div>
      </div>


      <div className="border-t border-neutral-600">
        <div className="flex justify-center items-center">
          <div className="text-gray-400 text-xs pt-2">
            Developed & Designed by <a href='https://vstgrowthbusiness.com/' target='_blank' rel="noopener noreferrer" className='hover:text-[#1230AE]'>VST Growth Business</a>
          </div>
          <a href="https://vstgrowthbusiness.com/" target='_blank' rel="noopener noreferrer">
            <img src="/logovst.svg" className='w-12 h-12 cursor-pointer hover:scale-150 transition-all duration-800 ml-4' alt="VST Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;