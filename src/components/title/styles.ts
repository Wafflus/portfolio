import styled from "styled-components";

export const TitleStyled = styled.h2`
    color: ${({ theme }) => theme.data.text.defaultColor};
    font-size: 1.5rem;
    font-variant: small-caps;
    font-weight: bold;
    letter-spacing: 0.1rem;
    margin-bottom: 32px;
    margin-top: 32px;
    position: relative;
    text-align: center;

    ${props => props.theme.breakpoint.above('lg',
        `
            font-size: 3rem;
            margin-bottom: 64px;
            margin-top: 0;
        `
    )}
`;

export const LineStyled = styled.div`
    border-bottom: 2px solid ${({ theme }) => theme.data.text.defaultColor};
    left: calc(50% - 150px);
    position: absolute;
    top: 50%;
    width: 300px;
    z-index: -10;

    &::before,
    &::after {
        background-color: ${({ theme }) => theme.data.text.defaultColor};
        border-radius: 50%;
        bottom: -6px;
        content: '';
        height: 10px;
        position: absolute;
        width: 10px;
    }

    &::before {
        left: -4px;
    }

    &::after {
        right: -4px;
    }

    ${props => props.theme.breakpoint.above('lg',
        `
            left: calc(50% - 200px);
            width: 400px;
        `
    )}
`;

export const SpanStyled = styled.span`
    background-color: ${({ theme }) => theme.data.lightColor};
    padding: 0px 32px;
`;