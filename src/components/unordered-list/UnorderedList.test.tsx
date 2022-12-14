import "jest-styled-components";
import { ListItem } from "components/list-item";
import { render } from "@testing-library/react";
import { theme } from "../../styles";
import { ThemeProvider } from "styled-components";
import { UnorderedList } from ".";

test('unordered list renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <UnorderedList>
                <ListItem><>List Item One</></ListItem>
                <ListItem><>List Item Two</></ListItem>
            </UnorderedList>
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeInTheDocument();
});

test('should have role list', () => {
    const unorderedList = render(
        <ThemeProvider theme={theme}>
            <UnorderedList>
                <ListItem><>List Item One</></ListItem>
                <ListItem><>List Item Two</></ListItem>
            </UnorderedList>
        </ThemeProvider>
    );

    const list = unorderedList.getByRole('list');

    expect(list).toBeInTheDocument();
})

test('should have 2 list items', () => {
    const unorderedList = render(
        <ThemeProvider theme={theme}>
            <UnorderedList>
                <ListItem><>List Item One</></ListItem>
                <ListItem><>List Item Two</></ListItem>
            </UnorderedList>
        </ThemeProvider>
    );

    const listItems = unorderedList.getAllByRole('listitem');

    expect(listItems).toHaveLength(2);
    expect(listItems[0]).toBeInTheDocument();
    expect(listItems[1]).toBeInTheDocument();
})