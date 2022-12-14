import { ReactElement } from "react";

export interface ITagProps {
    children: ReactElement | ReactElement[];
    href: string | undefined;
}

export interface ITagStyledProps {
    hasLink: boolean;
}