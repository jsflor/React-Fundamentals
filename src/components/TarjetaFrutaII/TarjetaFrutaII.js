import React from 'react'
import './TarjetaFruta.css'

export default class TarjetaFrutaII extends React.Component {
    state = {
        tarjeta: {
            title: '',
            cantidad: 0
        }
    }
    componentDidMount(){
        this.setState((prevState) => ({
            tarjeta: {
                ...prevState.tarjeta,
                title: this.props.name
            }
        }));
    }
    agregar = () => {
        this.setState((prevState) => ({
            tarjeta: {
                ...prevState.tarjeta,
                cantidad: prevState.tarjeta.cantidad + 1
            }
        }));
    }
    quitar = () => {
        this.setState((prevState) => ({
            tarjeta: {
                ...prevState.tarjeta,
                cantidad: prevState.tarjeta.cantidad - 1
            }
        }));
    }
    limpiar = () => {
        this.setState((prevState) => ({
            tarjeta: {
                ...prevState.tarjeta,
                cantidad: 0
            }
        }));
    }
    render() {
        const hasItems = this.state.tarjeta.cantidad > 0;
        const classNames = `card ${ hasItems ? 'card-active' : ''}`;
        return (
            <div className={classNames}>
                <h3>{this.state.tarjeta.title}</h3>
                <hr/>
                <p>${this.props.price}</p>
                <p>Cantidad: {this.state.tarjeta.cantidad}</p>
                <button onClick={this.agregar}>+</button>
                <button onClick={this.quitar}>-</button>
                <button onClick={this.limpiar}>x</button>
                <p>Total: ${this.state.tarjeta.cantidad * this.props.price}</p>
            </div>
        );
    }
}