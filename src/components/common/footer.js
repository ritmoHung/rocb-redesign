import { HIERACHY } from "@/lib/hierarchy";

// Components & UI
import { WrapperLayout } from "./layouts";
import { Grid, Link, Text } from "@radix-ui/themes";



export default function Footer() {
	return (
		<div className="bg-[#2B3440] py-12">
			<WrapperLayout flow={{ initial: "row", sm: "column" }} columns={{ initial: "1", sm: "auto 1fr" }} gapX="8rem" gapY="9">
				<Grid className="auto-rows-min w-max">
					<Text as="span" size={{ initial: "8", sm: "9" }} weight="bold" className="text-[#C39F60]">Taiwan</Text>
					<Text as="span" size={{ initial: "4", sm: "5" }} weight="bold" className="text-[#C39F60]">中華民國國慶籌備委員會</Text>
				</Grid>
				<FooterHierarchy />
			</WrapperLayout>
		</div>
	);
}

function FooterHierarchy() {
	return (
		<Grid
			flow={{ initial: "row", lg: "column" }}
			columns={{ initial: "2", lg: `${HIERACHY.length}` }}
			gapX="4"
			gapY="6"
		>
			{HIERACHY.map((item, index) => (
				<div key={index}>
					{/* Title */}
					{item.url ? (
						<Link href={item?.url || "/"} className="footer-link">
							{item.name}
						</Link>
					) : (
						<Text as="span" weight="bold" className="text-[#C39F60]">{item.name}</Text>
					)}

					{/* Children */}
					{item.children?.length && (
						<Grid gapY="1" ml="1em" mt="2">
							{item.children.map((child, index) => (
								<Link key={index} href={child?.url || "/"} className="footer-link">
									{child.name}
								</Link>
							))}
						</Grid>
					)}
				</div>
			))}
		</Grid>
	);
}