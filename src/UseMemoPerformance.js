import React, { useState, useMemo } from 'react'
import Header from "./Header";

const SuperList = ({ list, log }) => {
    console.log('%cRender <SuperList /> ' + log, 'color: green');

    return (
        <ul>
            {list.map(item => (
                <li key={ item }>
                    { item }
                </li>
            ))}
        </ul>
    )
};


const UseMemoPerfomance = () => {
    const [ clicks, setClicks ] = useState(0);

    const add = () => {
        setClicks(clicks + 1)
    };

    const memoList = useMemo(() => {
        return (
            <SuperList
                list={[ 1, 2, 11, 55, 88 ]}
                log='Memorizado'
            />
        )
    }, []);

    return (
        <div>
            <Header title={"Hook useMemo"} />
            <button onClick={add}>
                Clicks ({ clicks })
            </button>

            <SuperList
                list={[ 'orange', 'pink', 'purple', 'yellow']}
                log='Normal'
            />

            { memoList }
        </div>
    )
};

export default UseMemoPerfomance;