// Components & UI
import ThemeToggle from "./theme-toggle";
import { Flex, IconButton } from "@radix-ui/themes";

// Icons & Images
import { Bars3Icon } from "@heroicons/react/24/solid";



export default function Navbar() {
	return (
		<Flex
			align="center"
			justify="end"
			gapX="5"
			px="6"
			py="5"
			className="fixed top-0 flex items-center w-screen bg-primary/80 z-50 backdrop-blur-lg"
			asChild
		>
			<nav>
				<ThemeToggle />
				<IconButton type="button" title="選單" size="3" variant="ghost" color="gray" highContrast>
					<Bars3Icon className="size-8" />
					<span className="sr-only">選單</span>
				</IconButton>
			</nav>
		</Flex>
	);
}