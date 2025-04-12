import { SidebarItemProps } from "@/types"; // Import the interface

const SidebarItem = ({ icon: Icon, text, active }: SidebarItemProps) => {
  return (
    <div  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium cursor-pointer transition-all duration-300 rounded-lg
      ${active ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white" : "bg-white text-purple-700 hover:bg-gray-200"}`}>
      <Icon size={20} />
      <span>{text}</span>
    </div>
  );
};

export default SidebarItem;
