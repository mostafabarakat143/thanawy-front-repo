// components/DailyStatsCard.tsx
export default function DailyStatsCard() {
    const stats = [
      {
        label: "إنجازات اليوم",
        value: "23",
        color: "purple",
      },
      {
        label: "عدد الأسئلة المحلولة",
        value: "23",
        color: "blue",
      },
      {
        label: "أهدافك لهذا اليوم",
        value: "23",
        color: "orange",
      },
      {
        label: "تقييمك لهذا اليوم",
        value: "عالي",
        color: "green",
      },
    ];
  
    return (
      <div className="bg-white rounded-2xl shadow p-4 space-y-3">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`flex justify-between p-2 rounded-lg bg-${stat.color}-100 text-${stat.color}-700`}
          >
            <span>{stat.label}</span>
            <span className="font-bold">{stat.value}</span>
          </div>
        ))}
      </div>
    );
  }
  