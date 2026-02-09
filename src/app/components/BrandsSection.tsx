import { motion } from 'motion/react';

export function BrandsSection() {
  const brands = [
    { image: "https://images.unsplash.com/photo-1763296840082-cac05bc18337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ28lMjBtaW5pbWFsJTIwZGVzaWdufGVufDF8fHx8MTc3MDIxMDkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", name: "Brand 1" },
    { image: "https://images.unsplash.com/photo-1695390838893-e11defdef98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRlc2lnbiUyMHBhdHRlcm4lMjBtaW5pbWFsfGVufDF8fHx8MTc3MDIxMDkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", name: "Brand 2" },
    { image: "https://images.unsplash.com/photo-1763296840082-cac05bc18337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ28lMjBtaW5pbWFsJTIwZGVzaWdufGVufDF8fHx8MTc3MDIxMDkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", name: "Brand 3" },
    { image: "https://images.unsplash.com/photo-1695390838893-e11defdef98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRlc2lnbiUyMHBhdHRlcm4lMjBtaW5pbWFsfGVufDF8fHx8MTc3MDIxMDkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", name: "Brand 4" },
    { image: "https://images.unsplash.com/photo-1763296840082-cac05bc18337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ28lMjBtaW5pbWFsJTIwZGVzaWdufGVufDF8fHx8MTc3MDIxMDkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", name: "Brand 5" },
    { image: "https://images.unsplash.com/photo-1695390838893-e11defdef98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRlc2lnbiUyMHBhdHRlcm4lMjBtaW5pbWFsfGVufDF8fHx8MTc3MDIxMDkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", name: "Brand 6" }
  ];

  return (
    <section className="bg-zinc-950 py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Multiple animated backgrounds */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute left-0 top-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Decorative line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
          <motion.div 
            className="text-white/60 text-xs sm:text-sm whitespace-nowrap relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="block mb-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              I'm familiar with this
            </motion.span>
            <motion.span
              className="block font-bold text-lg text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Tools
            </motion.span>
            
            {/* Decorative accent */}
            <motion.div
              className="mt-2 w-12 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 flex-1 w-full">
            {brands.map((brand, index) => (
              <motion.div 
                key={brand.name}
                className="flex flex-col items-center gap-3 text-white group cursor-pointer"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-orange-500/50 flex items-center justify-center overflow-hidden relative transition-all"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/20 group-hover:to-pink-500/20 transition-all duration-500"
                  />
                  
                  <img 
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  />
                </motion.div>
                <motion.span 
                  className="text-xs sm:text-sm font-medium text-center group-hover:text-orange-400 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {brand.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  );
}