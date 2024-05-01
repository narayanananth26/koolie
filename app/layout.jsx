import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AuthProvider from "@/context/AuthProvider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<AuthProvider>
			<html lang="en">
				<body className={inter.className}>
					<Header />
					{children}
				</body>
			</html>
		</AuthProvider>
	);
}