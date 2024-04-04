'use client'
import { FC } from "react";
interface ReactChildProps {
  children: React.ReactNode;
}
export const MobileNavComponent: FC<ReactChildProps> = (props) => (
  <div className="md:hidden flex">{props.children}</div>
);
export const DesktopNavComponent: FC<ReactChildProps> = (props) => (
  <div className="md:flex hidden">{props.children}</div>
);
