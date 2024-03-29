import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from '../Components/utils/global.context'
import axios from "axios"



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {state, dispatch} = useGlobalContext()
  const {dentist} = state
  console.log(dentist);
  const navigate = useNavigate() 
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_DENTIST', payload: res.data}))
  }, [])

  return (
    <div className='cardDetail'>
      <h1>{dentist.name}</h1> 
      <img src="../../public/images/doctor.jpg" className='docImg'/>
      <h3>Mail: {dentist.email}</h3>
      <h4>Phone: {dentist.phone}</h4>
      <h4>Website: {dentist.website}</h4>
     
      <button>Add fav</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default Detail