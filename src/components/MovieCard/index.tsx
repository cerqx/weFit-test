import { AddToCartIcon } from "@/assets/icons/AddToCartIcon";
import { Button } from "../Button";
import { Container } from "../Container";
import { ProductImage } from "../ProductImage";

import { StyledContainerCard, StyledMovieNameText, StyledMoviePriceText, StyledMovieQuantityText } from "./style";
import { ComponentProps } from "react";

interface MovieCardProps extends ComponentProps<'div'> {
    movieImg: string;
    movieName: string;
    moviePrice: string;
}

export function MovieCard({ movieImg, movieName, moviePrice }: MovieCardProps) {
    return (
        <Container>
            <StyledContainerCard>
                <ProductImage style={{height: '188px', width: '147px'}} imgUrl={movieImg} altTxt='Imagem do filme'/>
                <StyledMovieNameText>{movieName}</StyledMovieNameText>
                <StyledMoviePriceText>{moviePrice}</StyledMoviePriceText>
            </StyledContainerCard>

            <Button>
                    <StyledMovieQuantityText>
                        <AddToCartIcon />
                        0
                    </StyledMovieQuantityText>
                 ADICIONAR AO CARRINHO
            </Button>
        </Container>
    )
}