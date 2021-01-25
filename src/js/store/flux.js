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
			people: []
		},
		actions: {
			getData: type => {
				fetch(`https://swapi.dev/api/${type}/`)
					.then(response => response.json())
					.then(result => {
						if (type === "planets") {
							setStore({ planets: result.results });
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
