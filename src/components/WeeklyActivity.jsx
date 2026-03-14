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
      <div className="bg-white text-[#1a1a1a] p-3 rounded-2xl shadow-xl border border-black/5 text-sm font-medium z-50">
        <p className="text-gray-400 mb-1 leading-none">{label}</p>
        <p className="font-bold text-lg leading-none">{distance === 0 ? 'Rest Day' : `${distance} KM Run`}</p>
      </div>
    );
  }
  return null;
};

const WeeklyActivity = ({ weekly_runs }) => {
  const data = [
    { day: 'Mon', distance: weekly_runs[0] || 0 }, 
    { day: 'Tue', distance: weekly_runs[1] || 0 },
    { day: 'Wed', distance: weekly_runs[2] || 0 },
    { day: 'Thu', distance: weekly_runs[3] || 0 },
    { day: 'Fri', distance: weekly_runs[4] || 0 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-[2.5rem] bg-white/70 backdrop-blur-3xl shadow-sm border border-black/5 p-8 w-full h-full min-h-[250px] flex flex-col relative"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
           <h3 className="text-[1.3rem] font-medium text-[#1A1A1A] mb-3">Weekly Activity Summary</h3>
           <div className="flex items-end gap-2 text-gray-500 text-sm">
             <span className="text-[2.5rem] font-light text-[#1a1a1a] leading-[0.8] tracking-tight">{data.reduce((a,b)=>a+b.distance,0)} KM</span>
             <span className="mb-0.5 ml-1 font-medium">This Week</span>
           </div>
        </div>
        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition drop-shadow-sm bg-white top-8 right-8 absolute">
          <ArrowUpRight size={18} strokeWidth={1.5} className="text-gray-500" />
        </button>
      </div>
      
      <div className="flex-1 mt-6 flex gap-6 items-end justify-between">
        <div className="hidden sm:flex flex-col gap-2.5 flex-none min-w-[120px]">
           {data.map((item, idx) => (
             <div key={idx} className="flex justify-between text-[13px] font-medium border-b border-black/5 pb-1">
                 <span className="text-gray-500">{item.day}</span>
                 <span className={item.distance === 0 ? 'text-gray-400' : 'text-[#1A1A1A] font-bold'}>
                     {item.distance === 0 ? 'Rest' : `${item.distance} KM`}
                 </span>
             </div>
           ))}
        </div>

        <div className="w-full h-full min-h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                barSize={12}
            >
                <XAxis 
                dataKey="day" 
                tick={{ fill: '#A3A3A3', fontSize: 12, fontWeight: 500 }} 
                axisLine={false} 
                tickLine={false} 
                dy={15}
                />
                <YAxis hide={true} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                
                <Bar 
                dataKey="distance" 
                radius={[20, 20, 20, 20]}
                >
                {data.map((entry, index) => (
                    <Cell 
                    key={`cell-${index}`} 
                    fill={entry.distance === 0 ? '#E5E7EB' : (entry.distance > 6 ? '#FACC15' : '#2A2A2A')} 
                    className="transition duration-300 hover:opacity-80"
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
