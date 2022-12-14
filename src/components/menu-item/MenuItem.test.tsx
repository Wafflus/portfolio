import "jest-styled-components";
import { MenuItem } from ".";
import { render } from "@testing-library/react";
import { theme } from "styles";
import { ThemeProvider } from "styled-components";

test('menu item renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <MenuItem id="one"><>Menu One</></MenuItem>
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeInTheDocument();
});

test('should render a list item', () => {
    const menuItem = render(
        <ThemeProvider theme={theme}>
            <MenuItem id="one"><>Menu One</></MenuItem>
        </ThemeProvider>
    );

    const listItem = menuItem.getByRole('listitem');

    expect(listItem).toBeInTheDocument();
})

test('should render an anchor', () => {
    const menuItem = render(
        <ThemeProvider theme={theme}>
            <MenuItem id="one"><>Menu One</></MenuItem>
        </ThemeProvider>
    );

    const anchor = menuItem.getByRole('link');

    expect(anchor).toBeInTheDocument();
});

test('anchor should have different styles when item is active', () => {
    const menuItem = render(
        <ThemeProvider theme={theme}>
            <MenuItem id="one" activeMenuItem="one"><>Menu One</></MenuItem>
        </ThemeProvider>
    );

    const anchor = menuItem.getByRole('link');

    expect(anchor).toHaveStyleRule('color', theme.data.text.darkColor);
    expect(anchor).toHaveStyleRule('font-weight', 'bold');
    expect(anchor).toHaveStyleRule('border-bottom', `1px solid ${theme.data.text.defaultColor}`);
    expect(anchor).toHaveStyleRule('font-size', '1.25rem');
    expect(anchor).toHaveStyleRule('font-variant', 'small-caps');
    expect(anchor).toHaveStyleRule('padding', '4px');

    const beforeOptions = { modifier: '::before' };
    const afterOptions = { modifier: '::after' };
    const hoverOptions = { modifier: ':hover' };
    const hoverAfterOptions = { modifier: ':hover::after' };
    const hoverBeforeOptions = { modifier: ':hover::before' };

    expect(anchor).toHaveStyleRule('background-color', theme.data.text.defaultColor, beforeOptions);
    expect(anchor).toHaveStyleRule('border-radius', '50%', beforeOptions);
    expect(anchor).toHaveStyleRule('bottom', '-4px', beforeOptions);
    expect(anchor).toHaveStyleRule('content', '\'\'', beforeOptions);
    expect(anchor).toHaveStyleRule('height', '8px', beforeOptions);
    expect(anchor).toHaveStyleRule('position', 'absolute', beforeOptions);
    expect(anchor).toHaveStyleRule('transition', 'left 0.5s,right 0.5s,background-color 0.5s', beforeOptions);
    expect(anchor).toHaveStyleRule('width', '8px', beforeOptions);

    expect(anchor).toHaveStyleRule('background-color', theme.data.text.defaultColor, beforeOptions);
    expect(anchor).toHaveStyleRule('border-radius', '50%', afterOptions);
    expect(anchor).toHaveStyleRule('bottom', '-4px', afterOptions);
    expect(anchor).toHaveStyleRule('content', '\'\'', afterOptions);
    expect(anchor).toHaveStyleRule('height', '8px', afterOptions);
    expect(anchor).toHaveStyleRule('position', 'absolute', afterOptions);
    expect(anchor).toHaveStyleRule('transition', 'left 0.5s,right 0.5s,background-color 0.5s', afterOptions);
    expect(anchor).toHaveStyleRule('width', '8px', afterOptions);

    expect(anchor).toHaveStyleRule('left', '-4px', beforeOptions);

    expect(anchor).toHaveStyleRule('right', '-4px', afterOptions);

    expect(anchor).toHaveStyleRule('border-color', theme.data.text.darkColor, hoverOptions);

    expect(anchor).toHaveStyleRule('background-color', theme.data.text.darkColor, hoverBeforeOptions);
    expect(anchor).toHaveStyleRule('left', '-8px', hoverBeforeOptions);
    
    expect(anchor).toHaveStyleRule('background-color', theme.data.text.darkColor, hoverAfterOptions);
    expect(anchor).toHaveStyleRule('right', '-8px', hoverAfterOptions);
});