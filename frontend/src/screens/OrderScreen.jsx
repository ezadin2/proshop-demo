import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap";
import Message from "../components/Message";
import Loader from '../components/Loader';
import { useGetOrderDetailsQuery } from '../slices/orderSlice';

const OrderScreen = () => {
  const orderId = "662caf60cfdd130353d7dc08"; // Specific order ID

  const { data: order, isLoading, error, refetch } = useGetOrderDetailsQuery(orderId);
  
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Message variant="danger" />;
  }

  if (!order) {
    return <Message variant="danger">Order not found</Message>;
  }

  return (
    <Row>
      <h1>Order {order._id}</h1>
    </Row>
  );
};

export default OrderScreen;
