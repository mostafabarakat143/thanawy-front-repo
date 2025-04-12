'use client';
import { useEffect } from 'react';
import { useSubjectsStore } from '@/stores/useSubjectsStore';

export default function SubjectList() {
  const {
    subjects,
    fetchSubjects,
    selectedSubjectId,
    setSelectedSubject,
    fetchUnits
  } = useSubjectsStore();

  useEffect(() => {
    fetchSubjects();
  }, [fetchSubjects]);

  const handleClick = (id: number) => {
    setSelectedSubject(id);
    fetchUnits(id);
  };

  return (
    <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {subjects.map((subject) => (
        <div
          key={subject.id}
          onClick={() => handleClick(subject.id)}
          className={`p-4 rounded-lg shadow cursor-pointer border text-right ${selectedSubjectId === subject.id ? 'border-purple-500' : 'border-gray-200'}`}
        >
          <div className="text-lg font-bold mb-2">{subject.name}</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${subject.progress}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
