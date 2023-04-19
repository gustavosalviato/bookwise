export interface IRating {
  id: string;
  rate: number;
  description: string;
  created_at: string;
  book: {
    name: string;
    author: string;
    cover_url: string;
    summary: string
  };
  user: {
    name: string;
    image: string;
  };
}