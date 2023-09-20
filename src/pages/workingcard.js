import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkingData from "../constants/index";

const WorkingCard = () => {
  return (
    <>
      <div className="work bg-cd-drak p-20">
        <div className="text-center mb-20" data-aos="zoom-in-down">
          <span className="md:text-white text-white text-xs md:text-base"> WHAT I HAVE DONE SO FAR</span>
          <h1 className="sm:text-6xl text-3xl font-bold text-center title-font text-white mb-4">
            Work Experience
          </h1>
        </div>
        <VerticalTimeline>
          {WorkingData.map((Working, index) => (
            <VerticalTimelineElement
              key={`Working-element-${index}`}
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={Working.date}
              iconStyle={{ background: Working.iconBg }}
              icon={  Working.icon}
            >
              <div>
                <h3 className="text-white font-bold">
                  {Working.title}
                </h3>
              </div>
              <ul className="mt-5 list-disc ml-5 ">
                {Working.points.map((point, pointIndex) => (
                  <li
                    key={`Working-point-${pointIndex}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default WorkingCard;
