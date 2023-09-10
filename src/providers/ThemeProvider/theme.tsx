import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    copyright: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    copyright?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    copyright: true;
  }
}

// A custom theme for this app
const theme = createTheme({
  palette: {
    action: {
      disabled: 'rgba(272B33,0.6)',
      disabledBackground: '#9E9E9E',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    primary: {
      contrastText: '#F5F5F5',
      dark: '#202329',
      light: '#3C3E44',
      main: '#272B33',
    },
    secondary: {
      contrastText: '#272B33',
      dark: '#9E9E9E',
      main: '#F5F5F5',
    },
    success: {
      main: '#55CC44',
    },
    error: {
      main: '#D63D2E',
    },
  },
  typography: {
    fontSize: 14,
    htmlFontSize: 16,
    h1: {
      fontWeight: 900,
      fontSize: '6.33rem',
      letterSpacing: 0,
      lineHeight: 1.1,
    },
    h3: {
      fontWeight: 800,
      fontSize: '1.688rem',
      letterSpacing: 0,
      lineHeight: 1.1,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1.125rem',
      letterSpacing: 0,
      lineHeight: 1.63,
    },
    body2: {
      fontWeight: 500,
      fontSize: '1rem',
      letterSpacing: 0,
      lineHeight: 1.63,
    },
    caption: {
      fontWeight: 700,
      fontSize: '0.844rem',
      letterSpacing: 0,
      lineHeight: 1.62,
    },
    copyright: {
      fontWeight: 400,
      fontSize: '0.781rem',
      letterSpacing: 0,
      lineHeight: 1.75,
    },
    button: {
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: 0.5,
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1274,
      xl: 1440,
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);
export default responsiveTheme;
