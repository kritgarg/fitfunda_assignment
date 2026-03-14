import React from 'react';
import { motion } from 'framer-motion';

import runnerData from './data/runnerData';

import RunnerCard from './components/RunnerCard';
import ProgressSection from './components/ProgressSection';
import WeeklyActivity from './components/WeeklyActivity';
import LeaderboardCard from './components/LeaderboardCard';

function App() {
  // Stagger animation setup
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen text-white bg-[#1A1C23] p-4 sm:p-8 lg:px-12 lg:py-8 font-sans overflow-x-clip relative">
      
      {/* Decorative large crossed X or background graphic vaguely like the reference */}
      <div className="absolute top-40 right-40 text-white/[0.02] text-[40rem] font-bold leading-none pointer-events-none select-none z-0">
         +
      </div>
      <div className="absolute bottom-10 left-20 text-white/[0.02] text-[30rem] font-bold leading-none pointer-events-none select-none z-0">
         X
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-[90rem] mx-auto py-10 relative z-10"
      >
        <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between mb-12 pb-6 border-b border-white/5 gap-8">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[4.5rem] font-black uppercase text-white leading-[1.1] whitespace-nowrap"
            >
              WELCOME BACK <br className="hidden xl:block"/> <span className="text-[#FA6011]">{runnerData.runner.split(' ')[0]}</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex gap-6 md:gap-10 items-end overflow-x-visible w-full xl:w-auto justify-start xl:justify-end">
                <div className="flex flex-col items-start min-w-[max-content]">
                  <span className="text-gray-400 font-bold text-xs tracking-widest uppercase mb-1">Total Completed</span>
                  <div className="flex items-start">
                     <span className="text-4xl md:text-5xl lg:text-[4rem] font-black leading-none tracking-tighter text-white">{runnerData.completed_distance}</span>
                     <span className="text-sm md:text-lg text-[#FA6011] font-bold ml-1 mt-1">KM</span>
                  </div>
                </div>
                
                <div className="w-px h-10 md:h-12 bg-white/10 mb-1 lg:mb-2"></div>

                <div className="flex flex-col items-start min-w-[max-content]">
                  <span className="text-gray-400 font-bold text-xs tracking-widest uppercase mb-1">Weekly Output</span>
                  <div className="flex items-start">
                     <span className="text-4xl md:text-5xl lg:text-[4rem] font-black leading-none tracking-tighter text-white">{runnerData.weekly_runs.reduce((a,b)=>a+b,0)}</span>
                     <span className="text-sm md:text-lg text-[#FA6011] font-bold ml-1 mt-1">KM</span>
                  </div>
                </div>

                <div className="w-px h-10 md:h-12 bg-white/10 mb-1 lg:mb-2"></div>

                <div className="flex flex-col items-start min-w-[max-content]">
                  <span className="text-[#FA6011] font-bold text-xs tracking-widest uppercase mb-1">National Rank</span>
                  <div className="flex items-start">
                     <span className="text-xl md:text-2xl font-black text-[#FA6011] mr-1 md:mt-2">#</span>
                     <span className="text-4xl md:text-5xl lg:text-[4rem] font-black leading-none tracking-tighter text-white">{runnerData.rank}</span>
                  </div>
                </div>
            </motion.div>
        </div>

        <main className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full items-stretch relative z-10">
          
          <motion.section variants={itemVariants} className="flex flex-col h-[500px] xl:h-auto">
            <RunnerCard 
              runner={runnerData.runner} 
              challenge={runnerData.challenge} 
              tier={runnerData.tier} 
            />
          </motion.section>

          <section className="flex flex-col gap-6 h-auto xl:h-auto">
             <motion.div variants={itemVariants} className="flex-1 min-h-[300px]">
               <ProgressSection 
                completed={runnerData.completed_distance} 
                target={runnerData.target_distance} 
              />
             </motion.div>
             <motion.div variants={itemVariants} className="flex-1 min-h-[350px]">
               <WeeklyActivity 
                weekly_runs={runnerData.weekly_runs} 
              />
             </motion.div>
          </section>

          <motion.aside variants={itemVariants} className="flex flex-col h-[500px] xl:h-auto">
            <LeaderboardCard rank={runnerData.rank} />
          </motion.aside>

        </main>
      </motion.div>
      
      {/* Scrollbar styling injected here for simplicity */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(250,96,17,0.5); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(250,96,17,0.8); }
      `}</style>
    </div>
  );
}

export default App;
