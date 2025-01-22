import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./Screenshot__242_-transformed-removebg-preview.png"

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href='/' className="text-orange-500 text-[2rem] font-bold"><img src={logo} height={200} width={200} /></a>
          </div>
          <div className="flex pl-[200px]">
            <Link to="/" className="hover:animate-pulse px-3 py-2 rounded-md text-sm font-medium ">Home</Link>
            <Link to="/listings" className="hover:animate-pulse px-3 py-2 rounded-md text-sm font-medium">List Your Space</Link>
            <Link to="/parkingpage" className="hover:animate-pulse px-3 py-2 rounded-md text-sm font-medium">Book a Slot</Link>
            <Link to="/bookinghistory" className="hover:animate-pulse px-3 py-2 rounded-md text-sm font-medium">parking history</Link>
            <Link to="/nearestlocation" className="hover:animate-pulse px-3 py-2 rounded-md text-sm font-medium">get Nearest Parking</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
