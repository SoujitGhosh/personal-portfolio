import { useState } from "react";
import { cn } from "../lib/utils";

import { FaHtml5, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiCss3, SiTailwindcss, SiMongodb, SiDocker, SiFigma } from "react-icons/si";

const skills = [
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  { name: "Node.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },

  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
];

const icons = {
  HTML: <FaHtml5 className="text-[#E54D26] text-2xl" />,
  CSS: <SiCss3 className="text-[#1572B6] text-2xl" />,
  JavaScript: <FaJs className="text-[#F7DF1E] text-2xl" />,
  React: <FaReact className="text-[#61DBFB] text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#38BDF8] text-2xl" />,

  "Node.js": <FaNodeJs className="text-[#3C873A] text-2xl" />,
  MongoDB: <SiMongodb className="text-[#4DB33D] text-2xl" />,

  "Git/GitHub": <FaGitAlt className="text-[#F05033] text-2xl" />,
  Docker: <SiDocker className="text-[#0db7ed] text-2xl" />,
  Figma: <SiFigma className="text-[#DA4C1E] text-2xl" />,
};

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-[#00A8FF]">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-[#00A8FF] text-black"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                {icons[skill.name]}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#00A8FF] h-2 rounded-full origin-left"
                  style={{ width: skill.level + "%" }}
                ></div>
              </div>

              <p className="text-right text-sm text-muted-foreground mt-1">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
