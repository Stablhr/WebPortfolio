import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function PortfolioSection() {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1646178071012-7bf3efe0ddfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdpbnRlciUyMGphY2tldCUyMG1pbmltYWx8ZW58MXx8fHwxNzcwMDQwMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Fashion Design Project",
      title: "Urban Fashion Brand",
      category: "Brand Identity",
      year: "2025"
    },
    {
      image: "https://images.unsplash.com/photo-1764510376494-65ee5056a101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBoZWFkcGhvbmVzJTIwcHJvZmlsZXxlbnwxfHx8fDE3NzAwNDAyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Audio Brand Project",
      title: "Premium Audio",
      category: "Product Design",
      year: "2024"
    },
    {
      image: "https://images.unsplash.com/photo-1611861317409-7dcc62856a8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGJvdHRsZSUyMG1pbmltYWwlMjBoYW5kfGVufDF8fHx8MTc3MDA0MDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Beauty Product Design",
      title: "Luxury Cosmetics",
      category: "Packaging Design",
      year: "2024"
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMG9mZmljZXxlbnwxfHx8fDE3NzAwNDAyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Corporate Branding",
      title: "Tech Startup",
      category: "Brand Strategy",
      year: "2025"
    },
    {
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDF8fHx8MTc3MDA0MDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Architecture Brand",
      title: "Modern Architecture",
      category: "Creative Direction",
      year: "2024"
    },
    {
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGFja2FnaW5nJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAwNDAyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Food & Beverage",
      title: "Artisan Food Co.",
      category: "Packaging Design",
      year: "2025"
    }
  ];

  return (
    <section id="projects" className="bg-zinc-950 py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <motion.p 
            className="text-orange-500 text-xs sm:text-sm font-medium mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Behind the Designs
          </motion.p>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 md:gap-8">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Shaping<br />Experiences That<br />Make Life Simpler
            </motion.h2>
            
            <motion.div 
              className="flex flex-col items-start lg:items-end gap-4 md:gap-6 w-full lg:w-auto"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-white/80 max-w-md lg:text-right">
                <p className="text-sm sm:text-base lg:text-lg mb-2">I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.</p>
                <p className="text-xs sm:text-sm text-white/60">Let's Build Something Meaningful Together</p>
              </div>
              
              <motion.button 
                className="bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full flex items-center gap-2 hover:bg-orange-600 transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index}
              className="group relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden bg-white/5 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
            >
              {/* Image with parallax effect */}
              <motion.img 
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700"
                whileHover={{ scale: 1.15 }}
              />
              
              {/* Overlay with gradient animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {/* Animated accent line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <motion.span 
                        className="text-orange-400 text-xs font-medium px-3 py-1 bg-orange-500/20 rounded-full backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.category}
                      </motion.span>
                      <span className="text-white/50 text-xs">•</span>
                      <span className="text-white/50 text-xs">{item.year}</span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                    <motion.button
                      className="flex items-center gap-2 text-white text-sm hover:text-orange-400 transition-colors group/btn"
                      whileHover={{ x: 5 }}
                    >
                      <span>View Project</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Corner accent */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="bg-white/5 border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}