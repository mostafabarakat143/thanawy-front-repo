import React from "react";
import TransitionMetalsComponent from '@/components/TransitionMetalsComponent';
import TopStudentsCard from "@/components/TopStudentsCard";
import ProfileCard from "@/components/ProfileCard";
import DailyStatsCard from "@/components/DailyStatsCard";
import CalendarCard from "@/components/CalendarCard";
import SubjectsSection from "@/components/SubjectsSection";
import QuestionBank from "@/components/QuestionBank";

export default function Home() {
  return (
    <div className="grid grid-cols-12 p-6 gap-6 bg-[#FFFDEE]">
      {/* Left Column - Secondary Content */}
      <div className="col-span-9 space-y-6">
      <TransitionMetalsComponent />
      <SubjectsSection />
      <QuestionBank />
      </div>

      {/* Right Column - Main Content */}
      <div className="col-span-3 space-y-6">
      <ProfileCard />
      <TopStudentsCard />
      <CalendarCard />
      <DailyStatsCard />
      </div>
    </div>
  );
}
