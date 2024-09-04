"use client";
import { useTheme } from "next-themes";

// Components & UI
import { Button, DropdownMenu, IconButton } from "@radix-ui/themes";

// Icons & Images
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";



export default function ThemeToggle() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<IconButton type="button" title="切換主題" size="3" variant="ghost" color="gray" highContrast>
					<SunIcon className="size-8 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<MoonIcon className="absolute size-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">切換主題</span>
				</IconButton>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content sideOffset={5}>
				<DropdownMenu.Item onSelect={() => setTheme("light")}>
					<SunIcon className="size-[1.2em]" />
					淺色模式
				</DropdownMenu.Item>
				<DropdownMenu.Item onSelect={() => setTheme("dark")}>
					<MoonIcon className="size-[1.2em]" />
					深色模式
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);	
}