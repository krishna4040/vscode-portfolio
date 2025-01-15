"use client";
import dynamic from "next/dynamic";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false },
);

const experiences = [
  {
    date: "2026 - Present",
    title: "Software Development Engineer",
    subtitle: "Uniqus",
    description:
      "Building robust full-stack applications and scalable RESTful APIs.",
    iconStyle: { background: "#4CAF50", color: "#fff" },
    lottieSrc: "https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json",
  },
  {
    date: "2025 - 2026",
    title: "Software Development Engineer",
    subtitle: "HomesnHomies",
    description:
      "Developed end-to-end solutions for real estate and homie matchmaking platforms.",
    iconStyle: { background: "#FF9800", color: "#fff" },
    lottieSrc: "https://assets1.lottiefiles.com/packages/lf20_ukxdtp8p.json",
  },
  {
    date: "2024 - 2025",
    title: "Personal Contractor",
    subtitle: "Upwork",
    description:
      "Delivered high-quality software solutions as a freelance contractor.",
    iconStyle: { background: "#03A9F4", color: "#fff" },
    lottieSrc: "https://assets8.lottiefiles.com/packages/lf20_iv4dsx3q.json",
  },
  {
    date: "2023 - 2024",
    title: "Volunteer & Internships",
    subtitle: "",
    description: `🌟 Google Solution Challenge
💂‍♂️ IFA Indian Defence Project
🏆 Inter College Hackathon`,
    iconStyle: { background: "#9C27B0", color: "#fff" },
    lottieSrc: "https://assets6.lottiefiles.com/packages/lf20_i9mxc5jn.json",
  },
  {
    date: "2025",
    title: "Open Source Contributor",
    subtitle: "Google Summer of Code",
    description:
      "Contributed to open-source projects and collaborated with global developers.",
    iconStyle: { background: "#673AB7", color: "#fff" },
    lottieSrc: "https://assets3.lottiefiles.com/packages/lf20_vyMIaA.json",
  },
];

const Experience = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ textAlign: "center", fontSize: "30px" }}>Experience 🚀</h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f4f4f4", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid #f4f4f4" }}
            date={exp.date}
            iconStyle={exp.iconStyle}
            icon={
              <Player
                autoplay
                loop
                src={exp.lottieSrc}
                style={{ height: 40, width: 40 }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            {exp.subtitle && (
              <h4 className="vertical-timeline-element-subtitle">
                {exp.subtitle}
              </h4>
            )}
            <p>{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
