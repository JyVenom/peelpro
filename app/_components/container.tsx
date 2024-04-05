import { FC } from "react";

interface ReactChildProps {
  children: React.ReactNode;
  background: string;
}
export const Container: FC<ReactChildProps> = ({children, background}) => (
  <div className={`bg-cover bg-${background} flex h-full w-full items-center justify-start flex-col`}>
    <div className="flex full flex-col items-center justify-start max-w-screen-2xl">{children}</div>
  </div>
);
