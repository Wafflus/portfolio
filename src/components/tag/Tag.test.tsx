import "jest-styled-components";
import { render } from "@testing-library/react";
import { Tag } from ".";
import { theme } from "styles";
import { ThemeProvider } from "styled-components";

test('tag renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Tag href="https://www.github.com/Wafflus">
                <>Github</>
            </Tag>
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeInTheDocument();
});

test('should have no href attribute if href is empty', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Tag href="">
                <>Github</>
            </Tag>
        </ThemeProvider>
    );

    expect(container.firstChild).not.toHaveAttribute('href');
});

test('should open in a new tab', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Tag href="https://www.github.com/Wafflus">
                <>Github</>
            </Tag>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveAttribute('target', '_blank');
});

test('should have default cursor if no link is given', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Tag href="">
                <>Github</>
            </Tag>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('cursor', 'default');
})

test('should have different padding on hover', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Tag href="https://www.github.com/Wafflus">
                <>Github</>
            </Tag>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('padding', '12px', { modifier: ':hover' });
});

test('should have no text decoration on hover', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Tag href="https://www.github.com/Wafflus">
                <>Github</>
            </Tag>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('text-decoration', 'none', { modifier: ':hover' });
});