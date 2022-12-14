import { IListItemProps } from "./types";
import { ListItemStyled } from "./styles";

export function ListItem({ children, listItemStyledProps: { listStyleType = 'none' } = { listStyleType: 'none' } }: IListItemProps) {
    return (
        <ListItemStyled listStyleType={listStyleType}>
            {children}
        </ListItemStyled>
    );
}