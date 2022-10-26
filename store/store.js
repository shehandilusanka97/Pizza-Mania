// zustand
import create from "zustand";
export const useStore = create((set) => ({
  // cart
  cart: {
    pizzas: [],
  },
  // Add pizza

  addPizza: (data) =>
    set((state) => ({
      cart: {
        pizzas: [...state.cart.pizzas, data],
      },
    })),
}));
