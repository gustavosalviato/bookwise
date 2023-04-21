import { prisma } from '@/libs/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import moment from 'moment'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(403).json({ message: 'Method not allowed' })
  }

  const userId = String(req.query.slug)

  const userResponse = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                select: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  })

  const user = {
    id: userResponse?.id,
    name: userResponse?.name,
    image: userResponse?.image,
    readed_books: userResponse?.ratings.length,
    total_readed_pages: userResponse?.ratings.reduce((acc, obj) => {
      return acc + obj.book.total_pages
    }, 0),
    ratings: userResponse?.ratings.map((rating) => {
      return {
        id: rating.id,
        rate: rating.rate,
        formattedDate: moment(new Date(rating.created_at))
          .locale('pt-br')
          .fromNow(),
        categories: userResponse.ratings.map((rating) => {
          return rating.book.categories[0].category.name
        }),
        book: {
          id: rating.book.id,
          name: rating.book.name,
          author: rating.book.author,
          summary: rating.book.summary,
          cover_url: rating.book.cover_url,
          total_pages: rating.book.total_pages,
        },
      }
    }),
  }

  return res.json(user)
}
