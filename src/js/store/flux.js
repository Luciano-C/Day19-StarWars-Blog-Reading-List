const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favoritesList: [
				/* {name: "Luke Skywalker"} */
			],

			characters: [
				{ name: "Rick Sanchez", gender: "Male", status: "Alive", species: "Human", src: "https://rickandmortyapi.com/api/character/avatar/1.jpeg" },
				{ name: "Morty Smith", gender: "Male", status: "Alive", species: "Human", src: "https://rickandmortyapi.com/api/character/avatar/2.jpeg" },
				{ name: "Summer Smith", gender: "Female", status: "Alive", species: "Human", src: "https://rickandmortyapi.com/api/character/avatar/3.jpeg" }
			],

			charactersURL: []
		},


		actions: {

			deleteFavorite: (nameToDelete) => {
				const store = getStore();
				const favorites = store.favoritesList.filter(x => x.name !== nameToDelete);
				setStore({ favoritesList: favorites });
			},

			addFavorite: (nameToAdd) => {
				const store = getStore();
				const favorites = store.favoritesList;
				favorites.push({ name: nameToAdd });
				setStore({ favoritesList: favorites });
			},


			loadCharactersURL: () => {
				fetch("https://www.swapi.tech/api/people?page=1&limit=100")
					.then(response => response.json())
					.then(result => setStore({ charactersURL: result.results.map(x => x.url) }))
					.then(console.log(getStore()))
					.catch(error => console.log('error', error));
			},




			loadSomeData: () => {


				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
