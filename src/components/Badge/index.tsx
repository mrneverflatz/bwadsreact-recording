import { ReactNode } from "react";
import configs from "./configs";

type Props = {
  children: ReactNode;
  state: "success" | "warning" | "danger";
  className?: string;
};

function Badge({ children, state, className }: Props) {
  const combineClassName = [
    "py-1 px-4 rounded-full inline-flex items-center",
    configs?.state?.[state] || "",
    className || "",
  ];

  return <span className={combineClassName.join(" ")}>{children}</span>;
}

// Badge.defaultProps = {
//   state: "success"
// }

export default Badge;
