import { AnchorStyled, FooterStyled, TextStyled, TitleStyled } from "./styles";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Container } from "components/container";
import { Flex } from "components/flex";
import { IFooterProps } from "./types";
import { PageBubbles } from "components/page-bubbles";
import { projects } from "data/projects-data";
import { Tag } from "components/tag";
import { theme } from "styles";

export default function Footer({ setActiveMenuItem }: IFooterProps) {
    const outerLinkArrow = <BsBoxArrowUpRight size={16} aria-label='(Opens in a new tab)' />;
    const tools = projects.find(project => project.id === 'portfolio')?.tools.map(tool => <Tag key={tool.title} href={tool.link}><>{tool.title} {outerLinkArrow}</></Tag>) || <></>;
    
    const primaryColor = theme.data.secondaryColor;
    const secondaryColor = theme.data.backgroundColor;

    return (
        <FooterStyled>
            <PageBubbles pageBubbleStyleProps={{ primaryColor, secondaryColor }} />
            
            <Container containerStylesProps={{ verticalPadding: '64px' }}>
                <Flex
                    flexStyleProps={{
                        defaultFlexProps: { gap: '48px' },
                        largeBreakpointFlexProps: { flexDirection: 'row', alignItems: 'start' }
                    }}
                >
                    <Flex 
                        flexStyleProps={{
                            defaultFlexProps: { gap: '8px' },
                            largeBreakpointFlexProps: { alignItems: 'end' }
                        }}
                    >
                        <TitleStyled>
                            Indie Wafflus
                        </TitleStyled>

                        <TextStyled>
                            Portfolio Developed Using
                        </TextStyled>

                        <Flex
                            flexStyleProps={{
                                defaultFlexProps: { gap: '8px' },
                                largeBreakpointFlexProps: { alignItems: 'end' }
                            }}
                        >
                            {tools}
                        </Flex>
                    </Flex>

                    <Flex
                        flexStyleProps={{
                            defaultFlexProps: { gap: '16px' },
                            largeBreakpointFlexProps: { alignItems: 'start' }
                        }}
                    >
                        <TitleStyled>
                            Menu
                        </TitleStyled>

                        <AnchorStyled href="#About" onClick={() => setActiveMenuItem?.('About')}>About</AnchorStyled>
                        <AnchorStyled href="#Projects" onClick={() => setActiveMenuItem?.('Projects')}>Projects</AnchorStyled>
                        <AnchorStyled href="mailto:contact@wafflus.com" onClick={() => setActiveMenuItem?.('Projects')}>Contact (Opens mail app)</AnchorStyled>
                    </Flex>
                </Flex>
            </Container>
        </FooterStyled>
    );
}
