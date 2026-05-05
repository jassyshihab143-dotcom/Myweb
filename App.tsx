/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { Info, Terminal, Cpu, Share2, CornerRightDown } from "lucide-react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div id="app-root" className="bg-[#050505] min-h-screen text-white font-sans selection:bg-red-500/30">
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-red-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-8 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto cursor-pointer group">
          <div className="w-8 h-8 border border-red-500 flex items-center justify-center bg-red-500/5 group-hover:bg-red-500 transition-colors duration-300">
            <span className="text-[10px] font-bold text-white tracking-widest leading-none mt-0.5">MAL</span>
          </div>
          <span className="text-[10px] tracking-[0.4em] text-white/60 uppercase group-hover:text-white transition-colors">Neural_Link</span>
        </div>
        
        <div className="hidden md:flex gap-8 pointer-events-auto">
          {['Access', 'Data', 'System'].map((item) => (
             <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] tracking-[0.4em] uppercase text-white/40 hover:text-red-500 transition-colors">
               [{item}]
             </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="access" className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Atmospheric Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600 rounded-full blur-[140px]" />
          <div className="absolute inset-0 opacity-30" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        {/* UI Frame */}
        <div className="absolute inset-6 md:inset-12 border border-white/5 pointer-events-none">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/20" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500" />
        </div>

        <motion.div 
          className="relative z-10 flex flex-col items-center px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute -inset-4 bg-red-600/10 blur-2xl rounded-full" />
          <h1 className="text-7xl md:text-9xl lg:text-[160px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-red-500/80 filter drop-shadow-[0_0_30px_rgba(239,68,68,0.3)] text-center">
            പോടാ പട്ടി
          </h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center gap-6"
          >
            <div className="h-[1px] w-16 bg-white/20" />
            <span className="text-[10px] md:text-xs tracking-[1em] text-white/50 font-light uppercase">Termination Signal Detected</span>
            <div className="h-[1px] w-16 bg-white/20" />
          </motion.div>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 flex flex-col items-center gap-3"
        >
          <span className="text-[8px] tracking-[0.4em] text-white/20 uppercase">Initiate Deep Scan</span>
          <CornerRightDown className="w-4 h-4 text-red-500 animate-bounce" />
        </motion.div>
      </section>

      {/* Content Section: Data */}
      <section id="data" className="py-32 px-6 md:px-24 max-w-7xl mx-auto relative cursor-default">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-5 h-5 text-red-500" />
              <span className="text-xs tracking-[0.4em] text-red-500 uppercase font-bold">Analysis_Report_01</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent mb-8">
              Linguistic Breakdown
            </h2>
            <p className="text-white/60 leading-relaxed text-lg mb-8 font-light">
              In the Malayalam dialect, this phrase operates as a high-density expressive unit. 
              Translating literally as "Go away, dog," its true power lies in its modularity—functioning 
              as a system reset during conversational overflows or as a definitive termination signal.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Complexity', value: 'Level 04' },
                { label: 'Intent', value: 'System_Termination' },
                { label: 'Origin', value: 'Sub-Continent / Southern-Region' }
              ].map((spec) => (
                <div key={spec.label} className="border-l border-white/10 pl-6 py-2">
                  <span className="text-[9px] tracking-widest uppercase text-white/30 block mb-1">{spec.label}</span>
                  <span className="text-xs tracking-widest uppercase text-white/70 font-mono italic">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="aspect-square bg-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center group overflow-hidden relative">
              <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[80%] h-[80%] border border-dashed border-white/10 rounded-full"
              />
              <Cpu className="w-24 h-24 text-red-500 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-8 text-[9px] tracking-[0.5em] text-white/20 uppercase">Neural Processing Unit Active</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section: System */}
      <section id="system" className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-24">
            <Info className="w-8 h-8 text-white/20 mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4 uppercase">Infrastructure Protocol</h3>
            <div className="h-[1px] w-24 bg-red-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Direct Transmission", desc: "No relay required. The expression reaches the recipient with 0ms latency in direct verbal mode.", icon: "⚡" },
              { title: "Emotional Encryption", desc: "Native speakers utilize unique tonal variants to encode multiple levels of intensity.", icon: "🔐" },
              { title: "Universal Ignored", desc: "The phrase acts as a recursive block, preventing further conversational processing.", icon: "🚫" }
            ].map((card, i) => (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-red-500/30 transition-all group"
              >
                <div className="text-3xl mb-6">{card.icon}</div>
                <h4 className="text-lg font-bold mb-4 uppercase tracking-wider group-hover:text-red-500 transition-colors">{card.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-white/10 to-transparent" />
        
        <div className="flex justify-center gap-12 mb-12">
           <Share2 className="w-5 h-5 text-white/20 hover:text-red-500 cursor-pointer transition-colors" />
           <div className="h-5 w-px bg-white/10" />
           <Terminal className="w-5 h-5 text-white/20 hover:text-red-500 cursor-pointer transition-colors" />
        </div>

        <p className="text-[10px] tracking-[0.6em] text-white/30 uppercase mb-4">Expressive_Systems_v1.0.4</p>
        <p className="text-[9px] tracking-[0.2em] text-white/10 uppercase">© 2026 Malayalam_Neural_Network • All Rights Ignored</p>
        
        {/* Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden" 
             style={{ 
               background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
               backgroundSize: '100% 4px, 3px 100%' 
             }} />
      </footer>
    </div>
  );
}


