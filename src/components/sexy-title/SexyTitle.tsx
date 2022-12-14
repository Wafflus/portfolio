import { ISexyTitleProps } from "./types";
import { SexyTitleStyled } from "./styles";

export function SexyTitle({ children }: ISexyTitleProps) {
    return (
        <SexyTitleStyled>
            {children}
        </SexyTitleStyled>
    );
}