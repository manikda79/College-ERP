import { Frame } from '@nativescript/core';
import { NavigationOptions } from '../types';

export class NavigationUtil {
  static navigate(options: NavigationOptions): void {
    const frame = Frame.topmost();
    if (frame) {
      frame.navigate(options);
    }
  }

  static goBack(): void {
    const frame = Frame.topmost();
    if (frame && frame.canGoBack()) {
      frame.goBack();
    }
  }
}