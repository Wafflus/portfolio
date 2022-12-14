import "jest-styled-components";
import { breakpoints, theme } from "styles";
import { render } from "@testing-library/react";
import { SexyTitle } from ".";
import { ThemeProvider } from "styled-components";

test('sexy title renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <SexyTitle>
                <>Title</>
            </SexyTitle>
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeInTheDocument();
});

test('font size gets bigger on larger (lg) screens', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
        <SexyTitle>
            <>Title</>
        </SexyTitle>
        </ThemeProvider>
    );
   
    expect(container.firstChild).toHaveStyleRule('font-size', '4rem', { media: `(min-width: ${breakpoints.lg}px)` });
});