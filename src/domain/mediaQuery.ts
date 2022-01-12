const breakpoints = [0, 576, 768, 992, 1200];

export enum Breakpoints {
	xs,
	sm,
	md,
	lg,
}

export const mediaQuery = (minWidth: Breakpoints) =>
	`@media screen and (min-width: ${breakpoints[minWidth]}px)`;
