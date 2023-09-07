import "./globals.css";
import { Inter } from "next/font/google";
import CustomLayout from "./CustomLayout";
import {ToastContainer} from 'react-toastify'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Amazona",
	description: "Ecommerce Website",
};
<ToastContainer position="bottom-centre" limit={1}/>

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex min-h-screen flex-col justify-between">
					<main className="container m-auto mt-4 px-4">
						<CustomLayout>{children}</CustomLayout>
					</main>
					<footer className="flex h-10 justify-center items-center shadow-inner">
						<p>Copyright © 2022 Amazona</p>
					</footer>
				</div>
			</body>
		</html>
	);
}
