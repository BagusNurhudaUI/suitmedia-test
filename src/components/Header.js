import React , {useState, useRef} from 'react'
import { useNavigate, useHistory } from 'react-router-dom';


const Navbar = (props) => {
 
    return (

  <header className="header relative z-10"> 
    <nav className="bg-gray-50 border-gray-200 px-6 sm:px-4 rounded ">
    <div className="container flex flex-grow justify-between items-center mx-auto">
        <a href='#' className='pl-8 py-3'>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-700 ">
            Company
            </span>
        </a>
        
        {/* <button
        data-collapse-toggle="mobile-menu"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu"
        aria-expanded="false"
        >
        <span className="sr-only">Open main menu</span>
        <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
            />
        </svg>
        <svg
            className="hidden w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
            />
        </svg>
        </button> */}
        <div className="w-full block w-auto " >
        <ul className="flex flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium overflow">
            <li className="group inline-block relative">
                <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 md:p-0 hover:text-gray-300 lg:px-3"
                >
                    ABOUT
                </a>
                <ul className="absolute hidden text-gray-700 pt-4 group-hover:block">
                    <li className="">
                    <a
                        className=" bg-gray-50 hover:text-gray-300 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                    >
                        HISTORY
                    </a>
                    </li>
                    <li className="">
                    <a
                        className="bg-gray-50 hover:text-gray-300 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                    >
                        <div>VISION MISSION</div>
                    </a>
                    </li>
                </ul>
            </li>

            <li>
            <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 md:p-0 hover:text-gray-300 lg:pr-3"
            >
                OUR WORK
            </a>
            </li>
            <li>
            <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 md:p-0 hover:text-gray-300 lg:pr-3"
            >
                OUR TEAM
            </a>
            </li>
            <li>
            <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 md:p-0 hover:text-gray-300 lg:pr-3"
            >
                CONTACT
            </a>
            </li> 
        </ul>
        </div>
        {/* <div className="group inline-block relative">
        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1">Dropdown</span>
            <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
        </button>
        <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
            <li className="">
            <a
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
            >
                One
            </a>
            </li>
            <li className="">
            <a
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
            >
                Two
            </a>
            </li>
            <li className="">
            <a
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
            >
                Three is the magic number
            </a>
            </li>
        </ul>
        </div> */}

    </div>
    </nav>
  </header>
    )
}
 
export default Navbar