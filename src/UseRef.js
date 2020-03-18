import React, { useRef } from 'react'
import Header from "./Header";

const UseRef = () => {
    const entrada = useRef();

    const focus = () => entrada.current.focus();
    const blur = () => entrada.current.blur();

    return (
        <div>
            <Header title={"Hook useRef"} />
            <input
                type='text'
                placeholder='Ingresa tu texto'
                ref={entrada}
            />
            <button onClick={focus}>
                Focus
            </button>
            <button onClick={blur}>
                Blur
            </button>
        </div>
    )
};

export default UseRef;