import styled from "styled-components";

export const BulletPointTextStyled = styled.li`
    color: ${({ theme }) => theme.data.text.lightColor};
    font-family: '${({ theme }) => theme.data.fontFamilies.outfit}', sans-serif;
    font-size: 1.125rem;
    letter-spacing: 0.1rem;
    line-height: 120%;
    list-style-type: none;
    position: relative;
    text-align: center;
    transition: transform 0.5s;

    &:hover {
        transform: scale(102%);
    }
    
    ${props => props.theme.breakpoint.above('lg',
        `
            &::before {
                background-color: ${props.theme.data.secondaryColor};
                border-radius: 50%;
                content: '';
                height: 20px;
                left: -40px;
                position: absolute;
                transition: background-color 0.5s;
                width: 20px;
            }

            &:hover::before {
                background-color: ${props.theme.data.primaryColor};
            }
        `
    )}
`;