// Components & UI
import Banner from "@/components/main/hompage/banner";
import { HompageSection, NewsSectionContent, PhotosSectionContent, VideosSectionContent } from "@/components/main/hompage/sections";

// Icons & Images
import Pattern2 from "/public/imgs/pattern2.svg";

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
			<main className="mt-16">
				{HOMEPAGE_SECTIONS.map((section, index) => (
					<HompageSection key={index} title={section.title} titleEn={section.titleEn}>
						{section.content}
					</HompageSection>
				))}
				<div
					style={{ backgroundImage: `url(${Pattern2.src})` }}
					className="[--size:_312px] h-[calc(2/3_*_var(--size))] sm:h-[var(--size)] bg-[auto_var(--size)] bg-zinc-200 dark:bg-zinc-900"
				></div>
			</main>
		</>
	);
}