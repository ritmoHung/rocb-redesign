// Components & UI
import Banner from "@/components/main/hompage/banner";
import { Pattern2 } from "@/components/main/hompage/patterns";
import { HompageSection, NewsSectionContent, PhotosSectionContent, VideosSectionContent } from "@/components/main/hompage/sections";

const HOMEPAGE_SECTIONS = [
	{
		title: "最新消息",
		titleEn: "News",
		content: <NewsSectionContent />,
	},
	{
		title: "相片集錦",
		titleEn: "Photos",
		content: <PhotosSectionContent />,
	},
	{
		title: "活動影音",
		titleEn: "Videos",
		content: <VideosSectionContent />,
	}
];



export default function Homepage() {
	return (
		<>
			<header className="h-svh">
				<Banner />
			</header>
			<main>
				<div className="my-16">
					{HOMEPAGE_SECTIONS.map((section, index) => (
						<HompageSection key={index} title={section.title} titleEn={section.titleEn}>
							{section.content}
						</HompageSection>
					))}
				</div>
				<Pattern2 />
			</main>
		</>
	);
}