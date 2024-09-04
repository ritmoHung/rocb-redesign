import { Grid, Heading, Section } from "@radix-ui/themes";



export function WrapperLayout({ children, className, size = "md", ...props }) {
	return (
		<Grid
			columns="1"
			mx="auto"
			className={`
				${size === "sm" ? "[--width:_1000px]" : size === "lg" ? "[--width:_1800px]" : "[--width:_1400px]"}
				w-[min(calc(100%_-_4rem),_var(--width))] sm:w-[min(calc(100%_-_6rem),_var(--width))] ${className}
			`}
			{...props}
		>
			{children}
		</Grid>
	);
}

export function SectionLayout({ children, className, title = "", titleAs = "h2" }) {
	return (
		<Section size="1" className={`${className}`}>
			{title && <Heading as={titleAs} mb="4">{title}</Heading>}
			{children}
		</Section>
	);
}