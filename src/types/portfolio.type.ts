import { Team } from './team.type';

export interface Portfolio {
  title: string;
  slug?: string;
  href?: string | null;
  year: number;
  publishedAt: string;
  type: string;
  desc: string;
  stacks: { icon: string; label: string }[];
  images: {
    src: string;
    alt: string;
  }[];
  challenges?: Challenge[];
  teams?: Team[];
}

export interface Challenge {
  desc?: string;
}
