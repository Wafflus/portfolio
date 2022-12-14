import "jest-styled-components";
import { Container } from ".";
import { render } from "@testing-library/react";
import { theme } from "styles";
import { ThemeProvider } from "styled-components";

test('container renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Container>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolorum eum eligendi dignissimos velit numquam?</p>
            </Container>
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
});

test('should have passed in padding', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Container containerStylesProps={{ horizontalPadding: '128px', verticalPadding: '64px' }}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolorum eum eligendi dignissimos velit numquam?</p>
            </Container>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('padding', '64px 128px');
});