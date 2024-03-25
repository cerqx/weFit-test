import { MovieCard } from "@/components/MovieCard";
import { EmptyState } from "@/components/EmptyState";
import { formatCurrency } from "@/utils/formatCurrency";
import { useWeMovies } from "@/hooks/useWeMovies";
import { StyledGridContainer } from "@/components/GridContainer/style";
import { Loading } from "@/components/Loading";

export function Home() {
  const { products, getProducts, handleAddProductToCart, countQuantityOfItemsInCart, isLoading } = useWeMovies();
  
  return (
    <>
      {isLoading && (
          <Loading />
      )}

      {!isLoading && products.length > 0 && (
          <StyledGridContainer>
              {products?.map(item => (
                  <MovieCard
                      key={item.id}
                      movieImg={item.image}
                      movieName={item.title}
                      moviePrice={formatCurrency(item.price)} 
                      quantityCounter={countQuantityOfItemsInCart(item.id) || 0}
                      handleAddProductToCart={() => handleAddProductToCart(item)}
                  />
              ))}
          </StyledGridContainer>
      )}

      {!isLoading && !products.length && (
          <EmptyState buttonTxt="Recarregar página" buttonFn={getProducts} />
      )}
    </>
  )
}