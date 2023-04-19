import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';

export const CardCharacter = ({ characters }) => {
    const { store, actions } = useContext(Context);

    const [favoriteStatus, setFavoriteStatus] = useState({});

    useEffect(() => {
        const favoriteIds = store.favorites.map((favorite) => favorite.id); // ceramos variable nueva para recorrer los favs del store
        
        const newFavoriteStatus = {};

        characters.forEach((character) => { // iteramos sobre los characters
            newFavoriteStatus[character.id] = favoriteIds.includes(character.id);
            // console.log(newFavoriteStatus) // buscamos si algun id del store coincide con el id del character del home
        });
        setFavoriteStatus(newFavoriteStatus); // actualizamos el estatus con el valor encontrado
    }, [store.favorites, characters]);

    const handleClick = (character) => {
        actions.selectId(character);
        actions.addFavorite();
        setFavoriteStatus((prevState) => ({
            ...prevState,
            [character.id]: !prevState[character.id],
        }));
    };

    return (
        <>
            <div className="container-card">
                {characters.map((character, index) => {
                    const isFavorite = favoriteStatus[character.id];
                    const color = isFavorite ? 'icon_green' : '';
                    const iconClasses = `icono_heart${color === 'icon_green' ? ' icon_green_dark' : ''
                        }`;
                    return (
                        <div key={index} className="card-body efecto">
                            <img src={character.image} />
                            <div className="card-texto">
                                <Link to={`/character/${character.id}`}>
                                    <p>
                                        <strong>{character.name}</strong>
                                    </p>
                                    <p>Species{character.species}</p>
                                    <p>Origin: {character.origin.name}</p>
                                </Link>
                                <AiFillHeart
                                    onClick={() => handleClick(character)}
                                    className={iconClasses}
                                    isFavorite={isFavorite}
                                    characterId={character.id}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
