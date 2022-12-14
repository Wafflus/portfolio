import { ITitleProps } from "./types";
import { LineStyled, SpanStyled, TitleStyled } from "./styles";

export function Title({ children }: ITitleProps) {
    return (
        <>
            <TitleStyled>
                <SpanStyled>{children}</SpanStyled>
                <LineStyled role={'presentation'} />
            </TitleStyled>
        </>
    );
}