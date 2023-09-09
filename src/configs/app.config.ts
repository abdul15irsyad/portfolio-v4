export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? 'Irsyad Abdul';
export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? 'https://irsyadabdul.my.id';
type Environment = 'local' | 'development' | 'staging' | 'production';
export const ENV: Environment = process.env.NEXT_PUBLIC_ENV
  ? (process.env.NEXT_PUBLIC_ENV as Environment)
  : 'development';
