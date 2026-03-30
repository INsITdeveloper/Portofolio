import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';

function App() {
  const projects = [
    { name: 'GitHub Projects', url: 'https://github.com/INS-3310', icon: <FaGithub /> },
    { name: 'Portfolio Demo', url: 'https://example.com', icon: <FaExternalLinkAlt /> },
    { name: 'Blog', url: 'https://example.com/blog', icon: <FaExternalLinkAlt /> },
  ];

  return (
    <div className="min-h-screen p-8 md:p-16 lg:p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto space-y-12"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center relative"
        >
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/u/153608709?v=4"
              alt="INS"
              className="w-48 h-48 rounded-full shadow-xl border-4 border-zinc-700"
            />
            <div className="absolute bottom-2 right-2 bg-blue-500 rounded-full p-1">
              <FaCheckCircle className="text-white text-3xl" />
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <header className="space-y-4 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3"
          >
            Hello, I'm INS
            <FaCheckCircle className="text-blue-500 text-3xl" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg"
          >
            Full Stack Developer
          </motion.p>
        </header>

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert"
        >
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-zinc-300">
            I'm a passionate developer who loves creating beautiful and functional web applications.
            With experience in both frontend and backend development, I enjoy turning complex problems
            into simple, beautiful, and intuitive solutions.
          </p>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 transition-all hover:scale-105 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl text-zinc-400 group-hover:text-white transition-colors">
                    {project.icon}
                  </div>
                  <span className="text-lg font-medium">{project.name}</span>
                </div>
                <FaExternalLinkAlt className="text-zinc-500 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['React', 'Node.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Next.js'].map((tech) => (
              <div
                key={tech}
                className="bg-zinc-800 p-4 rounded-lg text-center hover:bg-zinc-700 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Social Links */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/INS-3310"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-zinc-400 transition-all hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-pink-400 transition-all hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-400 transition-all hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </motion.section>
      </motion.div>
    </div>
  );
}

export default App;
