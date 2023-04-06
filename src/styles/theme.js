import { createTheme } from "@mui/material";

const theme = createTheme({
	typography: {
		fontFamily: "Karla, sans-serif",
	},
	palette: {
		primary: {
			main: "#4797be",
			light: "#7eb6d2",
			dark: "#326a85",
			contrastText: "#000000",
		},
		secondary: {
			main: "#FBB03B",
			light: "#FCC062",
			dark: "#C98D2F",
			contrastText: "#000000",
		},
		success: {
			light: "#9bd99b",
			main: "#5ec25e",
			dark: "#36b336",
			contrastText: "#000000",
		},
		warning: {
			light: "#f3b999",
			main: "#ed9666",
			dark: "#e15000",
			contrastText: "#000000",
		},
		error: {
			light: "#d0736e",
			main: "#c1453d",
			dark: "#b1160d",
			contrastText: "#000000",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "unset",
					// borderRadius: 8,
				},
			},
		},
	},
});

export default theme;
