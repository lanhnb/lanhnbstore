
import { ThemeProvider } from 'styled-components';
import './App.css';

import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
/* The following line can be included in a src/App.scss */


import SingleProduct from "./components/SingleProduct"
import { GlobalStyle } from './GlobalStyle';

import Header from './components/Header';
import Home from "./components/Home";
import Cart from "./components/Cart";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Contact from './components/Contact';

import Dashboard from "./components/admin/summary-components/Dashboard";
import Product from "./components/admin/Detail/Product";
import Users from "./components/admin/summary-components/Users";
import OrderDt from "./components/admin/Detail/OrderDetail";
import Summary from "./components/admin/summary-components/Summary";
import CreateProduct from "./components/admin/summary-components/CreateProduct";
import ProductsList from "./components/admin/list/Productslist";
import UsersProfile from "./components/admin/Detail/UserProfile";
import Products from "./components/admin/summary-components/Products";
import Orders from "./components/admin/summary-components/Order";
import OrdersDetail from "./components/admin/Detail/OrderDetail";
import OrderList from "./components/admin/list/Orderlist";

import Foots from "./components/foot";
import Productss from './components/Products';






const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29, 29, 29, 0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "10px 10px 5px lightblue",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4 px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },

  };
  return (


    <ThemeProvider theme={theme}>

      <Router>
        <GlobalStyle />
        <Header />

        <ToastContainer />
       

        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Productss />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          {/* <Route path="/checkout-success" element={<CheckoutSuccess />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/order/:id" element={<OrderDt />} />
          <Route path="/users/:id" element={<UsersProfile />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route path="summary" element={<Summary />} />
            <Route path="products" element={<Products />}>
              <Route index element={<ProductsList />} />
              <Route path="create-product" element={<CreateProduct />} />
            </Route>
            <Route path="users" element={<Users />} />
            <Route path="orders" element={<Orders />} />
            <Route index element={<OrderList />} />
            <Route path="orders" element={<OrdersDetail />} />
          </Route>


          

        </Routes>
        <Foots/>

      </Router>
    </ThemeProvider>

  )

}
export default App;
