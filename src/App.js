import React from 'react'
import TarjetaFruta from './components/TarjetaFruta';
import TarjetaFrutaII from './components/TarjetaFrutaII';

class App extends React.Component {
    state = {
        name: 'Manzana',
        price: 4
    }
    render() {
        const otrosDatos = {
            name: 'Naranja',
            price: 3
        };
        return(
            <div>
                <TarjetaFruta name='Kiwi' price={2} />
                <TarjetaFrutaII name='Pera' price={5} {...otrosDatos}/>
                <TarjetaFrutaII {...this.state}/>
            </div>
        );
    }
}

export default App;