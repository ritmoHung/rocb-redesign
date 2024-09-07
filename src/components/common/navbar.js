// Components & UI
import NavbarMenu from "./navbar-menu";
import ThemeToggle from "./theme-toggle";
import { Flex } from "@radix-ui/themes";



export default function Navbar() {
	return (
		<Flex
			align="center"
			justify="end"
			gapX="5"
			px="9"
			py="5"
			className="fixed top-0 flex items-center w-screen bg-primary/80 z-50 backdrop-blur-lg"
			asChild
		>
			<nav>
				<ThemeToggle />
				<NavbarMenu />
			</nav>
		</Flex>
	);
}