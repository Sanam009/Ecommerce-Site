const { createStore,applyMiddleware }=require("redux");
const {default:logger}=require("redux-logger");


// Action Types
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";


// Initial States
const initialProductState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2,
};



// Action Creators
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    };
};

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    };
};



// Reducers
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };
        default:
            return state;
    }
};



// Create Store
const store = createStore(productReducer,applyMiddleware(logger));

// Subscribe to store updates
store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch Actions
store.dispatch(getProducts());
store.dispatch(addProduct("pen"));

