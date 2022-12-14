import "jest-styled-components";
import { breakpoints, theme } from "styles";
import { render } from "@testing-library/react";
import { SexyDescription } from ".";
import { ThemeProvider } from "styled-components";

test('sexy description renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <SexyDescription>
                <>Description</>
            </SexyDescription>
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeInTheDocument();
});

test('font size gets bigger on larger (lg) screens', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <SexyDescription>
                <>Description</>
            </SexyDescription>
        </ThemeProvider>
    );
   
    expect(container.firstChild).toHaveStyleRule('font-size', '1.5rem', { media: `(min-width: ${breakpoints.lg}px)` });
});