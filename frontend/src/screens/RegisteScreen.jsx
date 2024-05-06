import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import { useRegisterMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const RegisteScreen = () => {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmPassword] = useState('');


    const dispatch = useDispatch();
    const [register, { isLoading }] = useRegisterMutation();
    const { userInfo } = useSelector((state) => state.login || {});
    const navigate = useNavigate(); // Define navigate variable
    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo, navigate, redirect]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password!== confirmpassword) {
            toast.error('Passwords do not match');
            return;
        }
        else{
            try {
                const res = await register({ name,email, password }).unwrap();
                dispatch(setCredentials({ ...res }));
                navigate(redirect);
            } catch (error) {
                toast.error(error?.data?.message || error.message); // Use error instead of err
            }
        }
        
    }

    return (
        <FormContainer>
            <h1>Sign Up</h1>
            <Form onSubmit={submitHandler}>

            <Form.Group controlId="name" className='my-3'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                

                <Form.Group controlId="email" className='my-3'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="password" className='my-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="confirmpassword" className='my-3'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" value={confirmpassword} onChange={(e) => setconfirmPassword(e.target.value)} />
                </Form.Group>
                <Button type="submit" variant="primary" className='mt-3' disabled={isLoading}>
                  Register
                </Button>
                {
                    isLoading && <Loader />
                }
            </Form>
            <Row className='py-3'>
                <Col>
                    Already Have An Account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
                </Col>
            </Row>
        </FormContainer>
    );
}

export default RegisteScreen;
