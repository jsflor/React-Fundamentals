import React from 'react'
import './App.css'

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

class App extends React.Component {
    state = {
        name: '',
        age: ''
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
    render() {
        const { name, age } = this.state;
        return(
            <div className='parent'>
                <h2>Parent Element</h2>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <button onClick={this.clearData}>clear data</button>
                <Children onSendData={this.handleData}>
                    <h3><em>Child</em> Element</h3>
                </Children>
            </div>
        );
    }
}

export default App;