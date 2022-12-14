import "jest-styled-components";
import { ProfilePicture } from ".";
import { render } from "@testing-library/react";
import { theme } from "styles";
import { ThemeProvider } from "styled-components";
import profilePicture from 'assets/profile-picture.png';

test('profile picture renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <ProfilePicture alt="Alternative text." src={profilePicture} />
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeInTheDocument();
});

test('should rotate and scale on hover', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <ProfilePicture alt="Alternative text." src={profilePicture} />
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('transform', 'rotate(15deg) scale(110%)', { modifier: ':hover' });
});