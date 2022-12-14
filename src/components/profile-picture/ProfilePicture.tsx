import { ImageStyled } from "./styles";
import { IProfilePictureProps } from "./types";

export function ProfilePicture({ alt, src }: IProfilePictureProps) {
    return (
        <ImageStyled src={src} alt={alt} />
    );
}