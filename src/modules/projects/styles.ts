import styled from "styled-components";

export const ProjectsStyled = styled.section`
    background-color: ${({ theme }) => theme.data.lightColor};
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    z-index: 100;
    
    ${props => props.theme.breakpoint.above('lg',
        `
            padding: 32px 64px;
        `
    )}
`;