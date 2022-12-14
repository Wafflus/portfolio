import { ReactElement } from "react";

export interface ISocialMediaIconProps {
    alt: string;
    children: ReactElement | ReactElement[];
    href: string;
    src: string;
};

export interface ISocialMediaIconTextStyledProps {
    active: boolean
}