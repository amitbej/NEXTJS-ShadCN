import Logo from "./logo";
import Navmidcompbar from "./navmidcompbar";
import Actionbutton from "./actionbutton";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 border-b">
      <Logo />
      <Navmidcompbar />
      <Actionbutton />
    </div>
  );
}

export default Navbar;
