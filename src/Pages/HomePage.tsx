import { Link } from "react-router-dom";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { TbDoorEnter } from "react-icons/tb";
import Navbar from "../Components/Navbar";
import CreateRoomModal from "../Components/CreateRoomModal";
import { useState } from "react";
import { socket } from "../socket";

function HomePage({ createdRoom }: { createdRoom: string }) {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  // const [createdRoom, setCreatedRoom] = useState<string>("");

  const handleCreateRoom = () => {
    setShowPopup(true);

    socket.emit("create-room");
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-[90vh]">
        <div className="flex items-center gap-4 max-[450px]:flex-col max-[450px]:w-full px-6">
          <Link
            to="/"
            className="flex items-center gap-4 border border-orange-500 py-2 px-4 rounded hover:bg-secondary-background transition-all duration-300 max-[450px]:w-full max-[450px]:justify-center"
            onClick={handleCreateRoom}
          >
            <MdOutlineMeetingRoom />
            <span>Create room</span>
          </Link>
          <a
            href={"/join-room"}
            className="flex items-center gap-4 border border-orange-500 py-2 px-4 rounded hover:bg-secondary-background transition-all duration-300 max-[450px]:w-full max-[450px]:justify-center"
          >
            <TbDoorEnter />
            <span>Join room</span>
          </a>
        </div>
      </div>

      {/* Create room modal popup */}

      {showPopup && (
        <CreateRoomModal
          setShowPopup={setShowPopup}
          createdRoom={createdRoom}
        />
      )}
    </>
  );
}

export default HomePage;
