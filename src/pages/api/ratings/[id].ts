import { prisma } from "@/libs/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(403).json({ message: "Method not allowed" });
  }

  const bookId = String(req.query.id);

  const booksRatings = await prisma.rating.findMany({
    where: {
      book_id: bookId,
    },
    include: {
      user: {
        select: {
          image: true,
          name: true,
          id: true,
        },
      },
    },
  });

  return res.json({ booksRatings });
}
