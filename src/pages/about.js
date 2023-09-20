import React from "react";
import { Inter } from "next/font/google";
import { DiReact } from 'react-icons/di';
import {MdSyncProblem} from "react-icons/md";
import {SiPython} from "react-icons/si";
import {LiaConnectdevelop} from "react-icons/lia";


const About = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-cd-drak mb-[-20px]">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20" data-aos="zoom-in-down">
            <span>INTRODUCTION</span>
            <h1 className="sm:text-6xl text-3xl font-bold text-center title-font text-white mb-4">
            OVERVIEW
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I'm a skilled web developer with expertise in frameworks like Nestjs,Reactjs, Node.js, and Ui/Ux Designer and also expert to intergrate AI models in web applications. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/6 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gradient-to-r from-cd-card1 via-cd-card2 to-cd-card3  text-white  flex p-4 h-full items-center border border-transparent border-l-4 rounded-lg overflow-hidden" data-aos="flip-left">
              <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500  text-2xl w-8 h-8 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"> 
                <DiReact /> 
                </svg>
                <span className="title-font font-medium ">
                  Reactjs | Nextjs
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gradient-to-r from-cd-card1 via-cd-card2 to-cd-card3  text-white  flex p-4 h-full items-center border border-transparent border-l-4 rounded-lg overflow-hidden" data-aos="flip-right">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 text-2xl w-8 h-8 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <MdSyncProblem />
                </svg>
                <span className="title-font font-medium">
                Problem Solving by integrating AI products
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gradient-to-r from-cd-card1 via-cd-card2 to-cd-card3  text-white  flex p-4 h-full items-center border border-transparent border-l-4 rounded-lg overflow-hidden" data-aos="flip-left">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 text-2xl w-8 h-8 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                <SiPython />
                </svg>
                <span className="title-font font-medium">
                  Python Basic
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gradient-to-r from-cd-card1 via-cd-card2 to-cd-card3  text-white  flex p-4 h-full items-center border border-transparent border-l-4 rounded-lg overflow-hidden" data-aos="flip-right">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 text-2xl w-8 h-8 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <LiaConnectdevelop />
                </svg>
                <span className="title-font font-medium">
                  FullStack Development (Current)
                </span>
              </div>
            </div>           
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
