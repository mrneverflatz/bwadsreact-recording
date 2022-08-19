import { ReactNode } from "react";
declare type Props = {
    children: ReactNode;
    cta: ReactNode;
    pathname: string;
    className: {
        active: string;
        idle: string;
    };
};
declare function Navbar({ children, cta, pathname, className }: Props): JSX.Element;
export default Navbar;
