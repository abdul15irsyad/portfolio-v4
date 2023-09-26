export interface Portfolio {
  title: string;
  href?: string | null;
  year: number;
  order: number;
  type: string;
  desc: string;
  stacks: { icon: string; label: string }[];
  images: {
    src: string;
    alt: string;
  }[];
}
