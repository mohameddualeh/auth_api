import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  res.send("Register endpoint");
});

router.post("/login", (req, res) => {
  res.send("Login endpoint");
});

router.get("/profile", (req, res) => {
  res.send("Profile endpoint");
});

export default router;
