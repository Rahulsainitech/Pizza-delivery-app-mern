export const getAllPizzaReducer = (state = {pizzas:[]}, action) => {
  switch (action.type) {
    case "GET_PIZZA_REQUEST":
      return {
        ...state,
        loading:true
      };
    case "GET_PIZZA_SUCCESS":
      return {
        pizzas: action.payload,
        loading:false
      };
    case "GET_PIZZA_FAIL":
      return {
        error: action.payload,
        loading:false
      };
    default:
      return state;
  }
};

export const addPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PIZZA_REQUEST":
      return {
        ...state,
        loading:true
      };
    case "ADD_PIZZA_SUCCESS":
      return {
        pizzas: action.payload,
        success:true,
        loading:false
      };
    case "ADD_PIZZA_FAIL":
      return {
        error: action.payload,
        loading:false
      };
    default:
      return state;
  }
};

export const getPizzaByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PIZZABYID_REQUEST":
      return {
        ...state,
        loading:true
      };
    case "GET_PIZZABYID_SUCCESS":
      return {
        pizza: action.payload,
        success:true,
        loading:false
      };
    case "GET_PIZZABYID_FAIL":
      return {
        error: action.payload,
        loading:false
      };
    default:
      return state;
  }
};

export const updatePizzaByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PIZZABYID_REQUEST":
      return {
        ...state,
        updateloading:true
      };
    case "UPDATE_PIZZABYID_SUCCESS":
      return {
        updatesuccess:true,
        updateloading:false
      };
    case "UPDATE_PIZZABYID_FAIL":
      return {
        updateerror: action.payload,
        updateloading:false
      };
    default:
      return state;
  }
};