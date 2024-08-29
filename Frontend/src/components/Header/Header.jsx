import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        // <header className="shadow sticky z-50 top-0">
        //     <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        //         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        //             <Link to="/" className="flex items-center">
        //                 <h1 className='text-green-800 font-bold text-3xl'>NEXT INVEST</h1>
        //             </Link>
        //             <div className="flex items-center lg:order-2">
        //                 <Link
        //                     to="login"
        //                     className="text-white bg-green-800  focus:ring-4 focus:ring-gray-300 font-medium  text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
        //                 >
        //                    LOGIN
        //                 </Link>
        //                 <Link
        //                     to="register"
        //                     className="text-red-600  border-solid border-2 border-red-600 focus:ring-4  font-medium  text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2  "
        //                 >
        //                    REGISTER
        //                 </Link>
        //             </div>
        //             <div
        //                 className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        //                 id="mobile-menu-2"
        //             >
        //                 <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        //                     <li>
        //                         <NavLink
        //                         to="/"
        //                             className={({isActive}) =>
        //                                 `block py-2   pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
        //                             }
        //                         >
        //                             Investement Opportunites
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink
        //                         // to="/works"
        //                             className={({isActive}) =>
        //                                 `block   py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100  lg:hover:bg-transparent lg:border-0  lg:p-0`
        //                             }
        //                         >
        //                             How it works
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink
        //                         // to="/about"
        //                             className={({isActive}) =>
        //                                 `block   py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100  lg:hover:bg-transparent lg:border-0  lg:p-0`
        //                             }
        //                         >
        //                             About 
        //                         </NavLink>
        //                     </li>
                           
                            
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </header>


        <header className="shadow-lg sticky top-0 z-50 bg-white">
  <nav className="bg-white border-b border-gray-200 px-6 lg:px-8 py-4">
    <div className="flex justify-between items-center mx-auto max-w-screen-xl">
      <Link to="/" className="flex items-center">
        <h1 className="text-green-700 font-extrabold text-4xl tracking-wide">NEXT INVEST</h1>
      </Link>
      <div className="flex items-center lg:order-2 space-x-4">
        <Link
          to="login"
          className="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-semibold text-lg px-5 py-2.5 rounded-md transition-all duration-200"
        >
          LOGIN
        </Link>
        <Link
          to="register"
          className="text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white focus:ring-4 focus:ring-red-300 font-semibold text-lg px-5 py-2.5 rounded-md transition-all duration-200"
        >
          REGISTER
        </Link>
      </div>
      <div
        className="hidden lg:flex lg:order-1 lg:w-auto"
        id="mobile-menu-2"
      >
        <ul className="flex space-x-8 font-semibold text-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 px-3 transition-colors duration-200 ${
                  isActive ? "text-black border-b-2 border-green-700" : "hover:text-gray-900"
                }`
              }
            >
              Investment Opportunities
            </NavLink>
          </li>
          <li>
            <NavLink
              // to="/works"
              className={({ isActive }) =>
                `py-2 px-3 transition-colors duration-200 ${
                  isActive ? "text-black border-b-2 border-green-700" : "hover:text-gray-900"
                }`
              }
            >
              How It Works
            </NavLink>
          </li>
          <li>
            <NavLink
              // to="/about"
              className={({ isActive }) =>
                `py-2 px-3 transition-colors duration-200 ${
                  isActive ? "text-black border-b-2 border-green-700" : "hover:text-gray-900"
                }`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

        
    );
}
