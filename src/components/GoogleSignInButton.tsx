import { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import { signIn } from "next-auth/react";

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => signIn("google");
  console.log(loginWithGoogle);

  return (
    <Button onClick={loginWithGoogle} className="w-full">
      <Icons.google className="w-6 h-6 mr-2" />
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
