import Image from "next/image";

// Components & UI
import { WrapperLayout } from "@/components/common/layouts";
import { NewsCard } from "./news-card";
import { Button, Grid, Heading, Section, Text } from "@radix-ui/themes";

// Icons & Images
import PlumBlossom from "/public/imgs/plum-blossom.svg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";



export function HompageSection({ className, title, titleEn, children }) {
	return (
		<Section size={{ initial: "3", sm: "4" }} className={`${className}`}>
			<WrapperLayout>
				<Heading
					as="h2"
					size={{ initial: "6", xs: "7" }}
					mb={{ initial: "5", xs: "7" }}
					className="justify-self-center inline-flex items-center gap-x-3 w-max text-accent"
				>
					<Text as="span">{title}</Text>
					<Image
						src={PlumBlossom}
						alt="梅花"
						className="pointer-events-none inline-block size-[1em]"
						quality={75}
					/>
					<Text as="span" weight="light" className="uppercase">{titleEn}</Text>
				</Heading>
				<Grid className="justify-items-center">
					{children}
				</Grid>
			</WrapperLayout>
		</Section>
	);
}

export function NewsSectionContent() {
	const news = [
		{
			title: "國慶大會邀民眾觀禮限量 500 名\n9/5 起開放報名",
			date: new Date(2024, 8, 3),
		},
		{
			title: "國慶日 Coming Soon",
			date: new Date(2024, 8, 3),
		}
	];

	return (
		<>
			<Grid flow={{ initial: "row", sm: "column" }} columns={{ initial: "1", sm: "2", lg: "3" }} gap="5">
				{news.map((newsItem, index) => (
					<NewsCard key={index} className="w-full" title={newsItem.title} date={newsItem.date.toLocaleDateString()} />
				))}
			</Grid>
			<Button type="button" title="更多最新消息" size="4" mt="5" radius="full" className="justify-self-end">
				<Text as="span">更多最新消息</Text>
				<ArrowRightIcon className="size-[1.2em]" />
			</Button>
		</>
	);
}

export function PhotosSectionContent() {
	return (
		<>
			<p>To be done...</p>
		</>
	);
}

export function VideosSectionContent() {
	return (
		<iframe
			width="768"
			height="432"
			src="https://www.youtube.com/embed/iR5-mVrvcow"
			title="113年國慶預告｜一年不見，我們回來了！"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerPolicy="strict-origin-when-cross-origin"
			allowFullScreen
			className="justify-self-center rounded-2xl"
		></iframe>
	);
}