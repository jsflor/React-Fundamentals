import React from 'react'
import axios from 'axios'

/*http://www.omdbapi.com/*/

const Movie = (props) => {
    const { Title, Plot, Poster } = props.data;
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
            isMovieLoading: false,
            movieLoaded: false,
            query: '',
            movies: []
        };
        this.searchMovie = React.createRef();
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState(() => ({ users, isLoading: false })))
        .catch(err => console.error(err));
    }

    handleChange = (event) => {
        const query = event.target.value;
        if(query.length > 2){
            this.setState(() => ({ query: query }));
            this.handleQuery();
        }
    }

    handleQuery = async () => {
        const { query } = this.state;
        const url = 'http://www.omdbapi.com/?apikey=460ba76d';
        try {
            const movies = await axios.get(url, {
                params: {
                    s: query
                }
            });

            this.setState(() => ({ movies: movies.data.Search }));
        } catch (err) {
            console.error(err)
        }
    }

    onSelectMovie = (data) => {
        const title = data.Title;
        const input = this.searchMovie.current;
        input.value = title;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(() => ({ isMovieLoading: true }));
        const title = event.target[0].value;
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=460ba76d';
        /*fetch(url + '&t=' + title)*/
        axios.get(url, {
            params: {
                t: title
            }
        })
        .then(res => this.setState(() => ({ movie: res.data, movieLoaded: true, isMovieLoading: false })))
        .catch(err => console.error(err));
        this.setState(() => ({ movies: [], query: '' }));
    }
    render(){
        const { users, isLoading, movie, movieLoaded, isMovieLoading, movies } = this.state;
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
                        ref={this.searchMovie}
                        placeholder="Search by title..."
                        onChange={this.handleChange}
                    />
                    <button>
                        Search
                    </button>
                </form>
                {
                    movies && (
                        <div>
                            <ul>
                                {
                                    movies.map((mov) =>(
                                        <li
                                            key={mov.imdbID}
                                            onClick={this.onSelectMovie.bind(this, mov)}
                                        >
                                            {mov.Title}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
                {
                    isMovieLoading && (
                        <h3>Loading movie...</h3>
                    )
                }
                {
                    movieLoaded && !isMovieLoading
                    ? <Movie data={movie} />
                    : null
                }
            </>
        );
    }
}