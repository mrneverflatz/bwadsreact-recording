/// <reference types="react" />
declare type Props = {
    children: JSX.Element;
    state: "primary" | "secondary" | "alternative" | "disabled" | "loading";
    className?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
};
declare function Button(props: Props): import("react").FunctionComponentElement<any>;
export default Button;
