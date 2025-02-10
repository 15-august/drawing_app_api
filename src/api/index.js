/* eslint-disable quotes */
/* eslint-disable linebreak-style */
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const emojis = require("./emojis");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({
    data: users,
  });
});

router.use("/emojis", emojis);

module.exports = router;
