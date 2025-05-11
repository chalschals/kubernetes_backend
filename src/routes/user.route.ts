import express from "express";

const router = express.Router();

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [];

router.get("/", (req, res) => {
  res.status(200).json(users);
});

router.post("/", (req, res) => {
  const user: User = req.body;
  user.id = Date.now();
  users.push(user);
  res.status(201).json(user);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((u) => u.id !== id);
  res.status(204).send();
});

export default router;
