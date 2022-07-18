import React from 'react';
import ProductList from '../containers/ProductList';
import Header from '../components/Header';
import ProductInfo from '../components/ProductInfo';


const Home = () => {
    return (
        <div>
            <Header />
            <ProductList />
            {/* <ProductInfo /> */}
        </div>
    );
}

export default Home;