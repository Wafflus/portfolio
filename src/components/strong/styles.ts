import styled from "styled-components";

export const StrongStyled = styled.strong`
    color: ${({ theme }) => theme.data.text.strongColor};
    font-weight: 500;
`;