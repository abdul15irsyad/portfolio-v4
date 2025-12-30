export interface Education<T> {
  icon: string;
  institution: string;
  level: string;
  major: string | null;
  gpa?: number;
  href?: string;
  startYear: number;
  endYear: number;
  translates?: (T & { lang: string })[];
}
