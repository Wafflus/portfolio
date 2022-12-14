import { ReactElement } from "react";

export interface IFlexProps {
    children: ReactElement | ReactElement[];
    flexStyleProps?: IFlexStyledProps;
}

export interface IFlexStyledProps {
    defaultFlexProps?: IFlex;
    largeBreakpointFlexProps?: IFlex;
}

export interface IFlex {
    alignItems?: string;
    flexDirection?: string;
    gap?: string;
    justifyContent?: string;
    maxWidth?: string;
}