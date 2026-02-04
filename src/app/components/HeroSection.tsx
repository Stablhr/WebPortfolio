import { motion, useScroll, useTransform } from 'motion/react';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background with parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-600 to-purple-900"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        style={{ y: y1 }}
      />
      
      {/* Secondary animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-600/30 to-pink-600/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Multiple floating animation elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Decorative grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          y: y2
        }}
      />

      <motion.div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-16 md:py-20 w-full" style={{ opacity }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Main title */}
          <div>
            <motion.p 
              className="text-white/90 text-base md:text-lg mb-3 md:mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hey, I'm a
            </motion.p>
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-10 md:mb-16 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className="inline-block"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 30px rgba(249, 115, 22, 0.8)"
                }}
              >
                Creative
              </motion.span>
              <br />
              <motion.span
                className="inline-block bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% auto'
                }}
              >
                Director
              </motion.span>
              
              {/* Decorative line */}
              <motion.div
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 via-pink-500 to-transparent"
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ duration: 1, delay: 1 }}
              />
            </motion.h1>

            {/* Services grid with enhanced stagger animation */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { num: "01", title: "Brand Strategy" },
                { num: "02", title: "Brand Identity Design" },
                { num: "03", title: "Packaging Design" },
                { num: "04", title: "Creative Direction" }
              ].map((service, index) => (
                <motion.div
                  key={service.num}
                  className="relative bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-orange-500/50 transition-all cursor-pointer overflow-hidden group"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <motion.div 
                    className="text-orange-300 text-xs md:text-sm mb-1 md:mb-2 font-bold relative z-10"
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {service.num}
                  </motion.div>
                  <div className="text-white text-sm md:text-base font-medium relative z-10">{service.title}</div>
                  
                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Photo Box with enhanced effects */}
          <motion.div 
            className="flex items-center justify-start lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 relative group"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(249, 115, 22, 0.3)',
                    '0 0 40px rgba(249, 115, 22, 0.6)',
                    '0 0 20px rgba(249, 115, 22, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <img
                src="https://images.unsplash.com/photo-1659100947220-48b5d5738148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBsYWNlaG9sZGVyJTIwcGVyc29ufGVufDF8fHx8MTc3MDIxMDkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Your Photo"
                className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}