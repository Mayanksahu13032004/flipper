import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import img1 from './4.svg'

export default function Header() {
    return (
        // <header className="shadow sticky z-50 top-0">
        //     <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        //         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                 
        //             <div
        //                 className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        //                 id="mobile-menu-2">
        //                 <ul className=" w-[150VH] flex  mt-4 font-medium  justify-evenly align-center">
        //                     <li className='mr-20'>
        //                         <img src={img1} alt="logo" />
        //                     </li>
        //                     <li>
        //                         <NavLink
        //                         to="/"
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 pl-3 font-bold text-2xl duration-200 ${isActive ? "text-green-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
        //                             }
        //                         >
        //                             Add Invest
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink
        //                         to="/viewsubscribe"
        //                             className={({isActive}) =>
        //                                 `block py-2 pr-4 text-2xl pl-3 font-bold duration-200 ${isActive ? "text-green-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
        //                             }
        //                         >
        //                             View all Subscriber
        //                         </NavLink>
        //                     </li>
        //                    </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </header>
<header className="shadow-md sticky top-0 z-50 bg-white">
  <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3">
    <div className="flex justify-between items-center mx-auto max-w-screen-xl">
      <div className="hidden lg:flex lg:items-center lg:w-auto lg:order-1 w-full" id="mobile-menu-2">
        <ul className="flex justify-evenly items-center w-full font-medium">
          <li className="mr-12 pr-20">
            <img src={img1} alt="logo" className="h-8" />
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-20 pl-3 text-2xl font-semibold duration-200 ${
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
                `block py-2 pr-4 pl-3 text-2xl font-semibold duration-200 ${
                  isActive ? "text-green-700 border-b-2 border-green-700" : "text-gray-700"
                } hover:text-green-600`
              }
            >
              View all Subscribers
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>


    );
}