import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './App.css'

class Portal extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        show: PropTypes.bool
    }
    render() {
        const { children, show } = this.props;
        if(!show){
            return null
        }
        return ReactDOM.createPortal((
            <div className='portal'>
                {children}
            </div>
        ), document.getElementById('portal-root'));
    }
}

class Children extends React.Component {
    state = {
        name: '',
        age: ''
    }
    handleChange = (e) => {
        e.persist();
        const { target: { name, value } } = e;
        this.setState(() => ({
            [name]: value
        }));
    }
    handleData = () => {
        this.props.onSendData(this.state);
        this.setState(() => ({
            name: '',
            age: ''
        }));
    }
    render() {
        const { name, age } = this.state;
        return (
            <div className='child'>
                {this.props.children}
                <input onChange={this.handleChange} name='name' value={name} placeholder='name...' />
                <input onChange={this.handleChange} name='age' value={age} placeholder='age...' />
                <button onClick={this.handleData}>send data</button>
            </div>
        );
    }
}

Children.propTypes = {
    children: PropTypes.node,
    onSendData: PropTypes.func
}

class App extends React.Component {
    state = {
        name: '',
        age: '',
        show: false
    }
    handleData = ({ name, age }) => {
        this.setState(() => ({
            name: name,
            age: age
        }));
    }
    clearData = () => {
        this.setState(() => ({ name: '', age:'' }))
    }
    togglePortal = () => {
        this.setState((prevState) => ({ show: !prevState.show }));
    }
    render() {
        const { name, age, show } = this.state;
        return(
            <div className='parent'>
                <h2>Parent Element</h2>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <button onClick={this.clearData}>clear data</button>
                <Children onSendData={this.handleData}>
                    <h3><em>Child</em> Element</h3>
                </Children>
                <Portal show={show}>
                    <>
                        <p>This is a Portal!</p>
                    </>
                </Portal>
                <button onClick={this.togglePortal}>toggle portal</button>
            </div>
        );
    }
}

export default App;