import "jest-styled-components";
import { Image } from ".";
import { render } from "@testing-library/react";
import { socials } from "data/social-data";
import { theme } from "styles";
import { ThemeProvider } from "styled-components";

test('image renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Image alt="Alternative text." src={socials.github} />
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeInTheDocument();
});