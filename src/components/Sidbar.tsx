"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, BarChart, Calendar, Users, Settings, LogOut, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem"; // Import the refactored component

// Sidebar links array
const sidebarLinks = [
  { id: "dashboard", text: "المواد الدراسية", icon: BookOpen, href: "/" },
  { id: "statistics", text: "الإحصائيات", icon: BarChart, href: "/statistics" },
  { id: "exams", text: "اختباراتك", icon: Calendar, href: "/exams" },
  { id: "ranking", text: "ترتيبك", icon: Users, href: "/ranking" },
  { id: "subscriptions", text: "الاشتراكات", icon: Users, href: "/subscriptions" },
  { id: "settings", text: "الإعدادات", icon: Settings, href: "/settings" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  // Function to check active state
  const isActive = (id: string): boolean => {
    if (pathName === "/" && id === "dashboard") return true;
    return pathName.slice(1) === id;
  };

  return (
    <aside
      className={` ${isOpen ? "block" : "hidden"} sm:block fixed top-0 right-0 h-screen md:w-[240px] bg-white text-purple-700 flex flex-col py-5  transition-all duration-300 shadow-lg p-6 z-50`}>
      
      {/* Logo & Menu Button */} 
      <div className="flex items-center justify-between w-full px-4">
        {/* Menu Button appears only in mobile view */}
        {/* <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden"> */}
        <button onClick={() => setIsOpen(!isOpen)} >
          <Menu size={24} className="text-purple-700" />
        </button>
        <h1 className="text-xl  font-bold md:text-3xl">ثانوي</h1>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`mt-10 w-full h-auto`}>
        {sidebarLinks.map((link) => (
          <Link key={link.id} href={link.href}>
            <SidebarItem icon={link.icon} text={link.text} active={isActive(link.id)} />
          </Link>
        ))}
      </nav>

      {/* Subscription Box */}
      <div className="w-[196px] h-[220px] rounded-[24px] flex justify-center items-center mx-auto p-6 ">
        <Image src="/sidebarlogo.png" alt="Sidebar Logo" priority width={300} height={300} className="w-full h-full object-cover rounded-[24px]" />
      </div>

      {/* Logout Button */}
      <Link href="#" className="flex items-center text-red-500 mb-5 px-4">
        <LogOut size={20}  className="ml-2"/>
        <span className="ml-2">تسجيل خروج</span>
      </Link>
    </aside>
  );
};

export default Sidebar;

 