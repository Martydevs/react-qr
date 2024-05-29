import BorderedButton from "./BorderedButton";
import { DownArrowIcon } from "../icons/Icons";

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md flex flex-col items-center gap-4">
        <h1 className="animate-fade-down animate-once animate-duration-[1500ms] inline-flex text-8xl font-extrabold bg-gradient-to-r from-gray-800 to-slate-300 bg-clip-text text-transparent">FastQR</h1>
        <p className="text-pretty text-xl animate-fade-down animate-once animate-duration-[2000ms]">
          A React application to generate reactive qr codes.
        </p>
        <a href="#content" className="animate-fade-down animate-once animate-duration-[2300ms]">
          <BorderedButton>
            <DownArrowIcon size="1.5em" />
            Empezar
          </BorderedButton>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
