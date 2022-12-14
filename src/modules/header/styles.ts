import { IHeaderStyledProps } from "./types";
import styled from "styled-components";

export const HeaderStyled = styled.header<IHeaderStyledProps>`
    background-color: ${({ theme }) => theme.data.backgroundColor};
    display: flex;
    justify-content: center;
    max-height: 175px;
    position: relative;
    position: sticky;
    top: 0;
    transition: background 1s;
    width: 100%;
    z-index: 300;

    ${props => props.theme.breakpoint.above('lg',
        `
            background-color: ${props.shouldShowBackground ? props.theme.data.backgroundColor : 'transparent'};
            pointer-events: ${props.shouldShowBackground ? 'auto' : 'none'};

            > div > div > * {
                pointer-events: auto;
            }
        `
    )}
`;

export const CircleStyled = styled.div`
    background-color: ${({ theme }) => theme.data.lightColor};
    border-radius: 50%;
    height: 330px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: -210px;
    transition: left 0.5s, top 0.5s, width 0.5s, height 0.5s;
    width: 330px;
    z-index: 10;
    
    ${props => props.theme.breakpoint.above('lg',
        `
            height: 400px;
            left: calc(-100%);
            top: -225px;
            width: 450px;
        `
    )}
    
    ${props => props.theme.breakpoint.above('xxl',
        `
            left: -1292px;
        `
    )}
`;