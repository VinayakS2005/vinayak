import React from "react";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { BlurIn } from "../reveal-animations";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className={cn("relative w-full py-20 lg:py-32 pl-6 md:pl-12 lg:pl-16")}>
      <BlurIn delay={0.2}>
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          About Me
        </h2>
      </BlurIn>
      <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center justify-between">
        {/* Paragraph on the left */}
        <BlurIn delay={0.4} className="order-2 md:order-1 flex flex-col justify-center gap-6 text-lg text-slate-700 dark:text-slate-300">
          <p>
            Hello! I'm Vinayak S, a Computer Science and Engineering student with a dedicated focus on Data Science and Machine Learning to solve complex, real-world problems. My technical expertise is rooted in Python, Java, and C++. I am proficient in data visualization with Power BI and Excel and have a strong analytical foundation in Data Structures and Algorithms. I am also an enthusiastic 3D Generalist proficient in 3D Modelling and Animation in Blender.
          </p>
          <p>
            My focus is on data science and machine learning, where I apply my skills to analyze complex datasets and develop predictive models. I am passionate about leveraging data to drive insights and make informed decisions. With a strong foundation in programming and data analysis, I am committed to continuous learning and growth in the field of data science.
          </p>
          <p>
            Apart from my technical skills, I am a passionate Game Developer with expertise in 3D Modelling and Animation using Blender. I am also learning unity engine to create immersive gaming experiences.
          </p>
        </BlurIn>

        {/* Profile Picture on the right */}
        <BlurIn delay={0.6} className="order-1 md:order-2 flex justify-center md:justify-end md:pr-12 lg:pr-24 items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-800 shadow-xl group">
            <img
              src="/profile.jpg"
              alt="Profile Picture"
              className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </BlurIn>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
