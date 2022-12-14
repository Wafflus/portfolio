import { BsBoxArrowUpRight } from 'react-icons/bs';
import { Button } from "components/button";
import { CardStyled, DescriptionStyled, TitleStyled, ToolsStyled } from "./styles";
import { Flex } from "components/flex";
import { ICardProps } from "./types";
import { Image } from "components/image";

export function Card({ alt, description, links: { github = '', youtube = '', website = '', googlePlay = '' } = {}, src, title, tools }: ICardProps) {
    const outerLinkArrow = <BsBoxArrowUpRight size={20} aria-label='(Opens in a new tab)' />;

    const githubButton = github !== '' ? <Button href={github}><>Github {outerLinkArrow}</></Button> : <></>;
    const googlePlayButton = googlePlay !== '' ? <Button href={googlePlay}><>Google Play {outerLinkArrow}</></Button> : <></>;
    const websiteButton = website !== '' ? <Button buttonStylesProps={{ outline: true }} href={website}><>Live {outerLinkArrow}</></Button> : <></>;
    const youtubeButton = youtube !== '' ? <Button buttonStylesProps={{ outline: true }} href={youtube}><>Youtube {outerLinkArrow}</></Button> : <></>;

    return (
        <CardStyled>
            <Flex
                flexStyleProps={{
                    defaultFlexProps: { gap: '24px' },
                    largeBreakpointFlexProps: { flexDirection: 'row', alignItems: 'stretch' }
                }}
            >
                <Image src={src} alt={alt} />

                <Flex flexStyleProps={{ defaultFlexProps: { gap: '16px' } }}>
                    <Flex
                        flexStyleProps={{
                            defaultFlexProps: { gap: '8px' },
                            largeBreakpointFlexProps: { alignItems: 'start' }
                        }}
                    >
                        <TitleStyled>
                            {title}
                        </TitleStyled>

                        <ToolsStyled>
                            {tools.join(', ')}
                        </ToolsStyled>
                    </Flex>

                    <DescriptionStyled>
                        {description}
                    </DescriptionStyled>

                    <Flex
                        flexStyleProps={{
                            defaultFlexProps: { gap: '16px', justifyContent: 'start' },
                            largeBreakpointFlexProps: { flexDirection: 'row', alignItems: 'start' }
                        }}
                    >
                        {githubButton}
                        {googlePlayButton}
                        {youtubeButton}
                        {websiteButton}
                    </Flex>
                </Flex>
            </Flex>
        </CardStyled>
    );
}