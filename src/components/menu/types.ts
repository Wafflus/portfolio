import { ReactElement } from "react";

export interface IMenuProps {
    activeMenuItem?: string;
    children: ReactElement | ReactElement[];
    setActiveMenuItem?: React.Dispatch<React.SetStateAction<string>>;
};