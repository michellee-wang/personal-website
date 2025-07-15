import type { Metadata } from "next";
import { Krub, Inter } from "next/font/google";
import "./globals.css";

// Load fonts

import { getLocale, getGT } from "gt-next/server";
import { GTProvider } from "gt-next";
const krub = Krub({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-krub",
});

const inter = Inter({
	weight: ["300", "400", "500", "600"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
	const t = await getGT();
	return {
		title: t("Michelle Wang"),
		description: t(
			"Personal website of Michelle Wang - CS + Industrial Engineering student at Northwestern"
		),
		keywords: [
			t("Michelle Wang"),
			t("Northwestern"),
			t("CS"),
			t("Industrial Engineering"),
			t("Portfolio"),
			t("Student"),
		],
	};
}

export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			className={`${krub.variable} ${inter.variable}`}
			lang={await getLocale()}
		>
			<body className="font-body relative" suppressHydrationWarning>
				<GTProvider>
					<div className="page-background">
						<div className="noise-overlay"></div>
					</div>
					<main>{children}</main>
				</GTProvider>
			</body>
		</html>
	);
}
