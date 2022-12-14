import { ITagProps } from "./types";
import { TagStyled } from "./styles";

export function Tag({ children, href }: ITagProps) {
    const hasLink = href !== undefined && href !== '';

    return (
        <TagStyled {...hasLink && { href }} hasLink={hasLink} target='_blank'>
            {children}
        </TagStyled>
    );
}