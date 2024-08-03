export interface NavbarMenu {
  label: string;
  logo?: string;
  href?: string;
  onClick?: () => void;
  newTab?: boolean;
}
