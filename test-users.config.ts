export interface TestUser {
  username: string;
  password: string;
  fullName: string;
  email: string;
  role: 'student' | 'faculty' | 'admin';
}

export const TEST_USERS: TestUser[] = [
  {
    username: "student123",
    password: "Student@2024",
    fullName: "John Smith",
    email: "john.smith@college.edu",
    role: "student"
  },
  {
    username: "professor456",
    password: "Faculty@2024",
    fullName: "Sarah Johnson",
    email: "sarah.johnson@college.edu",
    role: "faculty"
  },
  {
    username: "admin789",
    password: "Admin@2024",
    fullName: "Michael Admin",
    email: "michael.admin@college.edu",
    role: "admin"
  }
];