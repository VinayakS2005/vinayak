"use client";
import React, { useState } from "react";
import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const educationData = [
  {
    degree: "Secondary School Examination",
    school: "Army Public School, Dehradun, Uttarakhand",
    mascot: "📘",
    year: "2020-2021",
    achievements: ["Percentage: 95.2%"],
    skills: ["Science", "Mathematics", "English", "Hindi", "Social Studies"],
    description:
      "Achieved outstanding academic performance in secondary education, excelling in science, mathematics, and language subjects",
  },
  {
    degree: "Senior School Certificate Examination",
    school: "Army Public School, Dehradun, Uttarakhand",
    mascot: "📗",
    year: "2022-2023",
    achievements: ["Percentage: 94.4%"],
    skills: ["Physics", "Chemistry", "Mathematics"],
    description:
      "Excelled in the science stream, particularly in physics, chemistry, and mathematics",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Lovely Professional University, Phagwara, Punjab",
    mascot: "📗",
    year: "2023-2027",
    achievements: [
      "CGPA: 8.41",
      "Consistently solved 250+ problems on leetcode",
    ],
    skills: ["Programming", "Data Structures", "Algorithms"],
    description:
      "Currently pursuing a B.Tech degree in Computer Science and Engineering, with a focus on software development, algorithms, and data structures.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SectionWrapper
      id="education"
      className="min-h-screen relative overflow-hidden flex flex-col pt-32 pb-40 md:py-40"
    >
      <SectionHeader id="education" title="Educational Journey" className="mb-32 md:mb-40" />

      <div className="max-w-6xl w-full mx-auto px-4 relative z-10 flex-1 mt-0">

        {/* Timeline container */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/40 to-white/0 -translate-x-1/2" />
          {/* Mobile left line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/40 to-white/0" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-12 md:gap-16"
          >
            {educationData.map((edu, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: isLeft ? -80 : 80,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.7,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="relative flex items-start md:items-center"
                >
                  {/* Timeline dot - mobile */}
                  <div className="md:hidden absolute left-4 top-8 w-3 h-3 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.6)] -translate-x-1/2 z-10" />

                  {/* Timeline dot - desktop */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-teal-500 shadow-[0_0_12px_rgba(20,184,166,0.7)] -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="absolute inset-0 rounded-full bg-teal-400 animate-ping opacity-20" />
                  </div>

                  {/* Year badge - desktop */}
                  {isLeft ? (
                    <>
                      {/* Card on the left */}
                      <div className="hidden md:flex md:w-1/2 md:pr-12 justify-end">
                        <TimelineCard
                          edu={edu}
                          index={index}
                          hoveredIndex={hoveredIndex}
                          setHoveredIndex={setHoveredIndex}
                        />
                      </div>
                      {/* Year on the right */}
                      <div className="hidden md:flex md:w-1/2 md:pl-12 items-center">
                        <span className="text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-full border border-white/20">
                          {edu.year}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Year on the left */}
                      <div className="hidden md:flex md:w-1/2 md:pr-12 justify-end items-center">
                        <span className="text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-full border border-white/20">
                          {edu.year}
                        </span>
                      </div>
                      {/* Card on the right */}
                      <div className="hidden md:flex md:w-1/2 md:pl-12">
                        <TimelineCard
                          edu={edu}
                          index={index}
                          hoveredIndex={hoveredIndex}
                          setHoveredIndex={setHoveredIndex}
                        />
                      </div>
                    </>
                  )}

                  {/* Mobile layout - always right of the line */}
                  <div className="md:hidden ml-10 flex-1">
                    <span className="inline-block text-xs font-semibold text-white bg-white/10 px-3 py-1 rounded-full border border-white/20 mb-3">
                      {edu.year}
                    </span>
                    <TimelineCard
                      edu={edu}
                      index={index}
                      hoveredIndex={hoveredIndex}
                      setHoveredIndex={setHoveredIndex}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

/* Extracted card component for reuse */
const TimelineCard = ({
  edu,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  edu: (typeof educationData)[number];
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) => (
  <div
    className={`relative w-full border rounded-xl p-6 md:p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-[9px] ${
      hoveredIndex === index
        ? "border-teal-500 scale-[1.02] shadow-[0_0_30px_rgba(20,184,166,0.15)]"
        : "border-blue-400/20"
    }`}
    onMouseEnter={() => setHoveredIndex(index)}
    onMouseLeave={() => setHoveredIndex(null)}
  >
    <div className="space-y-4 md:space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{edu.mascot}</span>
          <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
        </div>
        <p className="text-gray-300 flex items-center gap-2 text-sm">
          <BookOpen className="w-4 h-4 text-teal-500 flex-shrink-0" />
          {edu.school}
        </p>
        <p className="text-white flex items-center gap-2 text-xs md:hidden">
          <Calendar className="w-4 h-4 text-white" />
          {edu.year}
        </p>
      </div>

      <p className="text-gray-300 text-sm border-l-2 border-teal-500 pl-3">
        {edu.description}
      </p>

      <div className="space-y-2">
        <h4 className="text-xs font-semibold text-white flex items-center gap-2">
          <Trophy className="w-3 h-3 text-yellow-500" />
          Achievements
        </h4>
        <div className="flex flex-wrap gap-2">
          {edu.achievements.map((achievement, i) => (
            <div
              key={i}
              className="px-2 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-1 text-xs"
            >
              <Award className="w-3 h-3" />
              <span>{achievement}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {edu.skills.map((skill, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default EducationSection;
