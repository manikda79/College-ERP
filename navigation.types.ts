export interface NavigationOptions {
  moduleName: string;
  context?: any;
  animated?: boolean;
  transition?: any;
  clearHistory?: boolean;
}

export interface NavigationState {
  previousRoute?: string;
  currentRoute: string;
  params?: Record<string, any>;
}