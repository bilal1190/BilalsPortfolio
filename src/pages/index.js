import Image from "next/image";
import { Inter } from "next/font/google";
import { v4 as uuidv4 } from "uuid";
import Typewriter from "typewriter-effect";
import Working from './workingcard' 
import About from "./about";
import Head from "next/head";
import Projects from "./projectcard";
import Contact from "./contact";

const inter = Inter({ subsets: ["latin"] });
// bg-gradient-to-r from-purple-600 via-purple-300 to-blue-600
export default function Home() {
  return (
    <>
    <Head>
          <title>Bilal's | Portfolio</title>
          <meta name="description" content="Bilal's Portfolio" />
          <link rel="icon" href="/apple-touch-icon.png" />
    </Head>
      <div className="flex justify-center space-x-96 p-40 bg-cd-drak text-cd-sceondrey">
        <div className="flex flex-wrap">
          <div className="flex items-center  w-full lg:w-1/2 md:w-2/3">
            <div className="max-w-2xl mb-8">
              <h1 className="text-4xl md:text-lg font-bold leading-snug tracking-tight text-white lg:text-3xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Hi,My name is <span className="text-purple-600">Bilal</span> and
                I am futuristic
                <span className="text-purple-600">
                  <Typewriter
                    options={{
                      strings: ['<strong><span style="color: #FFFFFF;">Web</span></strong> Developer', '<strong><span style="color: #FFFFFF;">App</span></strong> Developer','<strong><span style="color: #FFFFFF;">UI/UX</span></strong> Designer'],
                      autoStart: true,
                      loop: true,
                    }}
                    />
                </span>
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center w-full  lg:w-1/2">
            <div className="" data-aos="zoom-in">
              <Image
                src="/mynew.png"
                width="690"
                height={800}
                className="object-cover"
                alt="Hero Image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      <About id="about" />
      <Working  id="work" />
      <Projects id="projectcard" />
      <Contact id="contact"  />
    </>

  );
}
