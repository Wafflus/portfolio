import styled from "styled-components";

export const SexyTitleStyled = styled.h1`
    color: ${({ theme }) => theme.data.primaryColor};
    font-family: '${({ theme }) => theme.data.fontFamilies.dancingScript}', cursive;
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    margin: 0;
    text-align: center;
    transition: transform 0.5s;
    
    ${props => props.theme.breakpoint.above('lg',
        `
            font-size: 4rem;
        `
    )}
`;