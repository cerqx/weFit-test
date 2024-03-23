import { AddToCartIcon } from "@/assets/icons/AddToCartIcon";
import { Button } from "../Button";
import { Container } from "../Container";
import { ProductImage } from "../ProductImage";

import { StyledContainerCard, StyledMovieNameText, StyledMoviePriceText, StyledMovieQuantityText } from "./style";

export function MovieCard() {
    const imgUrl = 'https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png'

    return (
        <Container>
            <StyledContainerCard>
                <ProductImage style={{height: '188px', width: '147px'}} imgUrl={imgUrl} altTxt='Imagem do filme'/>
                <StyledMovieNameText>Viúva Negra</StyledMovieNameText>
                <StyledMoviePriceText>R$39.99</StyledMoviePriceText>
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