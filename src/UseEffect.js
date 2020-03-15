import React, { useState, useEffect } from 'react'

const Header = () => {
    const styles = {
        background: 'linear-gradient(20deg, #6813cb, #2575fc)',
        textAlign: 'center',
        borderRadius: '0.2em',
        color: '#FFF',
        padding: '0.3em',
        margin: '0.3em',
        fontSize: '14px'
    };

    return (
        <header style={styles}>
            <h1>
                Hook useEffect
            </h1>
        </header>
    )
};

const UseEffect = () => {
    const [ clicks, setClicks ] = useState(0);
    const [ mouseX, setMouseX ] = useState(0);
    const [ mouseY, setMouseY ] = useState(0);

    const handleMove = (e) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    };

    useEffect(() => {
        // componentDidMount
        // componentDidUpdate
        console.log('Dentro de useEffect', clicks);
        console.log('%c------------------------', 'color: green');
        window.addEventListener('mousemove', handleMove);
        return () => {
            // componentWillUnmount
            console.log('Return de useEffect', clicks);
            window.removeEventListener('mousemove', handleMove);
        }
    }, []);

    const add = () => setClicks(clicks + 1);

    return (
        <div>
            <Header />
            <button onClick={add}>
                Clicks ({ clicks })
            </button>
            <h4>
                X: { mouseX } Y: { mouseY }
            </h4>
        </div>
    )
};

export default UseEffect;