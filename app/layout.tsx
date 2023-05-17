import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Analytics } from "./components/analytics";

export const metadata = {
	title: "ismail yarar",
	description:
		"Front-end developer with expertise in React, Next.js, and HTML/CSS. Skilled in using Tailwind CSS, Bootstrap, and JavaScript.",
	openGraph: {
		title: "ismail yarar",
		description:
			"Front-end developer with expertise in React, Next.js, and HTML/CSS. Skilled in using Tailwind CSS, Bootstrap, and JavaScript.",
		url: "https://ismailyarar.vercel.app/",
		siteName: "ismail yarar",
		images: [
			{
				url: "https://ismailyarar.vercel.app/og.png",
				width: 742,
				height: 212,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "İsmail Yarar",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				<Analytics />
				{children}
			</body>
		</html>
	);
}
