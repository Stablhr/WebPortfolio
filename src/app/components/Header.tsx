import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.8)']
  );
  const headerBlur = useTransform(scrollY, [0, 100], [4, 12]);

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 lg:px-16 py-4 md:py-6"
        style={{ 
          backgroundColor: headerBackground,
          backdropFilter: useTransform(headerBlur, (value) => `blur(${value}px)`)
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <motion.div 
            className="text-xl md:text-2xl font-semibold text-white relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className="relative z-10"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(249, 115, 22, 0.5)",
                  "0 0 20px rgba(249, 115, 22, 0.8)",
                  "0 0 10px rgba(249, 115, 22, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Folkblex
            </motion.span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {['Home', 'About', 'Projects'].map((item, index) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/90 hover:text-white transition-colors text-sm lg:text-base relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
            <motion.button 
              className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/50 transition-all text-sm lg:text-base relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <span className="relative z-10">Get in touch</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <motion.button 
            className="md:hidden text-white p-2 relative"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              animate={mobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-zinc-950 md:hidden overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute top-20 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, -50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <nav className="flex flex-col items-center justify-center h-full gap-8 relative z-10">
            {['Home', 'About', 'Projects'].map((item, index) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-2xl hover:text-orange-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, x: 10 }}
              >
                <motion.span
                  whileHover={{ 
                    textShadow: "0 0 20px rgba(249, 115, 22, 0.8)"
                  }}
                >
                  {item}
                </motion.span>
              </motion.a>
            ))}
            <motion.button 
              className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/50 transition-all mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </nav>
        </motion.div>
      )}
    </>
  );
}