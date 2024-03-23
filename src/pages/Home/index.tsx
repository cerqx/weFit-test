import { StyledGridContainer } from "@/components/GridContainer/style";
import { MovieCard } from "@/components/MovieCard";
import { useWeMovies } from "@/hooks/useWeMovies";
import { formatCurrency } from "@/utils/formatCurrency";

export function Home() {
    const { products } = useWeMovies();

    console.log(products)

    return (
        <StyledGridContainer>
            {products?.map(item => (
                <MovieCard key={item.id} movieImg={item.image} movieName={item.title} moviePrice={formatCurrency(item.price)} />
            ))}
        </StyledGridContainer>
    )
}