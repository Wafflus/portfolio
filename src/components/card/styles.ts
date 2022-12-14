import styled from "styled-components";

export const CardStyled = styled.article`
    border-radius: 8px;
    padding: 16px;

    &:nth-child(odd) {
        background-color: ${({ theme }) => theme.data.highlightColor};
    }

    &:hover {
        outline: 3px solid ${({ theme }) => theme.data.borderColor};

        & > div > img {
            border: 3px solid ${({ theme }) => theme.data.primaryColor};
            transform: scale(102%);
        }
    }

    ${props => props.theme.breakpoint.above('lg',
        `
            &:nth-child(even) > div {
                flex-direction: row-reverse;
            }
        `
    )}
`;

export const TitleStyled = styled.h3`
    color: ${({ theme }) => theme.data.text.darkColor};
    font-size: 1.5rem;
    font-variant: small-caps;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-align: center;
    
    ${props => props.theme.breakpoint.above('lg',
        `
            font-size: 2rem;
            text-align: start;
        `
    )}
`;

export const ToolsStyled = styled.h4`
    color: ${({ theme }) => theme.data.text.defaultColor};
    font-variant: small-caps;
    letter-spacing: 0.1rem;
    text-align: center;
`;

export const DescriptionStyled = styled.p`
    color: ${({ theme }) => theme.data.text.defaultColor};
    flex: 1;
    letter-spacing: 0.1rem;
`;