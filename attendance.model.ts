export interface SubjectAttendance {
  name: string;
  percentage: string;
  totalClasses: number;
  attendedClasses: number;
  lastUpdated: string;
}

export interface AttendanceRecord {
  overall: string;
  subjects: SubjectAttendance[];
  month: string;
  year: number;
}