import Image from "next/image";
import Link from "next/link";

// Components & UI
import { Card, Grid, Heading, Text } from "@radix-ui/themes";

// Icons & Images
import Placeholder from "/public/imgs/pattern1.svg";



export function NewsCard({ className, title, date, imgSrc, href, priority = false }) {
	return (
		<Card size="3" className={`${className}`} asChild>
			<Link href={href || "#"}>
				<Grid gap="3" mb="6">
					<Text as="div" trim="both" size="3" color="gray">{date}</Text>
					<Heading as="h3" trim="both" size={{ initial: "5", xs: "6" }} className="text-accent whitespace-pre-wrap">
						{title}
					</Heading>
				</Grid>
				<Image
					src={imgSrc || Placeholder}
					alt={title}
					className="object-cover aspect-[3/2] rounded-lg"
					quality={75}
					priority={priority}
				/>
			</Link>
		</Card>
	);
}