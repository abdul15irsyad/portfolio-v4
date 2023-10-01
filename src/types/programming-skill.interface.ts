export interface ProgrammingSkill {
  title: string;
  list: {
    name: string;
    logo: string;
    level: Level;
    href?: string;
  }[];
}

export enum Level {
  LEARNING = 'learning',
  BASIC = 'basic',
  INTERMEDIATE = 'intermediate',
  GOOD = 'good',
  ADVANCE = 'advance',
}
