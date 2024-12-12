import { NavigatedData, Page } from '@nativescript/core';
import { StudentDashboardViewModel } from './student-dashboard-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new StudentDashboardViewModel();
}