import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_SESSION");
const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});

console.log("onitial store : ", store.getState());

store.subscribe(() => {
  console.log("upadate store : ", store.getState());
});

store.dispatch(addToCart({ id: 1, qyt: 2 }));
store.dispatch(login());
