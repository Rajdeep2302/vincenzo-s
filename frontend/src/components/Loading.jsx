import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF7EB]">
      <div className="relative flex flex-col items-center">
        {/* Wrapper for the bouncing parts (Scoop + Cherry) */}
        <div className="relative z-10">
          {/* Cherry */}
          <div className="absolute -top-3 left-1/2 z-20 h-4 w-4 -translate-x-1/2 rounded-full bg-red-500 shadow-sm">
            {/* Cherry Reflection */}
            <div className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-white opacity-40"></div>
            {/* Cherry Stem */}
            <div className="absolute bottom-1/2 left-1/2 -z-10 h-3 w-[2px] -translate-x-1/2 -translate-y-[2px] rotate-12 rounded-t-lg bg-lime-700"></div>
          </div>

          {/* Scoop */}
          <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#ffc3be] via-[#ffcfcb] to-[#ff9a9e] shadow-inner">
            {/* Highlight */}
            <div className="absolute top-2 left-2 h-4 w-8 -rotate-12 rounded-full bg-white opacity-20 blur-[1px]"></div>

            {/* Sprinkles (Small decorative dots) */}
            <div className="absolute top-4 right-3 h-1.5 w-1.5 rounded-full bg-[#ffeaec] opacity-80"></div>
            <div className="absolute bottom-4 left-4 h-1.5 w-1.5 rounded-full bg-[#fff0f3] opacity-60"></div>
            <div className="absolute bottom-5 right-5 h-1 w-1 rounded-full bg-white opacity-50"></div>
          </div>
          
        </div>

        {/* Cone */}
        <div className="z-0 -mt-2 filter drop-shadow-sm">
          <div className="relative h-0 w-0 border-l-[22px] border-r-[22px] border-t-[55px] border-l-transparent border-r-transparent border-t-[#e6cbb4]">
            {/* Waffle Pattern Hint */}
            <div className="absolute -top-[55px] -left-[22px] w-[44px] h-[10px] bg-black opacity-[0.03] rounded-[50%]"></div>
          </div>
        </div>

        {/* Shadow on floor */}
        <div className="animate-shadow-pulse mt-4 h-2 w-14 rounded-[100%] bg-[#d4c5a9] opacity-40 blur-[1px]"></div>
      </div>

      <div className="animate-pulse-text mt-8 text-sm font-bold tracking-[0.4em] text-[#d4b08c]">
        LOADING
      </div>

      <style>{`
        @keyframes bounce-custom {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(0.95); }
        }
        @keyframes shadow-pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(0.8); opacity: 0.2; }
        }
        @keyframes pulse-text {
             0%, 100% { opacity: 1; }
             50% { opacity: 0.6; }
        }
        .animate-bounce-custom {
          animation: bounce-custom 1.2s infinite cubic-bezier(0.45, 0, 0.55, 1);
        }
        .animate-shadow-pulse {
          animation: shadow-pulse 1.2s infinite cubic-bezier(0.45, 0, 0.55, 1);
        }
        .animate-pulse-text {
            animation: pulse-text 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Loading;