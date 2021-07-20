import express from "express";
import routes from "./router";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  //middlewares é uma cadeia de responsabilidades
  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
