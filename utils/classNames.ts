export const classNames = (...classes: Array<Boolean | string>) => {
	return classes.filter(Boolean).join(' ')
}
