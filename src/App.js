import React from 'react'

class InputNoControlado extends React.Component {
    constructor(){
        super();
        this.name = React.createRef();
        this.email = React.createRef();
    }
    handleClick = () => {
        const { onSendData } = this.props;
        const name = this.name.current.value;
        const email = this.email.current.value;
        onSendData({ name, email });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { onSendData } = this.props;
        const name = event.target[0].value;
        const email = event.target[1].value;
        onSendData({ name, email });
    }
    render(){
        return(
            <>
                <input ref={this.name}  placeholder='Name...' />
                <input ref={this.email}  placeholder='Email...' />
                <button onClick={this.handleClick}>Send</button>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <p><label htmlFor='name'>Name: </label><input placeholder='Name...' id='name' /></p>
                    <p><label htmlFor='email'>Email: </label><input placeholder='Email...' id='email' /></p>
                    <button>Send</button>
                </form>
            </>
        );
    }
}

class InputControlado extends React.Component {
    state = {
      text: '',
      color: '#E8E8E8'
    }
  
    handleChange = (event) => {
      const { onChange, name } = this.props;
      const text = event.target.value;
      let color = 'green';
  
      if (text.trim() === '') {
        color = '#E8E8E8';
      }
  
      if (text.trim() !== '' && text.length < 5) {
        color = 'red';
      }
  
      this.setState({ text, color });

      onChange(name, text);
    }
  
    render () {
      const { color, text } = this.state;
      const styles = {
        border: `1px solid ${color}`,
        padding: '0.3em 0.6em',
        outline: 'none'
      };
      return (
        <input
          type='text'
          value={text}
          onChange={this.handleChange}
          style={styles}
        />
      )
    }
}

class Select extends React.Component {
    constructor(){
        super();
        this.state = {
            tech: 'React',
            techs: [ 'Vue' ],
            active: true
        }
    }
    
    handleChange = (event) => {
        this.setState({
            tech: event.target.value
        });
    }

    handleChangeMultiple = (event) => {
        const techs = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );
        this.setState({ techs });
    }

    handleCheckbox = (event) => {
        this.setState({
            active: event.target.checked
        });
    }

    render () {
        const { tech, techs, active } = this.state;
    return (
        <div>
            <h2>Etiqueta Select {tech}</h2>
            <form>
                <select value={tech} onChange={this.handleChange}>
                    <option value="Angular">Angular</option>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                    <option value="Vanilla">Vanilla</option>
                </select>
            </form>
            <h2>Etiqueta Select  Multiple</h2>
            <form>
                <select
                    value={techs}
                    onChange={this.handleChangeMultiple}
                    multiple
                >
                    <option value="Angular">Angular</option>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                    <option value="Vanilla">Vanilla</option>
                </select>
            </form>
            <ul>
                { techs.map((tech, i) => <li key={i}>{tech}</li>) }
            </ul>
            {
                active && (
                    <h2>Checkbox </h2>
                )
            }
            <input
                type="checkbox"
                checked={active}
                onChange={this.handleCheckbox}  
            />
        </div>
    )
    }
}


export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: ''
        }
    }
    handleData = (data) => {
        console.log(data);
    }
    update = (name, text) => {
        this.setState({
          [name]: text
        })
    }
    render() {
        const { name, email } = this.state;
        return(
            <>
                <h2>Inputs No Controlados</h2>
                <InputNoControlado onSendData={this.handleData}/>

                <h2>Inputs Controlados</h2>
                <InputControlado
                    onChange={this.update}
                    placeholder='Nombre Completo'
                    name='name'
                />
                <InputControlado
                    onChange={this.update}
                    placeholder='Tu Email'
                    name='email'
                />
                <h3>Nombre: {name}</h3>
                <h3>Email: {email}</h3>

                <Select />
            </>
        );
    }
}