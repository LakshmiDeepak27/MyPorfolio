import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skills } from '../data/skillsData';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="skills"
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
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" />
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.15,
                    y: -10,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="group glass rounded-xl p-6 flex flex-col items-center justify-center border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    className={`mb-3 ${skill.color} transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent size={40} />
                  </motion.div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors text-center">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass rounded-2xl p-8 max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Always Learning
            </h3>
            <p className="text-slate-300 leading-relaxed">
              The tech landscape evolves rapidly, and I'm committed to staying current with
              emerging technologies and best practices. I enjoy exploring new frameworks,
              tools, and methodologies that can improve the quality and efficiency of my work.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

