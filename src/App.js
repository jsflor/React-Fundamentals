import React from 'react';
import faker from 'faker';

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
            numero: 0
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

    render () {
        const { id, list, numero } = this.state;
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
            </div>
        )
    }
}