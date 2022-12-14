import { IImageProps } from "./types";
import { ImageStyled } from "./styles";

export function Image({ alt, src }: IImageProps) {
    return (
        <ImageStyled src={src} alt={alt} />
    );
}