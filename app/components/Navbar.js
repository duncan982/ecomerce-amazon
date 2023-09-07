"use client";
import { useContext } from "react";
import { Store } from "@/app/contexts/Store";
import Link from "next/link";
import { useSession } from "next-auth/react";
// import 'react-toastify/dist/ReactToastify.css'
export default function Navbar() {
	const { status, data: session } = useSession();
	
	const { state } = useContext(Store);
	const { cart } = state;

	return (
		<>
			<header>
				<nav className="flex h-12 items-center px-4 justify-between shadow-md">
					<Link
						href={"/"}
						className="text-lg font-bold">
						Amazona
					</Link>
					<div>
						<Link
							href={"/cart"}
							className="p-2">
							Cart{" "}
							{cart.cartItems.length > 0 && (
								<span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
									{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
								</span>
							)}
						</Link>
						{
							status === "loading" ? (
								"Loading"
							): session?.user ?(
								session.user.name
							):(
								<Link
									href={"/login"}
									className="p-2">
									Login
								</Link>
							)
						}
					</div>
				</nav>
			</header>
		</>
	);
}
