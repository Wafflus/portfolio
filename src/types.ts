export interface IBreakpoints {
	sm: number;
	md: number;
	lg: number;
	xl: number;
    xxl: number;
}

export interface ITheme {
    breakpoint: IThemeBreakpoint;
    data: IThemeData;
}

interface IThemeBreakpoint {
    under: (breakpoint: string, rules: string) => string;
    between: (minBreakpoint: string, maxBreakpoint: string, rules: string) => string;
    above: (breakpoint: string, rules: string) => string;
}

interface IThemeData {
    backgroundColor: string;
    borderColor: string;
    highlightColor: string;
    lightColor: string;
    primaryColor: string;
    secondaryColor: string;
    text: {
        darkColor: string;
        defaultColor: string;
        lightColor: string;
        strongColor: string;
    },
    fontFamilies: IThemeFontFamily;
}

interface IThemeFontFamily {
    caveat: string;
    dancingScript: string;
    outfit: string;
    roboto: string;
}