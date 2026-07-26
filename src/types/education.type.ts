import { Icon } from '@tabler/icons-react';

export interface Education {
  Icon: Icon;
  institution: string;
  level: string;
  major: string | null;
  gpa?: number;
  href?: string;
  startYear: number;
  endYear: number;
}
