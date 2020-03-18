import React, { useState, useCallback } from 'react'
import Header from "./Header";

const getRandomColor = () => '#' + Math.random().toString(16).slice(2, 8);


const Button = React.memo(({ callback, children }) => {

    const styles = {
        padding: '1em',
        fontSize: '20px',
        background: getRandomColor()
    };

    return (
        <button style={styles} onClick={callback}>
            { children }
        </button>
    )
});

const UseCallback = () => {
    const [ a, setA ] = useState(0);

    const incrementA = useCallback(() => {
        setA(a => a + 1)
    }, []);

    return (
        <div>
            <Header title={"Hook useCallback"} />
            <Button callback={incrementA}>
                Increment A
            </Button>
            <h1>
                a: { a }
            </h1>
        </div>
    )
};

export default UseCallback;