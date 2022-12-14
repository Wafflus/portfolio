import { IFlexStyledProps } from "./types";
import styled from "styled-components";

export const FlexStyled = styled.div<IFlexStyledProps>`
    align-items: ${props => props.defaultFlexProps?.alignItems};
    display: flex;
    flex-direction: ${props => props.defaultFlexProps?.flexDirection};
    gap: ${props => props.defaultFlexProps?.gap};
    justify-content: ${props => props.defaultFlexProps?.justifyContent};
    max-width: ${props => props.defaultFlexProps?.maxWidth};
    width: 100%;
    
    ${props => props.theme.breakpoint.above('lg',
        `
            align-items: ${props.largeBreakpointFlexProps?.alignItems};
            flex-direction: ${props.largeBreakpointFlexProps?.flexDirection};
            gap: ${props.largeBreakpointFlexProps?.gap};
            justify-content: ${props.largeBreakpointFlexProps?.justifyContent};
            max-width: ${props.largeBreakpointFlexProps?.maxWidth};
        `
    )}
`;