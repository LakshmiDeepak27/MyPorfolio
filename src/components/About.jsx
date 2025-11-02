import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaCode, FaLightbulb, FaRocket, FaAward } from 'react-icons/fa';

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const highlights = [
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description: 'Building end-to-end solutions with modern technologies',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: FaLightbulb,
      title: 'Innovative Solutions',
      description: 'Transforming complex problems into elegant solutions',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: FaRocket,
      title: 'Fast & Scalable',
      description: 'Creating high-performance applications that scale',
      color: 'from-orange-400 to-red-500',
    },
    {
      icon: FaAward,
      title: 'Quality Focus',
      description: 'Delivering excellence through best practices',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"
              initial={{ width: 0 }}
              animate={isVisible ? { width: 96 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-slate-300 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get to know more about my journey, passion, and what drives me as a developer
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 mb-12 max-w-4xl mx-auto"
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              I'm an aspiring product developer with a passion for creating innovative
              solutions that make a difference. My journey in tech started with curiosity
              and has evolved into a commitment to building applications that are not just
              functional, but also intuitive and delightful.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              With expertise spanning from frontend frameworks like React to backend
              technologies like Node.js and Python, I enjoy the full spectrum of web
              development. I'm constantly learning new technologies and methodologies to
              stay at the forefront of the industry.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new tech trends, contributing
              to open-source projects, or working on personal projects that challenge me
              to grow as a developer.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${highlight.color} mb-4`}>
                  <highlight.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {highlight.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Timeline Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text">My Journey</h3>
            <div className="space-y-6">
              {[
                {
                  year: '2024',
                  title: 'Continuous Learning',
                  description: 'Exploring advanced React patterns, cloud technologies, and contributing to open-source projects',
                },
                {
                  year: '2023',
                  title: 'Full-Stack Development',
                  description: 'Mastered full-stack development with React, Node.js, and various databases',
                },
                {
                  year: '2022',
                  title: 'Frontend Focus',
                  description: 'Deep dive into modern frontend frameworks and UI/UX principles',
                },
                {
                  year: '2021',
                  title: 'Programming Beginnings',
                  description: 'Started my journey in programming with Python and JavaScript',
                },
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex gap-6 relative pl-8 border-l-2 border-cyan-400/30"
                >
                  <div className="absolute -left-2.5 top-0 w-4 h-4 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full" />
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-cyan-400 font-bold">{milestone.year}</span>
                      <h4 className="text-xl font-semibold text-white">{milestone.title}</h4>
                    </div>
                    <p className="text-slate-400">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

