import React from 'react';
import { motion } from 'framer-motion';

const RunnerCard = ({ runner, challenge, tier }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-[2.5rem] overflow-hidden shadow-md border border-black/5 bg-[#D5CFC9] h-full min-h-[460px] "
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1E2024] to-[#2B2B2B] opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
      
      <img 
           src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop&q=80" 
           alt="Runner Profile placeholder" 
           className="absolute inset-0 w-full h-full object-cover z-0" 
      />
           
      <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end text-white z-20">
        <h2 className="text-4xl font-bold tracking-tight mb-4 drop-shadow-md">
           <span className="text-white/80 font-medium text-lg block mb-1">Runner Name:</span>
           {runner}
        </h2>
        
        <div className="flex flex-col gap-2 mb-6">
            <p className="text-white/90 font-medium text-lg">
                <span className="text-white/70">Tier: </span><span className="font-bold">{tier}</span>
            </p>
            <p className="text-white/90 font-medium text-lg">
                <span className="text-white/70">Challenge: </span><span className="font-bold">{challenge}</span>
            </p>
        </div>
        
        <div className="flex items-center gap-4">
            <span className="border border-white/20 rounded-[1rem] px-6 py-3 bg-black/40 backdrop-blur-md font-bold text-sm shadow-sm hover:bg-black/50 transition tracking-wide">
                TOP 20%
            </span>
            <span className="border border-[#FACC15]/40 rounded-[1rem] px-6 py-3 bg-[#FACC15]/20 backdrop-blur-md font-bold text-[#FACC15] text-sm shadow-sm tracking-wide">
                {challenge} Rank
            </span>
        </div>
      </div>
    </motion.div>
  );
};

export default RunnerCard;
