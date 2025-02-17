import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const links = [{
    link : 'Home',
    href : '/'
  },

  {
    link: 'Truth',
    href : '/truth'
  }, 
  
  {
    link : 'Dare',
    href : '/dare'
  }]

 const location = useLocation()

  return (
    <>
      <div className="flex  items-center w-full justify-between px-5 bg-[#1E235E] py-4">
        <img
          src="https://img.freepik.com/free-vector/play-vibrant-gradient-typography_53876-93868.jpg?ga=GA1.1.1642242442.1716375531&semt=ais_hybrid"
          alt=""
          width={50}
          height={50}
          className="rounded-lg"
        />

        <ul className="flex space-x-10">
          {
            links.map((link, index) => {
              const isActive = location.pathname.startsWith(link.href)
              return (
              <li key={index}><Link to={link.href} className={`${isActive ? 'border-b border-b-white rounded-sm pb-1' : ''}`}>{link.link}</Link></li>
            )})
          }
        </ul>
      </div>
    </>
  );
};

export default Navbar;
