import "jest-styled-components";
import { breakpoints, theme } from "styles";
import { Menu } from ".";
import { MenuItem } from "components/menu-item";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

test('menu renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Menu>
                <MenuItem id="one"><>Menu One</></MenuItem>
                <MenuItem id="two"><>Menu Two</></MenuItem>
            </Menu>
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeInTheDocument();
});

test('should have background behind the menu', () => {
    const menu = render(
        <ThemeProvider theme={theme}>
            <Menu>
                <MenuItem id="one"><>Menu One</></MenuItem>
                <MenuItem id="two"><>Menu Two</></MenuItem>
            </Menu>
        </ThemeProvider>
    );

    const background = menu.getByRole('presentation');

    expect(background).toBeInTheDocument();
})

test('background should have different styles on large (lg) screens', () => {
    const menu = render(
        <ThemeProvider theme={theme}>
            <Menu>
                <MenuItem id="one"><>Menu One</></MenuItem>
                <MenuItem id="two"><>Menu Two</></MenuItem>
            </Menu>
        </ThemeProvider>
    );

    const background = menu.getByRole('presentation');

    const options = { media: `(min-width: ${breakpoints.lg}px)` };

    expect(background).toHaveStyleRule('height', 'calc(100% + 32px)', options);
    expect(background).toHaveStyleRule('top', '-16px', options);
});

test('should render menu items', () => {
    const menu = render(
        <ThemeProvider theme={theme}>
            <Menu>
                <MenuItem id="one"><>Menu One</></MenuItem>
                <MenuItem id="two"><>Menu Two</></MenuItem>
            </Menu>
        </ThemeProvider>
    );

    const menuItems = menu.getAllByRole('listitem');

    expect(menuItems).toHaveLength(2);
    expect(menuItems[0]).toBeInTheDocument();
    expect(menuItems[1]).toBeInTheDocument();
});

test('should have a list', () => {
    const menu = render(
        <ThemeProvider theme={theme}>
            <Menu>
                <MenuItem id="one"><>Menu One</></MenuItem>
                <MenuItem id="two"><>Menu Two</></MenuItem>
            </Menu>
        </ThemeProvider>
    );

    const menuList = menu.getAllByRole('list');

    expect(menuList).toHaveLength(1);
    expect(menuList[0]).toBeInTheDocument();
});