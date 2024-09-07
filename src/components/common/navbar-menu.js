import Link from "next/link";
import { HIERACHY } from "@/lib/hierarchy";

// Components & UI
import { DropdownMenu, IconButton, Text } from "@radix-ui/themes";

// Icons & Images
import { Bars3Icon } from "@heroicons/react/24/solid";



export default function NavbarMenu() {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<IconButton type="button" title="選單" size="3" variant="ghost" color="gray" highContrast>
					<Bars3Icon className="size-8" />
					<span className="sr-only">選單</span>
				</IconButton>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<NavbarMenuItems />
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
}

function NavbarMenuItems() {
	return (
		<>
			{HIERACHY
				.filter((item) => item?.url !== "/privacy-policy")
				.map((item, index) => (
					<>
						{/* Title */}
						<DropdownMenu.Item key={index} disabled={!item.url} asChild>
							{item.url ? (
								<Link href={item?.url || "/"}>{item.name}</Link>
							) : (
								<Text as="span" weight="bold" className="text-accent">{item.name}</Text>
							)}
						</DropdownMenu.Item>

						{/* Children */}
						{item.children?.length && item.children.map((child, index) => (
							<DropdownMenu.Item key={index} className="ml-[1em]" asChild>
								<Link href={child?.url || "/"}>
									{child.name}
								</Link>
							</DropdownMenu.Item>
						))}

						{/* Separator */}
						{/* {index !== HIERACHY.length - 2 && <DropdownMenu.Separator />} */}
					</>
				)
			)}
		</>
	);
}