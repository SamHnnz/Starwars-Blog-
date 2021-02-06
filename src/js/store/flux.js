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
			planets: [],
			vehicles: [],
			people: [],
			favorites: []
		},
		actions: {
			getData: type => {
				fetch(`https://swapi.dev/api/${type}/`)
					.then(response => response.json())
					.then(result => {
						if (type === "planets") {
							setStore({ planets: result.results });
						}
						if (type === "people") {
							setStore({ people: result.results });
						}
						if (type === "vehicles") {
							setStore({ vehicles: result.results });
						}
					})
					.catch(error => console.log("error", error));
			},
			getPlanets: () => {
				getActions().getData("planets");
			},
			getVehicles: () => {
				getActions().getData("vehicles");
			},
			getPeople: () => {
				getActions().getData("people");
			},
			addFavorite: name => {
				const store = getStore();
				let verifyFavorite = store.favorites.includes(name);
				if (verifyFavorite === false) {
					var favs = store.favorites.concat(name);
					setStore({ favorites: favs });
				}
			},
			deleteFavorite: name => {
				const store = getStore();
				const newList = store.favorites.filter(item => item !== name);
				setStore({ favorites: newList });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
