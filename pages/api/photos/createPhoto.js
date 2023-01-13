import prisma from "../../../lib/prisma.ts";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const data = JSON.parse(req.body);
  
  const createdPhoto = await prisma.photo.create({
    data,
  });

  res.json(createdPhoto);
};
