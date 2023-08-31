'use client'
import {useContext, useState, useEffect} from "react"
import { Store } from '@/app/contexts/Store';
import Link from "next/link";
import Cart from './Cart';
export default function Navbar() {
  const { state, dispatch } = useContext(Store)
  const { cart } = state
  
  const [cartLength, setCartLength] = useState(0)

  useEffect(()=>{
    // console.log(cart.cartItems.length)
setCartLength(cart.cartItems.length)
  }, [cart.cartItems.length])

  return (
      <header>    
            <nav className="flex h-12 items-center px-4 justify-between shadow-md">
              <Link href={"/"} className="text-lg font-bold">
                Amazona
              </Link>
              <div>
                <Link href={"/cart"} className="p-2">
                  {/* Cart {cart.cartItems.length > 0 && <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
          {cart.cartItems.reduce((a, c) => a + c.quantity, 0) }
      </span>} */}
      Cart <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
          {cart.cartItems.length }
      </span> 
       {/* <Cart/> */}
                </Link>
                <Link href={"/login"} className="p-2">
                  Login
                </Link>
              </div>
            </nav>
              </header>
  );
}
