import { IContainerStyledProps } from "./types";
import styled from "styled-components";

export const ContainerStyled = styled.div<IContainerStyledProps>`
    height: 100%;
    max-width: 1440px;
    padding: ${props => props.verticalPadding} ${props => props.horizontalPadding};
    width: 100%;
    z-index: 200;
`;