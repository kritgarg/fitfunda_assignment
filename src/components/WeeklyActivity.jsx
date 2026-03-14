import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const distance = payload[0].value;
    return (
      <div className="bg-[#16181D] text-white p-4 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.8)] border border-[#FA6011]/30 text-sm font-bold z-50 transform uppercase">
        <p className="text-gray-400 mb-1 leading-none tracking-widest">{label}</p>
        <p className="font-black text-xl leading-none text-[#FA6011]">{distance === 0 ? 'REST' : `${distance} KM`}</p>
      </div>
    );
  }
  return null;
};

const WeeklyActivity = ({ weekly_runs }) => {
  const data = [
    { day: 'MON', distance: weekly_runs[0] || 0 }, 
    { day: 'TUE', distance: weekly_runs[1] || 0 },
    { day: 'WED', distance: weekly_runs[2] || 0 },
    { day: 'THU', distance: weekly_runs[3] || 0 },
    { day: 'FRI', distance: weekly_runs[4] || 0 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="rounded-[2rem] bg-[#1F2228] shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/5 p-8 w-full h-full min-h-[350px] flex flex-col relative overflow-hidden group"
    >
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#FA6011]/5 rounded-full blur-[100px] pointer-events-none z-0 group-hover:bg-[#FA6011]/10 transition-colors duration-700"></div>

      <div className="flex justify-between items-start mb-10 relative z-10">
        <div>
           <h3 className="text-2xl font-black uppercase text-white tracking-widest leading-none mb-2">Weekly Activity</h3>
           <p className="text-gray-500 font-bold tracking-widest text-xs uppercase">Your Run Data</p>
        </div>
        <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-[#FA6011]/20 hover:border-[#FA6011]/40 hover:text-[#FA6011] transition-all text-white/50">
          <ArrowUpRight size={20} strokeWidth={2} />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col lg:flex-row gap-10 items-end justify-between relative z-10 w-full min-h-[220px]">
        
        {/* Dynamic List */}
        <div className="hidden sm:flex flex-col gap-5 flex-none min-w-[120px] w-full lg:w-32 mb-4 lg:mb-0">
           {data.map((item, idx) => (
             <div key={idx} className="flex justify-between items-end border-b border-white/5 pb-2">
                 <span className="text-gray-400 font-bold tracking-wider text-xs">{item.day}</span>
                 <span className={`font-black tracking-tighter text-lg leading-none ${item.distance === 0 ? 'text-white/20' : 'text-white'}`}>
                     {item.distance === 0 ? 'REST' : `${item.distance}`} {item.distance > 0 && <span className="text-[#FA6011] text-[10px] ml-0.5 tracking-widest">KM</span>}
                 </span>
             </div>
           ))}
        </div>

        {/* Minimalist Bar Chart Setup */}
        <div className="w-full h-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                barSize={16}
            >
                <XAxis 
                dataKey="day" 
                tick={{ fill: '#6B7280', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em' }} 
                axisLine={false} 
                tickLine={false} 
                dy={20}
                />
                <YAxis hide={true} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                
                {/* 0 Radius for boxy sporty look */}
                <Bar 
                dataKey="distance" 
                radius={[4, 4, 0, 0]}
                >
                {data.map((entry, index) => (
                    <Cell 
                    key={`cell-${index}`} 
                    fill={entry.distance === 0 ? '#ffffff0a' : (entry.distance > 6 ? '#FA6011' : '#E8550C80')} 
                    className="transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(250,96,17,0.7)]"
                    />
                ))}
                </Bar>
            </BarChart>
            </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};

export default WeeklyActivity;
