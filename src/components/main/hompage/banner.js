import Image from "next/image";

// Components & UI
import { WrapperLayout } from "@/components/common/layouts";
import { Flex, Grid, Heading, Text } from "@radix-ui/themes";

// Icons & Images
import BannerImg from "/public/imgs/banner.svg";
import TwFlag from "/public/imgs/tw-flag.svg";
import Pattern1 from "/public/imgs/pattern1.svg";



export default function Banner() {
	return (
		<Grid rows="1fr auto" height="100%">
			<WrapperLayout className="auto-rows-min gap-16 justify-items-center content-center min-w-60">
				<Image
					src={BannerImg}
					alt="華民國 113 年國慶主視覺"
					className=""
					quality={75}
					priority
				/>
				<Grid gapY="4" className="sm:justify-items-center">
					<Heading size={{ initial: "7", xs: "8" }} className="inline-flex flex-wrap items-center gap-x-4 xs:gap-x-6 text-accent">
						<Flex gapX="2">
							<Text as="span">中</Text>
							<Text as="span">華</Text>
							<Text as="span">民</Text>
							<Text as="span">國</Text>
						</Flex>
						<Image
							src={TwFlag}
							alt="台灣國旗"
							className="pointer-events-none inline-block size-[1.2em]"
							quality={75}
						/>
						<Flex gapX="2">
							<Text as="span">生</Text>
							<Text as="span">日</Text>
							<Text as="span">快</Text>
							<Text as="span">樂</Text>
						</Flex>
					</Heading>
					<Text as="span" size={{ initial: "3", xs: "5" }} wrap="pretty" className="text-accent font-semibold">
						A Beautiful Taiwan Today, <br className="xs:hidden" />A Better Taiwan Tomorrow.
					</Text>
				</Grid>
			</WrapperLayout>
			<div
				style={{ backgroundImage: `url(${Pattern1.src})` }}
				className="[--size:_360px] h-[calc(2/3_*_var(--size))] sm:h-[var(--size)] bg-[auto_var(--size)]"
			></div>
		</Grid>
	);
}