import React from "react";
import ProjectData from "../constants/projectdata"; 

const ProjectCard = () => {
  return (
    <>
     <div className="text-white body-font bg-cd-drak">
  <div className="text-center pt-4 mb-4" data-aos="zoom-in-down">
    <span className="md:text-white text-white text-xs md:text-base">
      MY WORK
    </span>
    <h1 className="sm:text-6xl text-3xl font-bold text-center title-font text-white mb-2">
      Projects
    </h1>
  </div>
  {/* cards */}
  <div className="container p-4 mx-auto" data-aos="fade-right">
    <div className="flex flex-wrap">
      {ProjectData.map((Project) => (
        <div className="p-4 md:w-1/3" key={Project.name}>
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gradient-to-r from-cd-card1 via-cd-card2 to-cd-card3">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={Project.url}
              alt={Project.alt}
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {Project.technology}
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {Project.name}
              </h1>
              <p className="leading-relaxed mb-3">
                {Project.des[0].substr(0, 50)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    </>
  );
};
export default ProjectCard;
//  <div className="text-white body-font bg-cd-drak" >
//         <div className="text-center pt-4 mb-20" data-aos="zoom-in-down">
//           <span className="md:text-white text-white text-xs md:text-base">
//             MY WORK
//           </span>
//           <h1 className="sm:text-6xl text-3xl font-bold text-center title-font text-white mb-4">
//             Projects
//           </h1>
//         </div>
//         {/* cards */}
//         <div className="container p-4 mx-auto">
//           <div className="flex flex-wrap">
//             {ProjectData.map((Project) => (
//               <div className="p-4  md:w-1/3" key={Project.name}>
//                 <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gradient-to-r from-cd-card1 via-cd-card2 to-cd-card3">
//                   <img
//                     className="lg:h-48 md:h-36 w-full object-cover object-center"
//                     src={Project.url}
//                     alt={Project.alt}
//                   />
//                   <div className="p-6">
//                     <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
//                       {Project.technology}
//                     </h2>
//                     <h1 className="title-font text-lg font-medium text-white mb-3">
//                       {Project.name}
//                     </h1>
//                     <p className="leading-relaxed mb-3">
//                       {Project.des[0].substr(0,50)} 
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>