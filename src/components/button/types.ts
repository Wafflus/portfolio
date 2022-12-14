import { ReactElement } from "react";

export interface IButtonProps {
    buttonStylesProps?: IButtonStyledProps;
    children: ReactElement | ReactElement[];
    href: string;
}

export interface IButtonStyledProps {
    outline?: boolean;
}