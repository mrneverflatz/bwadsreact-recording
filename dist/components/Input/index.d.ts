import React, { ReactNode } from "react";
declare type Props = {
    id: string;
    type: "text" | "number" | "email" | "tel" | "date" | "file";
    name: string;
    state?: "success" | "loading";
    wrapperClassName?: string;
    label?: ReactNode;
    accept?: string;
    readOnly?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    inputClassName?: string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};
declare function Input(props: Props): JSX.Element;
export default Input;
