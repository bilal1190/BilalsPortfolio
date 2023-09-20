import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
 <nav className={`flex flex-col md:flex-row md:justify-start justify-center items-center py-1 bg-cd-dark text-white body-font drop-shadow-lg sticky top-0 z-20 ${
        scrolled ? "bg-transparent" : "bg-cd-nav"}`}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <Link legacyBehavior href="/" to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
             window.scrollTo(0, 0);
          }} >
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <svg className="w-4 h-4  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
    <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
  </svg>
      <span className="ml-2 text-xl text-cd-sceondrey font-medium">Bilal's Protfolio</span>
    </a>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap  text-base justify-center active  text-center">
    <Link legacyBehavior href="./about">
      <a className="mr-8 text-lg font-light text-cd-sceondrey hover:text-white">About</a>
      </Link>
      <Link legacyBehavior href="./workingcard"><a className="mr-8 text-lg font-light text-cd-sceondrey hover:text-white">Work</a></Link>
      <Link legacyBehavior href="./contact"><a className="mr-8 text-lg font-light text-cd-sceondrey hover:text-white">
        Contact
        </a>
        </Link>
    </nav>
    <div className="cursor-pointer absolute right-0 top-6 mx-5 flex">
    <button className="inline-flex items-center bg-purple-400 text-yellow-300 border-0 py-1 px-2 focus:outline-none hover:bg-purple-500 hover:text-white rounded text-sm mt-4 md:mt-0"
    onClick={() =>
      window.open(" https://www.fiverr.com/virtualvirsion", "_blank")} 
    >HireMe
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar


