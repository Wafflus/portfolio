import { BulletPointText } from "components/bullet-point-text";
import { Container } from "components/container";
import { Flex } from "components/flex";
import { HeroStyled } from "./styles";
import { IHeroProps } from "./types";
import { PageBubbles } from "components/page-bubbles";
import { SexyDescription } from "components/sexy-description";
import { SexyTitle } from "components/sexy-title";
import { SocialMediaIcon } from "components/social-media-icon";
import { socials } from "data/social-data";
import { Strong } from "components/strong";
import { theme } from "styles";
import { useInView } from "react-intersection-observer";
import githubLogo from 'assets/github.png';
import twitterLogo from 'assets/twitter.png';
import youtubeLogo from 'assets/youtube.png';

export function Hero({ activeMenuItem, setActiveMenuItem }: IHeroProps) {
    const primaryColor = theme.data.secondaryColor;
    const secondaryColor = theme.data.lightColor;

    const { ref } = useInView({ onChange: (inView, entry) => {
        if (!entry.isIntersecting) {
            return;
        }
        
        if (activeMenuItem !== 'About') {
            setActiveMenuItem?.('About');
        }
    } });

    return (
        <HeroStyled id='About' ref={ref}>
            <PageBubbles pageBubbleStyleProps={{ primaryColor, secondaryColor }} />

            <Container>
                <Flex flexStyleProps={{ defaultFlexProps: { gap: '48px' } }}>
                    <Flex flexStyleProps={{ defaultFlexProps: { justifyContent: 'center', gap: '8px' } }}>
                        <SexyTitle><>indie wafflus</></SexyTitle>
                        <SexyDescription><>web & game developer</></SexyDescription>
                    </Flex>

                    <Flex flexStyleProps={{ defaultFlexProps: { justifyContent: 'center', gap: '16px' } }}>
                        <BulletPointText><>I create <Strong><>free</></Strong> game development tutorials in Unity.</></BulletPointText>
                        <BulletPointText><>I design some websites for fun.</></BulletPointText>
                    </Flex>

                    <Flex flexStyleProps={{ defaultFlexProps: { flexDirection: 'row', maxWidth: '320px' } }}>
                        <SocialMediaIcon href={socials.youtube} src={youtubeLogo} alt={'A red arrow pointing right inside of a rounded white rectangle also inside a red circle, the Youtube Logo.'}><>Indie Wafflus</></SocialMediaIcon>
                        <SocialMediaIcon href={socials.github} src={githubLogo} alt={'A white cat silhouette inside of a black circle, the Github Logo.'}><>Wafflus</></SocialMediaIcon>
                        <SocialMediaIcon href={socials.twitter} src={twitterLogo} alt={'A white bird going up diagonally inside of a blue circle, the Twitter Logo.'}><>Indie Wafflus</></SocialMediaIcon>
                    </Flex>
                </Flex>
            </Container>
        </HeroStyled>
    );
}