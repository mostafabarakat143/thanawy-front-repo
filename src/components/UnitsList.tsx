'use client';
import { useSubjectsStore } from '@/stores/useSubjectsStore';

export default function UnitsList() {
  const { units, selectedSubjectId } = useSubjectsStore();

  if (!selectedSubjectId) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4 text-right">بنك الأسئلة</h2>
      <div className="space-y-2">
        {units.length > 0 ? (
          units.map((unit) => (
            <div key={unit.id} className="bg-gray-100 p-3 rounded-md shadow text-right">
              {unit.title}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-right">لا يوجد وحدات لهذا المادة.</p>
        )}
      </div>
    </div>
  );
}
