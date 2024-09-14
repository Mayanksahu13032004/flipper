import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import img1 from './4.svg'

export default function Header() {
    return (
        
<header className="shadow-md sticky top-0 z-50 bg-white">
  <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3">
    <div className="flex justify-between items-center mx-auto max-w-screen-xl">
      <div className="hidden lg:flex lg:items-center lg:w-auto lg:order-1 w-full" id="mobile-menu-2">
        <ul className="flex justify-evenly items-center w-full font-medium">
          <li className="mr-7 pr-20">
            <img src={img1} alt="logo" className="h-8" />
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-1 pr-20 pl-3 text-2xl font-semibold duration-200 ${
                  isActive ? "text-green-700 border-b-2 border-green-700" : "text-gray-700"
                } hover:text-green-600`
              }
            >
              Add Invest
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/viewsubscribe"
              className={({ isActive }) =>
                `block py-2 pr-7 pl-3 text-2xl font-semibold duration-200 ${
                  isActive ? "text-green-700 border-b-2 border-green-700" : "text-gray-700"
                } hover:text-green-600`
              }
            >
              View all Subscribers
            </NavLink>
          </li>

            {/* all card */}

            <li>
            <NavLink
              to="/allcard"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 text-2xl font-semibold duration-200 ${
                  isActive ? "text-green-700 border-b-2 border-green-700" : "text-gray-700"
                } hover:text-green-600`
              }
            >
             All Invest
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/allusers"
              className={({ isActive }) =>
                `block py-2 pr-7 pl-3 text-2xl font-semibold duration-200 ${
                  isActive ? "text-green-700 border-b-2 border-green-700" : "text-gray-700"
                } hover:text-green-600`
              }
            >
              All Users
            </NavLink>
          </li>




        </ul>
      </div>
    </div>
  </nav>
</header>


    );
}