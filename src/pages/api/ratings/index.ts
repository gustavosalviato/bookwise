import { prisma } from "@/libs/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const ratings = await prisma.rating.findMany({
        include: {
          book: true,
          user: true,
        },
      });

      return res.json({ ratings });
      break;
    case "POST":
      const { rate, description, book_id, user_id } = req.body;

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
      });

      console.log(rating);

      return res.status(201).json(rating);
      break;
  }
}
