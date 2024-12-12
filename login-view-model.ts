import { Observable } from '@nativescript/core';
import { AuthService } from '../../shared/services/auth.service';
import { NavigationUtil } from '../../shared/utils/navigation.util';
import { ValidationUtil } from '../../shared/utils/validation.util';

export class LoginViewModel extends Observable {
  private authService: AuthService;
  
  constructor() {
    super();
    this.authService = new AuthService();
    this.initializeData();
  }

  private initializeData(): void {
    this.set('username', '');
    this.set('password', '');
    this.set('isLoading', false);
    this.set('errorMessage', '');
  }

  async onLogin() {
    const username = this.get('username');
    const password = this.get('password');

    if (!this.validateInput(username, password)) {
      return;
    }

    this.set('isLoading', true);
    this.set('errorMessage', '');

    try {
      const response = await this.authService.login({ username, password });
      
      if (response.success && response.data?.user) {
        this.navigateToDashboard(response.data.user.role);
      } else {
        this.set('errorMessage', response.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      this.set('errorMessage', 'An unexpected error occurred. Please try again.');
    } finally {
      this.set('isLoading', false);
    }
  }

  private validateInput(username: string, password: string): boolean {
    if (!ValidationUtil.isValidUsername(username)) {
      this.set('errorMessage', 'Please enter a valid username (minimum 3 characters)');
      return false;
    }

    if (!ValidationUtil.isValidPassword(password)) {
      this.set('errorMessage', 'Please enter a valid password (minimum 8 characters)');
      return false;
    }

    return true;
  }

  private navigateToDashboard(role: string): void {
    NavigationUtil.navigate({
      moduleName: `pages/${role}/dashboard/${role}-dashboard-page`,
      clearHistory: true
    });
  }
}