import { useState,useEffect } from "react"
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {Form,Button,Col}  from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import CeckouScreen from "../components/CeckouScreen"
import { savePaymentMethod } from "../slices/cartSlice"
const PaymentScreen = () => {
    const [paymentMethod,setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;
   useEffect(()=>{
    if(!shippingAddress){
        navigate("/shipping")
    }
   },[shippingAddress,navigate]);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate("/placeorder")
    }

  return (
    <FormContainer>
        <CeckouScreen step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="paymentMethod">
                <Form.Label as='legend'>Payment Method</Form.Label>
              <Col>
              <Form.Check type="radio" 
              label="PayPal or Credit Card" 
              id="PayPal" 
              name="paymentMethod"
               value="PayPal" 
               checked
               onChange={(e) => setPaymentMethod(e.target.value)} className="my-2"></Form.Check>
              
              </Col>
            </Form.Group>
            
            <Button type="submit" className="btn-block">Continue</Button>
        </Form>
    </FormContainer>
  )
}

export default PaymentScreen