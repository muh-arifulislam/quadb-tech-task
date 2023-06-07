import React from "react";

const CardLoader = () => {
  return (
    <div className="shadow rounded-md p-4 w-full">
      <div className="animate-pulse flex flex-col gap-y-[20px]">
        <div className="rounded-[10px] bg-slate-200 w-[100%] h-[250px]"></div>
        <div className="flex-1 space-y-6">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoader;
