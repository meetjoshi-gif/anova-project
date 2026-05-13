export const config = {
  baseURL: process.env.BASE_URL || 'https://anova.com',
  timeout: 30000,
  headless: process.env.HEADLESS === 'true' || false,
  environment: process.env.ENV || 'staging',
  apiBaseURL: process.env.API_BASE_URL || 'https://api.anova.com',
};