'use client'
import { Store } from '@/app/contexts/Store';
import { useContext } from "react";
import Link from 'next/link';
import Image from 'next/image';
import {XCircleIcon} from "@heroicons/react/outline";
import { useRouter } from "next/navigation"
export default function Cart() {
  const router = useRouter()
  const { state, dispatch } = useContext(Store)
  const { cart: { cartItems } } = state
  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  return (

    <div >
      <h1 className="mb-4 text-xl">Shopping cart</h1>
      {cartItems.length === 0 ? (<div>
        Cart is empty! <Link href={"/"}>Click here to continue Shopping.</Link>
      </div>) : (
        <div className='grid md:grid-cols-4 md:gap-5'>
            <div className="overflow-x-auto md:col-span-3">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                  <th className="px-5 text-left ">Item</th>
                  <th className="p-5 text-right ">Quantity</th>
                  <th className="p-5 text-rightt ">Price</th>
                  <th className="p-5 text-left ">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.slug} className='border-b'>
                      <td>
                        <Link href={`/product/${item.slug}`} className="flex items-center">
                          {/* <a className="flex items-center"> */}
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={50}
                              height={50}/>
                            &nbsp;
                            {item.name}
                          {/* </a> */}
                        </Link>
                      </td>
                      <td className='p-5 text-right'>{item.quantity}</td>
                      <td className='p-5 text-right'>{item.price}</td>
                      <td className='p-5 text-right'>
                        <button onClick={() =>{removeItemHandler(item)}}>
                          <XCircleIcon className="h-5 w-5"></XCircleIcon>
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
             
          </div>
           <div className="card p-5">
        <ul>
          <li>
            <div className="pb-3 text-xl">SubToTal ({cartItems.reduce((a, c) => a + c.quantity, 0)})
              : ${cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
              
            </div>
          </li>
                <li>
                  <button onClick={() => router.push('/shipping')} className="primary-button w-full">
Checkout
                  </button>
          </li>
        </ul>


      </div>
        </div>
      )}
      </div>
  )
}
