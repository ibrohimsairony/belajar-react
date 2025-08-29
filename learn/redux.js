import { legacy_createStore as createStore } from "redux";

// reducer
const cartReducer = (
  state = {
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
  }
};

// store
const store = createStore(cartReducer);
console.log(store.getState());

// subscribe
store.subscribe(() => console.log("onSubscribe", store.getState()));

// dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 1, qty: 1 } };
const action2 = { type: "ADD_TO_CART", payload: { id: 6, qty: 4 } };
store.dispatch(action1);
store.dispatch(action2);
