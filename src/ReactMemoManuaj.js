import React, { useState } from 'react'
import Header from "./Header";

// React.memo() HOC
const Counter = React.memo(({ count }) => {
    console.log('%cRender <Counter />', 'color: blue');

    return (
        <h1>
            { count }
        </h1>
    )
});

const Title = React.memo(({ text }) => {
    console.log('%cRender <Title />', 'color: orangered');

    return (
        <h1>
            { text }
        </h1>
    )
});


const TitleNested = React.memo(
    ({ info }) => {
        console.log('%cRender <TitleNested />', 'color: purple');

        return (
            <h1>
                { info.text }
            </h1>
        )
    },
    (prevProps, nextProps) => {
        // Si retorna true no se renderiza
        // Si renorna false esta si se renderiza
        // console.log(prevProps, nextProps)
        return prevProps.info.text === nextProps.info.text
    }
);

const ReactMemoMan = () => {
    const [ title, setTitle ] = useState('');
    const [ count, setCount ] = useState(0);

    const handleInput = (e) => {
        setTitle(e.target.value)
    };

    const handleAdd = () => {
        setCount(count + 1)
    };

    return (
        <div>
            <Header title={React.memo} />
            <input
                type='text'
                onChange={handleInput}
            />
            <button onClick={handleAdd}>
                Add
            </button>
            <Counter count={count} />
            <Title text={title} />
            <TitleNested
                info={{
                    text: title
                }}
            />
        </div>
    )
};

export default ReactMemoMan;