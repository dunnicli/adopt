// pages/api/publish/[id].ts

import prisma from "../../../../lib/prisma.ts";

// PUT /api/publish/:id
export default async function handle(req, res) {
  const noteId = req.query.id;
  const data = JSON.parse(req.body);
  const note = await prisma.note.update({
    where: { id: +noteId },
    data: {
      title: data.title,
      message: data.message,
      
    },
  });
  res.json(note);
  //res.JSON.stringify(note);
}
