import { ButtonStyled } from "./styles";
import { IButtonProps } from "./types";

export function Button({ buttonStylesProps: { outline = false } = { outline: false }, children, href }: IButtonProps) {
    return (
        <ButtonStyled outline={outline} type='button' href={href} target='_blank'>
            {children}
        </ButtonStyled>
    );
}