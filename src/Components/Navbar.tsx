import { Link } from "react-router-dom";
import { TiWeatherSunny } from "react-icons/ti";
import { ImGithub } from "react-icons/im";

function Navbar() {
  return (
    <>
      <header className="bg-secondary-background border-b border-orange-500">
        <nav className="w-[1200px] mx-auto flex items-center justify-between p-4 max-[1210px]:w-[initial] max-[1210px]:mx-4">
          <Link to="/" className="text-2xl font-cursive text-orange-500">
            Gridlock Gambit
          </Link>
          <div className="flex items-center gap-4 text-xl">
            <span className="border-[1.2px] border-primary-background p-2 rounded hover:bg-primary-background transition-all duration-300">
              <TiWeatherSunny />
            </span>
            <span className="border-[1.2px] border-primary-background p-2 rounded hover:bg-primary-background transition-all duration-300">
              <ImGithub />
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
