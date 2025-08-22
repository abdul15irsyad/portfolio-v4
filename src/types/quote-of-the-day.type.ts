export interface IQuoteOfTheDayResponse {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export interface QuoteOfTheDay {
  _id: string;
  author: string;
  content: string;
  tags: string[];
}
