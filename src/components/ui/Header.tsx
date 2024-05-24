import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md flex flex-col items-center gap-4">{children}</div>
      </div>
    </div>
  );
}

export default Header;
