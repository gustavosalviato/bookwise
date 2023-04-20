export interface IRating {
  id: string;
  rate: number;
  description: string;
  created_at: string;
  formattedDate: string
  book: {
    name: string;
    author: string;
    cover_url: string;
    summary: string
  };
  user: {
    id: string;
    name: string;
    image: string;
  };
}