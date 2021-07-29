const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		
			product:[
			
				{
					id: 1,
					label:"data Entry",
					description:"",
					image:"../images/image23.jpg"
				},
				{
					id: 2,
					label:"patient billing",
					description:"mkkmmjm",
					image:"../images/image3.jpg"
				},
				{
					id: 3,
					label:"insurance payment posting",
					description:"jnnjnjnj",
					image:"shutterstock_375018883.jpg"
				},
				{
					id: 4,
					label:"file claims",
					description:"njjnnjj",
					image:"../src/../images/shutterstock_375018883.jpg"
				},
			]
			
			
	
			
		},
		actions: {
	
		}
	};
};

export default getState;