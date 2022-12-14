export interface IHeaderProps {
    activeMenuItem?: string;
    setActiveMenuItem?: React.Dispatch<React.SetStateAction<string>>;
}

export interface IHeaderStyledProps {
    shouldShowBackground: boolean;
}