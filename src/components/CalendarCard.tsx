// components/CalendarCard.tsx
export default function CalendarCard() {
    return (
      <div className="bg-white rounded-2xl shadow p-4">
        <div className="flex justify-between items-center mb-3">
          <button>◀</button>
          <h3 className="text-sm font-medium">يناير</h3>
          <button>▶</button>
        </div>
  
        <div className="grid grid-cols-5 gap-2">
          {[12, 13, 14, 15, 16].map((day) => (
            <div
              key={day}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
                day === 14
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  }
  