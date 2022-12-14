import { AnchorStyled } from "./styles";
import { IMenuItemProps } from "./types";
import { ListItem } from "components/list-item";

export function MenuItem({ activeByDefault=false, activeMenuItem, children, id, setActiveMenuItem }: IMenuItemProps) {
    const active = activeMenuItem === id || (activeByDefault && activeMenuItem === '');

    const onMenuItemClicked = () => {
        if (active) {
            return;
        }

        setActiveMenuItem?.(id);
    }

    return (
        <ListItem>
            <AnchorStyled active={active} onClick={onMenuItemClicked} href={`#${id}`}>
                {children}
            </AnchorStyled>
        </ListItem>
    );
}