import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { v4 as uuid4 } from "uuid";

const app = express();
app.set("port", process.env.PORT || 3000);
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});
interface PlayerType {
  id: string | any;
  username: string;
  score?: number;
}
interface RoomType {
  [index: string]: Array<PlayerType>;
}
const gameRooms: RoomType = {};

io.on("connection", (socket) => {
  //? Create a room

  socket.on("create-room", () => {
    const roomId = uuid4();
    gameRooms[roomId] = [];
    socket.emit("room-created", roomId);
  });

  //? Join a room

  socket.on("enter-room", (roomId: string, username: string) => {
    socket.join(roomId);
    if (gameRooms[roomId].length !== 2) {
      gameRooms[roomId].push({
        id: socket.id,
        username,
        score: 0,
      });
    }
  });

  //? On disconnect

  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });

  socket.on("send-game-play", (index) => {
    console.log(index);
  });
});

httpServer.listen(app.get("port"), () => {
  console.log(`Server listening on ${app.get("port")}`);
});
