import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisteScreen from './screens/RegisteScreen';
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoute from './components/PrivateRoute'
import PaymentScreen from './screens/PaymentScreen';
import PlaceScreen from './screens/PlaceScreen';
import OrderScreen from './screens/OrderScreen';
// Define your routes
const routes = (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/products/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisteScreen />} />
      <Route path='' element={<PrivateRoute />}>
      <Route path="/shipping" element={<ShippingScreen />} />
      <Route path="/payment" element={<PaymentScreen />} />
      <Route path="/placeorder" element={<PlaceScreen />} />
      
      <Route path="/order/:id" element={<OrderScreen />} />

      </Route>
    </Route>
  </Routes>
);

// Render the app inside BrowserRouter
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      {routes}
    </Router>
    </Provider>
  </React.StrictMode>
);