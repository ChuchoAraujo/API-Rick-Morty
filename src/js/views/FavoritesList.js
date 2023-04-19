import React, { useContext } from 'react'
import { Context } from "../store/appContext";
import { BsFillTrash3Fill } from 'react-icons/bs';

export const FavoritesList = () => {
    const { store, actions } = useContext(Context);


  return (
    <div className='container-fav'>
        {store.favorites.map((fav, index)=> (
          <div key={index} className='card-body-fav'>
            <img src={fav.image} />
            <div className='card-texto'>
              <p><strong>{fav.name}</strong></p>
              <button className='btn btn-danger' onClick={() => actions.removeFavorite(fav)}><BsFillTrash3Fill /></button>
            </div>
            
            </div>
        ))}
    </div>
  )
}
