import * as fs from 'fs';
import * as path from 'path';

export class TestData {
  static loadJson(fileName: string): any {
    const filePath = path.join(__dirname, '../data', fileName);
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }

  static getRandomEmail(): string {
    return `test${Date.now()}@example.com`;
  }

  static getRandomString(length: number = 10): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}