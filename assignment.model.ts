export interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  description: string;
  grade?: string;
  feedback?: string;
}

export interface AssignmentList {
  pending: Assignment[];
  submitted: Assignment[];
  graded: Assignment[];
}