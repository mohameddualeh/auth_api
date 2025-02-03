"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = (0, express_1.default)();
const PORT = 3002;
app.use(express_1.default.json());
app.use("/", authRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});
