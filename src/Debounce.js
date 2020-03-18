import React, { useState, useEffect, useRef } from 'react'
import Header from "./Header";

const Debounce = () => {
    const [ name, setName ] = useState('');
    const [ products, setProducts ] = useState([]);

    const entrada = useRef();

    useEffect(() => {
        // debounce
        setTimeout(() => {
            if (name === entrada.current.value) {
                // Solicitud HTTP
                fetch('https://universidad-react-api-test.luxfenix.now.sh/products?name=' + name)
                    .then(res => res.json())
                    .then(data => setProducts(data.products))
            }
        }, 600);
    }, [ name ]);

    const handleInput = (e) => {
        setName(e.target.value)
    };

    return (
        <div>
            <Header title={"Hook useRef"} />
            <input
                type='text'
                onChange={handleInput}
                ref={entrada}
            />
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        { product.name }
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Debounce;