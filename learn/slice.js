import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: { status: false },
  reducers: {
    login(state) {
      state.status = true;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    login: loginSlice.reducer,
  },
});

console.log("onitial store : ", store.getState());

store.subscribe(() => {
  console.log("upadate store : ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 1, qyt: 2 }));
store.dispatch(loginSlice.actions.login());
