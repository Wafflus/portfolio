import styled from "styled-components";

export const FooterStyled = styled.footer`
    align-items: center;
    background-color: ${({ theme }) => theme.data.lightColor};
    display: flex;
    flex-direction: column;
    font-variant: small-caps;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 100%;
`;

export const TitleStyled = styled.h3`
    color: ${({ theme }) => theme.data.text.darkColor};
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
`;

export const TextStyled = styled.p`
    color: ${({ theme }) => theme.data.text.defaultColor};
    font-size: 1.125rem;
    letter-spacing: 0.1rem;
`;

export const AnchorStyled = styled.a`
    color: ${({ theme }) => theme.data.text.defaultColor};
    cursor: pointer;
    font-size: 1.125rem;
    letter-spacing: 0.1rem;
    text-decoration: none;

    &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.data.text.defaultColor};
        text-decoration: none;
    }
`;