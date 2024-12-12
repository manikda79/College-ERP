export interface ClassSchedule {
  day: string;
  classes: Class[];
}

export interface Class {
  time: string;
  subject: string;
  room: string;
  faculty?: string;
  courseCode?: string;
}

export interface Schedule {
  semester: string;
  schedule: ClassSchedule[];
}