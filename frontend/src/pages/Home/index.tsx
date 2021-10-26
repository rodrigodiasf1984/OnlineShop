/* eslint-disable react/no-unescaped-entities */
import Select from 'react-select';
import { heart } from '../../assets';
import { useGetAllProductsQuery } from '../../slices/products/productsApi';
import {
  Container,
  Main,
  Product,
  ProductContent,
  ProductList,
  Selects,
} from './styles';

const Home = () => {
  const products = [
    { value: 'iphoneX', label: 'IphoneX' },
    { value: 'iphone12', label: 'Iphone12' },
    { value: 'iphone13', label: 'Iphone13' },
  ];
  const orderBy = [
    { value: 'price', label: 'price' },
    { value: 'name', label: 'name' },
    { value: 'description', label: 'description' },
  ];
  const { data, error, isLoading } = useGetAllProductsQuery();

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
      <Selects>
        <div>
          <Select placeholder="Products" options={products} />
        </div>
        <div>
          <Select placeholder="Order by" options={orderBy} />
        </div>
      </Selects>
      <ProductContent>
        <ProductList>
          {data &&
            data?.length > 0 &&
            data.map(
              product =>
                product && (
                  <Product key={product.id}>
                    <div className="favorite">
                      <img src={heart} alt="favorite" />
                    </div>
                    <img src={product.image.url} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <span>€ {product.price}</span>
                  </Product>
                ),
            )}
        </ProductList>
      </ProductContent>
      <div className="pagination">
        <ul>
          <li>&laquo;</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>&raquo;</li>
        </ul>
      </div>
    </Main>
  );
};

export default Home;
