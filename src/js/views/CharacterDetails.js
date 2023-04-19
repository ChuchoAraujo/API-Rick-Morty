import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../store/appContext";
import { useParams } from 'react-router'
import { AiFillHeart } from 'react-icons/ai';


export const CharacterDetails = () => {
    const { store, actions } = useContext(Context);

    const { id } = useParams()

    const [oneCharacter, setOneCharacter] = useState(null)
    const [color, setColor] = useState('null')

    const handleClick = () => {
        setColor('green'); 
    };
    const buttonClasses = `button-fav${color === 'green' ? ' green_dark' : ''}`

    useEffect(() => {
        const getOneCharacter = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await response.json()
            setOneCharacter(data)
        }
        getOneCharacter()
    }, [id])

    return (
        <div className='container-single'>
            {oneCharacter && (
                <div className='card-body-single efecto-single'>
                    <img src={oneCharacter.image} />
                    <div className='card-texto'>
                        <p><strong>{oneCharacter.name}</strong></p>
                        <p>Species:  {oneCharacter.species}</p>
                        <p>Gender:  {oneCharacter.gender}</p>
                        <p>Location:  {oneCharacter.location.name}</p>                      
                        <p>Origin: {oneCharacter.origin.name}</p>
                        <p>Status:  {oneCharacter.status}</p>
                        <button 
                        onClick={() => {
                            actions.selectId(oneCharacter);
                            actions.addFavorite();
                            handleClick()
                        }} 
                        className={buttonClasses}>Add Fav:  <AiFillHeart /></button>
                    </div>

                </div>
            )}
        </div>
    )
}
