import { IUnorderedListProps } from "./types";
import { UnorderedListStyled } from "./styles";

export function UnorderedList({ children }: IUnorderedListProps) {
    return (
        <UnorderedListStyled role='list'>
            {children}
        </UnorderedListStyled>
    );
}