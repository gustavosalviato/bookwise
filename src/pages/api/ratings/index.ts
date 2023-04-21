import { prisma } from '@/libs/prisma'
import moment from 'moment'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      const ratingsResponse = await prisma.rating.findMany({
        include: {
          book: true,
          user: true,
        },
      })

      const ratings = ratingsResponse.map((rating) => {
        return {
          ...rating,
          formattedDate: moment(new Date(rating.created_at))
            .locale('pt-br')
            .fromNow(),
        }
      })

      return res.json({ ratings })
      break
    case 'POST':
      const { rate, description, book_id, user_id } = req.body

      const rating = await prisma.rating.create({
        data: {
          description,
          rate,
          user_id,
          book_id,
        },
        include: {
          user: {
            select: {
              image: true,
              name: true,
            },
          },
        },
      })

      return res.status(201).json(rating)
      break
  }
}
