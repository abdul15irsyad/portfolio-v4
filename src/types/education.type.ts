export interface Education<T> {
  icon: string;
  institution: string;
  level: string;
  major: string | null;
  startYear: number;
  endYear: number;
  translates?: (T & { lang: string })[];
}
