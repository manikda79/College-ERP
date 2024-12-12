import { Observable } from '@nativescript/core';
import { AppConfig } from '../config/app.config';
import { ApiResponse } from '../types';

export class BaseService extends Observable {
  protected apiBaseUrl: string;

  constructor() {
    super();
    this.apiBaseUrl = AppConfig.apiBaseUrl;
  }

  protected async handleApiResponse<T>(response: Response): Promise<ApiResponse<T>> {
    const statusCode = response.status;
    
    try {
      const data = await response.json();
      return {
        success: response.ok,
        data: response.ok ? data : undefined,
        error: response.ok ? undefined : data.error,
        statusCode
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to parse response',
        statusCode
      };
    }
  }
}