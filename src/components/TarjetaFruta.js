import React from 'react'

export default class TarjetaFruta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidad: 0
        };
        /*this.agregar = this.agregar.bind(this);
        this.quitar = this.quitar.bind(this);
        this.limpiar = this.limpiar.bind(this);*/
        const METHODS = ["agregar", "quitar", "limpiar"];
        METHODS.forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }
    agregar(){
        this.setState({ cantidad: this.state.cantidad + 1 })
    }
    quitar(){
        this.setState({ cantidad: this.state.cantidad - 1 })
    }
    limpiar(){
        this.setState({ cantidad: 0 })
    }
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