import { AnchorStyled, DivStyled, TextStyled } from "./styles";
import { Icon } from "components/icon";
import { ISocialMediaIconProps } from "./types";
import { useState } from "react";

export function SocialMediaIcon({ alt, children, href, src }: ISocialMediaIconProps) {
    const [active, setActive] = useState(false);
    
    const onMouseEnter = () => {
        if (active) {
            return;
        }

        setActive(true);
    }
    
    const onMouseLeave = () => {
        if (!active) {
            return;
        }

        setActive(false);
    }

    return (
        <DivStyled>
            <AnchorStyled href={href} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} target='_blank'>
                <Icon src={src} alt={alt} />
            </AnchorStyled>

            <TextStyled active={active}>
                {children}
            </TextStyled>
        </DivStyled>
    );
}