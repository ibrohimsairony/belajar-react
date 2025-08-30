import { create } from "zustand";

// Buat hook store untuk cart
const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
}));

// Buat hook store untuk login
const useLoginStore = create((set) => ({
  status: false,
  login: () => set({ status: true }),
}));

// Contoh penggunaan di luar komponen React
// Kamu bisa menggunakan hook ini di komponen React manapun

// Dapatkan state awal
console.log("initial cart store:", useCartStore.getState().cart);
console.log("initial login store:", useLoginStore.getState().status);

// Langganan (subscribe) untuk melacak perubahan state
useCartStore.subscribe((state) => {
  console.log("update cart store:", state.cart);
});
useLoginStore.subscribe((state) => {
  console.log("update login store:", state.status);
});

// Ubah state dengan memanggil fungsi yang ada di store
useCartStore.getState().addToCart({ id: 1, qyt: 2 });
useCartStore.getState().addToCart({ id: 1, qyt: 2 });
useCartStore.getState().addToCart({ id: 1, qyt: 2 });
useLoginStore.getState().login();
