import "jest-styled-components";
import { fireEvent, render } from "@testing-library/react";
import { socials } from "data/social-data";
import { theme } from "styles";
import { ThemeProvider } from "styled-components";
import { SocialMediaIcon } from ".";

test('social media icon renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <SocialMediaIcon alt="Alternative text." src={socials.github} href={'https://github.com/Wafflus'}>
                <>Github</>
            </SocialMediaIcon>
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeInTheDocument();
});

test('text should not show up', () => {
    const socialMediaIcon = render(
        <ThemeProvider theme={theme}>
            <SocialMediaIcon alt="Alternative text." src={socials.github} href={'https://github.com/Wafflus'}>
                <>Github</>
            </SocialMediaIcon>
        </ThemeProvider>
    );

    const text = socialMediaIcon.getByText('Github').closest('span');

    expect(text).toHaveStyleRule('opacity', '0');
});

test('text should show when anchor is hovered', () => {
    const socialMediaIcon = render(
        <ThemeProvider theme={theme}>
            <SocialMediaIcon alt="Alternative text." src={socials.github} href={'https://github.com/Wafflus'}>
                <>Github</>
            </SocialMediaIcon>
        </ThemeProvider>
    );

    const anchor = socialMediaIcon.getByRole('link');
    const text = socialMediaIcon.getByText('Github').closest('span');

    fireEvent.mouseEnter(anchor);

    expect(text).toHaveStyleRule('opacity', '1');
});

test('anchor should have different styles when hovered', () => {
    const socialMediaIcon = render(
        <ThemeProvider theme={theme}>
            <SocialMediaIcon alt="Alternative text." src={socials.github} href={'https://github.com/Wafflus'}>
                <>Github</>
            </SocialMediaIcon>
        </ThemeProvider>
    );

    const anchor = socialMediaIcon.getByRole('link').closest('a');
    const options = { modifier: ':hover' };

    expect(anchor).toHaveStyleRule('outline', `10px solid ${theme.data.borderColor}`, options);
    expect(anchor).toHaveStyleRule('position', 'relative', options);
    expect(anchor).toHaveStyleRule('transform', 'translateY(-16px)', options);
});