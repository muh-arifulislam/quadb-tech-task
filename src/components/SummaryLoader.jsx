import React from "react";

const SummaryLoader = () => {
  return (
    <div className="lg:m-[50px] m-[20px] shadow rounded-md p-4">
      <div className="animate-pulse flex lg:flex-row md:flex-row flex-col  items-center gap-[30px]">
        <div className="rounded-[10px] bg-slate-200 lg:w-[30%] w-[100%] h-[300px] "></div>
        <div className="flex-1 space-y-6 py-1 lg:w-auto md:w-auto w-full">
          <div className="h-10 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-5 bg-slate-200 rounded col-span-2"></div>
              <div className="h-5 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
            <div className="h-10 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryLoader;
