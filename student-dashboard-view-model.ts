import { Observable } from '@nativescript/core';
import { AuthService } from '../../../shared/services/auth.service';
import { NavigationUtil } from '../../../shared/utils/navigation.util';
import { User } from '../../../shared/models/user.model';

export class StudentDashboardViewModel extends Observable {
    private authService: AuthService;
    public user: User;

    constructor() {
        super();
        this.authService = new AuthService();
        this.user = this.authService.getCurrentUser();
        this.initializeData();
    }

    private initializeData(): void {
        // Set the user data for the view
        this.set('user', this.user);
    }

    onLogout(): void {
        this.authService.logout();
        NavigationUtil.navigate({
            moduleName: 'pages/login/login-page',
            clearHistory: true
        });
    }

    onViewSchedule(): void {
        NavigationUtil.navigate({
            moduleName: 'pages/student/schedule/schedule-page'
        });
    }

    onViewAttendance(): void {
        NavigationUtil.navigate({
            moduleName: 'pages/student/attendance/attendance-page'
        });
    }

    onViewGrades(): void {
        NavigationUtil.navigate({
            moduleName: 'pages/student/grades/grades-page'
        });
    }

    onViewAssignments(): void {
        NavigationUtil.navigate({
            moduleName: 'pages/student/assignments/assignments-page'
        });
    }
}