export interface WorkExperience {
  id: string;
  position: string;
  timespan?: string;
  startDate?: Date;
  endDate?: Date | null;
  company: {
    name: string;
    fullname?: string;
    logo: string;
    url?: string;
  };
  techStacks?: string[];
  desc?: string;
  translates?: { lang: string; desc: string }[];
}
