import { IStrongProps } from "./types";
import { StrongStyled } from "./styles";

export function Strong({ children }: IStrongProps) {
    return (
        <StrongStyled>
            {children}
        </StrongStyled>
    );
}