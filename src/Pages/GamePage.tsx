import Navbar from "../Components/Navbar";
import { socket } from "../socket";

function GamePage() {
  return (
    <>
      <Navbar />

      {/* Score board */}

      <div className="flex items-center justify-center mt-[5em]">
        <div className="grid grid-cols-3">
          <div className="w-[75px] h-[75px] bg-secondary-background border border-orange-500 hover:bg-primary-background transition-all duration-300 flex items-center justify-center text-2xl" onClick={function() {
            socket.emit("send-game-play", "00")
          }}>
            O
          </div>
          <div className="w-[75px] h-[75px] bg-secondary-background border border-orange-500 hover:bg-primary-background transition-all duration-300 flex items-center justify-center text-2xl"></div>
          <div className="w-[75px] h-[75px] bg-secondary-background border border-orange-500 hover:bg-primary-background transition-all duration-300 flex items-center justify-center text-2xl"></div>
          <div className="w-[75px] h-[75px] bg-secondary-background border border-orange-500 hover:bg-primary-background transition-all duration-300 flex items-center justify-center text-2xl"></div>
          <div className="w-[75px] h-[75px] bg-secondary-background border border-orange-500 hover:bg-primary-background transition-all duration-300 flex items-center justify-center text-2xl"></div>
          <div className="w-[75px] h-[75px] bg-secondary-background border border-orange-500 hover:bg-primary-background transition-all duration-300 flex items-center justify-center text-2xl"></div>
          <div className="w-[75px] h-[75px] bg-secondary-background border border-orange-500 hover:bg-primary-background transition-all duration-300 flex items-center justify-center text-2xl"></div>
          <div className="w-[75px] h-[75px] bg-secondary-background border border-orange-500 hover:bg-primary-background transition-all duration-300 flex items-center justify-center text-2xl"></div>
          <div className="w-[75px] h-[75px] bg-secondary-background border border-orange-500 hover:bg-primary-background transition-all duration-300 flex items-center justify-center text-2xl"></div>
        </div>
      </div>

      <table className="bg-secondary-background mt-[5em] w-[1200px] mx-auto max-[1210px]:w-[initial] max-[1210px]:mx-4 mb-8">
        <thead className="">
          <tr className="border-b border-orange-500">
            <th className="w-full text-left p-4">Players</th>
            <th className="p-4">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-orange-500">
            <td className="p-4">Player 1</td>
            <td className="p-4">0</td>
          </tr>
          <tr>
            <td className="p-4">Player 2</td>
            <td className="p-4">0</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default GamePage;
