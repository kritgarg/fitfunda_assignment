import React from 'react';
import { motion } from 'framer-motion';

import runnerData from './data/runnerData';

import RunnerCard from './components/RunnerCard';
import ProgressSection from './components/ProgressSection';
import WeeklyActivity from './components/WeeklyActivity';
import LeaderboardCard from './components/LeaderboardCard';

function App() {
  return (
    <div className="min-h-screen text-[#1A1A1A] p-4 sm:p-8 lg:px-12 lg:py-8 font-sans overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[90rem] mx-auto py-10"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 gap-8">
          <div>
            <h1 className="text-5xl lg:text-[4rem] font-light tracking-tight mb-4 leading-tight">
              Welcome back, <span className="font-semibold">{runnerData.runner.split(' ')[0]}</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
              <span className="px-5 py-2.5 bg-[#2B2B2B] text-white rounded-full shadow-sm">Challenge: {runnerData.challenge}</span>
              <span className="px-5 py-2.5 bg-[#FACC15] text-[#1A1A1A] rounded-full shadow-sm border border-yellow-400/20">Target: {runnerData.target_distance} KM</span>
            </div>
          </div>
          
          <div className="flex gap-10 items-end">
            <div className="flex flex-col items-end">
              <div className="flex items-start">
                 <span className="text-6xl lg:text-[5rem] font-light leading-none tracking-tighter text-[#1A1A1A]">{runnerData.completed_distance}</span>
                 <span className="text-xl text-gray-400 font-semibold ml-1">KM</span>
              </div>
              <span className="text-gray-500 font-medium text-sm tracking-wide mt-2">Completed</span>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="flex items-start">
                 <span className="text-6xl lg:text-[5rem] font-light leading-none tracking-tighter text-[#1A1A1A]">{runnerData.weekly_runs.reduce((a,b)=>a+b,0)}</span>
                 <span className="text-xl text-gray-400 font-semibold ml-1">KM</span>
              </div>
              <span className="text-gray-500 font-medium text-sm tracking-wide mt-2">This Week</span>
            </div>

            <div className="flex flex-col items-end">
              <div className="flex items-start">
                 <span className="text-2xl font-light text-[#1A1A1A] mr-1 mt-2">#</span>
                 <span className="text-6xl lg:text-[5rem] font-light leading-none tracking-tighter text-[#1A1A1A]">{runnerData.rank}</span>
              </div>
              <span className="text-gray-500 font-medium text-sm tracking-wide mt-2">Current Rank</span>
            </div>
          </div>
        </div>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-stretch">
          
          <section className="flex flex-col h-[500px] lg:h-auto">
            <RunnerCard 
              runner={runnerData.runner} 
              challenge={runnerData.challenge} 
              tier={runnerData.tier} 
            />
          </section>

          <section className="flex flex-col gap-6 h-[500px] lg:h-auto">
             <div className="flex-1">
               <ProgressSection 
                completed={runnerData.completed_distance} 
                target={runnerData.target_distance} 
              />
             </div>
             <div className="flex-1">
               <WeeklyActivity 
                weekly_runs={runnerData.weekly_runs} 
              />
             </div>
          </section>

          <aside className="flex flex-col h-[500px] lg:h-auto">
            <LeaderboardCard rank={runnerData.rank} />
          </aside>

        </main>
      </motion.div>
    </div>
  );
}

export default App;
