import React, { useContext } from 'react'
import { Context } from "../store/appContext";
import { BsFillTrash3Fill } from 'react-icons/bs';

export const FavoritesList = () => {
    const { store, actions } = useContext(Context);


  return (

    <>    
    <h1 className='title_fav'>Favorites list</h1>
    <div className='container-fav'>
        {store.favorites.map((fav, index)=> (
          <div key={index} className='card-body-fav'>
            <img src={fav.image} />
            <div className='card-texto'>
              <p><strong>{fav.name}</strong></p>
              <BsFillTrash3Fill onClick={() => actions.removeFavorite(fav)} className='icon_trash'/>
            </div>
            
          </div>
        ))}
    </div>
    </>

  )
}
