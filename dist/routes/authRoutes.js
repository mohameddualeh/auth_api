"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/register", (req, res) => {
    res.send("Register endpoint");
});
router.post("/login", (req, res) => {
    res.send("Login endpoint");
});
router.get("/profile", (req, res) => {
    res.send("Profile endpoint");
});
exports.default = router;
