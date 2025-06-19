export interface SideProject {
  img: string;
  title?: string;
  desc?: string;
  href?: string;
  stacks: { icon: string; label: string }[];
  translates?: { lang: string; title?: string; desc: string }[];
}
