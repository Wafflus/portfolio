import { ReactElement } from "react";

export interface IContainerProps {
    children: ReactElement | ReactElement[];
    containerStylesProps?: IContainerStyledProps;
}

export interface IContainerStyledProps {
    horizontalPadding?: string;
    verticalPadding?: string;
}