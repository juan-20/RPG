import { FC, ReactNode } from "react";

interface CharacterLayoutProps {
  children: ReactNode;
}

const CharacterLayout: FC<CharacterLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="bg-slate-200 w-auto md:p-40 p-10 rounded-md">
        {children}
      </div>
    </div>
  );
};

export default CharacterLayout;
