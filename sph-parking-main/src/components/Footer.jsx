import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4">About ParkVue</h4>
            <p className="text-sm leading-relaxed">ParkVue is a platform that connects hosts with guests, providing a seamless experience for renting parking spaces.</p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-sm leading-relaxed">123 Park Avenue, City Name</p>
            <p className="text-sm leading-relaxed">Email: info@parkvue.com</p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gray-400 transition duration-300 text-xl"><FaSquareFacebook /></a>
              <a href="#" className="text-gray-300 hover:text-gray-400 transition duration-300 text-xl "><FaSquareXTwitter /></a>
              <a href="#" className="text-gray-300 hover:text-gray-400 transition duration-300 text-xl"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
