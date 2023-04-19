const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			idCharacter: {},
		},
		actions: {
			selectId: (character) => {
				setStore({ idCharacter: character });
				// console.log(getStore().idCharacter)
			},
			addFavorite: () => {
				const store = getStore();
				const newFavorite = store.idCharacter;
				setStore({ favorites: [...store.favorites, newFavorite] });
				// console.log(getStore().favorites)
			},
			removeFavorite: (fav) => {
				const store = getStore();
				const updatedArray = store.favorites.filter((favorite) => favorite !== fav);
				setStore({ favorites: updatedArray });
			},
		}
	};
};

export default getState;
