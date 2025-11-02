import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { socialLinks } from '../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-slate-400 text-sm text-center md:text-left"
          >
            © {currentYear} Lakshmi Deepak Neeli. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
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
                className="w-10 h-10 glass-light rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                aria-label={label}
              >
                {isImage ? (
                  <img 
                    src="/image.png" 
                    alt={label} 
                    className="w-5 h-5 object-contain"
                    style={{ 
                      filter: 'brightness(0) saturate(100%) invert(69%) sepia(100%) saturate(500%) hue-rotate(140deg) brightness(1) contrast(1)'
                    }}
                    onError={(e) => {
                      console.error('LeetCode logo not found');
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <Icon size={18} />
                )}
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-sm text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Back to Top ↑
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

