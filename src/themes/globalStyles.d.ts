interface ThemeType {
	colors: ThemeColors;
	borderRadius?: string;
}

type ThemeColors = {
	[key: string]: string;
};
