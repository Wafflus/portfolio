import { IPageBubbleProps } from "./types";
import { PageBubbleStyled } from "./styles";

export function PageBubbles({ pageBubbleStyleProps: { primaryColor, secondaryColor }}: IPageBubbleProps) {
    return (
        <>
            <PageBubbleStyled role={'presentation'} color={primaryColor} />
            <PageBubbleStyled role={'presentation'} color={secondaryColor} />

            <PageBubbleStyled role={'presentation'} color={secondaryColor} />
            <PageBubbleStyled role={'presentation'} color={primaryColor} />
            <PageBubbleStyled role={'presentation'} color={secondaryColor} />
        </>
    );
}