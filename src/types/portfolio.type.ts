import { Team } from './team.type';
import { WorkExperience } from './work-experience.type';

export interface Portfolio {
  title: string;
  slug?: string;
  href?: string | null;
  year: number;
  isHide?: boolean;
  publishedAt: string;
  type: {
    icon?: string;
    label: string;
  };
  desc?: string;
  stacks: { icon: string; label: string }[];
  images: {
    src: string;
    alt: string;
  }[];
  challenges?: Challenge[];
  teams?: Team[];
  translates?: { lang: string; desc?: string }[];
  workExperienceId?: string;
  workExperience?: WorkExperience;
}

export interface Challenge {
  desc?: string;
  translates?: { lang: string; desc?: string }[];
}
