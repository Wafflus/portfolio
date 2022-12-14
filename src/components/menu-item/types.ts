import { ReactElement } from "react";

export interface IMenuItemProps {
    activeByDefault?: boolean;
    activeMenuItem?: string;
    children: ReactElement | ReactElement[];
    id: string;
    setActiveMenuItem?: React.Dispatch<React.SetStateAction<string>>;
};

export interface IAnchorProps {
    active: boolean;
};