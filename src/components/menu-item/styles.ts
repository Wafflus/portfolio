import { IAnchorProps } from "./types";
import styled, { css } from "styled-components";

export const AnchorStyled = styled.a<IAnchorProps>`
    color: ${props => props.active ? props.theme.data.text.darkColor : props.theme.data.text.defaultColor};
    cursor: pointer;
    display: inline-block;
    font-weight: ${props => props.active ? 'bold' : 'normal'};
    letter-spacing: 0.1rem;
    text-decoration: none;
    transition: transform 0.5s, color 0.5s, padding 0.5s;

    &:hover {
        color: ${({ theme }) => theme.data.text.darkColor};
        text-decoration: none;
    }

    ${props => !props.active && css`
        &:hover {
            transform: translateY(-4px);
        }
    `};

    ${props => props.active && css`
        border-bottom: 1px solid ${({ theme }) => theme.data.text.defaultColor};
        font-size: 1.25rem;
        font-variant: small-caps;
        padding: 4px;

        &::before,
        &::after {
            background-color: ${({ theme }) => theme.data.text.defaultColor};
            border-radius: 50%;
            bottom: -4px;
            content: '';
            height: 8px;
            position: absolute;
            transition: left 0.5s, right 0.5s, background-color 0.5s;
            width: 8px;
        }

        &::before {
            left: -4px;
        }

        &::after {
            right: -4px;
        }

        &:hover {
            border-color: ${({ theme }) => theme.data.text.darkColor};
            
            &::before,
            &::after {
                background-color:${({ theme }) => theme.data.text.darkColor};
            }

            &::before {
                left: -8px;
            }

            &::after {
                right: -8px;
            }
        }
    `}
`;