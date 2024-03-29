import React from 'react'
import { routes } from '../Components/utils/routes'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={routes.home}><button>Home</button></Link>
      <Link to={routes.contact}><button>Contact</button></Link>
      <Link to={routes.favs}><button>Favs</button></Link>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar