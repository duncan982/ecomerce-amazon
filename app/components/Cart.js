'use client'
import { Store } from '@/app/contexts/Store';
import { useContext, useState, useEffect } from "react";
export default function Cart() {
  const { state, dispatch } = useContext(Store)
  const { cart } = state
  const [cartLength, setCartLength] = useState(0)

  useEffect(()=>{
    console.log(cart.cartItems.length)
setCartLength(cart.cartItems.length)
  }, [cart.cartItems.length])
  return (
      // <div>{cart.cartItems.length > 0 && <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
      //     {cart.cartItems.reduce((a, c) => a + c.quantity, 0) }
      // </span>}</div>
      <div >Cart<span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>{cartLength}</span></div>
  )
}
