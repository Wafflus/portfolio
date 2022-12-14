import "jest-styled-components";
import { breakpoints, theme } from "styles";
import { BulletPointText } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

test('should render', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <BulletPointText>
                <>Text</>
            </BulletPointText>
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
});

test('should scale on hover', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <BulletPointText>
                <>Text</>
            </BulletPointText>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('transform', 'scale(102%)', {
        modifier: ':hover'
    });
})

test('should render custom dot before text on large (lg) breakpoint', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <BulletPointText>
                <>Text</>
            </BulletPointText>
        </ThemeProvider>
    );

    const media = `(min-width: ${breakpoints.lg}px)`

    const breakpointBeforeOptions = {
        media,
        modifier: '::before'
    };

    expect(container.firstChild).toHaveStyleRule('background-color', theme.data.secondaryColor, breakpointBeforeOptions);
    expect(container.firstChild).toHaveStyleRule('border-radius', '50%', breakpointBeforeOptions);
    expect(container.firstChild).toHaveStyleRule('content', '\'\'', breakpointBeforeOptions);
    expect(container.firstChild).toHaveStyleRule('height', '20px', breakpointBeforeOptions);
    expect(container.firstChild).toHaveStyleRule('left', '-40px', breakpointBeforeOptions);
    expect(container.firstChild).toHaveStyleRule('position', 'absolute', breakpointBeforeOptions);
    expect(container.firstChild).toHaveStyleRule('transition', 'background-color 0.5s', breakpointBeforeOptions);
    expect(container.firstChild).toHaveStyleRule('width', '20px', breakpointBeforeOptions);

    expect(container.firstChild).toHaveStyleRule('background-color', theme.data.primaryColor, {
        media,
        modifier: ':hover::before'
    });
});