import React from 'react'

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
            id: 1
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

    render () {
        const { id } = this.state;
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
            </div>
        )
    }
}