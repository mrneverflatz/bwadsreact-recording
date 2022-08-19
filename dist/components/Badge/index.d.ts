import { ReactNode } from "react";
declare type Props = {
    children: ReactNode;
    state: "success" | "warning" | "danger";
    className?: string;
};
declare function Badge({ children, state, className }: Props): JSX.Element;
export default Badge;
