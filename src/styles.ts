import { createGlobalStyle } from 'styled-components';
import { IBreakpoints, ITheme } from './types';

export const breakpoints: IBreakpoints = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
    xxl: 1440
};

export const theme: ITheme = {
	breakpoint: {
		under: (breakpoint: string, rules: string) => `
			@media (max-width: ${breakpoints[breakpoint as keyof IBreakpoints]}px) {
				${rules}
			}
		`,
		between: (minBreakpoint: string, maxBreakpoint: string, rules: string) => `
			@media (min-width: ${breakpoints[minBreakpoint as keyof IBreakpoints]}px) and (max-width: ${breakpoints[maxBreakpoint as keyof IBreakpoints] - 1}px) {
				${rules}
			}
		`,
		above: (breakpoint: string, rules: string) => `
			@media (min-width: ${breakpoints[breakpoint as keyof IBreakpoints]}px) {
				${rules}
			}
		`
	},
	data: {
        backgroundColor: '#FFFAEC',
        borderColor: '#FFF0BF',
        highlightColor: '#FFFAE9',
        lightColor: '#FFF5D6',
        primaryColor: '#F9D564',
        secondaryColor: '#FFECB1',
        text: {
            darkColor: '#756A47',
            defaultColor: '#93855B',
            lightColor: '#AAA490',
            strongColor: '#D4AD31',
        },
		fontFamilies: {
			caveat: 'Caveat',
			dancingScript: 'Dancing Script',
			outfit: 'Outfit',
			roboto: 'Roboto',
		},
    }
};

/*! Generated by Font Squirrel (https://www.fontsquirrel.com) */
export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Roboto';
		src: url('./fonts/roboto/roboto-black-webfont.woff2') format('woff2'),
			url('./fonts/roboto/roboto-black-webfont.woff') format('woff');
		font-weight: 900;
		font-style: normal;
	}

	@font-face {
		font-family: 'Roboto';
		src: url('./fonts/roboto/roboto-blackitalic-webfont.woff2') format('woff2'),
			url('./fonts/roboto/roboto-blackitalic-webfont.woff') format('woff');
		font-weight: 900;
		font-style: italic;
	}

	@font-face {
		font-family: 'Roboto';
		src: url('./fonts/roboto/roboto-bold-webfont.woff2') format('woff2'),
			url('./fonts/roboto/roboto-bold-webfont.woff') format('woff');
		font-weight: 700;
		font-style: normal;
	}

	@font-face {
		font-family: 'Roboto';
		src: url('./fonts/roboto/roboto-bolditalic-webfont.woff2') format('woff2'),
			url('./fonts/roboto/roboto-bolditalic-webfont.woff') format('woff');
		font-weight: 700;
		font-style: italic;
	}

	@font-face {
		font-family: 'Roboto';
		src: url('./fonts/roboto/roboto-medium-webfont.woff2') format('woff2'),
			url('./fonts/roboto/roboto-medium-webfont.woff') format('woff');
		font-weight: 500;
		font-style: normal;
	}

	@font-face {
		font-family: 'Roboto';
		src: url('./fonts/roboto/roboto-mediumitalic-webfont.woff2') format('woff2'),
			url('./fonts/roboto/roboto-mediumitalic-webfont.woff') format('woff');
		font-weight: 500;
		font-style: italic;
	}

	@font-face {
		font-family: 'Roboto';
		src: url('./fonts/roboto/roboto-regular-webfont.woff2') format('woff2'),
			url('./fonts/roboto/roboto-regular-webfont.woff') format('woff');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'Roboto';
		src: url('./fonts/roboto/roboto-italic-webfont.woff2') format('woff2'),
			url('./fonts/roboto/roboto-italic-webfont.woff') format('woff');
		font-weight: 400;
		font-style: italic;
	}

	@font-face {
		font-family: 'Roboto';
		src: url('./fonts/roboto/roboto-light-webfont.woff2') format('woff2'),
			url('./fonts/roboto/roboto-light-webfont.woff') format('woff');
		font-weight: 300;
		font-style: normal;
	}

	@font-face {
		font-family: 'Roboto';
		src: url('./fonts/roboto/roboto-lightitalic-webfont.woff2') format('woff2'),
			url('./fonts/roboto/roboto-lightitalic-webfont.woff') format('woff');
		font-weight: 300;
		font-style: italic;
	}

	@font-face {
		font-family: 'Roboto';
		src: url('./fonts/roboto/roboto-thin-webfont.woff2') format('woff2'),
			url('./fonts/roboto/roboto-thin-webfont.woff') format('woff');
		font-weight: 100;
		font-style: normal;
	}

	@font-face {
		font-family: 'Roboto';
		src: url('./fonts/roboto/roboto-thinitalic-webfont.woff2') format('woff2'),
			url('./fonts/roboto/roboto-thinitalic-webfont.woff') format('woff');
		font-weight: 100;
		font-style: italic;
	}

	@font-face {
		font-family: 'Outfit';
		src: url('./fonts/outfit/outfit-variablefont_wght-webfont.woff2') format('woff2'),
			url('./fonts/outfit/outfit-variablefont_wght-webfont.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'Caveat';
		src: url('./fonts/caveat/caveat-variablefont_wght-webfont.woff2') format('woff2'),
			url('./fonts/caveat/caveat-variablefont_wght-webfont.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'Dancing Script';
		src: url('./fonts/dancing-script/dancingscript-variablefont_wght-webfont.woff2') format('woff2'),
			url('./fonts/dancing-script/dancingscript-variablefont_wght-webfont.woff') format('woff');
		font-weight: normal;
		font-style: normal;

	}

	html {
		font-family: '${theme.data.fontFamilies.roboto}', sans-serif;
		font-size: 100%;
		font-weight: normal;
		scroll-behavior: smooth;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		background-color: ${theme.data.backgroundColor};
		overflow-x: hidden;
	}
`;