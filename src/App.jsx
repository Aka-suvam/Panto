import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Component/Header/Header.jsx";
import Footer from "./Component/Footer/Footer.jsx";

import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Shop from "./pages/Shop.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ShoppingCart from './pages/ShoppingCart.jsx';
import ProductPage from "./pages/ProductPage.jsx";
import Success from "./Component/Success/Success.jsx";
import FailPay from "./Component/FailPay/FailPay.jsx";

import { Provider } from "react-redux";
import appStore from "./ulits/appStore.jsx";

const App = () => {
    return (
        <>
            <ToastContainer className="react-toastify" />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/shop", element: <Shop /> },
            { path: "/products/:productId", element: <ProductPage /> },
            { path: "/about", element: <AboutUs /> },
            { path: "/contact", element: <ContactUs /> },
            { path: "/shopping-cart", element: <ShoppingCart /> }
        ]
    },
    { path: '/success', element: <Success /> },
    { path: '/fail', element: <FailPay /> }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={appStore}>
        <RouterProvider router={appRoute} />
    </Provider>
);