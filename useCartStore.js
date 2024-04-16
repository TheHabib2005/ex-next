// import { CartProductsTYPE, ProductsTYPE } from "@/constant-type";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";



export const useCartStore = create()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addToCart: (products) => {
        
          set({ cart: products });
        
        }
      }),
      {
        name: "mtcar2",
      }
    )
  )
);
