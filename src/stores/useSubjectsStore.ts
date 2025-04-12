import { create } from "zustand";
import { Subject, Unit } from "@/types";

interface Store {
  subjects: Subject[];
  units: Unit[];
  selectedSubjectId: string | number | null;
  fetchSubjects: () => Promise<void>;
  fetchUnits: (id: string | number) => Promise<void>;
  setSelectedSubject: (id: string | number) => void;
}

export const useSubjectsStore = create<Store>((set) => ({
  subjects: [],
  units: [],
  selectedSubjectId: null,

  fetchSubjects: async () => {
    try {
      const res = await fetch("/api/proxy/subjects");
      const data = await res.json();
      set({ subjects: data });
    } catch (error) {
      console.error("Failed to fetch subjects:", error);
    }
  },

  fetchUnits: async (id: string | number) => {
    try {
      const res = await fetch(`/api/proxy/units?subjectId=${id}`);
      
      // Handle 404s gracefully
      if (res.status === 404) {
        set({ units: [] });
        return;
      }
      
      if (!res.ok) {
        throw new Error(`API responded with status: ${res.status}`);
      }
      
      const data = await res.json();
      

      set({ units: data });
    } catch (error) {
      console.error("Failed to fetch units:", error);
      set({ units: [] }); // Set empty units on error
    }
  },

  setSelectedSubject: (id: string | number) => set({ selectedSubjectId: id }),
}));
