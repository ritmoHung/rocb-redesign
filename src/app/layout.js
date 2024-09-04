import Providers from "@/lib/providers";
import { getBaseUrl } from "@/lib/utils";

// CSS
import "@radix-ui/themes/styles.css";
import "styles/globals.css";

// Components & UI
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

// Fonts
import { Noto_Sans_TC, Plus_Jakarta_Sans } from "next/font/google";
const notoSansTC = Noto_Sans_TC({
	weight: "variable",
	style: ["normal"],
	display: "swap",
	subsets: ["latin"],
	variable: "--font-noto-sans-tc",
});
const plusJakartaSans = Plus_Jakarta_Sans({
	weight: "variable",
	style: ["normal"],
	display: "swap",
	subsets: ["latin"],
	variable: "--font-plus-jakarta-sans",
});

// Metadata
const title = "中華民國 113 年國慶．改";
const description = "請注意：此頁面並非官方網站，僅為個人重新設計的示範網站！";
const url = getBaseUrl();
export const metadata = {
    metadataBase: new URL(url),
    title: {
        default: title,
        template: `%s｜${title}`,
    },
	description,
    openGraph: {
        title,
        description,
        url,
		siteName: title,
        locale: "zh_TW",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        site: "@ritmo_v0",
        siteId: "904003428262723584",
        creator: "@ritmo_v0",
        creatorId: "904003428262723584",
    },
};



export default function RootLayout({ children }) {
	return (
		<html lang="zh-Hant-TW" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
				<link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/<generated>" sizes="<generated>" />
			</head>
			<body className={`grid grid-rows-[auto_1fr_auto] min-h-svh overflow-x-hidden
							  ${notoSansTC.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}