export interface Grade {
  subject: string;
  grade: string;
  points: string;
  semester: string;
  examType: string;
  submissionDate: string;
}

export interface GradeReport {
  studentId: string;
  semester: string;
  grades: Grade[];
  gpa: number;
}