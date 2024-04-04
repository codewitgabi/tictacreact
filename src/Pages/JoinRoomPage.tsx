import { FormEvent, useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { socket } from "../socket";

function JoinRoomPage() {
  const [roomValue, setRoomValue] = useState<string>("");
  const [usernameValue, setUsernameValue] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    socket.emit("enter-room", roomValue, usernameValue); // join game room
    // window.location.href ="/game" //! This reconnects the socket to the server.

    navigate("/game");
  };

  return (
    <>
      <div className="">
        <Navbar />

        <div className="flex items-center justify-center min-h-[90vh] mx-6">
          <div className="bg-secondary-background p-4 text-center border border-orange-500">
            <h3 className="text-left text-md mb-4 text-orange-500">
              Complete details below to start a Gridlock game
            </h3>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                name="roomId"
                placeholder="Enter room ID"
                required
                className="w-full outline-none p-3 text-black text-sm border focus:border-orange-500"
                onChange={(e: any) => {
                  setRoomValue(e.target.value);
                }}
              />
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                required
                className="w-full outline-none p-3 text-black inline-block mt-4 text-sm border focus:border-orange-500"
                onChange={(e: any) => {
                  setUsernameValue(e.target.value);
                }}
              />
              <button className="float-right mt-5 border border-orange-500 text-sm px-8 py-3 hover:bg-primary-background transition-all duration-300">
                Start game
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinRoomPage;
