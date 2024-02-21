const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export const fetchMakes = () => {
    return (dispatch) => { // Redux Thunk allows returning a function that takes dispatch as an argument
        fetch(url) // Perform a fetch to the defined URL
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                dispatch({ // Dispatch an action with type 'FETCH_MAKES' and value as 'data.Results'
                    type: 'FETCH_MAKES',
                    value: data.Results
                });
            })
            .catch(error => {
                console.error('Error fetching makes:', error); // Handle any errors
            });
    };
};