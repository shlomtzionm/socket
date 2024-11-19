import { Server as HttpServer } from "http";
import { Server as SocketServer, Socket } from "socket.io";
class SocketService {
  public init(httpServer: HttpServer) {
    const options = { cors: { origin: "*" } };

    const socketServer = new SocketServer(httpServer, options);

    socketServer.sockets.on("connection", (socket: Socket) => {
      console.log("Client has been connected.");

      socket.on("message", (msg: string) => {
        console.log("Message has been received: " + msg);

        socketServer.sockets.emit("message",msg)
        
      });

      socket.on("disconnect", () => {
        console.log("Client has been disconnect.");
      });
    });
  }
}

export const socketService = new SocketService();
