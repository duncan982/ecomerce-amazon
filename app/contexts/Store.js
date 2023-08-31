'use client'
import { createContext, useReducer } from 'react';

const initialState = {
  cart: { cartItems: [] },
};

export const Store = createContext({ state: initialState, dispatch: () => null });

function reducer(state, action) {
  // console.log("action.type:", action.type)
  // console.log("action.payload:", action.payload)
  
  console.log("state.cart.cartItems before", state.cart.cartItems)
  
  switch (action.type) {

    case 'CARD_ADD_ITEM': {
      // console.log("state.cart.cartItems before", state.cart.cartItems)
      // newItem = action.payload;
      // // console.log("newItem:", newItem)
      // existItem = state.cart.cartItems.find(
      //   (item) => item.slug === newItem.slug
      // );
      // cartItems = existItem
      //   ? state.cart.cartItems.map((item) =>
      //       item.name === existItem.name ? newItem : item
      //     )
      //   : [...state.cart.cartItems, newItem];
      let upDatedCartItems = [...state.cart.cartItems, action.payload]
      console.log("state.cart.cartItems after", upDatedCartItems)
      return { ...state, cart: { ...state.cart, cartItems: upDatedCartItems} };
      
    }
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={ value }>{children}</Store.Provider>;
}