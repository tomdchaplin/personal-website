import React from 'react';
import mainlogo from '../../images/logo-main.svg';

function Navbar() {
    return (
        <nav className="bg-grey">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href={mainlogo} className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={mainlogo} className="h-20 w-auto" alt="main-logo" />
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-orange rounded-lg md:hidden hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-grey md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-grey">
                <li>
                <a href="#" className="block py-2 px-3 text-orange rounded hover:text-white md:hover:bg-transparent md:border-0 md:p-0 " aria-current="page">About</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-orange rounded hover:text-white md:hover:bg-transparent md:border-0 md:p-0 ">Skills</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-orange rounded hover:text-white md:hover:bg-transparent md:border-0 md:p-0 ">Employment</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-orange rounded hover:text-white md:hover:bg-transparent md:border-0 md:p-0 ">Projects</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-orange rounded hover:text-white md:hover:bg-transparent md:border-0 md:p-0 ">Contact</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>

    );
}


export default Navbar;