import React, { useEffect, useState } from 'react'


import { useGlobalContext } from '../Components/utils/global.context'

import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {

      const {state} = useGlobalContext();
      const {data} = state
      const [Loading, setLoading] = useState(true)

      useEffect(() => {
            setTimeout(() => {
                  setLoading(false)
            }, 1000);
      }, [])
       

      console.log( state );

      return (
            <div className="" >
                  <h1>Home</h1>
                  { Loading  ? <p>Loading...</p> :
                  <div className='card-grid'>
                        {data.map(item => <Card key={item.id} itemProps={item}/> )}
                
                  </div>}
            </div>
      )

}

export default Home
