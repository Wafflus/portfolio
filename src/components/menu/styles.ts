import styled from "styled-components";

export const MenuStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    position: relative;
    width: 100%;
`;

export const BackgroundStyled = styled.div`
    background-color: ${({ theme }) => theme.data.backgroundColor};
    border-radius: 8px;
    height: calc(100% + 16px);
    left: -16px;
    position: absolute;
    top: -8px;
    width: calc(100% + 32px);

    ${props => props.theme.breakpoint.above('lg',
        `
            height: calc(100% + 32px);
            top: -16px;
        `
    )}
`;