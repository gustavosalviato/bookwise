import { prisma } from "@/libs/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(403).json({ message: "Method not allowed" });
  }

  const ratings = await prisma.rating.findMany({
    include: {
      book: true,
      user: true,
    },
  });

  return res.json({ ratings });
}