import Image from "next/image";

interface SubjectCardProps {
    id: number | string;
    name: string;
    progress: number;
    icon: string;
    icon1: string;
    icon2: string;
    progressColor: string;
    onClick: (id: number | string) => void; 
  }
  
  export default function SubjectCard({
    id,
    name,
    progress,
    icon,
    icon1,
    icon2,
    progressColor,
    onClick,
  }: SubjectCardProps) {
    return (
      <div  onClick={() => onClick(id)}  className="rounded-2xl shadow border border-gray-100 bg-white p-2 flex flex-col gap-4">
        <div   className="flex items-center gap-2">
        <Image width={200} height={200} src={icon} alt={`${name} icon`} className="w-10 h-10" />
          <div>
            <h3 className="text-lg font-bold text-gray-700" >{name}</h3>
          </div>
          
        </div>
  
        <div>
  {/* Label above the bar */}
  <div className="text-xs text-gray-400 mb-1 text-start">تقدمك</div>

  {/* Percentage + Progress Bar */}
  <div className="flex items-center gap-2 text-xs">
    {/* Left: Percentage */}
    

    {/* Bar */}
    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden relative">
      <div
        className="h-full rounded-full transition-all duration-300"
        style={{
          width: `${progress}%`,
          backgroundColor: progressColor,
        }}
      />
    </div>
    <span className="text-black font-medium min-w-[30px]">{progress}%</span>
  </div>
</div>

  
        <div className="flex justify-between gap-1 text-sm">
          {/* First Button */}
          <button className=" bg-purple-600 text-white rounded-lg flex items-center justify-center p-1 gap-1 ">
            بنك الأسئلة 
            <Image width={200} height={200} src={icon1} alt={`${name} icon`} className="w-4 h-4" />
          </button>
          {/* Second Button */}
          <button className=" bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center p-1 gap-1 ">
            امتحان شامل 
            <Image width={200} height={200} src={icon2} alt={`${name} icon`} className="w-4 h-4" />
          </button>
        </div>

      </div>
    );
  }
  