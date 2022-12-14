import styled from "styled-components";

export const ImageStyled = styled.img`
    background-color: ${({ theme }) => theme.data.primaryColor};
    border-radius: 50%;
    height: 90px;
    outline: 5px solid ${({ theme }) => theme.data.borderColor};
    transition: transform 0.5s;
    width: 90px;
    z-index: 20;

    &:hover {
        transform: rotate(15deg) scale(110%);
    }
`;