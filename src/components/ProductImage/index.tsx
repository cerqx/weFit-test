import { ComponentProps } from "react";

import { StyledImage } from "./style";

interface ProductImageProps extends ComponentProps<'img'>{
    imgUrl: string;
    altTxt: string;
}

export function ProductImage({imgUrl, altTxt, ...props}: ProductImageProps) {
    return (
        <StyledImage src={imgUrl} alt={altTxt} {...props} />
    )
}