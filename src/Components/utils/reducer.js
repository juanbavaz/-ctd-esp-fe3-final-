import { json } from "react-router-dom";

export const reducer = (state, action) => {
      switch(action.type){
            case 'GET_LIST':
                  const initFavsIndex = new Array(action.payload.length).fill(0);
                  
                  return {...state, data: action.payload, favsIndex: initFavsIndex}
              
            case 'ADD_FAV':
                

                  let jsonObject = JSON.parse( localStorage.getItem( "favs" ) );
            
                  jsonObject.push( action.payload );
         
                  console.log( jsonObject );

                  localStorage.setItem( "favs", JSON.stringify( jsonObject ) );
             
                  console.log( localStorage.getItem( "favs" ) );

                  const actFavsIndex = state.favsIndex
                  actFavsIndex[action.payload.id] = 1;
                  
                  return { ...state, favsIndex: actFavsIndex };

            case 'DEL_FAV':
           

                  let jsonObject2 = JSON.parse( localStorage.getItem( "favs" ) );
        

                  let i = 0, found = false, toDelete = 0;

                  while ( found === false && i < jsonObject2.length ) {
                        if( action.payload === jsonObject2[i].id ){
                              found = true;
                              toDelete = i;
                        }
                        i++
                  }

                  console.log( "objetito:" + jsonObject2[toDelete].id + jsonObject2[toDelete].name );

                  jsonObject2.splice( toDelete, 1 );

                  localStorage.setItem( "favs", JSON.stringify( jsonObject2 ) );

                  const actFavsIndexDel = state.favsIndex;
                  actFavsIndexDel[action.payload] = 0;
                  
                  return { ...state, favsIndex: actFavsIndexDel };
                  
            case 'GET_DENTIST':
                  return {...state, dentist: action.payload}     
      }
}
