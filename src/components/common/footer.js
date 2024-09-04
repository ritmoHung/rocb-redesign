import { Grid, Text } from "@radix-ui/themes";
import { WrapperLayout } from "./layouts";



export default function Footer() {
	return (
		<div className="bg-[#2B3440] py-16">
			<WrapperLayout flow={{ initial: "row", sm: "column" }} columns={{ initial: "1", sm: "auto 1fr" }} gapX="10rem" gapY="6">
				<Grid width="max-content">
					<Text as="span" size="9" weight="bold" className="text-[#C39F60]">Taiwan</Text>
					<Text as="span" size="4" weight="bold" className="text-[#C39F60]">中華民國國慶籌備委員會</Text>
				</Grid>
				<Grid className="text-white">
					<div>AAA</div>
					<div>BBB</div>
					<div>CCC</div>
					<div>To be done...</div>
				</Grid>
			</WrapperLayout>
		</div>
	);
}