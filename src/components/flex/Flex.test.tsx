import "jest-styled-components";
import { breakpoints, theme } from "styles";
import { Flex } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

test('flex renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Flex>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates perspiciatis dolorum nam molestiae ab!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quasi veritatis pariatur sed, facere earum.</p>
                </div>
            </Flex>
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
});

test('should have the same props as normal breakpoint', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Flex>
            </Flex>
        </ThemeProvider>
    );

    const options = { media: `(min-width: ${breakpoints.lg}px)` };
    
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(container.firstChild).toHaveStyleRule('gap', '0');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'space-between');
    expect(container.firstChild).toHaveStyleRule('max-width', '100%');
    
    expect(container.firstChild).toHaveStyleRule('align-items', 'center', options);
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column', options);
    expect(container.firstChild).toHaveStyleRule('gap', '0', options);
    expect(container.firstChild).toHaveStyleRule('justify-content', 'space-between', options);
    expect(container.firstChild).toHaveStyleRule('max-width', '100%', options);
})

test('should apply props to large breakpoint', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Flex flexStyleProps={
                { largeBreakpointFlexProps: { alignItems: 'start', flexDirection: 'row', gap: '16px', justifyContent: 'space-around', maxWidth: '50%' } }
            }>
            </Flex>
        </ThemeProvider>
    );

    const options = { media: `(min-width: ${breakpoints.lg}px)` };
    
    expect(container.firstChild).toHaveStyleRule('align-items', 'start', options);
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row', options);
    expect(container.firstChild).toHaveStyleRule('gap', '16px', options);
    expect(container.firstChild).toHaveStyleRule('justify-content', 'space-around', options);
    expect(container.firstChild).toHaveStyleRule('max-width', '50%', options);
});