import { ContainerStyled } from "./styles";
import { IContainerProps } from "./types";

export function Container({ children, containerStylesProps: { verticalPadding = '16px', horizontalPadding = '32px' } = { verticalPadding: '16px', horizontalPadding: '32px' } }: IContainerProps) {
    return (
        <ContainerStyled verticalPadding={verticalPadding} horizontalPadding={horizontalPadding}>
            {children}
        </ContainerStyled>
    );
}