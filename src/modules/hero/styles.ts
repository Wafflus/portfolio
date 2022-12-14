import styled from "styled-components";

export const HeroStyled = styled.section`
    background-color: ${({ theme }) => theme.data.backgroundColor};
    display: flex;
    height: 100%;
    justify-content: center;
    max-height: 475px;
    padding: 8px 0;
    position: relative;
    width: 100%;

    & div:hover {
        & > h1 {
            transform: translateX(-50px);
        }

        & > h2 {
            transform: translate(50px);
        }
    
        ${props => props.theme.breakpoint.under('md',
            `
            & > h1 {
                transform: translateX(-30px);
            }
    
            & > h2 {
                transform: translate(30px);
            }
            `
        )}
    
        ${props => props.theme.breakpoint.under('sm',
            `
            & > h1 {
                transform: translateX(-20px);
            }
    
            & > h2 {
                transform: translate(30px);
            }
            `
        )}
    }
`;