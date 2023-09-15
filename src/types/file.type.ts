export interface File {
  id: string;
  path: string;
  fileName: string;
  originalFileName: string;
  mime: string;
  createdAt: Date;
  updatedAt: Date;
  url?: string | null;
}
