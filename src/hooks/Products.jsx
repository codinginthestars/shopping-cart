/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";

function useProducts(url) {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {mode: 'cors'})
            .then((response) => response.json())
            .then(response => setProducts(response))
            .catch((error) => {
                console.error('Error getting products: ', error);
                if (error.message === 'Failed to fetch') {
                    setError('No internet connection');
                } else {
                    setError(error.message);
                }
            })
            .finally(() => setLoading(false))
    }, []);

    return products;
};

export default useProducts;