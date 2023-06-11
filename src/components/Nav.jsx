import React from 'react'

export default function Nav() {

   return (
      <nav className="fixed z-10 inset-x-0 top-0 bg-white shadow-lg">
         <div className="flex flex-row w-full lg:h-20 md:h-16 h-14 items-center">
            {/* name */}
            <a href="#top-page" className="lg:text-3xl md:text-2xl text-xs w-full font-bold text-gray-800 pl-5"> Kenneth Averna </a>

            {/* nav */}
            <ul className='flex flex-row lg:gap-12 md:gap-8 sm:gap-4 w-full font-medium lg:text-3xl md:text-lg text-xs justify-end pr-4 cursor-pointer'>
               <li className="p-1 text-gray-500 hover:text-gray-800">
                  <a href="#about-section">About</a>
               </li>
               <li className="p-1 text-gray-500 hover:text-gray-800">
                  <a href="#work-section">Work</a>
               </li>
               <li className="p-1 text-gray-500 hover:text-gray-800">
                  <a href="#projects-section">Projects</a>
               </li>
               <li className="p-1 text-gray-500 hover:text-gray-800">
                  <a href="#contact-section">Contact</a>
               </li>
            </ul>
         </div>
      </nav>
   )
}
