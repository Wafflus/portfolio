import styled from "styled-components";
import { IBubbleStyledProps } from "./types";

export const PageBubbleStyled = styled.div<IBubbleStyledProps>`
    opacity: 0;
    
    &:nth-child(1),
    &:nth-child(2) {
        bottom: -100%;
        left: -100%;
    }

    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
        bottom: -100%;
    }

    ${props => props.theme.breakpoint.above('xl',
        `
            background-color: ${props.color};
            border-radius: 50%;
            opacity: 1;
            position: absolute;
            transition: opacity 0.5s, bottom 0.5s, left 0.5s;
        
            &:nth-child(1),
            &:nth-child(2) {
                height: 293px;
                width: 293px;
            }
        
            &:nth-child(3),
            &:nth-child(5) {
                height: 330px;
                width: 330px;
            }
        
            &:nth-child(4) {
                height: 282px;
                width: 282px;
            }
        
            &:nth-child(1) {
                bottom: -30%;
                left: -115px;
                z-index: 10;
            }
        
            &:nth-child(2) {
                bottom: -45%;
                left: 90px;
                z-index: 20;
            }
        
            &:nth-child(3) {
                bottom: -70%;
                left: calc(100% - 330px - 90px);
                z-index: 10;
            }
        
            &:nth-child(4) {
                bottom: -50%;
                left: calc(100% - 282px + 50px);
                z-index: 20;
            }
        
            &:nth-child(5) {
                bottom: -25%;
                left: calc(100% - 330px + 210px);
                z-index: 10;
            }
        `
    )}
`;