export interface SkillItem {
  icon: string;
  title: string;
  description: string;
}

export interface ToolItem {
  icon: string;
  name: string;
  description: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
}

export interface DaySchedule {
  day: string;
  items: ScheduleItem[];
}

export interface Achievement {
  number: string;
  text: string;
}

export interface PaymentOption {
  title: string;
  description: string;
  highlight?: string;
}
