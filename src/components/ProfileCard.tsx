import Image from "next/image";

export default function ProfileCard() {
    return (
      <div className="bg-white rounded-2xl shadow p-4 text-center space-y-3">
        <Image
          src="/avatar.png"
          alt="Profile"
          width={200}
          height={200}
          className="w-16 h-16 mx-auto rounded-full border-4 border-purple-200"
        />
        <div className="space-y-1">
          <p className="text-sm text-gray-500">24 سنة</p>
          <h2 className="text-lg font-bold text-gray-800">أهلاً كريم احمد</h2>
          <p className="text-sm text-gray-500">أكمل مسيرتك لتصل إلى هدفك</p>
        </div>
      </div>
    );
  }
  