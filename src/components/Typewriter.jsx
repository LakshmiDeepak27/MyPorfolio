import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = () => {
  const quotes = [
    "Believe your Instincts",
    "Where there's a will, there's a way",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentQuote = quotes[currentQuoteIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentQuote.length) {
          setDisplayText(currentQuote.substring(0, displayText.length + 1));
          setTypingSpeed(100);
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => {
            setIsDeleting(true);
            setTypingSpeed(50); // Faster deletion
          }, 2000);
        }
      } else {
        // Deleting backward
        if (displayText.length > 0) {
          setDisplayText(currentQuote.substring(0, displayText.length - 1));
          setTypingSpeed(50);
        } else {
          // Finished deleting, move to next quote
          setIsDeleting(false);
          setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentQuoteIndex, quotes, typingSpeed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-12 px-4 sm:px-6 lg:px-8 text-center"
    >
      <div className="container mx-auto">
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-200 min-h-[3rem] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="gradient-text">{displayText || '\u00A0'}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            className="inline-block w-0.5 h-8 sm:h-10 bg-cyan-400 ml-2 align-middle"
          />
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Typewriter;

