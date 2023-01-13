
import prisma from "../../../../lib/prisma.ts";

// PUT /api/publish/:id
export default async function handle(req, res) {
  const userId = req.query.id;
  const data = JSON.parse(req.body);
  if (data.isAdmin == "on") {
    data.isAdmin = true;
  }
  if (data.active == "on") {
    data.active = true;
  }
  if (data.isEditor == "on") {
    data.isEditor = true;
  }
  if (data.isAdder == "on") {
    data.isAdder = true;
  }
  if (data.isPartner == "on") {
    data.isPartner = true;
  }

  const now = new Date();
  const user = await prisma.user.update({
    where: { id: +userId },
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      isAdmin: data.isAdmin,
      active: data.active,
      notes: data.notes,
      isEditor: data.isEditor,
      isAdder: data.isAdder,
      isPartner: data.isPartner,
      updatedAt: now,
    },
  });
  res.json(user);
  //res.JSON.stringify(note);
}
