
import './NavBar.css'

import CartWidget from '../CartWidget/CartWidget'

const navBar =() => {
    
    return (

        <header className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div>
            <img className='imgLogo' src={process.env.PUBLIC_URL+'/assets/logo.png'} alt='' />
            </div>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <nav className=" collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className=" li navbar-nav">
              <li className=" nav-link active" aria-current="page" href="#">INICIO</li>
              <li className="nav-link" href="#">PELOTAS</li>
              <li className="nav-link" href="#">CONOS</li>
              <li className="nav-link disabled">OTROS</li>
            </ul>
            </nav>
            <CartWidget />
            </div>
            </header>

    )
}

export default navBar
