export type Award = {
  title: string;
  href?: string;
  year: number;
} & (
  | {
      type: 'award';
      competition: string;
    }
  | {
      type: 'certificate';
      publisher?: string;
    }
);
