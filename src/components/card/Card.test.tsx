import "jest-styled-components";
import { breakpoints, theme } from "styles";
import { Card } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import portfolio from 'assets/portfolio.png';

test('card renders', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Card alt="Image alternative text" description="Card description" src={portfolio} title="Card" tools={['Tool 1', 'Tool 2']} />
        </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
});

test('should render github button', () => {
    const card = render(
        <ThemeProvider theme={theme}>
            <Card alt="" description="" src="" title="" tools={[]} links={{ github: 'https://example.com' }}/>
        </ThemeProvider>
    );

    const githubButton = card.getByText(/github/i).closest('a');

    expect(githubButton).toBeInTheDocument();
});

test('should render google play button', () => {
    const card = render(
        <ThemeProvider theme={theme}>
            <Card alt="" description="" src="" title="" tools={[]} links={{ googlePlay: 'https://example.com' }}/>
        </ThemeProvider>
    );

    const googlePlayButton = card.getByText(/google play/i).closest('a');

    expect(googlePlayButton).toBeInTheDocument();
});

test('should render website button', () => {
    const card = render(
        <ThemeProvider theme={theme}>
            <Card alt="" description="" src="" title="" tools={[]} links={{ website: 'https://example.com' }}/>
        </ThemeProvider>
    );

    const websiteButton = card.getByText(/live/i).closest('a');

    expect(websiteButton).toBeInTheDocument();
});

test('should render youtube button', () => {
    const card = render(
        <ThemeProvider theme={theme}>
            <Card alt="" description="" src="" title="" tools={[]} links={{ youtube: 'https://example.com' }}/>
        </ThemeProvider>
    );

    const youtubeButton = card.getByText(/youtube/i).closest('a');

    expect(youtubeButton).toBeInTheDocument();
});

test('should render an image', () => {
    const card = render(
        <ThemeProvider theme={theme}>
            <Card alt="Alternative text." description="" src={portfolio} title="" tools={[]}/>
        </ThemeProvider>
    );

    const githubButton = card.getByAltText('Alternative text.').closest('img');

    expect(githubButton).toBeInTheDocument();
});

test('should render a title', () => {
    const card = render(
        <ThemeProvider theme={theme}>
            <Card alt="" description="" src={portfolio} title="Title" tools={[]}/>
        </ThemeProvider>
    );

    const githubButton = card.getByText('Title').closest('h3');

    expect(githubButton).toBeInTheDocument();
});

test('should render the tools', () => {
    const card = render(
        <ThemeProvider theme={theme}>
            <Card alt="" description="" src={portfolio} title="" tools={['Tool 1', 'Tool 2']}/>
        </ThemeProvider>
    );

    const githubButton = card.getByText('Tool 1, Tool 2').closest('h4');

    expect(githubButton).toBeInTheDocument();
});

test('should render a description', () => {
    const card = render(
        <ThemeProvider theme={theme}>
            <Card alt="" description="Description" src={portfolio} title="" tools={[]}/>
        </ThemeProvider>
    );

    const githubButton = card.getByText('Description').closest('p');

    expect(githubButton).toBeInTheDocument();
});

test('should have outline on hover', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Card alt="" description="" src={portfolio} title="" tools={[]}/>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('outline', `3px solid ${theme.data.borderColor}`, {
        modifier: ':hover'
    });
});

test('should scale inside image on hover', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Card alt="" description="" src={portfolio} title="" tools={[]}/>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('transform', 'scale(102%)', {
        modifier: ':hover > div > img'
    });
});

test('should give a border to the image inside on hover', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Card alt="" description="" src={portfolio} title="" tools={[]}/>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('border', `3px solid ${theme.data.primaryColor}`, {
        modifier: ':hover > div > img'
    });
});

test('should change odd children background color', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Card alt="" description="" src={portfolio} title="" tools={[]}/>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('background-color', theme.data.highlightColor, {
        modifier: ':nth-child(odd)'
    });
});

test('should reverse even children on large (lg) screens', () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Card alt="" description="" src={portfolio} title="" tools={[]}/>
        </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row-reverse', {
        media: `(min-width: ${breakpoints.lg}px)`,
        modifier: ':nth-child(even) > div'
    });
});