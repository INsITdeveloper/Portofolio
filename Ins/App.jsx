import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaChevronDown,
  FaEnvelope,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiNextdotjs,
  SiFramer,
  SiVite,
} from 'react-icons/si';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'w-[90%] md:w-[600px]' : 'w-[95%] md:w-[800px]'
      }`}
    >
      <div className="glass-card px-8 py-4 rounded-full flex items-center justify-between border-white/10 backdrop-blur-2xl shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg rotate-12 flex items-center justify-center font-black text-white shadow-lg shadow-blue-500/20">I</div>
          <span className="font-black tracking-tighter text-xl">INS</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Projects', 'Tech', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors">
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-20">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mb-12"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse" />
        <img
          src="https://avatars.githubusercontent.com/u/153608709?v=4"
          alt="INS"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-white/5 object-cover shadow-2xl relative z-10"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="absolute bottom-6 right-6 z-20 bg-blue-500 rounded-full p-3 border-4 border-[#0a0a0a]"
        >
          <FaCheckCircle className="text-white text-3xl" />
        </motion.div>
      </motion.div>

      <div className="text-center space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-black uppercase tracking-[0.3em]">
            Available for freelance
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-7xl md:text-9xl font-black tracking-tighter leading-none"
        >
          <span className="text-reveal text-reveal-active">I'M INS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-zinc-500 text-xl md:text-2xl font-medium max-w-2xl mx-auto tracking-tight"
        >
          Building <span className="text-white">exceptional</span> digital experiences
          with a focus on performance and aesthetics.
        </motion.p>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600"
      >
        <FaChevronDown size={24} />
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card glass-card-hover rounded-[2rem] p-1 overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="flex justify-between items-start">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl shadow-lg`}>
              {project.icon}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
            >
              <FaExternalLinkAlt className="text-zinc-400 group-hover:text-white" />
            </a>
          </div>

          <div className="space-y-3">
            <h3 className="text-3xl font-black tracking-tight">{project.name}</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">{project.desc}</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-bold text-zinc-500 uppercase tracking-widest border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const projects = [
    {
      name: 'CloudINS CDN',
      url: 'https://cloudins-cdn.insjay.biz.id/',
      icon: <FaServer className="text-emerald-400" />,
      desc: 'An enterprise-grade CDN delivering content with lightning speed across the globe.',
      color: 'from-emerald-500/20 to-teal-500/20',
      tags: ['Node.js', 'Redis', 'Docker']
    },
    {
      name: 'Neural Portfolio',
      url: '#',
      icon: <FaCode className="text-blue-400" />,
      desc: 'Next-generation portfolio with AI-driven interactions and adaptive layouts.',
      color: 'from-blue-500/20 to-cyan-500/20',
      tags: ['React', 'Three.js', 'Framer']
    },
    {
      name: 'Crypto Dashboard',
      url: '#',
      icon: <FaDatabase className="text-purple-400" />,
      desc: 'Real-time cryptocurrency tracking engine with advanced data visualization.',
      color: 'from-purple-500/20 to-pink-500/20',
      tags: ['TypeScript', 'Chart.js', 'Wagmi']
    },
  ];

  const techStack = [
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, level: 'Advanced' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, level: 'Expert' },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, level: 'Advanced' },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" />, level: 'Proficient' },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 'Expert' },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" />, level: 'Proficient' },
    { name: 'Framer', icon: <SiFramer className="text-white" />, level: 'Advanced' },
    { name: 'Vite', icon: <SiVite className="text-[#646CFF]" />, level: 'Expert' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] animate-float-delayed" />
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      </div>

      <main className="relative z-10">
        <Hero />

        <div className="max-w-6xl mx-auto px-6 space-y-48 pb-48">
          {/* About Section */}
          <section id="about" className="scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-glow rounded-[3rem]"
            >
              <div className="glass-card p-12 md:p-20 rounded-[3rem] space-y-10">
                <div className="space-y-4">
                  <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-500">About Me</h2>
                  <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
                    I solve problems with <span className="text-zinc-500">code and design.</span>
                  </h3>
                </div>
                <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-medium max-w-4xl">
                  Based in Indonesia, I'm a full-stack developer with over 3 years of experience.
                  I specialize in building high-performance web applications that are not just
                  functional, but delightful to use. I believe every pixel counts and every line
                  of code should be purposeful.
                </p>
                <div className="flex gap-10 pt-6">
                  <div>
                    <div className="text-4xl font-black">20+</div>
                    <div className="text-zinc-500 font-bold uppercase text-xs tracking-widest mt-1">Projects Done</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black">10+</div>
                    <div className="text-zinc-500 font-bold uppercase text-xs tracking-widest mt-1">Happy Clients</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-32 space-y-16">
            <div className="flex justify-between items-end">
              <div className="space-y-4">
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-purple-500">Works</h2>
                <h3 className="text-5xl font-black tracking-tighter">Featured Projects</h3>
              </div>
              <a href="#" className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">
                View All <FaExternalLinkAlt className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p, i) => (
                <ProjectCard key={p.name} project={p} index={i} />
              ))}
            </div>
          </section>

          {/* Tech Section */}
          <section id="tech" className="scroll-mt-32 space-y-16">
             <div className="text-center space-y-4">
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-emerald-500">Stack</h2>
                <h3 className="text-5xl font-black tracking-tighter">My Superpowers</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-500 border-white/5"
                  >
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                      {tech.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="font-black text-lg">{tech.name}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-blue-500 transition-colors">
                        {tech.level}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-32">
            <div className="glass-card rounded-[3.5rem] p-12 md:p-24 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] -mr-48 -mt-48 transition-all duration-700 group-hover:scale-110" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="space-y-8 text-center md:text-left">
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                    Let's build something <br/>
                    <span className="text-blue-500">incredible together.</span>
                  </h2>
                  <p className="text-zinc-400 text-xl font-medium max-w-xl">
                    I'm always open to new opportunities and collaborations.
                    Feel free to reach out if you have a project in mind!
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <button className="bg-white text-black px-10 py-5 rounded-full font-black flex items-center gap-3 hover:bg-zinc-200 transition-all hover:scale-105">
                      <FaEnvelope /> Get In Touch
                    </button>
                    <div className="flex gap-4">
                       <a href="https://github.com/INS-3310" className="p-5 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-2xl">
                        <FaGithub />
                       </a>
                       <a href="#" className="p-5 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-2xl">
                        <FaInstagram />
                       </a>
                       <a href="#" className="p-5 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-2xl">
                        <FaLinkedin />
                       </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="py-20 border-t border-white/5 text-center space-y-4">
          <div className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-xs">
            Designed & Developed by INS
          </div>
          <div className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} All Rights Reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
