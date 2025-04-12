"use client";
import Image from "next/image";
import { useSubjectsStore } from "@/stores/useSubjectsStore";

export default function QuestionBank() {
  const { units, selectedSubjectId } = useSubjectsStore();

  return (
    <section className="bg-[#FFFDEE] p-6 rounded-2xl">
      <div className="flex items-center gap-2 mb-6">
        <Image
          src="/bank.png"
          alt="bank icon"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <h2 className="text-xl font-bold">بنك الأسئلة</h2>
      </div>

      {/* Show selected subject name (optional) */}
      {selectedSubjectId && (
        <p className="text-lg font-semibold text-gray-700">الوحدات الدراسية:</p>
      )}

      {/* Display fetched units */}
      <div className="space-y-4">
        {units.length > 0 ? (
          units.map((unit) => (
            <div
              key={unit.id}
              className="h-20 bg-white shadow-md rounded-xl flex items-center justify-center text-gray-700 text-lg font-medium border border-gray-300"
            >
              {unit.name}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">لم يتم تحميل الوحدات بعد.</p>
        )}
      </div>
    </section>
  );
}
