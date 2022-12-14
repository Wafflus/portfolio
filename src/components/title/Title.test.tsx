import "jest-styled-components";
import { breakpoints, theme } from "styles";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Title } from ".";

test('title renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Title>
                <>Title</>
            </Title>
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeInTheDocument();
});

test('should have different styles on large (lg) screens', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Title>
                <>Title</>
            </Title>
        </ThemeProvider>
    );

    const options = { media: `(min-width: ${breakpoints.lg}px)` };

    expect(container.firstChild).toHaveStyleRule('font-size', '3rem', options);
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '64px', options);
    expect(container.firstChild).toHaveStyleRule('margin-top', '0', options);
});

test('should have line under the title', () => {
    const title = render(
        <ThemeProvider theme={theme}>
            <Title>
                <>Title</>
            </Title>
        </ThemeProvider>
    );

    const line = title.getByRole('presentation').closest('div');

    expect(line).toBeInTheDocument();
});

test('line should have circle styles at the start (left) side', () => {
    const title = render(
        <ThemeProvider theme={theme}>
            <Title>
                <>Title</>
            </Title>
        </ThemeProvider>
    );

    const line = title.getByRole('presentation').closest('div');
    const options = { modifier: '::before' };

    expect(line).toHaveStyleRule('background-color', theme.data.text.defaultColor, options);
    expect(line).toHaveStyleRule('border-radius', '50%', options);
    expect(line).toHaveStyleRule('bottom', '-6px', options);
    expect(line).toHaveStyleRule('content', '\'\'', options);
    expect(line).toHaveStyleRule('height', '10px', options);
    expect(line).toHaveStyleRule('position', 'absolute', options);
    expect(line).toHaveStyleRule('width', '10px', options);
    expect(line).toHaveStyleRule('left', '-4px', options);
});

test('line should have circle styles at the end (right) side', () => {
    const title = render(
        <ThemeProvider theme={theme}>
            <Title>
                <>Title</>
            </Title>
        </ThemeProvider>
    );

    const line = title.getByRole('presentation').closest('div');
    const options = { modifier: '::after' };

    expect(line).toHaveStyleRule('background-color', theme.data.text.defaultColor, options);
    expect(line).toHaveStyleRule('border-radius', '50%', options);
    expect(line).toHaveStyleRule('bottom', '-6px', options);
    expect(line).toHaveStyleRule('content', '\'\'', options);
    expect(line).toHaveStyleRule('height', '10px', options);
    expect(line).toHaveStyleRule('position', 'absolute', options);
    expect(line).toHaveStyleRule('width', '10px', options);
    expect(line).toHaveStyleRule('right', '-4px', options);
});

test('line should have different styles on large (lg) screens', () => {
    const title = render(
        <ThemeProvider theme={theme}>
            <Title>
                <>Title</>
            </Title>
        </ThemeProvider>
    );

    const line = title.getByRole('presentation').closest('div');
    const options = { media: `(min-width: ${breakpoints.lg}px)` };

    expect(line).toHaveStyleRule('left', 'calc(50% - 200px)', options);
    expect(line).toHaveStyleRule('width', '400px', options);
});