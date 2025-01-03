import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private env = (window as any).__env || {};

  /**
   * Get the value of an environment variable.
   * @param key - The name of the variable.
   * @returns The value of the variable or an empty string if not found.
   */
  get(key: string): string {
    return this.env[key] || '';
  }

  getRedirectUrl(): string {
    const envName = this.get('ENV_NAME');
    if (envName === 'staging') {
      return 'http://app-stg.theorieai.nl';
    } else if (envName === 'production') {
      return 'http://app.theorieai.nl';
    }
    return 'localhost:4200';
  }
}
