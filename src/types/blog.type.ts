export interface Blog {
  id: string;
  title: string;
  slug: string;
  author?: {
    name: string;
    photo: {
      originalFileName: string;
      url: string;
    };
  };
  featureImage: {
    originalFileName: string;
    url: string;
  };
  content: string;
  tags: string[];
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}
