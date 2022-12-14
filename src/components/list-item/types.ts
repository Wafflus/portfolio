import { ReactElement } from "react";

export interface IListItemProps {
    children: ReactElement | ReactElement[];
    listItemStyledProps?: IListItemStyledProps;
};

export interface IListItemStyledProps {
    listStyleType?: string;
};