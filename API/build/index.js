"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));

class Server {
  constructor() {
    this.app = express();
    this.app.use(express.json());

    this.PORT = 3000;

    this.app.get("/test", (_, res) => {
      console.log("Hola mundo!");
      res.send("Hola mundo!");
    });
  }

  start() {
    this.app.listen(this.PORT, () => {
      console.log(`Server running on port ${this.PORT}`);
    });
  }
}

module.exports = new Server();
