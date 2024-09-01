export interface ContactMe {
  id: string;
  name: string;
  address?: string | null;
  message: string;
  approvedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}
