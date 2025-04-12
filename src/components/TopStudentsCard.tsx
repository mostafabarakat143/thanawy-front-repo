import Image from "next/image";
export default function TopStudentsCard() {
    return (
      <div className="bg-white rounded-2xl shadow p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">متفوقين في المادة</h3>
          <p className="text-xs text-gray-400">أخر تحديث منذ ساعة</p>
        </div>
  
        <div className="flex items-center gap-2">
          <Image src="/avatar.png" width={200} height={200} alt="avatar" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-xs text-purple-600 font-bold">الاول</p>
            <p className="text-sm font-medium text-gray-700">كريم حسن</p>
          </div>
        </div>
  
        <div className="space-y-2 text-sm">
          <div className="flex justify-between bg-gray-200 p-2 rounded-lg">
            <span>عبدالله حسن</span>
            <span className="font-bold text-blue-600">99%</span>
          </div>
          <div className="flex justify-between bg-gray-200 p-2 rounded-lg">
            <span>علي بدر</span>
            <span className="font-bold text-green-600">97.5%</span>
          </div>
          <div className="flex justify-between bg-gray-200 p-2 rounded-lg">
            <span>حسن الزام</span>
            <span className="font-bold text-cyan-600">96%</span>
          </div>
        </div>
  
        <button className="w-full py-2 mt-2  border-l-purple-600 bg-white text-purple-700 font-semibold rounded-lg">
          عرض التفاصيل
        </button>
      </div>
    );
  }
  