import "jest-styled-components";
import { Icon } from ".";
import { render } from "@testing-library/react";
import { socials } from "data/social-data";
import { theme } from "styles";
import { ThemeProvider } from "styled-components";

test('icon renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Icon alt="Alternative text." src={socials.github} />
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeInTheDocument();
});

test('icon has default size', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Icon alt='' src='' />
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('width', '64px');
    expect(container.firstChild).toHaveStyleRule('height', '64px');
});

test('icon has custom size', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Icon alt='' src='' imageProps={{ size: '128' }} />
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('width', '128px');
    expect(container.firstChild).toHaveStyleRule('height', '128px');
});

test('icon has custom unit', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Icon alt='' src='' imageProps={{ unit: '%' }} />
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('width', '64%');
    expect(container.firstChild).toHaveStyleRule('height', '64%');
});