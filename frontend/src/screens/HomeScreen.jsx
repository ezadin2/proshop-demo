import { useGetProductsQuery } from "../slices/productsApiSlice";
import { Row, Col} from "react-bootstrap"; 
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
const HomeScreen = () => {
  const { data: products,isLoading,error } = useGetProductsQuery();
 
  return (
    <>
    {
      isLoading? (
        <Loader />
      ) : error? (
        <Message variant='danger'>{error.message}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    
    </>
  );
};

export default HomeScreen;
