import { prisma } from '@/libs/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(403).json({ message: 'Method not allowed' })
  }

  const bookId = String(req.query.id)

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },

    include: {
      categories: {
        select: {
          category: {
            select: {
              name: true,
            },
          },
        },
      },
      ratings: true,
    },
  })

  if (!book) {
    return res.status(400).json({ message: ' Book does not exist' })
  }

  res.json({ book })
}
