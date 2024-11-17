import { Team } from './team.type';

export interface Portfolio {
  title: string;
  slug?: string;
  href?: string | null;
  year: number;
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
}

export interface Challenge {
  desc?: string;
  translates?: { lang: string; desc?: string }[];
}
