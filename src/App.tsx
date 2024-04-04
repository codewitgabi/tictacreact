import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import JoinRoomPage from "./Pages/JoinRoomPage";
import GamePage from "./Pages/GamePage";
import { useEffect, useState } from "react";
import { socket } from "./socket";

function TicTacApp() {
  const [createdRoom, setCreatedRoom] = useState<string>("");

  useEffect(() => {
    function onRoomCreated(roomId: string) {
      setCreatedRoom(roomId);
    }

    socket.on("room-created", onRoomCreated);
    return () => {
      socket.off("room-created", onRoomCreated);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage createdRoom={createdRoom} />} />
        <Route path="/join-room" element={<JoinRoomPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default TicTacApp;
