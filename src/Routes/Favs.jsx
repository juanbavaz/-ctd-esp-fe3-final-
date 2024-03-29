import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
    
      const favoriteDentists = JSON.parse( localStorage.getItem( "favs" ) );

      const {state} = useGlobalContext();
      return (
            <>
                  <h1>Dentists Favs</h1>
                  <div className="card-grid">
                        {/* este componente debe consumir los destacados del localStorage */}
                        {/* Deberan renderizar una Card por cada uno de ellos */}
                        {favoriteDentists.map(item => <Card key={item.id} itemProps={item}/> )}
                  </div>
            </>
      );
};

export default Favs;
