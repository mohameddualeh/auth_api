"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.login = exports.register = void 0;
const User_1 = require("../models/User");
const register = (req, res) => {
    const { username, password } = req.body;
    const existingUser = User_1.users.find();
};
exports.register = register;
const login = (req, res) => { };
exports.login = login;
const profile = (req, res) => { };
exports.profile = profile;
