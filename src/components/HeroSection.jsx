import { ArrowDown } from "lucide-react";
import profileImg from "../assets/y.jpg";


export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      {/* Glowing Card Wrapper */}
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between gap-20 bg-[#071520]/95 p-10 md:p-20 rounded-[36px] shadow-[0_0_140px_25px_rgba(0,145,255,0.22)]">
        
        {/* Blue Glow Behind Image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[#00A8FF]/20 blur-[140px] rounded-full opacity-50 pointer-events-none"></div>

        {/* Left Content */}
        <div className="flex flex-col gap-8 animate-fade-in text-left w-full md:w-3/5">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-white">
            Hey, This is{" "}
            <span className="text-[#00A8FF] drop-shadow-[0_0_12px_rgba(0,168,255,0.6)]">
              Soujit
            </span>{" "}
            <span className="text-[#00A8FF]/80 drop-shadow-[0_0_12px_rgba(0,168,255,0.5)]">
              Ghosh
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 md:pr-10 leading-relaxed">
            I build high-performance digital products with modern full-stack architecture. I craft responsive, accessible UIs using React and Tailwind, powered by secure Node.js APIs and optimized database design. I focus on modular patterns, caching, and CI/CD workflows to deliver fast, reliable, SEO-friendly experiences that scale smoothly and feel refined in every detail.
          </p>

          {/* CTA Button */}
          <div className="flex gap-4 justify-center md:justify-start mt-2">
  <a
    href="#projects"
    className="px-7 py-3 bg-[#00A8FF] text-black font-semibold rounded-full hover:opacity-90 transition hover:shadow-[0_0_20px_rgba(0,168,255,0.6)]"
  >
    My Work
  </a>

  <a
    href="#contact"
    className="px-7 py-3 bg-[#00A8FF] text-black font-semibold rounded-full hover:opacity-90 transition hover:shadow-[0_0_20px_rgba(0,168,255,0.6)]"
  >
    Hire Me
  </a>
</div>


          {/* Scroll Indicator MOBILE */}
          <div className="md:hidden flex flex-col items-center pt-4 animate-bounce">
            <span className="text-sm text-gray-400">Scroll</span>
            <ArrowDown className="h-5 w-5 text-[#00A8FF]" />
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="relative animate-fade-in-delay-1 w-full md:w-2/5 flex justify-center">
          <img
  src={profileImg}
  alt="Soujit"
  className="w-64 md:w-[380px] lg:w-[420px] object-cover rounded-[36px] opacity-90 brightness-[0.85] contrast-[1.2] transition duration-700 ease-in-out shadow-[0_0_40px_rgba(0,168,255,0.25)]"
/>


          {/* Fade Gradient merging into background */}
          <div className="absolute inset-y-0 right-0 w-3/4 bg-gradient-to-left from-[#071520] to-transparent rounded-[36px] pointer-events-none" />
        </div>

        {/* Scroll Indicator DESKTOP */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center animate-bounce">
          <span className="text-sm text-gray-400">Scroll</span>
          <ArrowDown className="h-5 w-5 text-[#00A8FF]" />
        </div>

      </div>
    </section>
  );
};
