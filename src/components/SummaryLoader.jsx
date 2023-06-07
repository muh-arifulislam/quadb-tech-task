import React from "react";

const SummaryLoader = () => {
  return (
    <div class="lg:m-[50px] m-[20px] shadow rounded-md p-4">
      <div class="animate-pulse flex lg:flex-row md:flex-row flex-col  items-center gap-[30px]">
        <div class="rounded-[10px] bg-slate-200 lg:w-[30%] w-[100%] h-[300px] "></div>
        <div class="flex-1 space-y-6 py-1 lg:w-auto md:w-auto w-full">
          <div class="h-10 bg-slate-200 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-5 bg-slate-200 rounded col-span-2"></div>
              <div class="h-5 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-200 rounded"></div>
              <div class="h-2 bg-slate-200 rounded"></div>
              <div class="h-2 bg-slate-200 rounded"></div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="h-2 bg-slate-200 rounded"></div>
              <div class="h-2 bg-slate-200 rounded"></div>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-200 rounded"></div>
              <div class="h-2 bg-slate-200 rounded"></div>
              <div class="h-2 bg-slate-200 rounded"></div>
            </div>
            <div class="h-10 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryLoader;
