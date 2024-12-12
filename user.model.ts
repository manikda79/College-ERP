export interface User {
  id: string;
  username: string;
  fullName: string;
  email: string;
  role: 'student' | 'faculty' | 'admin';
  department?: string;
  profileImage?: string;
}