import { BackgroundStyled, MenuStyled } from "./styles";
import { IMenuProps } from "./types";
import { UnorderedList } from "components/unordered-list";
import React from "react";

export function Menu({ activeMenuItem, children, setActiveMenuItem }: IMenuProps) {
    const childrenWithAdjustedProps = React.Children.map(children, child =>
        React.cloneElement(child, { activeMenuItem, setActiveMenuItem })
    );

    return (
        <MenuStyled>
            <BackgroundStyled role={'presentation'} />
            
            <UnorderedList>
                {childrenWithAdjustedProps}
            </UnorderedList>
        </MenuStyled>
    );
}