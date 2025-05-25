import { createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: `'Fraunces', serif`,
    },
    palette: {
        primary: { main: '#60158f' },
        secondary: { main: '#ee3ec9' },
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiCardContent: {
            styleOverrides: {
                root: {
                    '&:last-child': {
                        paddingBottom: "8px",
                    },
                },
            },
        },
    },
});

export default theme;
