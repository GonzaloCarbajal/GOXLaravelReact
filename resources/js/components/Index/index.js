import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "../Home/Home"
import Producto from "../Producto/Producto"
import Acerca_De from "../AcercaDe/Acerca_De"

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/producto" component={Producto} />
            <Route exact path="/acerca_de" component={Acerca_De} />
        </Switch>
    </BrowserRouter>
)

export default App

if (document.getElementById('index')) {
    ReactDOM.render(<App />, document.getElementById('index'));
}
