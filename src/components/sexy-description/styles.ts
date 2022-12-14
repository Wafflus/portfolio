import styled from "styled-components";

export const SexyDescriptionStyled = styled.h2`
    color: ${({ theme }) => theme.data.text.defaultColor};
    font-family: '${({ theme }) => theme.data.fontFamilies.caveat}', cursive;
    font-size: 1.125rem;
    font-weight: normal;
    letter-spacing: .175rem;
    margin: 0;
    text-align: center;
    transition: transform 0.5s;
    
    ${props => props.theme.breakpoint.above('lg',
        `
            font-size: 1.5rem;
        `
    )}
`;