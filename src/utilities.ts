const rgba = (color: string, alpha: number) => {
	if (color.includes("#")) {
		const [r, g, b] = color.match(/\w\w/g)?.map((x) => parseInt(x, 16)) || [];
		return `rgba(${r},${g},${b},${alpha})`;
	}
	if (!color.includes("rgba") && color.includes("rgb")) {
		const [r, g, b] = color.match(/\d+/g) || [];
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}

	return color;
};

const utilities = {
	rgba,
};

export default utilities;
