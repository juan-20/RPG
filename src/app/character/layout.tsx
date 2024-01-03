import { FC, ReactNode } from "react";

interface CharacterLayoutProps {
  children: ReactNode;
}

const CharacterLayout: FC<CharacterLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="bg-slate-200 w-1/2 p-40 rounded-md">{children}</div>
    </div>
  );
};

export default CharacterLayout;
