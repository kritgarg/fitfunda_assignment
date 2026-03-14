import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Zap, Medal } from 'lucide-react';

const LeaderboardCard = ({ rank }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-[2.5rem] bg-white/70 backdrop-blur-3xl shadow-sm border border-black/5 p-8 w-full h-full min-h-[460px] flex flex-col relative overflow-hidden text-[#1A1A1A]"
    >
      <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-white to-transparent opacity-60"></div>

      <div className="flex justify-between items-end mb-8 mt-2 pb-6 border-b border-black/5">
        <div>
          <h3 className="text-[1.3rem] font-medium text-[#1A1A1A] mb-1">Leaderboard</h3>
          <p className="text-sm text-gray-500">Current Standings</p>
        </div>
        <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm">
            <Trophy size={20} className="text-[#FACC15]" />
        </div>
      </div>

      <div className="flex flex-col gap-6 flex-1 text-[#1A1A1A]">
         <div className="bg-white rounded-[1.5rem] p-6 flex flex-col items-center justify-center border border-gray-100 shadow-sm relative overflow-hidden text-center">
             <span className="absolute text-[8rem] font-bold text-gray-50 -right-6 -bottom-10 pointer-events-none">
                 {rank}
             </span>
             
             <p className="text-gray-400 font-medium text-sm mb-2 uppercase tracking-widest relative z-10">Your Rank</p>
             <div className="flex items-start gap-1 relative z-10">
                 <span className="text-3xl text-[#FACC15] font-light mt-1">#</span>
                 <span className="text-[5rem] font-light tracking-tighter text-[#1A1A1A] leading-none">
                     {rank}
                 </span>
             </div>
         </div>
         
         <div className="mt-4 flex flex-col gap-4">
             <div className="flex items-center justify-between p-4 bg-white rounded-[1.25rem] border border-gray-100 hover:bg-gray-50 transition drop-shadow-sm group">
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-[#FACC15]/20 flex items-center justify-center text-[#FACC15]">
                        <Medal size={18} />
                    </div>
                    <div>
                        <p className="text-[13px] text-gray-500 font-medium tracking-wide">Top Runner Distance</p>
                        <p className="font-semibold text-[#1A1A1A] text-[17px] mt-0.5 group-hover:text-[#eab308] transition">124 KM</p>
                    </div>
                </div>
             </div>

             <div className="flex items-center justify-between p-4 bg-white rounded-[1.25rem] border border-gray-100 hover:bg-gray-50 transition drop-shadow-sm group">
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                        <Zap size={18} />
                    </div>
                    <div>
                        <p className="text-[13px] text-gray-500 font-medium tracking-wide">Distance to next rank</p>
                        <p className="font-semibold text-[#1A1A1A] text-[17px] mt-0.5">3 KM</p>
                    </div>
                </div>
             </div>
         </div>
      </div>
      
    </motion.div>
  );
};

export default LeaderboardCard;
