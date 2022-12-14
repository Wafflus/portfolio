import "jest-styled-components";
import { ListItem } from ".";
import { render } from "@testing-library/react";
import { theme } from "styles";
import { ThemeProvider } from "styled-components";

test('list item renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <ListItem>
                <a>List Item</a>
            </ListItem>
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeInTheDocument();
});

test('should have no list style', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <ListItem>
                <a>List Item</a>
            </ListItem>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('list-style-type', 'none');
});

test('should have custom list style', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <ListItem listItemStyledProps={{ listStyleType: 'square' }}>
                <a>List Item</a>
            </ListItem>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('list-style-type', 'square');
});