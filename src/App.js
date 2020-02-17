import React from 'react'
import TarjetaFruta from './components/TarjetaFruta';
import TarjetaFrutaII from './components/TarjetaFrutaII';

const App = () => (
    <div>
        <TarjetaFruta name='Kiwi' price={3} />
        <TarjetaFrutaII name='Naranja' price={2} />
    </div>
)

export default App;