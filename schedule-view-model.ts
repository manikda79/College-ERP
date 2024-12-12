import { Observable } from '@nativescript/core';
import { DataService } from '../../../shared/services';
import { Schedule } from '../../../shared/models/schedule.model';

export class ScheduleViewModel extends Observable {
    private dataService: DataService;
    public schedule: Schedule;

    constructor() {
        super();
        this.dataService = new DataService();
        this.loadSchedule();
    }

    async loadSchedule() {
        try {
            const data = await this.dataService.getStudentData('current');
            this.set('schedule', data.schedule);
        } catch (error) {
            console.error('Error loading schedule:', error);
        }
    }
}