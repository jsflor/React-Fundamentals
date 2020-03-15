import React, { Component } from 'react'
import propTypes from 'prop-types'

const Header = () => {
    const subtitleStyles = {
        fontWeight: 'bold'
    };

    const headerStyles  = {
        margin: '0.6em',
        borderRadius: '0.3em',
        border: '1px solid #d2d2d2',
        padding: '2em 0.4em',
        fontFamily: 'monospace',
        fontSize: '17px',
        textAlign: 'center'
    };

    return (
        <header style={headerStyles}>
            <div>
                ( Hijo a Padre )
            </div>
            <div style={subtitleStyles}>
                Render Props
            </div>
        </header>
    )
};

const boxStyles = {
    padding: '0.5em',
    margin: ' 0.5em',
    border: '1px solid gray',
    borderRadius: '0.3em',
    textAlign: 'center'
};

class Resize extends Component {
    static propTypes = {
        render: propTypes.func.isRequired
    };
    state = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    componentDidMount () {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillMount () {
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    render () {
        const { width, height } = this.state;
        const { render } = this.props;
        return render({ width, height })
    }
}


class List extends Component {
    render () {
        const { list, render } = this.props;
        return (
            <div>
                {list.map((item, index) => {
                    if (render) {
                        return render(item, index);
                    }
                    return (
                        <li key={item.name}>
                            { item.name }
                        </li>
                    )
                })}
            </div>
        )
    }
}

class RenderProp extends Component {
    state = {
        fruits: [
            { name: 'Fresa', price: 22 },
            { name: 'Mango', price: 18 },
            { name: 'Sandia', price: 24 },
            { name: 'Manzana', price: 12 },
        ]
    };

    render () {
        const { fruits } = this.state;
        return (
            <div style={boxStyles}>
                <Header />
                <List
                    list={fruits}
                />
                <Resize
                    render={({ width, height }) => {
                        return (
                            <div>
                                <h1>Width: { width }</h1>
                                <li>{ height }</li>
                            </div>
                        )
                    }}
                />
            </div>
        )
    }
}

export default RenderProp;