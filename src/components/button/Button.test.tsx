import "jest-styled-components";
import { Button } from ".";
import { render } from "@testing-library/react";
import { theme } from "styles";
import { ThemeProvider } from "styled-components";

test('button renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Button href="https://example.com">
                <>Button</>
            </Button>
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
});

test('should render without outline by default', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Button href="https://example.com">
                <>Button</>
            </Button>
        </ThemeProvider>
    );

    expect(container.firstChild).not.toHaveStyleRule('background-color', 'transparent');
    expect(container.firstChild).not.toHaveStyleRule('border', `1px solid ${theme.data.primaryColor}`);
    expect(container.firstChild).not.toHaveStyleRule('color', '#93855B');
});

test('should render with outline when outline prop is true', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Button href="https://example.com" buttonStylesProps={{ outline: true }}>
                <>Button</>
            </Button>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    expect(container.firstChild).toHaveStyleRule('border', `1px solid ${theme.data.primaryColor}`);
    expect(container.firstChild).toHaveStyleRule('color', '#93855B');
});

test('should open link in a new tab', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Button href="https://example.com">
                <>Button</>
            </Button>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveAttribute('target', '_blank');
});

test('should have box shadow on hover', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Button href="https://example.com">
                <>Button</>
            </Button>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('box-shadow', '0px 4px 4px rgba(0,0,0,0.1)', {
        modifier: ':hover'
    });
});

test('should scale on hover', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Button href="https://example.com">
                <>Button</>
            </Button>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('transform', 'scale(102%)', {
        modifier: ':hover'
    });
});

test('should be a link of type button', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Button href="https://example.com">
                <>Button</>
            </Button>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveAttribute('type', 'button');
});