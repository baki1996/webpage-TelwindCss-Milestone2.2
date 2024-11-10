import React from "react";

export default function Footer() {
    return (
        <div><footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-orange-500 tracking-widest text-sm mb-3"> Our Menu</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">Burger</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Pizza Delight</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Pasta</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Afghani pulao</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">About Us</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">1992</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">France</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Food Restaurant</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Owner Bick pathyery</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-orange-500 tracking-widest text-sm mb-3">Branches</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">Pakistan</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Italy</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">United Kingdom</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">India</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Order Guide</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">Payment</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Through Card</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Through ATM</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Online</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-orange-500 tracking-widest text-sm mb-3">Privacy Policy</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">FAQ</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Data Protection Poli</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Privacy Term</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">User Privacy Agreement</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Social Handles</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">Facebook</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Instagram</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Tiktok</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Twitter</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Search here</label>
                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-yellow-900 focus:bg-transparent focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Submit</button>
              <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">We are Here For You & your cravings! 
                <br /> 
              </p>
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a className="text-gray-400">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">© 2024 Bakhtawar khan —
              <a href="" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@food website</a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm"></span>
          </div>
        </div>
      </footer></div>
    )
}
