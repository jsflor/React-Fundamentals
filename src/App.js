import React from 'react'

class Button extends React.Component {
    constructor(){
        super();
        this.state = {
            fireError: false
        }
    }
    dispatchError = () => {
        this.setState(() => ({
            fireError: true
        }));
    }
    render(){
        const { fireError } = this.state;
        if(fireError){
            throw new Error("No se ha podido realizar la operacion");
        }
        return(
            <button onClick={this.dispatchError}>send bug</button>
        );
    }
}

class ErrorHandler extends React.Component {
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error){
        this.setState(() => ({
            hasError: true,
            error
        }));
    }
    render() {
        const { hasError, error } = this.state;
        const { children } = this.props;
        if(hasError){
            return(
                <div>
                    Wops! Algo ha salido mal
                    <div style={{ color: 'orangered' }}>
                        { error && error.toString() }
                    </div>
                </div>
            );
        }
        return children;
    }
}

export default class App extends React.Component {
    render() {
        return(
            <>
                <ErrorHandler>
                    <Button />
                </ErrorHandler>
            </>
        );
    }
}