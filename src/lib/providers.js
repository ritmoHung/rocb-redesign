// Theme & UI
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";



export default function Providers({ children, ...props }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
			<Theme
				accentColor="blue"
				grayColor="gray"
				panelBackground="solid"
				radius="large"
				scaling="100%"
				{...props}
			>
				{children}
			</Theme>
		</ThemeProvider>
	);
}