import React, { useState } from 'react'
import Header from "./Header";
import UseEffect from "./UseEffect";
import UseLayoutEffect from "./UseLayoutEffect ";
import UseContext from "./UseContext ";
import UseRef from "./UseRef";
import Debounce from "./Debounce";
import UseImperativeHandle from "./UseImperativeHandle";
import UseReducer from "./UseReducer ";
import Memo from "./ReactMemo";
import ReactMemoMan from "./ReactMemoManuaj";
import UseCallback from "./UseCallback";
import UseCallbackDep from "./UseCallbackDependencies";
import UseMemoPerfomance from "./UseMemoPerformance";
import CustomHooK from "./CustomHook";
import CustomHooKHTTP from "./CustomHookHTTP";

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
            { isActive && <Header title={"Hook useState"} /> }
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
            <hr/>
            <UseImperativeHandle/>
            <hr/>
            <UseReducer/>
            <hr/>
            <Memo/>
            <hr/>
            <ReactMemoMan/>
            <hr/>
            <UseCallback/>
            <hr/>
            <UseCallbackDep/>
            <hr/>
            <UseMemoPerfomance/>
            <hr/>
            <CustomHooK/>
            <hr/>
            <CustomHooKHTTP/>
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