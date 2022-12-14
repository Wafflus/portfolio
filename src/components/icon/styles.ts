import styled from "styled-components";

import { IImageProps } from "./types";

export const IconStyled = styled.img<IImageProps>`
    width: ${props => props.size}${props => props.unit};
    height: ${props => props.size}${props => props.unit};
    border-radius: 50%;
`;