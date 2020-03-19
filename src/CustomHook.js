import React, { useState, useEffect } from 'react'
import Header from "./Header";

const useSizes = () => {
    const [ width, setWith ] = useState(window.innerWidth);
    const [ height, setHeight ] = useState(window.innerHeight);

    // Agregar listener
    const handleResize = () => {
        setWith(window.innerWidth)
        setHeight(window.innerHeight)
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);


    return {
        width,
        height
    }
};

const CustomHooK = () => {
    const { height, width } = useSizes();

    return (
        <div>
            <Header title={"Hooks Personalizados"} />
            <h1>
                Width: { width }px  Height: { height }px
            </h1>
        </div>
    )
};

export default CustomHooK;