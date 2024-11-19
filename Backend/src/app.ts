import express from "express";
import { socketService } from "./socket";

class App {
  private expressServer = express();

  public start() {
const httpServer =  this.expressServer.listen(4000, () => console.log("Listening"));
socketService.init(httpServer)
}

}

const app = new App();
app.start();
