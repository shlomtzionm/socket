import { io, Socket } from "socket.io-client";

class SocketService {
private socket!: Socket;

public connect(callback:Function){
this.socket = io("http://localhost:4000")

this.socket.on("message",(msg:string)=>{
    console.log(msg);
    callback(msg)
    
})
}

public disconnect(){
  this.socket.disconnect()
}

public send(msg:string){
    this.socket.emit("message", msg)
}

}

export const socketService = new SocketService();
