import { motion } from 'motion/react';

export function CertificatesSection() {
  const certificates = [
    {
      image: "Certificates/HBC.png",
      title: "Go High-Level Webinar Completion",
      issuer: "Home Base Connect",
      year: "2024",
      color: "from-blue-500 via-cyan-500 to-teal-500"
    },
    {
      image: "Certificates/B2B Appointment setter.png",
      title: "B2B Appointment Setter Certification",
      issuer: "Dynamic VA Referral Services",
      year: "2024",
      color: "from-teal-500 to-cyan-500"
    },
    {
      image: "Certificates/General VA Training.png",
      title: "General VA Training Program",
      issuer: "Dynamic VA Referral Services",
      year: "2024",
      color: "from-yellow-500 to-orange-500"
    },
    {
      image: "https://images.unsplash.com/photo-1719257751404-1dea075324bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MDE1NzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Brand Strategy Masterclass",
      issuer: "Brand Master Academy",
      year: "2023",
      color: "from-purple-500 to-pink-500"
    },
    {
      image: "https://images.unsplash.com/photo-1719257751404-1dea075324bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MDE1NzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Advanced Figma for Design Systems",
      issuer: "Figma",
      year: "2025",
      color: "from-orange-500 to-red-500"
    },
    {
      image: "https://images.unsplash.com/photo-1719257751404-1dea075324bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MDE1NzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Creative Leadership Certificate",
      issuer: "LinkedIn Learning",
      year: "2024",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="bg-zinc-900 py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p 
            className="text-orange-500 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Credentials & Recognition
          </motion.p>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Certificates & Achievements
          </motion.h2>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Continuously learning and recognized for excellence.
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="relative bg-zinc-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all group overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
              />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />

              {/* Decorative corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              />

              {/* Decorative dots pattern */}
              <motion.div
                className="absolute top-4 left-4 w-2 h-2 bg-orange-500/30 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
              <motion.div
                className="absolute top-4 left-8 w-2 h-2 bg-pink-500/30 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2 + 0.3
                }}
              />

              <div className="relative z-10">
                <motion.div
                  className={`w-20 h-20 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 overflow-hidden relative shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Pulsing glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/30 rounded-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <img 
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover relative z-10"
                  />
                </motion.div>

                <motion.h3 
                  className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-orange-400 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {cert.title}
                </motion.h3>

                <div className="flex items-center justify-between">
                  <motion.p 
                    className="text-white/60 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {cert.issuer}
                  </motion.p>
                  <motion.span 
                    className="text-orange-400 text-xs font-medium px-3 py-1 bg-orange-500/10 rounded-full border border-orange-500/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {cert.year}
                  </motion.span>
                </div>

                {/* Progress bar decoration */}
                <motion.div
                  className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                >
                  <motion.div
                    className={`h-full bg-gradient-to-r ${cert.color}`}
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 1 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}