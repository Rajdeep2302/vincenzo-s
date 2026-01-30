import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF7EB]">
      <div className="relative mb-4">
        {/* Ice Cream Scoop */}
        <div className="absolute left-1/2 -top-6 h-12 w-12 -translate-x-1/2 rounded-full bg-[#FFB7B2] shadow-sm animate-bounce-scoop z-10">
          <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#ffeaec] opacity-60"></div>
        </div>

        {/* Ice Cream Cone */}
        <div className="h-0 w-0 border-l-[20px] border-r-[20px] border-t-[40px] border-l-transparent border-r-transparent border-t-[#E2C2AA] relative">
          {/* Cone texture details could go here, but simple is better for a loader */}
        </div>
      </div>

      <div className="mt-8 text-xl font-medium tracking-[0.2em] text-[#E2C2AA] animate-pulse">
        LOADING
      </div>

      <style>{`
        @keyframes bounce-scoop {
          0%, 100% { transform: translate(-50%, -5px) scale(0.95); }
          50% { transform: translate(-50%, -15px) scale(1.05); }
        }
        .animate-bounce-scoop {
          animation: bounce-scoop 1.2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Loading;