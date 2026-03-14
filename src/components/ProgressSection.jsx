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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-[2.5rem] bg-white/70 backdrop-blur-3xl shadow-sm border border-black/5 p-8 flex flex-col h-full relative"
    >
      <div className="w-full flex justify-between items-start mb-6">
        <div>
          <h3 className="text-[1.3rem] font-medium text-[#1A1A1A]">Progress Metrics</h3>
          <p className="text-gray-500 text-sm mt-1">Goal vs Completed</p>
        </div>
        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition drop-shadow-sm bg-white">
          <ArrowUpRight size={18} strokeWidth={1.5} className="text-gray-500" />
        </button>
      </div>

      <div className="flex-1 flex flex-col sm:flex-row items-center justify-between gap-8 h-full">
        <div className="w-32 h-32 sm:w-40 sm:h-40 relative flex-shrink-0">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            strokeWidth={10}
            styles={buildStyles({
              pathColor: '#FACC15',
              textColor: '#1A1A1A',
              trailColor: '#F3F4F6',
              pathTransitionDuration: 1.5,
              strokeLinecap: 'butt'
            })}
          />
        </div>

        <div className="flex flex-col gap-4 w-full h-full justify-center">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <Target size={16} className="text-gray-400" />
                    <span className="text-gray-500 font-medium text-sm">Target Distance</span>
                </div>
                <span className="font-semibold text-[#1A1A1A] text-lg">{target} KM</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-[#FACC15]" />
                    <span className="text-gray-500 font-medium text-sm">Completed</span>
                </div>
                <span className="font-semibold text-[#1A1A1A] text-lg">{completed} KM</span>
            </div>

            <div className="flex justify-between items-center py-2">
                <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="text-gray-500 font-medium text-sm">Remaining</span>
                </div>
                <span className="font-semibold text-gray-400 text-lg">{remaining} KM</span>
            </div>
            
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-2">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${percentage}%` }}
                 transition={{ duration: 1.5, delay: 0.2 }}
                 className="bg-[#1A1A1A] h-full rounded-full"
               />
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressSection;
