import { ComponentProps } from "react";

import { AddToCartIcon } from "@/assets/icons/AddToCartIcon";

import { Button } from "../Button";
import { Container } from "../Container";
import { ProductImage } from "../ProductImage";

import { StyledContainerCard, StyledMovieNameText, StyledMoviePriceText, StyledMovieQuantityText } from "./style";

interface MovieCardProps extends ComponentProps<'div'> {
  movieImg: string;
  movieName: string;
  moviePrice: string;
  quantityCounter: number;
  handleAddProductToCart(): void;
}

export function MovieCard({ movieImg, movieName, moviePrice, quantityCounter, handleAddProductToCart }: MovieCardProps) {
  return (
    <Container>
      <StyledContainerCard>
        <ProductImage style={{height: '188px', width: '147px'}} imgUrl={movieImg} altTxt='Imagem do filme'/>
        <StyledMovieNameText>{movieName}</StyledMovieNameText>
        <StyledMoviePriceText>{moviePrice}</StyledMoviePriceText>
      </StyledContainerCard>

    <Button onClick={handleAddProductToCart} $isProductAddedInCart={!!quantityCounter}>
      <StyledMovieQuantityText>
        <AddToCartIcon />
        {quantityCounter}
      </StyledMovieQuantityText>
      ADICIONAR AO CARRINHO
    </Button>
    </Container>
  )
}