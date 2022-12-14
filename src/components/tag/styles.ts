import { ITagStyledProps } from "./types";
import styled, { css } from "styled-components";

export const TagStyled = styled.a<ITagStyledProps>`
    align-items: center;
    background-color: ${({ theme }) => theme.data.secondaryColor};
    border-radius: 8px;
    color: ${({ theme }) => theme.data.text.defaultColor};
    display: flex;
    font-size: 1.5rem;
    font-variant: small-caps;
    gap: 8px;
    letter-spacing: 0.1rem;
    padding: 8px;
    text-decoration: none;
    transition: padding 0.5s;

    &:hover {
        padding: 12px;
        text-decoration: none;
    }

    ${props => !props.hasLink && css`
        cursor: default;
    `}
`;