export interface WorkExperience {
  position: string;
  timespan?: string;
  startDate?: Date;
  endDate?: Date | null;
  company: {
    name: string;
    logo: string;
  };
  desc?: string;
  translates?: { lang: string; desc: string }[];
}
