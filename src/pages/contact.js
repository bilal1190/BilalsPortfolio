import React from 'react'
import { useEffect, useState } from "react";


const contact = () => {

  return (
    <>
    <section className="text-gray-600 body-font relative bg-cd-drak">
      {/* background map code */}
  <div className="absolute inset-0 bg-cd-drak mt-16">
  <iframe
  width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map"
  scrolling="no"
  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=${University of Sahiwal جامعہ ساہیوال, Sahiwal}+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
  style={{
    filter: 'grayscale(1) contrast(1.2) opacity(0.4)'
  }}></iframe>
  </div>
  {/* Inputs */}
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-gradient-to-r from-cd-contactForm to-transparent rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-bold title-font">Contact</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Feel Free To Contact Me!</p>
      <form action="https://formspree.io/f/xnqkdwae" method="POST">
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-black">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-transparent rounded border-b border-gray-300 focus:border-b-cd-drak focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " placeholder="Enter Your Email" required/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="subject" className="leading-7 text-sm text-black">Subject</label>
        <input type="text" id="subject" name="subject" className="w-full bg-transparent rounded border-b border-gray-300 focus:border-b-cd-drak focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " placeholder="Enter Your Topic " required/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-black">Message</label>
        <textarea id="message" name="message" className="w-full bg-transparent rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder="Some Love for Me💖"  required ></textarea>
      </div>
      
      <button className="text-black bg-gradient-to-r from-gray-200 to-transparent border-0 py-2 px-6 focus:outline-none hover:bg-slate-400 hover: rounded text-lg">Submit🚀</button>
      </form>
      <p className="text-xs text-black mt-3">Hope You Guys enjoy!</p>
    </div>
  </div>
</section>

    </>
  )
}

export default contact

