import { Card } from "components/card";
import { Container } from "components/container";
import { Flex } from "components/flex";
import { IProjectsProps } from "./types";
import { projects } from "data/projects-data";
import { ProjectsStyled } from "./styles";
import { Title } from "components/title";
import { useInView } from "react-intersection-observer";

export function Projects({ activeMenuItem, setActiveMenuItem }: IProjectsProps) {
    const { ref } = useInView({ onChange: (inView, entry) => {
        if (entry.isIntersecting) {
            return;
        }

        if (activeMenuItem !== 'Projects') {
            setActiveMenuItem?.('Projects');
        }
    }});
    
    return (
        <ProjectsStyled id='Projects'>
            <Container containerStylesProps={{ horizontalPadding: '16px' }}>
                <div ref={ref}><Title><>Projects</></Title></div>
                
                <Flex 
                    flexStyleProps={{
                        defaultFlexProps: { gap: '32px' },
                        largeBreakpointFlexProps: { gap: '144px' }
                    }}
                >
                    {projects.map(project => {
                        const tools: string[] = project.tools.map(tool => tool.title);

                        return (
                            <Card key={project.id} title={project.title} tools={tools} description={project.description} links={project.links} src={project.image.src} alt={project.image.alt} />
                        );
                    })}
                </Flex>
            </Container>
        </ProjectsStyled>
    );
}