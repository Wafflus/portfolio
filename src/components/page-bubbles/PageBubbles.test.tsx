import "jest-styled-components";
import { breakpoints, theme } from "styles";
import { PageBubbles } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

test('page bubbles renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <PageBubbles pageBubbleStyleProps={{ primaryColor: theme.data.primaryColor, secondaryColor: theme.data.secondaryColor }} />
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeInTheDocument();
});

test('should have 5 bubbles', () => {
    const pageBubbles = render(
        <ThemeProvider theme={theme}>
            <PageBubbles pageBubbleStyleProps={{ primaryColor: theme.data.primaryColor, secondaryColor: theme.data.secondaryColor }} />
        </ThemeProvider>
    );

    const bubbles = pageBubbles.getAllByRole('presentation');

    expect(bubbles).toHaveLength(5);
})

test('should have correct color', () => {
    const pageBubbles = render(
        <ThemeProvider theme={theme}>
            <PageBubbles pageBubbleStyleProps={{ primaryColor: theme.data.primaryColor, secondaryColor: theme.data.secondaryColor }} />
        </ThemeProvider>
    );

    const bubbles = pageBubbles.getAllByRole('presentation');

    const options = { media: `(min-width: ${breakpoints.xl}px)` };

    expect(bubbles[0]).toHaveStyleRule('background-color', theme.data.primaryColor, options);
    expect(bubbles[1]).toHaveStyleRule('background-color', theme.data.secondaryColor, options);
    expect(bubbles[2]).toHaveStyleRule('background-color', theme.data.secondaryColor, options);
    expect(bubbles[3]).toHaveStyleRule('background-color', theme.data.primaryColor, options);
    expect(bubbles[4]).toHaveStyleRule('background-color', theme.data.secondaryColor, options);
});

test('should only show on extra large (xl) screens', () => {
    const pageBubbles = render(
        <ThemeProvider theme={theme}>
            <PageBubbles pageBubbleStyleProps={{ primaryColor: theme.data.primaryColor, secondaryColor: theme.data.secondaryColor }} />
        </ThemeProvider>
    );

    const bubbles = pageBubbles.getAllByRole('presentation');

    const options = { media: `(min-width: ${breakpoints.xl}px)` };

    expect(bubbles[0]).toHaveStyleRule('opacity', '0');
    expect(bubbles[0]).toHaveStyleRule('opacity', '0');
    expect(bubbles[2]).toHaveStyleRule('opacity', '0');
    expect(bubbles[3]).toHaveStyleRule('opacity', '0');
    expect(bubbles[4]).toHaveStyleRule('opacity', '0');

    expect(bubbles[0]).toHaveStyleRule('opacity', '1', options);
    expect(bubbles[1]).toHaveStyleRule('opacity', '1', options);
    expect(bubbles[2]).toHaveStyleRule('opacity', '1', options);
    expect(bubbles[3]).toHaveStyleRule('opacity', '1', options);
    expect(bubbles[4]).toHaveStyleRule('opacity', '1', options);
});