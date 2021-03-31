import React, { Fragment } from 'react'
import Menu from '../General/Menu.js'
import Footer from '../General/Footer.js'
import Carousel from './CarouselImagen'
const Home = () => (

    <Fragment>
        <Menu />
        <Carousel />
        <Footer />
    </Fragment>
)

export default Home

// function Home() {
//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-8">
//                     <div className="card text-center">
//                         <div className="card-header"><h2>HOME 2</h2></div>
//
//                         <div className="card-body">HOME 2</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Home;
