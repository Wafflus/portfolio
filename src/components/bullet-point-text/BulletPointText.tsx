import { BulletPointTextStyled } from "./styles";
import { IBulletPointTextProps } from "./types";

export function BulletPointText({ children }: IBulletPointTextProps) {
    return (
        <BulletPointTextStyled>
            {children}
        </BulletPointTextStyled>
    );
}