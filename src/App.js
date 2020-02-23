import React from 'react'
import './App.css'

class Children extends React.Component {
    state = {
        name: '',
        age: ''
    }
    handleChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value
        }));
    }
    handleData = () => {
        this.props.onSendData(this.state);
    }
    render() {
        return (
            <div className='child'>
                <h3>Child Element</h3>
                <input onChange={this.handleChange} name='name' value={this.state.name} placeholder='name...' />
                <input onChange={this.handleChange} name='age' value={this.state.age} placeholder='age...' />
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
    handleData = (data) => {
        this.setState(() => ({
            name: data.name,
            age: data.age
        }));
    }
    render() {
        return(
            <div className='parent'>
                <h2>Parent Element</h2>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <Children onSendData={this.handleData} />
            </div>
        );
    }
}

export default App;