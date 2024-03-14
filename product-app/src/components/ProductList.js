import React, { useEffect } from 'react';
import { useProductsContext } from '../context/ProductsContext';
import { fetchProducts } from '../services/apiService';

const ProductList = () => {
    const { products, setProducts } = useProductsContext();

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data.products);
        };
        getProducts();
    }, [setProducts]);

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>{product.title}</div>
            ))}
        </div>
    );
};

export default ProductList;
