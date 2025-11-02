import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { socialLinks, resumeLink } from '../utils/constants';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-0 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Profile Image */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl glow-effect"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(14, 165, 233, 0.3)',
                    '0 0 40px rgba(14, 165, 233, 0.5)',
                    '0 0 20px rgba(14, 165, 233, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img
                  src="/profile.jpeg"
                  alt="Lakshmi Deepak Neeli"
                  className="w-full h-full object-cover"
                  onLoad={() => console.log('Profile image loaded successfully')}
                  onError={(e) => {
                    console.error('Error loading profile image');
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop';
                  }}
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-3xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>

          {/* Right: Intro Text */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-block mb-4 px-4 py-2 glass-light rounded-full text-sm text-cyan-400 border border-cyan-400/30"
            >
              Welcome to my portfolio
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              Hey, I'm{' '}
              <span className="gradient-text">Lakshmi Deepak Neeli</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed"
            >
              Aspiring Developer | Tech Enthusiast | Innovator
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Passionate about building innovative solutions and transforming ideas into reality through technology, creative problem-solving, and developing strong foundations in Data Structures and Algorithms.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href={resumeLink}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                <FaDownload className="mr-2 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 glass-light border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:border-cyan-400/50 transition-all duration-300"
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4 sm:gap-6 flex-wrap"
            >
              {[
                { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
                { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
                { icon: FaEnvelope, href: socialLinks.email, label: 'Email' },
                { isImage: true, href: socialLinks.leetcode, label: 'LeetCode' },
              ].map(({ icon: Icon, isImage, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 glass-light rounded-full flex items-center justify-center text-cyan-400 hover:text-cyan-300 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300"
                  aria-label={label}
                >
                  {isImage ? (
                    <img 
                      src="/image.png" 
                      alt={label} 
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      style={{ 
                        filter: 'brightness(0) saturate(100%) invert(69%) sepia(100%) saturate(500%) hue-rotate(140deg) brightness(1) contrast(1)'
                      }}
                      onError={(e) => {
                        console.error('LeetCode logo not found');
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  )}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

