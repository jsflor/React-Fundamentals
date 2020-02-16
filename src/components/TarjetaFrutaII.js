import React from 'react'

export default class TarjetaFrutaII extends React.Component {
    state = {
        cantidad: 0
    }
    agregar = () => this.setState({ cantidad: this.state.cantidad + 1 })
    quitar = () => this.setState({ cantidad: this.state.cantidad - 1 })
    limpiar = () => this.setState({ cantidad: 0 })
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <hr/>
                <p>${this.props.price}</p>
                <p>Cantidad: {this.state.cantidad}</p>
                <button onClick={this.agregar}>+</button>
                <button onClick={this.quitar}>-</button>
                <button onClick={this.limpiar}>x</button>
            </div>
        )
    }
}