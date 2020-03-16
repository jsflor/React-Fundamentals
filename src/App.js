import React, { useState } from 'react'
import UseEffect from "./UseEffect";
import UseLayoutEffect from "./UseLayoutEffect ";
import UseContext from "./UseContext ";
import UseRef from "./UseRef";
import Debounce from "./Debounce";

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
                Hook useState
            </h1>
        </header>
    )
};

const App = () => {
    const [ clicks, setClicks ] = useState(0);
    const [ isActive, setActive ] = useState(false);
    /*const [ state, setState ] = useState({
        clicks: 0,
        title: ''
    });*/

    const addClicks = () => {
        setClicks(clicks + 1)
    };
    const toggle = () => {
        setActive(!isActive)
    };
    /*const merge = (nextState) => {
        setState({
            ...state,
            ...nextState
        })
    };
    const addClicks = () => {
        merge({
            clicks: state.clicks + 1
        })
    };
    const handleInput = (e) => {
        const title = e.target.value
        merge({
            title
        })
    };*/
    return (
        <div>
            { isActive && <Header /> }
            <button onClick={addClicks}>
                Clicks ({ clicks })
            </button>
            <button onClick={toggle}>
                { isActive ? 'Desactivar' : 'Activar' }
            </button>
            {
                /*<input
                    type="text"
                    value={state.title}
                    onChange={handleInput}
                />
                <button onClick={addClicks}>
                Clicks ({ state.clicks })
                </button>
                <h3>{ state.title }</h3>*/
            }
            <hr/>
            <UseEffect/>
            <hr/>
            <UseLayoutEffect/>
            <hr/>
            <UseContext/>
            <hr/>
            <UseRef/>
            <hr/>
            <Debounce/>
        </div>
    )
};

// class App extends Component {
//   state = {
//     clicks: 0
//   }

//   addClicks = () => {
//     this.setState(state => ({
//       clicks: state.clicks + 1
//     }))
//   }

//   render () {
//     const { clicks } = this.state
//     return (
//       <div>
//         <Header />
//         <button onClick={this.addClicks}>
//           Clicks ({ clicks })
//         </button>
//       </div>
//     )
//   }
// }

export default App;