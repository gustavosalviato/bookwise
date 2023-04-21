export interface IBook {
  id: string
  name: string
  author: string
  cover_url: string
  ratings: Array<{
    id: string
    rate: number
  }>
}
