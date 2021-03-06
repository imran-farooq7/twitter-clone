import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
	return (
		<div className="bg-black">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className=" min-h-screen flex max-w-[1500px] mx-auto ">
				<Sidebar />
			</main>
		</div>
	);
}
