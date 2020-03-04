import React from 'react'

const Movie = (props) => {
    const { Title, Plot, Poster } = props;
    return(
        <div>
            <h1>{ Title }</h1>
            <p>
                { Plot }
            </p>
            <img
                src={ Poster }
                alt='Poster'
                style={{
                width: '150px'
                }}  
            /> 
        </div>
    );
}

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            isLoading: true,
            movie: {},
            movieLoaded: false
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState(() => ({ users, isLoading: false })))
        .catch(err => console.error(err));
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const title = event.target[0].value;
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=460ba76d';
        fetch(url + '&t=' + title)
        .then(res => res.json())
        .then(movie => this.setState(() => ({ movie, movieLoaded: true })))
        .catch(err => console.error(err));
    }
    render(){
        const { users, isLoading, movie, movieLoaded } = this.state;
        if(isLoading){
            return <h1>Loading...</h1>
        }
        return(
            <>
                <h1>HTTP Requests</h1>
                <ul>
                    {
                        users.map((user) => (
                            <li key={user.id}>
                                { user.name }
                                <a href={`http://${user.website}`}>
                                    website
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <h3>Search movie</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search by title..."
                    />
                    <button>
                        Search
                    </button>
                </form>
                {
                    movieLoaded
                    ? <Movie data={movie} />
                    : null
                }
            </>
        );
    }
}