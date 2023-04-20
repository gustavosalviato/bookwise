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
    categories: Array<{
      category: {
        id: string,
        name: string
      }
    }>
  };
  user: {
    id: string;
    name: string;
    image: string;
  };
}