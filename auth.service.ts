import { User } from '../models/user.model';
import { ApiResponse, LoginRequest, LoginResponse } from '../types';
import { BaseService } from './base.service';
import { TEST_USERS } from '../config/test-users.config';

export class AuthService extends BaseService {
  private currentUser: User | null = null;
  private authToken: string | null = null;

  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    // Simulate API call with test users
    return new Promise((resolve) => {
      setTimeout(() => {
        const testUser = TEST_USERS.find(
          user => user.username === credentials.username && 
                 user.password === credentials.password
        );

        if (testUser) {
          const response: ApiResponse<LoginResponse> = {
            success: true,
            statusCode: 200,
            data: {
              user: {
                id: Math.random().toString(36).substr(2, 9),
                username: testUser.username,
                fullName: testUser.fullName,
                email: testUser.email,
                role: testUser.role
              },
              token: 'mock-jwt-token-' + Date.now()
            }
          };
          
          if (response.success && response.data) {
            this.currentUser = response.data.user;
            this.authToken = response.data.token;
          }
          
          resolve(response);
        } else {
          resolve({
            success: false,
            error: 'Invalid username or password',
            statusCode: 401
          });
        }
      }, 1000);
    });
  }

  logout(): void {
    this.currentUser = null;
    this.authToken = null;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null && this.authToken !== null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  getAuthToken(): string | null {
    return this.authToken;
  }
}