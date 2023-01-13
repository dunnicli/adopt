// pages/api/publish/[id].ts

import prisma from "../../../../lib/prisma.ts";

// PUT /api/publish/:id
export default async function handle(req, res) {
  const photoId = req.query.id;
  const data = JSON.parse(req.body);
  const photo = await prisma.photo.update({
    where: { id: +photoId },
    data: {
      caption: data.caption,
      s3Url: data.s3Url,
      
    },
  });
  res.json(photo);
  //res.JSON.stringify(note);
}
