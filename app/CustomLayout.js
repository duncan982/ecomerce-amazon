"use client"
import "./globals.css"
import {StoreProvider} from "./contexts/Store"
import Navbar from './components/Navbar'
import { useEffect, useState } from "react"


export default function CustomLayout({
  children,
}) {

  //the following code matches server and client side rendering to avoid hydration errors

   const [isHydrated, setIsHydrated] = useState(false);

    //Wait till NextJS rehydration completes
    useEffect(() => {
        setIsHydrated(true);
    }, []);
  
  return (
    <di>
      {isHydrated ?
              (<StoreProvider>
                <Navbar />
                {children}
              </StoreProvider>) : <div>Loading...</div>}
    </di>
            
     
  )
}
