import { SectionHeading } from "@/components/ui/SectionHeading";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, 
  SiNodedotjs, SiLaravel, SiFastapi, SiPython, SiPostgresql, 
  SiMysql, SiOpencv, SiGithub, SiPostman, SiVercel 
} from "react-icons/si";
import { FaMicrosoft, FaFileExcel, FaRobot, FaMobileScreen } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

const techStack = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Laravel", icon: SiLaravel },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Python", icon: SiPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Power Automate", icon: FaRobot },
  { name: "Power Apps", icon: FaMobileScreen },
  { name: "Microsoft 365", icon: FaMicrosoft },
  { name: "Graph API", icon: FaMicrosoft },
  { name: "Excel", icon: FaFileExcel },
  { name: "Power Query", icon: FaMicrosoft },
  { name: "OpenCV", icon: SiOpencv },
  { name: "GitHub", icon: SiGithub },
  { name: "VS Code", icon: VscVscode },
  { name: "Postman", icon: SiPostman },
  { name: "Vercel", icon: SiVercel },
];

export function TechStack() {
  const mid = Math.ceil(techStack.length / 2);
  const row1 = techStack.slice(0, mid);
  const row2 = techStack.slice(mid);

  const renderIcon = (item: { name: string; icon: any }, i: number) => {
    const Icon = item.icon;
    return (
      <div 
        key={`${item.name}-${i}`} 
        className="tech-icon-container group relative flex flex-col items-center justify-center shrink-0 mx-4 md:mx-6 cursor-pointer"
      >
        <Icon className="text-[#a1a1aa] w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] md:w-[42px] md:h-[42px] lg:w-[52px] lg:h-[52px] transition-colors duration-300" />
        
        {/* Tooltip */}
        <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded whitespace-nowrap pointer-events-none z-10 border border-white/10">
          {item.name}
        </span>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden border-y border-line bg-white/[0.01] px-4 py-24 sm:px-6 lg:px-8">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .animate-marquee-slow {
          animation: marquee 50s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee-slow-reverse {
          animation: marquee 55s linear infinite reverse;
          display: flex;
          width: max-content;
        }
        .tech-icon-container {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @media (min-width: 768px) {
          .tech-icon-container:hover {
            transform: scale(1.15) translateY(-5px);
          }
          .tech-icon-container:hover svg {
            filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.7));
            color: #ffffff;
          }
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-7xl overflow-hidden">
        <SectionHeading
          eyebrow="Tech Stack & Tools"
          title="Technologies I use to build AI systems, automation workflows, dashboards, and modern business applications."
        />

        <div className="mt-16 relative flex flex-col gap-8 md:gap-0 overflow-hidden w-[100vw] left-1/2 -ml-[50vw]">
          
          {/* Gradient Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

          {/* Desktop View (1 Row) */}
          <div className="hidden md:flex animate-marquee py-4">
            {[...techStack, ...techStack].map((item, i) => renderIcon(item, i))}
          </div>

          {/* Mobile View (2 Rows) */}
          <div className="flex md:hidden flex-col gap-6 py-2">
            <div className="animate-marquee-slow">
              {[...row1, ...row1, ...row1].map((item, i) => renderIcon(item, i))}
            </div>
            <div className="animate-marquee-slow-reverse">
              {[...row2, ...row2, ...row2].map((item, i) => renderIcon(item, i))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
