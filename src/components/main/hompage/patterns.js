// Icons & Images
import Pattern1Img from "/public/imgs/pattern1.svg";
import Pattern2Img from "/public/imgs/pattern2.svg";



export function Pattern1() {
	return (
		<div
			style={{ backgroundImage: `url(${Pattern1Img.src})` }}
			className="[--size:_360px] h-[calc(2/3_*_var(--size))] sm:h-[var(--size)] bg-[auto_var(--size)]"
		></div>
	);
}

export function Pattern2() {
	return (
		<div
			style={{ backgroundImage: `url(${Pattern2Img.src})` }}
			className="[--size:_312px] h-[calc(2/3_*_var(--size))] sm:h-[var(--size)] bg-[auto_var(--size)] bg-zinc-200 dark:bg-zinc-900"
		></div>
	);
}