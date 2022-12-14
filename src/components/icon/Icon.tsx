import { IconStyled } from "./styles";
import { IIconProps } from "./types";

export function Icon({ alt, imageProps: { size = '64', unit = 'px' } = { size: '64', unit: 'px' }, src }: IIconProps) {
    return (
        <IconStyled size={size} unit={unit} src={src} alt={alt} />
    );
}