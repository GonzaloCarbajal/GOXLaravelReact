import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./Home"
import Producto from "../Producto/Producto"

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/producto" component={Producto} />
        </Switch>
    </BrowserRouter>
)

export default App


// function Home() {
//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-8">
//                     <div className="card text-center">
//                         <div className="card-header"><h2>HOME</h2></div>
//
//                         <div className="card-body">HOME</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<App />, document.getElementById('home'));
}
