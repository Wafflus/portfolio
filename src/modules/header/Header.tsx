import { CircleStyled, HeaderStyled } from "./styles";
import { Container } from "components/container";
import { Flex } from "components/flex";
import { IHeaderProps } from "./types";
import { Menu } from "components/menu";
import { MenuItem } from "components/menu-item";
import { ProfilePicture } from "components/profile-picture";
import profilePicture from 'assets/profile-picture.png';

export function Header({ activeMenuItem, setActiveMenuItem }: IHeaderProps) {
    return (
        <HeaderStyled shouldShowBackground={activeMenuItem === 'About'}>
            <CircleStyled role={'presentation'} />

            <Container>
                <Flex
                    flexStyleProps={{
                        defaultFlexProps: { gap: '32px' },
                        largeBreakpointFlexProps: { flexDirection: 'row' }
                    }}
                >
                    <ProfilePicture src={profilePicture} alt={'A walrus holding his favourite waffle, my logo.'} />

                    <Menu activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem}>
                        <MenuItem id='About' activeByDefault><span>About</span></MenuItem>
                        <MenuItem id='Projects'><span>Projects</span></MenuItem>
                    </Menu>
                </Flex>
            </Container>
        </HeaderStyled>
    );
}