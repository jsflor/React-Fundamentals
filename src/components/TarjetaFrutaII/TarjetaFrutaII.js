import React from 'react'
import './TarjetaFruta.css'

export default class TarjetaFrutaII extends React.Component {
    state = {
        cantidad: 0
    }
    agregar = () => this.setState({ cantidad: this.state.cantidad + 1 })
    quitar = () => this.setState({ cantidad: this.state.cantidad - 1 })
    limpiar = () => this.setState({ cantidad: 0 })
    render() {
        const hasItems = this.state.cantidad > 0;
        const classNames = `card ${ hasItems ? 'card-active' : ''}`;
        return (
            <div className={classNames}>
                <h3>{this.props.name}</h3>
                <hr/>
                <p>${this.props.price}</p>
                <p>Cantidad: {this.state.cantidad}</p>
                <button onClick={this.agregar}>+</button>
                <button onClick={this.quitar}>-</button>
                <button onClick={this.limpiar}>x</button>
                <p>Total: ${this.state.cantidad * this.props.price}</p>
            </div>
        );
    }
}