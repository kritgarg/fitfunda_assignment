import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ArrowUpRight, TrendingUp, Target, MapPin } from 'lucide-react';

const ProgressSection = ({ completed, target }) => {
  const [progress, setProgress] = useState(0);
  const percentage = Math.round((completed / target) * 100);
  const remaining = target - completed;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(percentage);
    }, 300);
    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="rounded-[2rem] bg-[#1F2228] shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/5 p-8 flex flex-col h-full relative overflow-hidden group"
    >
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FA6011]/5 rounded-full blur-[100px] pointer-events-none z-0 group-hover:bg-[#FA6011]/10 transition-colors duration-700"></div>

      <div className="w-full flex justify-between items-start mb-8 relative z-10">
        <div>
          <h3 className="text-2xl font-black uppercase text-white tracking-widest leading-none mb-2">Metrics</h3>
          <p className="text-gray-500 font-bold tracking-widest text-xs uppercase">Goal vs Completed</p>
        </div>
        <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-[#FA6011]/20 hover:border-[#FA6011]/40 hover:text-[#FA6011] transition-all text-white/50">
          <ArrowUpRight size={20} strokeWidth={2} />
        </button>
      </div>

      <div className="flex-1 flex flex-col sm:flex-row items-center justify-between gap-10 h-full relative z-10">
        <div className="w-36 h-36 sm:w-44 sm:h-44 relative flex-shrink-0 drop-shadow-[0_0_15px_rgba(250,96,17,0.3)]">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            strokeWidth={8}
            styles={buildStyles({
              pathColor: '#FA6011',
              textColor: '#FFFFFF',
              trailColor: 'rgba(255, 255, 255, 0.05)',
              pathTransitionDuration: 1.5,
              strokeLinecap: 'butt' // Boxy, bold feeling
            })}
          />
        </div>

        <div className="flex flex-col gap-6 w-full h-full justify-center">
            <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <div className="flex items-center gap-3">
                    <Target size={18} className="text-[#FA6011]" />
                    <span className="text-gray-400 font-bold text-[13px] tracking-widest uppercase">Target Base</span>
                </div>
                <span className="font-black text-white text-2xl tracking-tighter">{target} <span className="text-[#FA6011] text-sm ml-1">KM</span></span>
            </div>

            <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <div className="flex items-center gap-3">
                    <TrendingUp size={18} className="text-[#FA6011]" />
                    <span className="text-gray-400 font-bold text-[13px] tracking-widest uppercase">Completed</span>
                </div>
                <span className="font-black text-white text-2xl tracking-tighter">{completed} <span className="text-[#FA6011] text-sm ml-1">KM</span></span>
            </div>

            <div className="flex justify-between items-center pb-1">
                <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-white/30" />
                    <span className="text-gray-500 font-bold text-[13px] tracking-widest uppercase">Remaining</span>
                </div>
                <span className="font-black text-white/40 text-2xl tracking-tighter">{remaining} <span className="text-white/20 text-sm ml-1">KM</span></span>
            </div>
            
            <div className="w-full bg-black/40 h-2 mt-4 overflow-hidden shadow-inner flex">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${percentage}%` }}
                 transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                 className="bg-gradient-to-r from-[#FA6011] to-[#FF8A4C] h-full relative"
               >
                 {/* Internal glow dot for speed simulation */}
                 <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/40 blur-[4px]"></div>
               </motion.div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressSection;
