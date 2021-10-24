/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { heart } from '../../assets';
import { useGetAllProductsQuery } from '../../slices/products/productsApi';
import { Container, Main, Product, ProductList } from './styles';

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const [page, setPage] = useState(1);

  return (
    <Main>
      <Container>
        {isLoading && <p>Loading...</p>}
        {error && <p>An error occured {error}</p>}
        {data && data?.length > 0 ? (
          <h3>{data.length} Items found</h3>
        ) : (
          <h3> No products, try to add them in admin section</h3>
        )}
        {data && data?.length > 0 && (
          <h1>
            Search Results for <br /> "Iphone 13"
          </h1>
        )}
      </Container>
      <ProductList>
        {data &&
          data?.length > 0 &&
          data.map(
            product =>
              product && (
                <Product>
                  <img className="favorite" src={heart} alt="favorite" />
                  <img src={product.image.url} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>{product.desc}</p>
                  <span>€ {product.price}</span>
                </Product>
              ),
          )}
      </ProductList>
    </Main>
  );
};

export default Home;
