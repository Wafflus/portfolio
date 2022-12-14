import { IListItemStyledProps } from "./types";
import styled from "styled-components";

export const ListItemStyled = styled.li<IListItemStyledProps>`
    list-style-type: ${props => props.listStyleType};
    position: relative;
`;