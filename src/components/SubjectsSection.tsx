"use client";
import SubjectCard from "./SubjectCard";
import Image from "next/image";
import { useEffect } from "react";
import { useSubjectsStore } from "@/stores/useSubjectsStore";

export default function SubjectsSection() {
  const { subjects, fetchSubjects, fetchUnits, setSelectedSubject } = useSubjectsStore();

  useEffect(() => {
    fetchSubjects();
  }, [fetchSubjects]);

  // Handle subject click to fetch units
  const handleSubjectClick = (id: string | number) => {
    setSelectedSubject(id);
    fetchUnits(id);
  };

  return (
    <section className="p-6 bg-white rounded-2xl">
      <div className="flex items-center gap-2 mb-6">
        <Image src="/book.png" width={200} height={200} alt="icon" className="w-6 h-6" />
        <h2 className="text-xl font-bold">المواد الدراسية</h2>
      </div>

      {subjects.length === 0 ? (
        <p className="text-center text-gray-500">جارٍ تحميل المواد...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {subjects?.map((subject) => (
            <SubjectCard 
              key={subject.id} 
              id={subject.id} 
              name={subject.name}
              progress={subject.progress || 70} // Default progress
              progressColor={ "#22c55e"} 
              icon={subject.image || "/chemistry.png"} 
              icon1="/book2.png"
              icon2="/icon1.png"
              onClick={() => handleSubjectClick(subject.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
