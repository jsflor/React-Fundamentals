import React, { useState, useContext } from 'react'
import Header from "./Header";

// { Provider, Consumer }
const MyContext = React.createContext();

// Consumir context de forma tradicional
// const Nieto = () => (
//   <MyContext.Consumer>
//     {(context) => (
//       <div>
//         <p>Nieto {context.num}</p>
//         <button onClick={context.addNum}>
//           Nieto Dispatcher
//         </button>
//       </div>
//     )}
//   </MyContext.Consumer>
// )

const Nieto = () => {
    const { num, addNum } = useContext(MyContext);

    return (
        <div>
            <p>Nieto {num}</p>
            <button onClick={addNum}>
                Nieto Dispatcher
            </button>
        </div>
    )
};


const Hijo = () => (
    <div>
        <p>Hijo</p>
        <Nieto />
    </div>
);

const UseContext = () => {
    const [ num, setNum ] = useState(0);

    const addNum = () => setNum(num + 1);

    return (
        <MyContext.Provider value={{
            num,
            addNum
        }}>
            <div>
                <Header title={"Hook useContext"} />
                <button onClick={addNum}>
                    App ( {num} )
                </button>
                <Hijo />
            </div>
        </MyContext.Provider>
    )
};

export default UseContext;