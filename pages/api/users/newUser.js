//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();
import prisma from "../../../lib/prisma.ts";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const bcrypt = require("bcrypt");
  const data = JSON.parse(req.body);
  // hash password
  const hashedPassword = await bcrypt.hashSync(data.password, 10);

  if (data.isAdmin == "on") {
    data.isAdmin = true;
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
  if (data.active == "on") {
    data.active = true;
  }

  const createdUser = await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      passwordHash: hashedPassword,
      isAdmin: data.isAdmin,
      isEditor: data.isEditor,
      isAdder: data.isAdder,
      isPartner: data.isPartner,
      active: data.active,
      notes: data.notes,

  },});

  res.json(createdUser);
};
