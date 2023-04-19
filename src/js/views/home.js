import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardCharacter } from "./CardCharacter";

export const Home = () => {

	const [characters, setCharacters] = useState([])
	const [favorites, setFavorites] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState(0)

	useEffect(() => {
		const getAllCharacters = async () => {
			const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
			const data = await response.json()
			setCharacters(data.results)
			setTotalPages(data.info.pages)
		};

		getAllCharacters();
	}, [currentPage])

	const handleAddFavorites = (character) => {
		setFavorites([...favorites, character]);
	}

	const handlePrevPage = () => {
		setCurrentPage(currentPage -1 )
	}

	const handleNextPage = () => {
		setCurrentPage(currentPage + 1)
	}



	return (
		<div className="text-center mt-5">
			<h1><strong>Chose your character</strong></h1>
			<div className="m-5">
				<CardCharacter characters={characters} handleAddFavorites={handleAddFavorites} />
				<div>
					<button onClick={handlePrevPage} className="button-pagination" disabled={currentPage <= 1}>Prev</button>
					<button onClick={handleNextPage} className="button-pagination" disabled={currentPage >= totalPages}>Next</button>
				</div>
			</div>
			
		</div>
	)

};
