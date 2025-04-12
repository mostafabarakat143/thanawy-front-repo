export interface Subject {
    id: number;
    name: string;
    progress: number;
    image:string;
  }
  
  export interface Unit {
    id: string;
    name: string;
  }
  

  export interface SidebarItemProps {
    icon: React.ElementType;
    text: string;
    active: boolean;
  }
  