import prisma from '../../../../lib/prisma.ts';

// DELETE /api/photos/deletePhoto/:id
export default async function handle(req, res) {
  const photoId = req.query.id;
  if (req.method === 'DELETE') {
    const photo = await prisma.photo.delete({
      where: { id: Number(photoId) },
    });
    res.json(photo);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
