import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

    const products = useGetProducts(API);

    return (
        <section>
            <div className='main-container'>
                {products.map(product => ( 
                    <ProductItem product={product} key={product.id} />
                ))}       
            </div>
        </section>
    );
}

export default ProductList;