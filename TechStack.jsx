import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaStore } from 'react-icons/fa6';
import { SiVite, SiTypescript, SiTailwindcss, SiGsap, SiJavascript, SiFramer } from 'react-icons/si';
import PortfolioStore from './useStore';
import { techData } from './tech-icons.js';

const TechStack = () => {
  const theme = PortfolioStore((state) => state.theme);
  const techStack = techData.map((tech) => ({
    ...tech,
    textColor: tech.textColor.replace('text-black dark:text-white', theme ? 'text-black' : 'text-white')
  }));

  return (
    <section className="px-6 mt-10.5 mb-0 min-h-45">
      <h2 className="text-[16px] font-semibold mb-3 text-gray-700 text-start">Tech Stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-11 gap-4 max-w-5xl mx-auto">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="group cursor-pointer p-3 rounded-xl flex flex-col items-center gap-2 transition-all duration-400 ease-out hover:scale-105"
              style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'both' }}
              onClick={() => window.open(tech.url, '_blank', 'noopener,noreferrer')}
              title={`${tech.name} official website`}
            >
              <div className="p-2.5 rounded-lg bg-gray-950/10 hover:bg-gray-900/20 transition-all duration-300">
                <Icon className={`w-6 h-6 ${tech.iconColor} drop-shadow-lg`} />
              </div>
              <span className={`text-xs font-mono font-semibold ${tech.textColor} tracking-tight text-center leading-tight px-1`}>
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
