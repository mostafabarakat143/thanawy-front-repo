 import React from "react";
import Image from "next/image";
import { Search, Bell } from "lucide-react";

export default function Navbar() {
  return (
    // <header className=" h-16 bg-white border-b border-purple-500 flex items-center px-6 justify-between shadow-lg z-10">
    <header className="fixed top-0 right-[240px] left-0  h-16 bg-white border-b border-purple-500 flex items-center px-6 justify-between shadow-lg z-40">
      {/* Right side - Page Title (in RTL layout) */}
      <div className="text-2xl font-bold">المواد الدراسية</div>
      
      {/* Left side - User Controls (in RTL layout) */}
      <div className="flex items-center gap-4">
        {/* Search Icon */}
        <button className="text-gray-600 hover:text-gray-900">
          <Search size={20} />
        </button>
        
        {/* Notification Icon */}
        <button className="text-gray-600 hover:text-gray-900 relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
        </button>
        
        {/* User Info */}
        <div className="flex items-center gap-2">
          <Image
            src="/avatar.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full border"
          />
          <div className="text-right leading-tight">
            <div className="text-sm font-bold">كريم أحمد</div>
            <div className="text-xs text-gray-500">الصف الثالث الثانوي</div>
          </div>
        </div>
      </div>
    </header>
  );
}