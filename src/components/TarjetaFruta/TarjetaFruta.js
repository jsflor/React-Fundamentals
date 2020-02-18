import React from 'react'
import styles from './TarjetaFruta.module.css'

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
        this.setState((prevState) => ({
            cantidad: prevState.cantidad + 1
        }));
    }
    quitar(){
        this.setState((prevState) => ({
            cantidad: prevState.cantidad - 1
        }));
    }
    limpiar(){
        this.setState((prevState) => ({
            cantidad: 0
        }));
    }
    render() {
        const hasItems = this.state.cantidad > 0;
        const classNames = `${styles.card} ${ hasItems ? styles['card-active'] : ''}`;
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