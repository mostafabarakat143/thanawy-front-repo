import React from "react";
import Image from "next/image";

export default function TransitionMetalsComponent() {
  return (
    <div className="w-full bg-white border border-blue-200 rounded-lg p-4 flex items-center justify-between shadow-sm">
      {/* Right side with icon */}
      <div className="flex items-center gap-4">
        <div className="bg-blue-50  rounded-full">
          <Image 
            src="/transition.png" 
            alt="Chemistry Icon" 
            width={32} 
            height={32}
            className="w-12 h-12"
          />
        </div>
        <div className="text-right">
          <h3 className="text-gray-800 font-medium text-lg">الفلزات الانتقالية</h3>
          <span className="text-xs text-gray-500 mr-2">لا تدع التقدم الذي حققته يضيع. أنهي ما بدأت.</span>
          <div className="flex items-center mt-1">
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-full w-2/3 rounded-full" />
            </div>
            
          </div>
        </div>
      </div>

      {/* Left side with button */}
      <button className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
        <span>أكمل الدرس</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rtl:rotate-180">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </button>
    </div>
  );
}