import { IButtonStyledProps } from "./types";
import styled, { css } from "styled-components";

export const ButtonStyled = styled.a<IButtonStyledProps>`
    align-items: center;
    background-color: ${({ theme }) => theme.data.secondaryColor};
    border-radius: 8px;
    color: ${({ theme }) => theme.data.text.darkColor};
    display: flex;
    font-size: 2rem;
    font-variant: small-caps;
    gap: 16px;
    height: 66px;
    justify-content: center;
    letter-spacing: 0.1rem;
    max-width: 300px;
    min-width: 200px;
    padding: 8px;
    text-decoration: none;
    transition: transform 0.5s;
    width: 100%;

    ${props => props.outline && css`
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.data.primaryColor};
        color: #93855B;
    `}

    &:hover {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        transform: scale(102%);
    }
`;