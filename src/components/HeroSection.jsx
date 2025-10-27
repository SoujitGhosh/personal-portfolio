// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4"
//     >
//       <div className="container max-w-4xl mx-auto text-center z-10">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             <span className="opacity-0 animate-fade-in"> Hey, This is</span>
//             <span className="text-primary opacity-0 animate-fade-in-delay-1">
//               {" "}
//               Soujit
//             </span>
//             <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
//               {" "}
//               Ghosh
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
//             I create stellar web experiences with modern technologies.
//             Specializing in front-end development, I build interfaces that are
//             both beautiful and functional.
//           </p>

//           <div className="pt-4 opacity-0 animate-fade-in-delay-4">
//             <a href="#projects" className="cosmic-button">
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>
//     </section>
//   );
// };
// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="container flex flex-col md:flex-row items-center justify-between min-h-screen py-20 gap-10 px-4"
//     >
//       {/* Left Content */}
//       <div className="flex flex-col gap-6 animate-fade-in text-center md:text-left">
//         <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//           <span className="text-foreground/80">Hey, This is</span>{" "}
//           <span className="text-primary text-glow">Soujit</span>{" "}
//           <span className="text-gradient">Ghosh</span>
//         </h1>

//         <p className="max-w-md text-base md:text-lg opacity-90 mx-auto md:mx-0">
//           I create stellar web experiences with modern technologies.
//           Specializing in front-end development, I build interfaces that are
//           both beautiful and functional.
//         </p>

//         {/* CTA Button */}
//         <div className="flex gap-4 mt-2 justify-center md:justify-start">
//           <a href="#projects" className="cosmic-button">
//             View My Work
//           </a>
//         </div>

//         {/* Scroll Indicator on Desktop hidden because Right side image has effect */}
//         <div className="md:hidden flex flex-col items-center pt-4 animate-bounce">
//           <span className="text-sm text-muted-foreground">Scroll</span>
//           <ArrowDown className="h-5 w-5 text-primary" />
//         </div>
//       </div>

//       {/* Right Profile Image */}
//       <div className="relative animate-fade-in-delay-1">
//         <img
//           src="./src/assets/w.jpg"
//           alt="Hero"
//           className="w-64 md:w-96 rounded-3xl object-cover shadow-[0_0_40px_rgba(209,180,140,0.25)]"
//         />

//         {/* Futuristic Glow Accent */}
//         <div className="absolute inset-0 bg-primary opacity-[0.12] blur-2xl rounded-3xl" />
//       </div>

//       {/* Scroll Indicator for Desktop */}
//       <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center animate-bounce">
//         <span className="text-sm text-muted-foreground">Scroll</span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>
//     </section>
//   );
// };
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      {/* Glowing Card Wrapper */}
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between gap-16  bg-cover bg-center p-10 md:p-20 rounded-[36px] shadow-[0_0_120px_20px_rgba(0,145,255,0.25)]">
      <div className="absolute inset-0 rounded-[36px] bg-[#071520]/75"></div>
<div className="relative z-10">
  {/* Text & image go here */}
</div>


        
        {/* Blue Glow Behind Image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00A8FF]/20 blur-[120px] rounded-full opacity-50 pointer-events-none"></div>

        {/* Left Content */}
        <div className="flex flex-col gap-6 animate-fade-in text-center md:text-left w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Hey, This is <span className="text-[#00A8FF] drop-shadow-[0_0_10px_rgba(0,168,255,0.5)]">Soujit</span>{" "}
            <span className="text-[#00A8FF]/80 drop-shadow-[0_0_10px_rgba(0,168,255,0.4)]">Ghosh</span>
          </h1>

          <p className="max-w-md text-base md:text-lg text-gray-300 mx-auto md:mx-0">
            I create stellar web experiences with modern technologies.
            Specializing in front-end and back-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          {/* CTA Button */}
          <div className="flex gap-4 mt-2 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#00A8FF] text-black font-semibold rounded-lg hover:opacity-90 transition"
            >
              View My Work
            </a>
          </div>

          {/* Scroll Indicator MOBILE */}
          <div className="md:hidden flex flex-col items-center pt-4 animate-bounce">
            <span className="text-sm text-gray-400">Scroll</span>
            <ArrowDown className="h-5 w-5 text-[#00A8FF]" />
          </div>
        </div>

        {/* Right Profile Image */}
<div className="relative animate-fade-in-delay-1 w-full md:w-1/2 flex justify-center">
  <div className="relative rounded-2xl overflow-hidden">
    <img
      src="./src/assets/ww.jpg"
      alt="Hero"
      className="w-72 md:w-[420px] rounded-2xl object-cover brightness-[0.98] contrast-110 shadow-[0_0_40px_rgba(0,145,255,0.15)]"
    />

    {/* Very Subtle Blend Gradient */}
    <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-left from-[#071520] to-transparent" />
  </div>


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




// bg-[url('./src/assets/m.jpg')]