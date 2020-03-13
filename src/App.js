import React from 'react';
import faker from 'faker';

/*componentWillUnmount*/
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            isPlaying: true
        };
        this.tick = null;
    }

    componentDidMount () {
        this.play()
    }

    componentWillUnmount () {
        // Limpiar intervals
        // Limpiar event listeners
        // Ejecutar algun metodo para que
        // limpie algo de el padre
        this.props.onDestoy();
        clearInterval(this.tick)
    }

    play = () => {
        this.setState({ isPlaying: true });

        this.tick = setInterval(() => {
            this.setState(state => ({
                time: state.time + 1
            }));
        }, 1000);
    };

    pause = () => {
        this.setState({ isPlaying: false });
        clearInterval(this.tick)
    };

    toggle = () => {
        if (this.state.isPlaying) {
            this.pause()
        } else {
            this.play()
        }
    };

    render () {
        const { time, isPlaying } = this.state;

        return (
            <div>
                <h1>{ time }</h1>
                <button onClick={this.toggle}>
                    { isPlaying ? 'pause' : 'play' }
                </button>
            </div>
        )
    }
}

const itemStyles = {
    padding: '1em',
    borderBottom: '1px solid #CCC',
    marginTop: '0.4em'
};

/*shouldComponentUpdate && PureComponent*/
class Item extends React.PureComponent  {
    handleClick = () => {
        this.props.onRemove(this.props.item)
    };

    /*shouldComponentUpdate (nextProps, nextState) {
        if (nextProps.item.id !== this.props.item.id) {
            return true;
        }
        return false;
    }*/

    render () {
        const { item } = this.props;

        console.log('Render ðŸ”¥ ' + item.text);

        return (
            <div style={itemStyles}>
                <button onClick={this.handleClick}>
                    x
                </button>
                <span>
          { item.text }
        </span>
            </div>
        )
    }
}

/*getDerivedStateFromProps*/
class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.num
        }
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        // if (prevState.num !== nextProps.num) {
        //   return {
        //     num: nextProps.num
        //   }
        // }
        if (prevState.num < nextProps.num) {
            return {
                num: nextProps.num
            };
        } else {
            return {
                num: prevState.num
            };
        }
    }

    add = () => {
        this.setState(state => ({
            num: state.num + 1
        }));
    };

    render () {
        const { num } = this.state;
        return (
            <div>
                <hr />
                <button onClick={this.add}>
                    Clicks ( { num } )
                </button>
            </div>
        )
    }
}

const chatStyle = {
    width: 230,
    height: 300,
    border: '1px solid gray',
    overflow: 'auto',
    fontFamily: 'monospace'
};
const messageStyle = {
    padding: '1em',
    borderBottom: '1px solid #DDD'
};
const avatarStyle = {
    width: 50,
    height: 50,
    borderRadius: '50%'
};
/*getSnapshotBeforeUpdate*/
class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.box = React.createRef();
    }

    getSnapshotBeforeUpdate () {
        const box = this.box.current;
        return box.scrollTop + box.offsetHeight >= box.scrollHeight;

    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        const box = this.box.current;
        if (snapshot) {
            box.scrollTop = box.scrollHeight
        }

    }

    render () {
        return (
            <div
                style={chatStyle}
                ref={this.box}
            >
                {this.props.list.map(item => (
                    <div
                        key={item.id}
                        style={messageStyle}
                    >
                        <p>{ item.message }</p>
                        <div>
                            { item.name }
                        </div>
                        <img
                            src={item.avatar}
                            alt='Avatar'
                            style={avatarStyle}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

/*componentDidUpdate*/
class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isFetching: false
        }
    }

    componentDidMount () {
        this.fetchData()
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.userId !== this.props.userId) {
            this.fetchData();
        }
    }

    fetchData = () => {
        this.setState({
            isFetching: true
        });

        const URL = 'https://jsonplaceholder.typicode.com/users/' + this.props.userId;
        fetch(URL)
            .then(res => res.json())
            .then(user => this.setState({
                user,
                isFetching: false
            }));
    };

    render () {
        return (
            <div>
                <h4>User Details</h4>
                { this.state.isFetching
                    ? <h3>Cargando...</h3>
                    : (
                        <pre>
              { JSON.stringify(this.state.user, null, 4 ) }
            </pre>
                    )
                }
            </div>
        );
    }
}

/*componentDidMount*/
class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount () {
        window.addEventListener('resize', this.handlerResize);
    }

    handlerResize = () => {
        this.setState({
            width: window.innerWidth
        });
    };

    render () {
        return (
            <div>
                <h4>Events { this.state.width }</h4>
            </div>
        )
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            list: [],
            numero: 0,
            list2nd: [],
            mostrar: true,
            message: ''
        }
    }
    componentDidMount () {
        // Solicitudes HTTP
        // Agregar Event Listeners
    }

    aumentar = () => {
        this.setState(state => ({
            id: state.id + 1
        }));
    };

    addMessage = () => {
        // crear mensaje falso
        const message = {
            id: faker.random.uuid(),
            name: faker.name.findName(),
            avatar: faker.image.avatar(),
            message: faker.hacker.phrase()
        };
        // agregarlo a la lista
        this.setState(state => ({
            list: [
                ...state.list,
                message
            ]
        }));
    };

    handleChange = (e) => {
        let numero = parseInt(e.target.value);
        if (isNaN(numero)) {
            numero = 0;
        }
        this.setState({ numero });
    };

    agregar = (e) => {
        e.preventDefault();
        const text = e.target[0].value;
        const id = Math.random().toString(16);
        const pendiente = { text, id };

        this.setState(state => ({
            list2nd: [
                ...state.list2nd,
                pendiente
            ]
        }));

        e.target[0].value = ''
    };

    eliminar = (item) => {
        this.setState(state => ({
            list2nd: state.list2nd.filter(_item => {
                return item.id !== _item.id
            })
        }));
    };

    desmontar = () => {
        this.setState({ mostrar: false })
    };

    handleDestroy = () => {
        this.setState({
            message: 'El componente contador fue destruido'
        });
    };

    render () {
        const { id, list, numero, list2nd, mostrar, message } = this.state;
        return (
            <div>
                <h1>componentDidMount</h1>
                <Events />

                <h1>componentDidUpdate</h1>
                <h4>ID: { id }</h4>
                <button onClick={this.aumentar}>
                    Aumentar
                </button>
                <UserDetails
                    userId={id}
                />

                <h1>getSnapShotBeforeUpdate</h1>
                <Chat
                    list={list}
                />
                <button onClick={this.addMessage}>
                    NEW MESSAGE
                </button>

                <h1>getDerivedStateFromProps</h1>
                <h4>{ numero }</h4>
                <input type="text" onChange={this.handleChange}/>
                <Contador
                    num={numero}
                />

                <h1>shouldComponentUpdate</h1>
                <form onSubmit={this.agregar}>
                    <input type="text" placeholder='Ingresa tu pendiente' />
                    <button>
                        Agregar
                    </button>
                </form>
                <div>
                    {list2nd.map(item => (
                        <Item
                            key={item.id}
                            item={item}
                            onRemove={this.eliminar}
                        />
                    ))}
                </div>

                <h1>componentWillUnmount</h1>
                <h4>{ message }</h4>
                <button onClick={this.desmontar}>
                    Desmontar
                </button>
                { mostrar && <Timer onDestoy={this.handleDestroy} /> }
            </div>
        )
    }
}