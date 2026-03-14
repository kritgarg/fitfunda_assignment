import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap, Medal } from 'lucide-react';

const LeaderboardCard = ({ rank }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="rounded-[2rem] bg-[#1F2228] shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/5 p-8 w-full h-full min-h-[460px] flex flex-col relative overflow-hidden group text-white"
    >
      {/* Decorative large noise/glow background for sport impact */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FA6011] to-transparent opacity-80 z-20"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#FA6011]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Faded background cross replicating the website theme */}
      <div className="text-[30rem] font-bold text-white/[0.015] leading-none absolute -bottom-10 -right-20 pointer-events-none select-none z-0 group-hover:text-white/[0.03] transition-colors duration-700">
         +
      </div>

      <div className="flex justify-between items-start mb-8 pb-6 border-b border-white/10 relative z-10">
        <div>
           <h3 className="text-2xl font-black uppercase tracking-widest leading-none mb-2">Leaderboard</h3>
           <p className="text-gray-500 font-bold tracking-widest text-xs uppercase">National Standings</p>
        </div>
        <div className="w-12 h-12 rounded-xl border border-white/5 bg-[#FA6011]/10 flex items-center justify-center shadow-[0_0_15px_rgba(250,96,17,0.2)]">
            <Trophy size={22} className="text-[#FA6011]" />
        </div>
      </div>

      <div className="flex flex-col gap-8 flex-1 relative z-10 pt-2">
         {/* Rank Showcase with brutalist style */}
         <div className="bg-[#16181D] rounded-2xl p-8 flex flex-col items-center justify-center border border-white/5 shadow-inner relative overflow-hidden text-center group-hover:border-[#FA6011]/20 transition-colors">
             {/* Huge background rank watermark */}
             <span className="absolute text-[9rem] font-black text-white/5 -bottom-14 left-1/2 -translate-x-1/2 pointer-events-none tracking-tighter mix-blend-overlay">
                 {rank}
             </span>
             
             <p className="text-[#FA6011] font-bold text-[11px] mb-2 uppercase tracking-[0.3em] relative z-10 drop-shadow-[0_0_8px_rgba(250,96,17,0.5)]">Your National Rank</p>
             <div className="flex items-start gap-1 relative z-10">
                 <span className="text-4xl text-[#FA6011] font-black mt-1">#</span>
                 <span className="text-[6rem] font-black tracking-tighter text-white leading-none drop-shadow-2xl">
                     {rank}
                 </span>
             </div>
         </div>
         
         <div className="mt-2 flex flex-col gap-4">
             <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-[#FA6011]/10 hover:border-[#FA6011]/30 transition-all shadow-md group/stat">
                <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover/stat:bg-[#FA6011]/20 group-hover/stat:text-[#FA6011] transition-colors">
                        <Medal size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                        <p className="text-[11px] text-gray-400 font-bold tracking-widest uppercase mb-1">Top Runner</p>
                        <p className="font-black text-white text-xl leading-none">124 <span className="text-sm font-bold text-gray-500">KM</span></p>
                    </div>
                </div>
             </div>

             <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-[#FA6011]/10 hover:border-[#FA6011]/30 transition-all shadow-md group/stat">
                <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover/stat:bg-[#FA6011]/20 group-hover/stat:text-[#FA6011] transition-colors">
                        <Zap size={20} className="fill-current" />
                    </div>
                    <div>
                        <p className="text-[11px] text-[#FA6011] font-bold tracking-widest uppercase mb-1 drop-shadow-[0_0_5px_rgba(250,96,17,0.4)]">Next Rank Req</p>
                        <p className="font-black text-white text-xl leading-none">3 <span className="text-sm font-bold text-gray-500">KM</span></p>
                    </div>
                </div>
             </div>
         </div>
      </div>
      
    </motion.div>
  );
};

export default LeaderboardCard;
