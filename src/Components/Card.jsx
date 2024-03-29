import React from "react";

import { useGlobalContext } from '../Components/utils/global.context'
import { routes } from "./utils/routes";
import { Link } from 'react-router-dom'

const Card = ({itemProps}) => { 
      const { id, name, username } = itemProps;
      const {state, dispatch} = useGlobalContext();

      const addFav = (e)=>{
            e.preventDefault();

            let selectedCard = {
                  id: id,
                  name: name,
                  username: username,
            };
            console.log( selectedCard );

            dispatch({type: 'ADD_FAV', payload: selectedCard});
      }

      const delFav = (e)=>{
            e.preventDefault();

            dispatch({type: 'DEL_FAV', payload: id});
      }

      console.log( state.favsIndex );
      return (
            <div className="card">
                  <Link to={'/dentist/' + id}> 
                        
                        <img src="../../public/images/doctor.jpg" alt="" className="docImg"/>
                        <h3>{name}</h3>
                        <p>{username}</p>
                        <p>{id}</p>
                  </Link>
             
                 
                  { 
                        state.favsIndex[id] === 0
                        ? <button onClick={addFav} className="favButton">Add favorite</button>
                        : <button onClick={delFav} className="favButton unselectedFav" >Remove Favorite</button>
                  }
            </div>
      );
};

export default Card;
