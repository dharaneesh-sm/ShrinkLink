"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
dotenv_1.default.config();
(0, dbConfig_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5001;
app.get('/', (req, res) => {
    console.log("Hello World");
});
app.listen(PORT, () => {
    console.log(`Server is Listening on PORT ${PORT}`);
});
