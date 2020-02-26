import React from 'react'

const shopInfo = {
    name: 'Sebdev',
    owner: 'Sebastian',
    location: 'Mad',
    country: 'ESP',
    zipcode: '28400',
    telefon: '+34654666555'
};

const productsInfo = [
    {
        id: 1,
        name: 'Jeans',
        price: 20,
        colors: [
            {
                color: 'red'
            },
            {
                color: 'blue'
            },
            {
                color: 'green'
            }
        ]
    },
    {
        id: 2,
        name: 'Tshirt',
        price: 15,
        colors: [
            {
                color: 'black'
            },
            {
                color: 'white'
            },
            {
                color: 'red'
            }
        ]
    },
    {
        id: 3,
        name: 'Boots',
        price: 45,
        colors: [
            {
                color: 'red'
            },
            {
                color: 'blue'
            },
            {
                color: 'green'
            }
        ]
    },
    {
        id: 4,
        name: 'Scarf',
        price: 15,
        colors: [
            {
                color: 'yellow'
            },
            {
                color: 'grey'
            },
            {
                color: 'blue'
            }
        ]
    }
];

export default class App extends React.Component {
    state = {
        store: shopInfo,
        items: productsInfo
    }
    render(){
        const { store, items } = this.state;
        const keys = Object.keys(store);
        return (
            <>
                <ul>
                    {
                        keys.map((key, i) => (
                            <li key={i}><strong>{ key }</strong>: { store[key] }</li>
                        ))
                    }
                </ul>
                <ul>
                    {
                        items.map((item) => (
                            <li key={item.id}>
                                <p style={{marginBottom: 0}}>{ item.price }$ { item.name }</p>
                                Available colors:
                                <ul>
                                    {
                                        item.colors.map((color, i) => (
                                            <li key={i}>{ color.color }</li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </>
        );
    }
}