import "jest-styled-components";
import { render } from "@testing-library/react";
import { Strong } from ".";
import { theme } from "styles";
import { ThemeProvider } from "styled-components";

test('strong renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Strong>
                <>Strong Text</>
            </Strong>
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeInTheDocument();
});