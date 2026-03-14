import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const RunnerCard = ({ runner, challenge, tier }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 bg-[#1F2228] h-full min-h-[460px] group"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-[#16181D] to-[#252830] opacity-90 z-0"></div>
      
      {/* Orange Glow overlay simulating lighting */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FA6011]/20 rounded-full blur-[80px] pointer-events-none z-0"></div>

      <img 
           src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&auto=format&fit=crop&q=80" 
           alt="Runner Profile Athlete" 
           className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 ease-out" 
      />
           
      <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end text-white z-20 bg-gradient-to-t from-[#16181D] via-[#16181D]/80 to-transparent">
        <div className="flex justify-between items-end mb-4">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase drop-shadow-md leading-none">
               <span className="text-[#FA6011] font-bold text-sm tracking-widest block mb-2 uppercase">Runner Name</span>
               {runner}
            </h2>
            
            <button className="w-14 h-14 bg-[#FA6011] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(250,96,17,0.4)] hover:bg-[#E8550C] hover:scale-110 transition-transform flex-shrink-0">
               <Play size={20} fill="currentColor" className="ml-1" />
            </button>
        </div>
        
        <div className="flex flex-col gap-3 mb-8 w-full">
            <div className="flex justify-between items-center text-lg border-b border-white/10 pb-2">
                <span className="text-gray-400 font-medium">Tier</span>
                <span className="font-bold text-white tracking-wide uppercase">{tier}</span>
            </div>
            <div className="flex justify-between items-center text-lg border-b border-white/10 pb-2">
                <span className="text-gray-400 font-medium">Challenge</span>
                <span className="font-bold text-white tracking-wide uppercase">{challenge}</span>
            </div>
        </div>
        
        <div className="flex flex-col gap-3">
            <div className="w-full bg-[#20222B] text-center border border-white/5 rounded-xl py-3.5 backdrop-blur-md font-bold text-sm uppercase tracking-widest text-[#FA6011]">
                TOP 20% ATHLETE
            </div>
            <div className="w-full text-center py-3.5 font-bold text-sm tracking-widest text-white/50 uppercase cursor-pointer hover:text-white transition">
                View Full Profile
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RunnerCard;
