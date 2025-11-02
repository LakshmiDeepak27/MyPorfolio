import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaCode } from 'react-icons/fa';
import { socialLinks, formspreeEndpoint } from '../utils/constants';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

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

  return (
    <section
      id="contact"
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" />
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision. Feel free to reach out through any of these channels.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: FaEnvelope, text: 'lakshmideepakneeli.dev@gmail.com', href: socialLinks.email },
                    { icon: FaPhone, text: '+91 9381655813', href: 'tel:9381655813' },
                    { icon: FaMapMarkerAlt, text: 'Bangalore, Karnataka, India', href: null },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        <div className="w-12 h-12 glass-light rounded-lg flex items-center justify-center text-cyan-400">
                          <Icon size={20} />
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="hover:underline"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <span>{item.text}</span>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-slate-700/50">
                  <p className="text-slate-300 mb-4">Follow me on:</p>
                  <div className="flex gap-4">
                    {[
                      { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
                      { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
                      { icon: FaEnvelope, href: socialLinks.email, label: 'Email' },
                      { icon: FaCode, href: socialLinks.leetcode, label: 'LeetCode' },
                    ].map(({ icon: Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 glass-light rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300"
                        aria-label={label}
                      >
                        <Icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-light border border-slate-700/50 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-slate-500 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-light border border-slate-700/50 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-slate-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 glass-light border border-slate-700/50 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-slate-500 resize-none transition-all duration-300"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitStatus === 'success'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}
                  >
                    {submitStatus === 'success'
                      ? 'Message sent successfully! I\'ll get back to you soon.'
                      : 'Something went wrong. Please try again or email me directly.'}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

