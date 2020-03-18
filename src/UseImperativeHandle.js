import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import Header from "./Header";

// React.forwardRef()
// Ejecutar metodos de instancia

const FancyInput = forwardRef((props, ref) => {
    const [ text, setText ] = useState('***');
    const entrada = useRef();

    useImperativeHandle(ref, () => ({
        dispatchAlert: () => {
            alert('Hola')
        },

        setParragraph: (message) => {
            setText(message)
        },

        focusInput: () => {
            entrada.current.focus()
        }
    }));

    return (
        <div>
            <p>{ text }</p>
            <input type='text' ref={entrada} />
        </div>
    )
});

const UseImperativeHandle = () => {
    const fancyInput = useRef();

    const handleClick = () => {
        fancyInput.current.focusInput()
    };

    return (
        <div>
            <Header title={"useImperativeHandle"} />
            <FancyInput ref={fancyInput} />
            <button onClick={handleClick}>
                Dispatch
            </button>
        </div>
    )
};

export default UseImperativeHandle;