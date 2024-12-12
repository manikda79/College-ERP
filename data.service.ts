import { BaseService } from './base.service';
import { Schedule, AttendanceRecord, GradeReport, AssignmentList } from '../models';

export class DataService extends BaseService {
  async getStudentData(studentId: string) {
    return {
      schedule: {
        semester: 'Fall 2024',
        schedule: [
          {
            day: 'Monday',
            classes: [
              {
                time: '9:00 AM',
                subject: 'Advanced Mathematics',
                room: '101',
                faculty: 'Dr. Sarah Johnson',
                courseCode: 'MATH301'
              },
              {
                time: '11:00 AM',
                subject: 'Physics Lab',
                room: '102',
                faculty: 'Prof. Robert Wilson',
                courseCode: 'PHY302'
              },
              {
                time: '2:00 PM',
                subject: 'Computer Science',
                room: '405',
                faculty: 'Dr. Michael Chen',
                courseCode: 'CS401'
              }
            ]
          },
          {
            day: 'Tuesday',
            classes: [
              {
                time: '10:00 AM',
                subject: 'Database Systems',
                room: '203',
                faculty: 'Prof. Emily Brown',
                courseCode: 'CS402'
              },
              {
                time: '1:00 PM',
                subject: 'Digital Electronics',
                room: '304',
                faculty: 'Dr. James Miller',
                courseCode: 'EE301'
              }
            ]
          }
        ]
      },
      attendance: {
        overall: '87.5%',
        subjects: [
          {
            name: 'Advanced Mathematics',
            percentage: '90%',
            totalClasses: 40,
            attendedClasses: 36,
            lastUpdated: '2024-03-15'
          },
          {
            name: 'Physics Lab',
            percentage: '85%',
            totalClasses: 30,
            attendedClasses: 25,
            lastUpdated: '2024-03-15'
          },
          {
            name: 'Computer Science',
            percentage: '92%',
            totalClasses: 35,
            attendedClasses: 32,
            lastUpdated: '2024-03-15'
          }
        ],
        month: 'March',
        year: 2024
      },
      grades: {
        studentId: studentId,
        semester: 'Fall 2024',
        grades: [
          {
            subject: 'Advanced Mathematics',
            grade: 'A',
            points: '95',
            semester: 'Fall 2024',
            examType: 'Midterm',
            submissionDate: '2024-03-10'
          },
          {
            subject: 'Physics Lab',
            grade: 'A-',
            points: '88',
            semester: 'Fall 2024',
            examType: 'Midterm',
            submissionDate: '2024-03-12'
          },
          {
            subject: 'Computer Science',
            grade: 'B+',
            points: '85',
            semester: 'Fall 2024',
            examType: 'Midterm',
            submissionDate: '2024-03-08'
          }
        ],
        gpa: 3.8
      },
      assignments: {
        pending: [
          {
            id: 'ASG001',
            title: 'Mathematical Proof Assignment',
            subject: 'Advanced Mathematics',
            dueDate: '2024-03-25',
            status: 'pending',
            description: 'Complete proofs for theorems 5.1 through 5.4'
          },
          {
            id: 'ASG002',
            title: 'Physics Lab Report',
            subject: 'Physics Lab',
            dueDate: '2024-03-28',
            status: 'pending',
            description: 'Write a detailed report on the Wave Optics experiment'
          }
        ],
        submitted: [
          {
            id: 'ASG003',
            title: 'Database Design Project',
            subject: 'Database Systems',
            dueDate: '2024-03-15',
            status: 'submitted',
            description: 'Design and implement a normalized database schema'
          }
        ],
        graded: [
          {
            id: 'ASG004',
            title: 'Programming Assignment 1',
            subject: 'Computer Science',
            dueDate: '2024-03-01',
            status: 'graded',
            description: 'Implement a balanced binary search tree',
            grade: 'A',
            feedback: 'Excellent implementation with proper documentation'
          }
        ]
      }
    };
  }

  async getFacultyData(facultyId: string) {
    return {
      classes: [
        {
          courseCode: 'MATH301',
          subject: 'Advanced Mathematics',
          schedule: [
            {
              day: 'Monday',
              time: '9:00 AM',
              room: '101'
            },
            {
              day: 'Wednesday',
              time: '9:00 AM',
              room: '101'
            }
          ],
          students: 45,
          averageAttendance: '88%'
        },
        {
          courseCode: 'MATH201',
          subject: 'Calculus II',
          schedule: [
            {
              day: 'Tuesday',
              time: '11:00 AM',
              room: '102'
            },
            {
              day: 'Thursday',
              time: '11:00 AM',
              room: '102'
            }
          ],
          students: 38,
          averageAttendance: '85%'
        }
      ],
      pendingTasks: [
        {
          type: 'grading',
          subject: 'Advanced Mathematics',
          title: 'Midterm Papers',
          deadline: '2024-03-20',
          count: 45
        },
        {
          type: 'assignment',
          subject: 'Calculus II',
          title: 'Create Quiz 3',
          deadline: '2024-03-22'
        }
      ]
    };
  }

  async getAdminData() {
    return {
      departments: [
        {
          name: 'Mathematics',
          faculty: 12,
          students: 450,
          courses: 15
        },
        {
          name: 'Physics',
          faculty: 10,
          students: 380,
          courses: 12
        },
        {
          name: 'Computer Science',
          faculty: 15,
          students: 520,
          courses: 18
        }
      ],
      recentUpdates: [
        {
          type: 'attendance',
          description: 'Daily attendance updated',
          timestamp: '2024-03-15 15:30:00'
        },
        {
          type: 'grades',
          description: 'Midterm grades submitted for MATH301',
          timestamp: '2024-03-15 14:45:00'
        }
      ],
      alerts: [
        {
          type: 'system',
          message: 'Database backup scheduled for tonight',
          priority: 'medium'
        },
        {
          type: 'academic',
          message: 'Grade submission deadline approaching',
          priority: 'high'
        }
      ]
    };
  }
}