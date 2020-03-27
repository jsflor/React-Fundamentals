import React from 'react';
import { BrowserRouter, Route, NavLink, Link, Switch , Redirect } from 'react-router-dom';

const Hola = () => (
    <h1>Hola</h1>
);

const Productos = (props) => (
    <div>
        <h1>Productos</h1>
        <Link to='/productos/gamers'>Gamers</Link>
        <Link to='/productos/hogar'>Hogar</Link>
    </div>
);

const Home = (props) => (
    <h1>Home</h1>
);

const ProductosCategoria = ({ match }) => {
    console.log(match);

    return (
        <div>
            <h1>Categoria: { match.params.categoria }</h1>
        </div>
    )
};

const Ropa = ({ location}) => {
    console.log(location);

    const queries = new URLSearchParams(location.search);
    const color = queries.get('color');
    const talla = queries.get('talla');

    return (
        <div>
            <h1>Ropa</h1>
            <div>
                Color: { color }
            </div>
            <div>
                Talla: { talla }
            </div>
        </div>
    )
};

const Login = ({ location }) => {

    if (location.state) {
        return <h2>{ location.state.message }</h2>
    }

    return (
        <h1>Login</h1>
    )
};

const isAuth = false;

const Perfil = () => {
    return isAuth
        ? <h2>Bienvenido a tu perfil</h2>
        : <Redirect to={{
            pathname: '/login',
            state: {
                message: 'Debes de hacer login para acceder a tu perfil'
            }
        }} />
};

const NavegacionImperativa = ({ history }) => {
    console.log(history);

    return (
        <div>
            <button onClick={history.goBack}>
                Atras
            </button>
            <button onClick={history.goForward}>
                Adelante
            </button>
            <button onClick={() => {
                history.go(-2)
            }}>
                Go 2
            </button>
            <button onClick={() => {
                history.replace('/ropa')
            }}>
                GO ROPA
            </button>
        </div>
    )
};

const navStyles = {
    display: 'flex',
    justifyContent: 'space-around'
};

const NavActive = {
    color: 'orangered'
};

const Navegation = () => (
    <nav style={navStyles}>
        <NavLink
            to='/'
            exact
            activeStyle={NavActive}
        >
            Home
        </NavLink>
        <NavLink
            to='/hola'
            activeClassName='navActive'
        >
            Hola
        </NavLink>
        <NavLink
            to='/productos'
            activeStyle={NavActive}
        >
            Productos
        </NavLink>
        <NavLink
            to='/ropa'
            activeStyle={NavActive}
        >
            Ropa
        </NavLink>
        <NavLink to='/perfil' activeStyle={NavActive}>Perfil</NavLink>
        <NavLink to='/login' activeStyle={NavActive}>Login</NavLink>
    </nav>
);

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Navegation />
                <Route render={NavegacionImperativa} />
                <Route path='/' exact render={Home} />
                <Route path='/hola' render={Hola} />
                <Route path='/productos' exact render={Productos} />
                <Route path='/productos/:categoria/:id?' render={ProductosCategoria} />
                <Route path='/ropa' render={Ropa} />
                <Route path='/login' render={Login} />
                <Route path='/perfil' render={Perfil} />
                <Redirect from='/p' to='/perfil' />
            </Switch>
        </BrowserRouter>
    )
};

export default App;