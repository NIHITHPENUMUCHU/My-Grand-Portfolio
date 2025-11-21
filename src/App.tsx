import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Diamond, 
  ArrowRight, 
  Mail, 
  ChevronDown, 
  Code, 
  Cpu, 
  Sparkles,
  Database,
  GraduationCap,
  Award,
  Globe,
  FileText,
  Menu,
  X,
  Download,
  ArrowLeft,
  Briefcase,
  Phone,
  Terminal,
  BookOpen,
  Layers,
  Sun,
  Moon
} from 'lucide-react';

/**
 * PERSONAL GRAND PORTFOLIO - SENTINEL V2 HYBRID EDITION (Fixed Icons)
 * Customized for Nihith Penumuchu
 * Features: Custom SVG Icons for Brands, 3D Sentinel (V2), Infinite Physics Slider
 */

// --- Custom Brand Icons (Replacing deprecated Lucide exports) ---

const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// --- Data Assets ---

const NAV_LINKS = ["Skills", "Experience", "Projects", "Contact"];

const EXPERTISE = [
  {
    icon: <Cpu size={24} />,
    title: "AI & Machine Learning",
    desc: "Building neural networks and predictive models using Python, TensorFlow, and Scikit-Learn."
  },
  {
    icon: <Code size={24} />,
    title: "Full-Stack Engineering",
    desc: "Architecting responsive web apps with React, Node.js, and modern CSS frameworks."
  },
  {
    icon: <Database size={24} />,
    title: "Data Science",
    desc: "Transforming complex datasets into actionable insights via SQL, Pandas, and Power BI."
  },
  {
    icon: <Globe size={24} />,
    title: "Global Languages",
    desc: "Multilingual proficiency spanning Telugu, Hindi, and English, with foundational knowledge in Japanese and Korean."
  }
];

const WORK_EXPERIENCE = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "Beyond Career",
    period: "Feb 2025 - Apr 2025",
    desc: "Spearheaded the development of responsive front-end modules. Optimized UI performance by 40% using advanced DSA principles.",
    tech: ["React", "JavaScript", "CSS Optimization"]
  }
];

const PUBLICATIONS = [
  {
    id: 1,
    title: "Predicting Mental Health Disorders using EEG Data",
    journal: "International Journal of AI in Healthcare",
    year: "2024",
    desc: "A comparative analysis of Random Forest and Neural Network models for classifying mental health disorders using large-scale EEG datasets. Achieved 94% accuracy in disorder classification while ensuring robust data privacy standards.",
    tags: ["Neural Networks", "Healthcare AI"]
  },
  {
    id: 2,
    title: "Optimizing Time-Series Forecasting with LSTM",
    journal: "IEEE Conference on Computational Intelligence",
    year: "2025",
    desc: "Proposed a novel architecture for stock market trend prediction using Long Short-Term Memory networks. The study focuses on reducing latency in real-time data processing and improving predictive accuracy in volatile markets.",
    tags: ["LSTM", "FinTech"]
  }
];

const PROJECTS = [
  {
    id: 1,
    category: "AI / Healthcare",
    title: "Mental Health EEG",
    desc: "Predicting disorders using Random Forest & Neural Networks on large-scale EEG data.",
    tags: ["Python", "ML", "Pandas"],
    color: "from-rose-900 to-slate-900",
    pose: { rX: 15, rY: -10, pX: -3, pY: 3 } 
  },
  {
    id: 2,
    category: "Design Tool",
    title: "Chroma-Canvas",
    desc: "WCAG-compliant color palette generator with robust local storage architecture.",
    tags: ["JS", "HTML5", "Accessibility"],
    color: "from-amber-900 to-orange-900",
    pose: { rX: -10, rY: 20, pX: 4, pY: -4 }
  },
  {
    id: 3,
    category: "FinTech AI",
    title: "Stock Predictor LSTM",
    desc: "Time-series forecasting model for stock market trends using Long Short-Term Memory networks.",
    tags: ["TensorFlow", "Python", "Finance"],
    color: "from-emerald-900 to-slate-900",
    pose: { rX: -5, rY: 0, pX: 0, pY: -5 }
  },
  {
    id: 4,
    category: "NLP",
    title: "LegalAI Chatbot",
    desc: "Natural Language Processing bot capable of summarizing complex legal documents.",
    tags: ["NLP", "Spacy", "React"],
    color: "from-blue-900 to-slate-900",
    pose: { rX: 5, rY: -20, pX: -5, pY: 0 }
  },
  {
    id: 5,
    category: "IoT",
    title: "Smart Home Dash",
    desc: "Real-time dashboard for IoT devices using WebSocket connections and React.",
    tags: ["React", "WebSockets", "IoT"],
    color: "from-purple-900 to-slate-900",
    pose: { rX: 0, rY: 0, pX: 0, pY: 0 }
  },
  {
    id: 6,
    category: "Computer Vision",
    title: "Sign Lang Detection",
    desc: "Real-time sign language translation using OpenCV and Convolutional Neural Networks.",
    tags: ["OpenCV", "CNN", "Python"],
    color: "from-cyan-900 to-slate-900",
    pose: { rX: 10, rY: 10, pX: 3, pY: 3 }
  },
  {
    id: 7,
    category: "E-Commerce",
    title: "LuxeMarket",
    desc: "High-performance headless e-commerce platform with 3D product previews.",
    tags: ["Next.js", "Three.js", "Stripe"],
    color: "from-fuchsia-900 to-slate-900",
    pose: { rX: -15, rY: -15, pX: -2, pY: -2 }
  },
  {
    id: 8,
    category: "Data Vis",
    title: "Global warming Tracker",
    desc: "Interactive map visualizing global temperature anomalies over the last century.",
    tags: ["D3.js", "React", "GeoJSON"],
    color: "from-red-900 to-slate-900",
    pose: { rX: 20, rY: 0, pX: 0, pY: 5 }
  }
];

const CERTIFICATIONS = [
  "AWS Data Engineering Virtual Internship (2024)",
  "Google AI-ML Virtual Internship (2024)",
  "Palo Alto Cybersecurity Virtual Internship (2024)",
  "Web Full Stack Developer Virtual Internship (2024)"
];

const RESUME_DATA = {
  name: "Nihith Penumuchu",
  role: "AI Engineer & Full Stack Developer",
  contact: {
    email: "nihithpenumuchu07@gmail.com",
    phone: "+91 93465 77530",
    location: "Guntur, Andhra Pradesh",
    linkedin: "linkedin.com/in/nihith-penumuchu-132219253",
    github: "github.com/NIHITHPENUMUCHU",
    portfolio: "nihith-penumuchu-portfolio.netlify.app"
  },
  summary: "Motivated and adaptable Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at SRM University. Skilled in Python, SQL, and problem-solving with hands-on experience in both technical development and collaborative project work. Seeking to leverage skills in full-stack development and AI research.",
  experience: WORK_EXPERIENCE,
  education: {
    uni: "SRM UNIVERSITY, KTR Campus",
    degree: "B.Tech in CSE (AI and ML Specialization)",
    date: "Sept 2021 - June 2025",
    gpa: "CGPA: 7.68/10.0"
  },
  skills: {
    languages: ["Python", "SQL", "JavaScript", "HTML", "CSS", "Telugu", "Hindi", "English", "Japanese", "Korean"],
    frameworks: ["React.js", "FlutterFlow", "Power BI", "Git/GitHub"],
    core: ["DSA", "Machine Learning", "Cloud Computing"]
  }
};

// --- Utility Hooks ---
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, isVisible };
};

// --- Enhanced Components ---

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`mb-12 md:mb-16 relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <span className="text-amber-400/80 font-mono tracking-[0.3em] text-xs uppercase mb-4 block animate-pulse">{subtitle}</span>
      <h2 className="text-3xl md:text-5xl font-serif font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-500/50 leading-tight">{title}</h2>
      <div className={`w-16 md:w-24 h-1 bg-gradient-to-r from-amber-500 to-transparent mt-6 transition-all duration-1000 delay-300 ${isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'}`} />
    </div>
  );
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => { setPosition({ x: e.clientX, y: e.clientY }); if (!visible) setVisible(true); };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, [visible]);
  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 print:hidden">
      <div className="absolute w-3 h-3 bg-amber-400 rounded-full mix-blend-difference transition-transform duration-75 ease-out" style={{ left: position.x - 6, top: position.y - 6 }} />
      <div className="absolute w-12 h-12 border border-amber-500/30 rounded-full transition-transform duration-300 ease-out" style={{ left: position.x - 24, top: position.y - 24 }} />
    </div>
  );
};

const CyberButton = ({ children, onClick, href }: { children: React.ReactNode, onClick?: () => void, href?: string }) => {
  const Content = () => (
    <div className="relative px-8 py-4 bg-black/50 backdrop-blur-sm border border-amber-500/20 overflow-hidden group-hover:border-amber-500/60 transition-colors duration-300">
      <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-amber-500/10 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-700 ease-in-out" />
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
      <span className="relative z-10 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-amber-100 group-hover:text-amber-400 transition-colors">{children}</span>
    </div>
  );
  if (href) return <a href={href} onClick={onClick} className="group relative inline-block cursor-pointer print:hidden"><Content /></a>;
  return <button onClick={onClick} className="group relative inline-block cursor-pointer print:hidden"><Content /></button>;
};

const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return (
    <div ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setOpacity(1)} onMouseLeave={() => setOpacity(0)} className={`relative rounded-xl border border-white/10 bg-slate-900/50 overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" style={{ opacity, background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(251,191,36,0.15), transparent 40%)` }} />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// --- Mini Sentinel for Projects (V2 Design) ---
const MiniSentinel = ({ pose }: { pose: { rX: number, rY: number, pX: number, pY: number } }) => {
  return (
    <div className="perspective-1000 w-48 h-48 flex items-center justify-center opacity-90 pointer-events-none">
      <div 
        className="w-32 h-40 bg-gradient-to-b from-slate-800 to-slate-950 rounded-[1.5rem] relative transform-style-3d shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-slate-700/50"
        style={{ 
          transform: `rotateX(${pose.rX}deg) rotateY(${pose.rY}deg)`,
        }}
      >
        {/* Face Plate */}
        <div className="absolute inset-2 bg-black/80 rounded-[1.2rem] border border-slate-600/30 overflow-hidden backdrop-blur-sm shadow-inner">
           <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-white/5 to-transparent rotate-45 pointer-events-none z-10"></div>
           <div className="absolute top-[35%] left-0 w-full flex justify-center gap-4 px-2 z-20">
              {/* Left Eye */}
              <div className="w-10 h-10 bg-slate-900 rounded-full border-2 border-slate-700 shadow-[inset_0_0_10px_rgba(0,0,0,1)] flex items-center justify-center relative overflow-hidden">
                 <div className="w-4 h-4 bg-gradient-to-tr from-amber-300 to-orange-600 rounded-full shadow-[0_0_15px_rgba(245,158,11,1)]" style={{ transform: `translate(${pose.pX}px, ${pose.pY}px)` }}><div className="w-1 h-1 bg-white rounded-full absolute top-0.5 right-0.5 opacity-90"></div></div>
              </div>
              {/* Right Eye */}
              <div className="w-10 h-10 bg-slate-900 rounded-full border-2 border-slate-700 shadow-[inset_0_0_10px_rgba(0,0,0,1)] flex items-center justify-center relative overflow-hidden">
                 <div className="w-4 h-4 bg-gradient-to-tr from-amber-300 to-orange-600 rounded-full shadow-[0_0_15px_rgba(245,158,11,1)]" style={{ transform: `translate(${pose.pX}px, ${pose.pY}px)` }}><div className="w-1 h-1 bg-white rounded-full absolute top-0.5 right-0.5 opacity-90"></div></div>
              </div>
           </div>
           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 flex flex-col gap-1 opacity-40">
              <div className="w-full h-0.5 bg-slate-500 rounded-full"></div>
              <div className="w-[70%] mx-auto h-0.5 bg-slate-500 rounded-full"></div>
           </div>
        </div>
        {/* Antennae (V2 Design) */}
        <div className="absolute top-10 -left-2 w-2 h-12 bg-slate-700 rounded-l-lg border-l border-slate-600"></div>
        <div className="absolute top-10 -right-2 w-2 h-12 bg-slate-700 rounded-r-lg border-r border-slate-600"></div>
        {/* Top Sensor (V2 Design) */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-slate-800 rounded-t-lg border-t border-slate-600 flex items-center justify-center">
             <div className="w-6 h-1 bg-cyan-500/50 rounded-full shadow-[0_0_10px_cyan]"></div>
        </div>
      </div>
    </div>
  );
};

// --- 3D Interactive Character (Main - V2 Visuals + V3 Logic) ---
const InteractiveAvatar = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [mood, setMood] = useState<'neutral' | 'happy' | 'alert'>('neutral');
  const [isSleeping, setIsSleeping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<any>(null);
  const sleepTimerRef = useRef<any>(null);
  const isLongPress = useRef(false);

  useEffect(() => {
    const blinkLoop = setInterval(() => {
       if(!isSleeping) {
         setIsBlinking(true);
         setTimeout(() => setIsBlinking(false), 150);
       }
    }, 3500 + Math.random() * 2000);
    return () => clearInterval(blinkLoop);
  }, [isSleeping]);

  const resetSleepTimer = () => {
    setIsSleeping(false);
    if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
    sleepTimerRef.current = setTimeout(() => {
        setIsSleeping(true);
    }, 5000);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      resetSleepTimer();
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((e.clientX - centerX) / window.innerWidth) * 45; 
      const rotateX = -((e.clientY - centerY) / window.innerHeight) * 45;
      setRotation({ x: rotateX, y: rotateY });
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const distance = Math.min(12, Math.hypot(e.clientX - centerX, e.clientY - centerY) / 10); 
      setPupilOffset({ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance });
    };
    window.addEventListener('mousemove', handleMouseMove);
    resetSleepTimer();
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => { if (e.button === 0) setMood('happy'); };
  const handleContextMenu = (e: React.MouseEvent) => { e.preventDefault(); setMood('alert'); };
  const handleTouchStart = () => { isLongPress.current = false; timerRef.current = setTimeout(() => { isLongPress.current = true; setMood('alert'); }, 600); };
  const handleTouchEnd = (e: React.TouchEvent) => { if (timerRef.current) clearTimeout(timerRef.current); if (!isLongPress.current) setMood('happy'); if (e.cancelable) e.preventDefault(); };
  const handleTouchMove = () => { if (timerRef.current) clearTimeout(timerRef.current); resetSleepTimer(); };

  // Visuals (V2 Aesthetic with Moods)
  let pupilColor = 'from-amber-400 to-orange-600';
  let shadowColor = 'shadow-amber-500';
  
  if (mood === 'alert') { pupilColor = 'from-red-500 to-rose-700'; shadowColor = 'shadow-red-500'; }
  else if (mood === 'happy') { pupilColor = 'from-cyan-400 to-blue-500'; shadowColor = 'shadow-cyan-400'; }

  const eyeShapeClass = isSleeping ? 'h-1 mt-6 opacity-50' : mood === 'alert' ? 'h-8 mt-3 border-t-4 border-slate-800' : mood === 'happy' ? 'h-12 animate-bounce-small' : 'h-12';
  const headTransform = isSleeping ? `rotateX(15deg) rotateY(0deg) translateY(10px)` : `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;

  return (
    <div className="perspective-1000 w-64 h-64 flex items-center justify-center animate-float cursor-pointer group" ref={containerRef} onMouseDown={handleMouseDown} onContextMenu={handleContextMenu} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove}>
      <div className={`w-44 h-52 bg-gradient-to-b from-slate-800 to-slate-950 rounded-[2.5rem] relative transform-style-3d shadow-[0_10px_50px_rgba(0,0,0,0.8)] border border-slate-700/50 transition-transform duration-700 ease-out group-hover:scale-105`} style={{ transform: headTransform }}>
        <div className="absolute inset-3 bg-black/90 rounded-[2rem] border border-slate-600/30 overflow-hidden backdrop-blur-sm shadow-inner">
           {!isSleeping && <div className={`absolute top-0 left-0 w-full h-0.5 ${mood === 'alert' ? 'bg-red-500 shadow-[0_0_10px_red]' : 'bg-cyan-500 shadow-[0_0_10px_cyan]'} animate-scan z-20 opacity-50`}></div>}
           <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent rotate-45 pointer-events-none z-10"></div>
           <div className="absolute top-[35%] left-0 w-full flex justify-center gap-8 px-4 z-10 transition-all duration-500">
              {[0, 1].map((i) => (
                  <div key={i} className={`w-12 bg-slate-900 rounded-full border-2 border-slate-700 shadow-inner flex items-center justify-center relative overflow-hidden transition-all duration-500 ${eyeShapeClass}`}>
                    {!isSleeping && (
                        <div className={`w-5 h-5 bg-gradient-to-tr ${pupilColor} rounded-full shadow-[0_0_20px_currentColor] transition-all duration-300 ease-out ${shadowColor}`} style={{ transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)` }}>
                            <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1 right-1 opacity-90"></div>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_3px] pointer-events-none opacity-30"></div>
                  </div>
              ))}
           </div>
           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 flex flex-col gap-1.5 opacity-40">
               {/* STATIC MOUTH LINES - FIXED FOR VS CODE / TAILWIND */}
               <div className="w-[80%] h-0.5 mx-auto bg-slate-500 rounded-full"></div>
               <div className="w-[60%] h-0.5 mx-auto bg-slate-500 rounded-full"></div>
               <div className="w-[40%] h-0.5 mx-auto bg-slate-500 rounded-full"></div>
           </div>
        </div>
        {/* V2 Antennae */}
        <div className={`absolute top-14 -left-3 w-3 h-16 bg-gradient-to-b from-slate-700 to-slate-800 rounded-l-lg border-l border-slate-600 flex items-center justify-center transition-colors duration-300 ${mood === 'alert' ? 'bg-red-900/50' : ''}`}>
             <div className={`w-1 h-12 rounded-full ${mood === 'alert' ? 'bg-red-500 shadow-[0_0_5px_red]' : 'bg-cyan-900 shadow-[0_0_5px_cyan]'}`}></div>
        </div>
        <div className={`absolute top-14 -right-3 w-3 h-16 bg-gradient-to-b from-slate-700 to-slate-800 rounded-r-lg border-r border-slate-600 flex items-center justify-center transition-colors duration-300 ${mood === 'alert' ? 'bg-red-900/50' : ''}`}>
             <div className={`w-1 h-12 rounded-full ${mood === 'alert' ? 'bg-red-500 shadow-[0_0_5px_red]' : 'bg-cyan-900 shadow-[0_0_5px_cyan]'}`}></div>
        </div>
        {/* V2 Top Sensor */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-slate-800 rounded-t-xl border-t border-slate-600 flex items-center justify-center">
             <div className={`w-8 h-1.5 rounded-full shadow-[0_0_15px_currentColor] animate-pulse transition-colors duration-300 ${mood === 'alert' ? 'bg-red-500 text-red-500' : 'bg-cyan-500/80 text-cyan-500'}`}></div>
        </div>
      </div>
      <div className={`absolute inset-0 rounded-full blur-[60px] -z-10 scale-150 animate-pulse-slow mix-blend-screen transition-colors duration-500 ${mood === 'alert' ? 'bg-red-500/20' : mood === 'happy' ? 'bg-cyan-500/20' : 'bg-amber-500/10'}`}></div>
    </div>
  );
};

// --- High-Performance Physics Slider (Direct DOM Manipulation) ---
const ProjectSlider = () => {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const xPos = useRef(0);
  const velocity = useRef(0);
  const reqId = useRef<number>();
  const lastX = useRef(0);
  const isHovered = useRef(false);

  const slides = [...PROJECTS, ...PROJECTS, ...PROJECTS];
  const ITEM_WIDTH = 352; 
  const TOTAL_WIDTH = PROJECTS.length * ITEM_WIDTH;

  const animate = useCallback(() => {
    if (!isDragging) {
      if (Math.abs(velocity.current) > 0.1) {
        velocity.current *= 0.95;
        xPos.current += velocity.current;
      } else {
        if (!isHovered.current) {
            xPos.current -= 0.5; 
        }
      }
    }

    if (xPos.current <= -TOTAL_WIDTH * 2) {
      xPos.current += TOTAL_WIDTH;
    }
    if (xPos.current > -TOTAL_WIDTH) {
      xPos.current -= TOTAL_WIDTH;
    }

    if (containerRef.current) {
      containerRef.current.style.transform = `translate3d(${xPos.current}px, 0, 0)`;
    }
    reqId.current = requestAnimationFrame(animate);
  }, [isDragging, TOTAL_WIDTH]);

  useEffect(() => {
    xPos.current = -TOTAL_WIDTH;
    reqId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqId.current!);
  }, [animate, TOTAL_WIDTH]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    lastX.current = e.clientX;
    velocity.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - lastX.current;
    lastX.current = e.clientX;
    xPos.current += delta;
    velocity.current = delta;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    lastX.current = e.touches[0].clientX;
    velocity.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - lastX.current;
    lastX.current = e.touches[0].clientX;
    xPos.current += delta;
    velocity.current = delta;
  };

  const stopDrag = () => setIsDragging(false);

  return (
    <div 
        className="relative w-full overflow-hidden py-12"
        onMouseEnter={() => { isHovered.current = true; }}
        onMouseLeave={() => { isHovered.current = false; stopDrag(); }}
        onMouseUp={stopDrag}
        onTouchEnd={stopDrag}
    >
      <div 
        ref={containerRef}
        className="flex gap-8 cursor-grab active:cursor-grabbing will-change-transform"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {slides.map((project, idx) => (
          <div 
            key={`${project.id}-${idx}`} 
            className="relative flex-shrink-0 w-[320px] h-[450px] md:h-[500px] bg-[#0a0a0a] border border-white/10 transition-colors duration-500 group overflow-hidden select-none rounded-xl"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 transition-transform duration-700 group-hover:scale-110`}></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start relative z-20">
                    <span className="text-5xl font-serif font-bold text-white/10">{project.id.toString().padStart(2, '0')}</span>
                    <div className="p-2 backdrop-blur-md rounded-full border bg-black/50 border-white/10"><ArrowRight size={16} className="text-amber-400 -rotate-45 group-hover:rotate-0 transition-transform" /></div>
                </div>
                {/* Moved Mini Sentinel to Top-Right */}
                <div className="absolute top-20 right-16 z-0 opacity-80 group-hover:scale-110 transition-transform duration-500 pointer-events-none"><MiniSentinel pose={project.pose} /></div>
                <div className="space-y-4 relative z-20">
                    <div className="text-amber-500 text-[10px] uppercase tracking-widest font-mono">{project.category}</div>
                    <h3 className="text-2xl font-serif leading-tight text-white">{project.title}</h3>
                    <p className="text-sm line-clamp-3 text-slate-300">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-2">{project.tags.map(tag => (<span key={tag} className="text-[10px] px-2 py-1 border rounded bg-black/80 text-slate-300 border-white/10">{tag}</span>))}</div>
                </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-amber-500/20 rounded-full mt-8 overflow-hidden"><div className="h-full bg-amber-500 w-1/3 animate-slide-indeterminate"></div></div>
    </div>
  );
};

// --- Resume View (ATS Optimized) ---
const ResumeView = ({ onBack }: { onBack: () => void }) => (
  <div className="min-h-screen pt-24 pb-12 px-4 md:px-6 animate-fade-in print:p-0 print:bg-white bg-[#0a0a0a] text-white">
    <div className="max-w-4xl mx-auto print:max-w-none print:w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 print:hidden">
        <button onClick={onBack} className="flex items-center gap-2 text-amber-400 hover:text-amber-500 transition-colors uppercase text-xs tracking-widest">
          <ArrowLeft size={16} /> Back to Portfolio
        </button>
        <div className="flex gap-4">
             <CyberButton onClick={() => window.print()}>
                Download PDF <Download size={16} />
             </CyberButton>
        </div>
      </div>

      <div className="bg-[#111] border border-white/10 p-8 md:p-16 shadow-2xl relative overflow-hidden print:bg-white print:text-black print:border-none print:shadow-none print:overflow-visible print:p-0">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 print:hidden"></div>
        
        <div className="border-b border-gray-700/20 pb-8 mb-8 flex flex-col md:flex-row justify-between gap-6 print:border-black print:pb-4 print:mb-4">
            <div>
                <h1 className="text-4xl md:text-5xl font-serif mb-2 print:text-black print:text-3xl text-white">{RESUME_DATA.name}</h1>
                <p className="text-amber-500 tracking-widest uppercase text-sm print:text-black print:font-bold">{RESUME_DATA.role}</p>
            </div>
            <div className="text-right text-sm space-y-1 flex flex-col md:items-end print:text-black print:text-xs opacity-80">
                <p>{RESUME_DATA.contact.email} | {RESUME_DATA.contact.phone}</p>
                <p>{RESUME_DATA.contact.location}</p>
                <p><a href={`https://${RESUME_DATA.contact.linkedin}`} className="hover:underline">LinkedIn</a> | <a href={`https://${RESUME_DATA.contact.github}`} className="hover:underline">GitHub</a></p>
            </div>
        </div>

        <div className="mb-8 print:mb-4">
             <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 print:text-black print:font-bold print:border-b print:border-black print:mb-2">Professional Summary</h3>
             <p className="leading-relaxed text-sm md:text-base print:text-black opacity-90">
                {RESUME_DATA.summary}
             </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 print:block">
            <div className="md:col-span-2 space-y-12 print:space-y-4">
                <section className="print:mb-4">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-amber-500 mb-6 flex items-center gap-2 print:text-black print:font-bold print:border-b print:border-black print:mb-2 print:block">
                        <Briefcase size={14} className="print:hidden" /> Experience
                    </h3>
                    {RESUME_DATA.experience.map((exp, i) => (
                        <div key={i} className="mb-6 group print:mb-4">
                            <div className="flex justify-between items-baseline mb-2">
                                <h4 className="text-lg font-medium print:text-black print:font-bold text-white">{exp.role}</h4>
                                <span className="text-xs text-gray-500 font-mono print:text-black">{exp.period}</span>
                            </div>
                            <p className="text-sm text-gray-500 mb-3 italic print:text-black">{exp.company}</p>
                            <ul className="list-disc list-inside text-sm space-y-1 print:text-black opacity-90">
                                <li className="pl-2 print:pl-0">{exp.desc}</li>
                            </ul>
                        </div>
                    ))}
                </section>

                <section className="print:mb-4">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-amber-500 mb-6 flex items-center gap-2 print:text-black print:font-bold print:border-b print:border-black print:mb-2 print:block">
                        <BookOpen size={14} className="print:hidden" /> Research & Publications
                    </h3>
                    {PUBLICATIONS.map((pub, i) => (
                        <div key={i} className="mb-6 print:mb-4">
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className="text-base font-medium print:text-black print:font-bold text-white">{pub.title}</h4>
                                <span className="text-xs text-gray-500 font-mono print:text-black">{pub.year}</span>
                            </div>
                            <p className="text-xs text-gray-500 italic mb-2 print:text-black">{pub.journal}</p>
                            <p className="text-xs leading-relaxed mb-2 print:text-black opacity-80">{pub.desc}</p>
                        </div>
                    ))}
                </section>

                <section className="print:mb-4">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-amber-500 mb-6 flex items-center gap-2 print:text-black print:font-bold print:border-b print:border-black print:mb-2 print:block">
                        <Layers size={14} className="print:hidden" /> Selected Projects
                    </h3>
                    {PROJECTS.slice(0, 4).map((proj, i) => (
                        <div key={i} className="mb-6 print:mb-4">
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className="text-base font-medium print:text-black print:font-bold text-white">{proj.title}</h4>
                                <span className="text-[10px] text-amber-500/70 uppercase tracking-wider print:text-black print:hidden">{proj.category}</span>
                            </div>
                            <p className="text-xs leading-relaxed mb-2 print:text-black opacity-80">{proj.desc}</p>
                            <div className="flex gap-2 print:hidden">
                                {proj.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-gray-500/10 text-gray-500 rounded">{tag}</span>
                                ))}
                            </div>
                            <p className="hidden print:block text-xs text-black italic">Technologies: {proj.tags.join(", ")}</p>
                        </div>
                    ))}
                </section>
            </div>

            <div className="space-y-8 print:space-y-4">
                 <section className="print:mb-4">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-amber-500 mb-6 flex items-center gap-2 print:text-black print:font-bold print:border-b print:border-black print:mb-2 print:block">
                        <GraduationCap size={14} className="print:hidden" /> Education
                    </h3>
                    <div className="text-sm print:text-black opacity-90">
                        <p className="font-bold print:text-black text-white">{RESUME_DATA.education.uni}</p>
                        <p className="text-gray-500 text-xs mt-1 print:text-black">{RESUME_DATA.education.degree}</p>
                        <p className="text-gray-500 text-xs mt-1 print:text-black">{RESUME_DATA.education.date}</p>
                        <p className="text-amber-500 text-xs mt-2 print:text-black font-bold">{RESUME_DATA.education.gpa}</p>
                    </div>
                 </section>

                 <section className="print:mb-4">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-amber-500 mb-6 flex items-center gap-2 print:text-black print:font-bold print:border-b print:border-black print:mb-2 print:block">
                         <Code size={14} className="print:hidden" /> Technical Skills
                    </h3>
                    <div className="space-y-4 print:text-sm print:text-black">
                        <div className="print:mb-2">
                            <span className="text-xs text-gray-500 block mb-2 print:text-black print:font-bold print:mb-0">Languages</span>
                            <div className="flex flex-wrap gap-2 print:hidden">
                                {RESUME_DATA.skills.languages.map(s => (<span key={s} className="text-xs bg-gray-500/10 px-2 py-1 rounded opacity-80">{s}</span>))}
                            </div>
                            <p className="hidden print:block">{RESUME_DATA.skills.languages.join(", ")}</p>
                        </div>
                        <div>
                            <span className="text-xs text-gray-500 block mb-2 print:text-black print:font-bold print:mb-0">Frameworks & Tools</span>
                            <div className="flex flex-wrap gap-2 print:hidden">
                                {RESUME_DATA.skills.frameworks.map(s => (<span key={s} className="text-xs bg-gray-500/10 px-2 py-1 rounded opacity-80">{s}</span>))}
                            </div>
                            <p className="hidden print:block">{RESUME_DATA.skills.frameworks.join(", ")}</p>
                        </div>
                    </div>
                </section>

                 <section className="print:mb-4">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-amber-500 mb-6 flex items-center gap-2 print:text-black print:font-bold print:border-b print:border-black print:mb-2 print:block">
                        <Award size={14} className="print:hidden" /> Certifications
                    </h3>
                    <ul className="space-y-3 print:text-sm print:text-black print:list-disc print:pl-4 opacity-90">
                        {CERTIFICATIONS.map((c, i) => (
                            <li key={i} className="text-xs leading-tight flex gap-2 print:text-black print:block">
                                <span className="text-amber-500 mt-0.5 print:hidden">•</span> {c}
                            </li>
                        ))}
                    </ul>
                 </section>
            </div>
        </div>
      </div>
    </div>
  </div>
);

export default function GrandPortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState<'home' | 'resume'>('home');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { setActiveSection(entry.target.id); } }); }, { threshold: 0.3 });
    const sections = NAV_LINKS.map(link => document.getElementById(link.toLowerCase()));
    sections.forEach((section) => { if (section) observer.observe(section); });
    return () => sections.forEach((section) => { if (section) observer.unobserve(section); });
  }, []);

  const toggleView = (view: 'home' | 'resume') => { setActiveView(view); setMobileMenuOpen(false); window.scrollTo(0, 0); };

  const navBg = scrolled ? 'bg-[#050505]/90 border-white/5' : 'border-transparent';

  return (
    <div className="min-h-screen overflow-x-hidden font-sans transition-colors duration-500 bg-[#050505] text-slate-300 selection:bg-amber-500/30 selection:text-amber-200 print:bg-white">
      <CustomCursor />
      
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none print:hidden">
        <div className="absolute bottom-0 left-0 w-full h-[40%] z-10 bg-[linear-gradient(to_bottom,transparent,#111)]" />
        <div className="absolute bottom-0 left-[-50%] w-[200%] h-[50%] opacity-20 origin-bottom transform perspective-1000 rotateX(60deg) animate-grid-move"><div className="w-full h-full bg-[size:40px_40px] bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]" /></div>
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[120px] opacity-40 animate-pulse-slow bg-purple-900/10" />
        <div className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-30 animate-float bg-amber-700/10" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 print:hidden backdrop-blur-xl border-b ${navBg} py-3 md:py-4`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <button onClick={() => toggleView('home')} className="font-serif text-xl md:text-2xl font-bold flex items-center gap-2 z-50 text-white"><Diamond size={20} className="text-amber-400" /><span>NP.</span></button>
          <div className="hidden md:flex items-center gap-12">
            {activeView === 'home' && NAV_LINKS.map((link) => (<a key={link} href={`#${link.toLowerCase()}`} className={`text-xs uppercase tracking-widest transition-colors relative group ${activeSection === link.toLowerCase() ? 'text-amber-500' : 'text-slate-400 hover:text-white'}`}>{link}<span className={`absolute -bottom-2 left-0 h-[1px] bg-amber-500 transition-all duration-300 ${activeSection === link.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}`} /></a>))}
            <CyberButton onClick={() => toggleView('resume')}>View Resume</CyberButton>
          </div>
          <button className="md:hidden z-50 p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden print:hidden bg-[#050505] text-white ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         {NAV_LINKS.map((link) => (<a key={link} href={`#${link.toLowerCase()}`} onClick={() => { setMobileMenuOpen(false); setActiveView('home'); }} className="text-2xl font-serif hover:text-amber-400 transition-colors">{link}</a>))}
         <CyberButton onClick={() => toggleView('resume')}>View Resume</CyberButton>
      </div>

      {activeView === 'resume' ? <ResumeView onBack={() => toggleView('home')} /> : (
        <main className="print:hidden">
          <header className="relative z-10 min-h-screen flex items-center justify-center px-6 pb-12 pt-32 md:pt-40">
            <div className="max-w-7xl w-full mx-auto grid md:grid-cols-12 gap-12 items-center">
              <div className="order-2 md:order-1 md:col-span-8 space-y-6 md:space-y-8 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm mx-auto md:mx-0 mt-4 md:mt-0">
                  <Sparkles size={12} className="text-amber-500" /><span className="text-[10px] uppercase tracking-widest text-amber-200 animate-pulse">Open to AI & Web Roles</span>
                </div>
                <h1 className="text-4xl md:text-8xl font-serif font-medium text-white leading-[1.1] relative"><span className="relative inline-block">Nihith Penumuchu<span className="absolute top-0 left-0 -z-10 w-full h-full text-amber-500/30 opacity-50 animate-pulse blur-[2px] translate-x-1">Nihith Penumuchu</span></span><br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700 text-3xl md:text-7xl">AI Engineer & Architect.</span></h1>
                <p className="max-w-xl text-base md:text-lg text-slate-400 leading-relaxed font-light mx-auto md:mx-0 animate-fade-in delay-100">Motivated Computer Science undergraduate at SRM University. Blending robust backend logic with immersive, high-performance front-end experiences.</p>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 pt-4 justify-center md:justify-start animate-fade-in delay-200"><CyberButton href="#projects">View Projects <ArrowRight size={16} /></CyberButton><CyberButton onClick={() => toggleView('resume')}><FileText size={16} /> Resume</CyberButton></div>
                <div className="flex gap-6 justify-center md:justify-start pt-4 animate-fade-in delay-300"><a href="https://github.com/NIHITHPENUMUCHU" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><GithubIcon size={24} /></a><a href="https://linkedin.com/in/nihith-penumuchu-132219253" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><LinkedinIcon size={24} /></a><a href="https://nihith-penumuchu-portfolio.netlify.app" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><Globe size={24} /></a></div>
              </div>
              <div className="order-1 md:order-2 md:col-span-4 relative h-[300px] md:h-[400px] flex items-center justify-center"><InteractiveAvatar /></div>
            </div>
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-bounce-slow hidden md:flex"><span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span><ChevronDown size={16} /></div>
          </header>

          <section id="skills" className="relative z-10 py-20 md:py-32 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
              <SectionHeader title="Core Competencies" subtitle="Skills" />
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {EXPERTISE.map((item, idx) => (
                  <SpotlightCard key={idx} className="group p-6 md:p-8 backdrop-blur-sm bg-white/[0.02]">
                    <div className="relative z-10"><div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-purple-500/20 border-white/10 rounded-lg flex items-center justify-center mb-8 text-amber-200 group-hover:scale-110 transition-transform duration-500 border">{item.icon}</div><h3 className="text-xl text-white font-serif mb-4">{item.title}</h3><p className="text-slate-400 text-sm leading-relaxed border-l border-white/10 pl-4 group-hover:border-amber-500/50 transition-colors">{item.desc}</p></div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </section>

           <section id="experience" className="relative z-10 py-20 md:py-32 px-6 border-y bg-[#0a0a0a] border-white/5">
            <div className="max-w-7xl mx-auto">
              <SectionHeader title="Professional History" subtitle="Experience" />
              <div className="max-w-4xl">
                {WORK_EXPERIENCE.map((job) => (
                    <div key={job.id} className="relative pl-8 md:pl-12 border-l border-white/10 pb-12 last:pb-0 animate-fade-in">
                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-amber-500 rounded-full shadow-[0_0_10px_#f59e0b]"></div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2"><h3 className="text-2xl text-white font-serif">{job.company}</h3><span className="text-xs font-mono uppercase tracking-widest px-3 py-1 border rounded-full text-amber-500 border-amber-500/20 bg-amber-500/5">{job.period}</span></div>
                        <p className="text-lg text-white mb-4 opacity-90">{job.role}</p>
                        <p className="text-slate-400 leading-relaxed mb-6 max-w-2xl">{job.desc}</p>
                        <div className="flex gap-3">{job.tech.map(t => (<span key={t} className="text-xs text-slate-400 border border-white/10 px-3 py-1 rounded-full hover:border-amber-500/50 transition-colors cursor-default">{t}</span>))}</div>
                    </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="relative z-10 py-20 md:py-32 px-0 overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-6 mb-12"><SectionHeader title="Featured Projects" subtitle="Innovation" /></div>
            <ProjectSlider />
            <div className="text-center mt-12 text-xs uppercase tracking-widest animate-pulse text-slate-400">Drag to explore</div>
          </section>

          <section className="relative z-10 py-20 md:py-32 px-6 border-t bg-[#0a0a0a] border-white/5">
            <div className="max-w-7xl mx-auto">
              <SectionHeader title="Research & Publications" subtitle="Academic" />
              <div className="grid md:grid-cols-2 gap-8">
                {PUBLICATIONS.map((pub) => (
                  <SpotlightCard key={pub.id} className="group p-8 backdrop-blur-sm bg-white/[0.02]">
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6"><div className="p-3 rounded-lg border bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border-indigo-500/30 text-indigo-300"><BookOpen size={24} /></div><span className="text-xs font-mono text-slate-400 border border-white/10 px-2 py-1 rounded">{pub.year}</span></div>
                      <h3 className="text-xl md:text-2xl font-serif text-white mb-2 leading-tight group-hover:text-indigo-500 transition-colors">{pub.title}</h3>
                      <div className="text-xs uppercase tracking-widest text-slate-400 mb-4">{pub.journal}</div>
                      <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">{pub.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-6">{pub.tags.map(tag => (<span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded border text-indigo-300 bg-indigo-500/10 border-indigo-500/20">{tag}</span>))}</div>
                      <CyberButton>Read Paper <ArrowRight size={14} /></CyberButton>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="relative z-10 py-20 md:py-32 px-6 border-t bg-gradient-to-b from-black to-[#0a0a0a] border-white/5">
            <div className="max-w-5xl mx-auto">
              <SectionHeader title="Initiate Collaboration" subtitle="Contact" />
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {[
                  { icon: <Mail size={48} />, smallIcon: <Mail size={20} />, title: "Email", val: "nihithpenumuchu07@gmail.com", href: "mailto:nihithpenumuchu07@gmail.com", color: "amber" },
                  { icon: <LinkedinIcon size={48} />, smallIcon: <LinkedinIcon size={20} />, title: "LinkedIn", val: "Connect professionally", href: "https://linkedin.com/in/nihith-penumuchu-132219253", color: "blue" },
                  { icon: <GithubIcon size={48} />, smallIcon: <GithubIcon size={20} />, title: "GitHub", val: "Explore code repositories", href: "https://github.com/NIHITHPENUMUCHU", color: "purple" },
                  { icon: <Phone size={48} />, smallIcon: <Phone size={20} />, title: "Phone", val: "+91 93465 77530", href: "tel:+919346577530", color: "green" }
                ].map((item, idx) => (
                  <a key={idx} href={item.href} target={item.title !== 'Email' && item.title !== 'Phone' ? "_blank" : ""} rel="noreferrer" className="group p-8 border bg-white/[0.02] border-white/10 hover:border-amber-500/30 hover:bg-opacity-50 transition-all duration-300 flex flex-col gap-4 relative overflow-hidden rounded-xl shadow-sm">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">{item.icon}</div>
                    <div className={`w-12 h-12 border rounded-full flex items-center justify-center group-hover:scale-110 transition-transform bg-${item.color}-500/5 border-${item.color}-500/20 text-${item.color}-400`}>{item.smallIcon}</div>
                    <div><h3 className="text-lg font-serif mb-1 text-white">{item.title}</h3><p className={`text-sm break-all text-slate-400 group-hover:text-${item.color}-500 transition-colors`}>{item.val}</p></div>
                  </a>
                ))}
              </div>
              <div className="mt-16 text-center"><p className="text-sm max-w-xl mx-auto italic animate-pulse text-slate-400">"True luxury in the digital age is silence amidst the noise. Let's build something quiet, powerful, and profound."</p></div>
            </div>
          </section>

          <footer className="py-12 px-6 border-t text-center md:text-left relative z-10 border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-xs tracking-widest uppercase text-slate-400">&copy; {new Date().getFullYear()} Nihith Penumuchu. All Rights Reserved.</div>
              <div className="flex gap-8">
                <a href="https://linkedin.com/in/nihith-penumuchu-132219253" target="_blank" rel="noreferrer" className="text-xs tracking-widest uppercase text-slate-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/NIHITHPENUMUCHU" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </footer>
        </main>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@200;300;400;500&family=JetBrains+Mono:wght@400&display=swap');
        :root { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes reverse-spin { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slide-indeterminate { 0% { transform: translateX(-100%); } 50% { transform: translateX(300%); } 100% { transform: translateX(-100%); } }
        @keyframes scan { 0%, 100% { top: 5%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 50% { top: 90%; } }
        @keyframes grid-move { 0% { transform: perspective(1000px) rotateX(60deg) translateY(0); } 100% { transform: perspective(1000px) rotateX(60deg) translateY(40px); } }
        @keyframes bounce-small { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        .animate-grid-move { animation: grid-move 2s linear infinite; }
        .animate-scan { animation: scan 3s ease-in-out infinite; }
        .animate-float { animation: float 10s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-reverse-spin { animation: reverse-spin 25s linear infinite; }
        .animate-bounce-slow { animation: bounce 3s infinite; }
        .animate-bounce-small { animation: bounce-small 0.5s infinite; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-indeterminate { animation: slide-indeterminate 3s infinite linear; }
        .animate-pulse-slow { animation: pulse 4s infinite; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @media (min-width: 768px) { body, a, button, input, textarea { cursor: none; } }
      `}</style>
    </div>
  );
}