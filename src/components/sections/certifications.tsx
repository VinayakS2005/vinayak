"use client";
import React from "react";
import { Calendar, Building2, Flame, Code2, Award } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

export interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
}

// ✏️ Edit your certifications here!
// Place your certificate images in the /public/certificates/ folder
const certifications: Certification[] = [
  {
    id: 1,
    title: "The Bits and Bytes of Computer Networking",
    organization: "Google",
    date: "2024",
    image: "/certificates/google.png",
  },{
    id: 1,
    title: "Data Analytics Job Simulation",
    organization: "Deloitte",
    date: "2025",
    image: "/certificates/deloitte.png",
  },{
    id: 1,
    title: "AI for beginners",
    organization: "HP Life",
    date: "2025",
    image: "/certificates/HP.png",
  },{
    id: 1,
    title: "AI for All",
    organization: "Intel",
    date: "2025",
    image: "/certificates/Intel.png",
  },{
    id: 1,
    title: "Generative AI Professional",
    organization: "Oracle",
    date: "2024",
    image: "/certificates/Oracle.png",
  },{
    id: 1,
    title: "Cloud Computing",
    organization: "NPTEL",
    date: "2024",
    image: "/certificates/NPTEL.png",
  },
];

const achievements = [
  {
    id: 1,
    title: "190+ Days Streak",
    organization: "LeetCode",
    description: "Maintained a consistent daily coding streak.",
    icon: Flame,
    color: "text-orange-500",
  },
  {
    id: 2,
    title: "260+ DSA Problems",
    organization: "LeetCode",
    description: "Solved over 260 Data Structures and Algorithms problems.",
    icon: Code2,
    color: "text-blue-500",
  },
  {
    id: 3,
    title: "Dean's List",
    organization: "Lovely Professional University",
    description: "Recognized for excellence in academic performance.",
    icon: Award,
    color: "text-yellow-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CertificationsSection = () => {
  return (
    <SectionWrapper
      id="certifications"
      className="min-h-screen relative overflow-hidden flex flex-col pt-32 pb-40 md:py-40"
    >
      <SectionHeader id="certifications" title="Certifications & Achievements" className="mb-32 md:mb-40" />

      <div className="max-w-7xl w-full mx-auto px-4 relative z-10 flex-1 mt-0">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className="relative border border-white/10 rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm hover:border-blue-500/50 hover:scale-[1.02] transition-all duration-300 group"
            >
              {/* Certificate Image */}
              <div className="w-full h-48 overflow-hidden bg-gray-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Certificate Info */}
              <div className="p-5 space-y-3">
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                  {cert.title}
                </h3>
                <p className="text-gray-300 flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-yellow-500 shrink-0" />
                  {cert.organization}
                </p>
                <p className="text-gray-400 flex items-center gap-2 text-xs">
                  <Calendar className="w-3 h-3 shrink-0" />
                  {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="relative border border-white/10 rounded-xl p-8 bg-gray-900/50 backdrop-blur-sm hover:border-blue-500/50 hover:scale-[1.02] transition-all duration-300 group flex flex-col items-center text-center space-y-4"
            >
              <div className={`p-4 rounded-full bg-gray-800/80 ${item.color}`}>
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-blue-400 font-medium">
                {item.organization}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          )})}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default CertificationsSection;
