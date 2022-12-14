import { ISocialMediaIconTextStyledProps } from "./types";
import styled, { css } from "styled-components";

export const AnchorStyled = styled.a`
    border-radius: 50%;
    cursor: pointer;
    height: 64px;
    outline: 0px solid ${({ theme }) => theme.data.borderColor};
    text-decoration: none;
    transition: transform 1s, outline 0.5s;
    width: 64px;

    &:hover {
        outline: 10px solid ${({ theme }) => theme.data.borderColor};
        position: relative;
        transform: translateY(-16px);
    }
`;

export const TextStyled = styled.span<ISocialMediaIconTextStyledProps>`
    color: ${({ theme }) => theme.data.text.darkColor};
    font-family: '${({ theme }) => theme.data.fontFamilies.outfit}', sans-serif;
    letter-spacing: 10%;
    opacity: 0;
    text-align: center;
    transition: opacity 0.5s;

    ${props => props.active && css`
        opacity: 1;
    `}
`;

export const DivStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;