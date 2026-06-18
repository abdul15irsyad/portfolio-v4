export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? 'Irsyad Abdul';
export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? 'https://irsyadabdul.my.id';
type Environment = 'local' | 'development' | 'staging' | 'production';
export const ENV: Environment = process.env.APP_ENV
  ? (process.env.APP_ENV as Environment)
  : 'local';
export const EXPERIMENTAL = Boolean(
  JSON.parse(process.env.NEXT_PUBLIC_EXPERIMENTAL ?? 'false'),
);
