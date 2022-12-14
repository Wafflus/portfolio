import { ISexyDescriptionProps } from "./types";
import { SexyDescriptionStyled } from "./styles";

export function SexyDescription({ children }: ISexyDescriptionProps) {
    return (
        <SexyDescriptionStyled>
            {children}
        </SexyDescriptionStyled>
    );
}