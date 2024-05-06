import api from 'assets/api.png';
import chatapp from 'assets/chatapp.png';
import dialogue from 'assets/dialogue.png';
import genshin from 'assets/genshin.png';
import jobboard from 'assets/jobboard.png';
import namespaces from 'assets/namespaces.png';
import portfolio from 'assets/portfolio.png';
import special from 'assets/special.png';
import todoapp from 'assets/todoapp.png';
import uitoolkit from 'assets/uitoolkit.png';

interface ILinksData {
    github?: string;
    googlePlay?: string;
    website?: string;
    youtube?: string;
}

interface IProjectsData {
    description: string;
    id: string;
    image: IImage;
    links?: ILinksData;
    title: string;
    tools: ITools[];
}

interface ITools {
    link?: string;
    title: string;
}

interface IImage {
    alt: string;
    src: string;
}

export const projects: IProjectsData[] = [
	{
        id: 'jobboard',
        title: 'Online Job Board',
        tools: [
            { title: 'Java' },
            { title: 'Spring' },
            { title: 'Spring Boot' },
            { title: 'Spring Security' },
            { title: 'Hibernate' },
            { title: 'JPA' },
            { title: 'MySQL' },
            { title: 'Lombok' },
            { title: 'Maven' },
            { title: 'Railway' },
            { title: 'Planet Scale' },
            { title: 'Typescript' },
            { title: 'React' },
            { title: 'Next.js' },
            { title: 'Material UI' },
            { title: 'Axios' },
            { title: 'Cloudflare R2' },
            { title: 'Day.js' },
            { title: 'Nookies' },
            { title: 'Country-State-City' }
        ],
        description: 'A full stack application with basic authentication using JWT, that allows seeing, posting and managing jobs for free. User images are stored using Cloudflare R2.',
        image: { src: jobboard, alt: 'A thumbnail showing a company page in the website with the tech stack used for this project.' },
        links: {
            website: 'https://jb.wafflus.com'
        }
    },
	{
		id: 'todoapp',
		title: 'To-Do App',
		tools: [
            { title: 'Java' },
            { title: 'Spring Boot' },
            { title: 'Spring MVC' },
            { title: 'Spring Data' },
            { title: 'Spring Security' },
            { title: 'AWS' },
            { title: 'Docker' },
            { title: 'JPA / Hibernate' },
            { title: 'JWT' },
            { title: 'RDS MySQL' },
            { title: 'Lombok' },
            { title: 'Maven' },
            { title: 'Typescript' },
            { title: 'React' },
            { title: 'JUnit / Mockito' }
		],
		description: 'A full stack application with basic authentication using JWT, that allows creating groups with toggle todos inside. Uses AWS. Link on resume only.',
		image: { src: todoapp, alt: '' }
	},
	{
		id: 'chatapp',
		title: 'Chat App',
		tools: [
			{ title: 'Node.JS' },
			{ title: 'Next.JS' },
			{ title: 'React' },
			{ title: 'Typescript' },
			{ title: 'Prisma' },
			{ title: 'Clerk' },
			{ title: 'LiveKit' },
			{ title: 'Socket.io' },
			{ title: 'UploadThing' },
		],
		description: 'A full stack application with authentication using Clerk, that allows chatting with others via text, audio or video channels. Link on resume only.',
		image: { src: chatapp, alt: '' }
	},
    {
        id: 'genshinimpactmovementsystem',
        title: 'Genshin Impact Movement System',
        tools: [
            { title: 'Unity' },
            { title: 'C#' },
            { title: 'State Machines' }
        ],
        description: 'A replica of the successfull game \'Genshin Impact\' movement system. This system was replicated in hopes of teaching beginners how to create a movement system for their game using State Machines in Unity.',
        image: { src: genshin, alt: 'A thumbnail showing in text what systems the project teaches, as well as a running character by its side.' },
        links: {
            github: 'https://github.com/Wafflus/unity-genshin-impact-movement-system',
            youtube: 'https://www.youtube.com/watch?v=-HCv142Uqhk&list=PL0yxB6cCkoWKuPoh_9dSvdItQENVx7YTW'
        }
    },
    {
        id: 'dialoguesystem',
        title: 'Dialogue System',
        tools: [
            { title: 'Unity' },
            { title: 'C#' },
            { title: 'GraphView API' }
        ],
        description: 'A basic dialogue system using Unity GraphView API. This dialogue system was created in hopes of getting people started with the GraphView API in Unity.',
        image: { src: dialogue, alt: 'A thumbnail showing examples of created nodes with text and connections to other nodes in a graph.' },
        links: {
            github: 'https://github.com/Wafflus/unity-dialogue-system',
            youtube: 'https://www.youtube.com/watch?v=nvELzBYMK1U&list=PL0yxB6cCkoWK38XT4stSztcLueJ_kTx5f'
        }
    },
    {
        id: 'portfolio',
        title: 'Portfolio',
        tools: [
            { title: 'React', link: 'https://reactjs.org/' },
            { title: 'TypeScript', link: 'https://www.typescriptlang.org/' },
            { title: 'Styled Components', link: 'https://styled-components.com/' }
        ],
        description: 'The portfolio we\'re seeing right now. This portfolio was created as a way to showcase my experience as well as how to use React, TypeScript, Styled Components and basic Animations.',
        image: { src: portfolio, alt: 'The header of this portfolio, showing my logo, my name and a description of what I do.' },
        links: {
            github: 'https://github.com/Wafflus/portfolio',
            website: 'https://portfolio.wafflus.com'
        }
    },
    {
        id: 'apiwebsite',
        title: 'Random Pictures & Facts',
        tools: [
            { title: 'React' },
            { title: 'TypeScript' },
            { title: 'Next.JS' },
            { title: 'Tailwind' },
            { title: 'Storybook' }
        ],
        description: 'A random API website. This website was created to showcase how to use an API using Next.JS as well as how to use Tailwind, basic of Animations and Storybook.',
        image: { src: api, alt: 'The options of my Random API website together with a picture of a Shibe (a dog).' },
        links: {
            github: 'https://github.com/Wafflus/random-api-website',
            website: 'https://randomapi.wafflus.com'
        }
    },
    {
        id: 'uitoolkit',
        title: 'UI Toolkit - The Basics',
        tools: [
            { title: 'Unity' },
            { title: 'UI Toolkit' },
            { title: 'Unity Style Sheets' }
        ],
        description: 'An Unity tutorial series about the basics of the UI Toolkit. This tutorial was created in hopes of teaching people how to get started using the UI Toolkit for their Editor as well as understand a bit of its structure.',
        image: { src: uitoolkit, alt: 'A thumbnail showing in text an example of what the project teaches, as well as the final result by its side.' },
        links: {
            youtube: 'https://www.youtube.com/watch?v=EfEAr0meBho&list=PL0yxB6cCkoWImQ8wa74V913mqlK_KTy3I'
        }
    },
    {
        id: 'namespaces',
        title: 'Namespaces',
        tools: [
            { title: 'Unity' },
            { title: 'C#' },
            { title: 'Namespaces' }
        ],
        description: 'A tutorial about namespaces in Unity. This tutorial was created in hopes of teaching people what namespaces are as well as how to use them in Unity (or in C# overall) and why they can be so useful.',
        image: { src: namespaces, alt: 'A thumbnail showing an example of how namespaces can be declared.' },
        links: {
            youtube: 'https://www.youtube.com/watch?v=dOwIZsUqjTM'
        }
    },
    {
        id: 'specialfolders',
        title: 'Unity Special Folders',
        tools: [
            { title: 'Unity' },
            { title: 'Special Folders' }
        ],
        description: 'A small Unity tutorial series about a few of Unity Special Folders. This tutorial was created in hopes of teaching people what are Unity Special Folders as well as what\'s their purpose.',
        image: { src: special, alt: 'A thumbnail showing one of the special folder that the project teaches about.' },
        links: {
            youtube: 'https://www.youtube.com/watch?v=1O1nmZzA_EU&list=PL0yxB6cCkoWLieUyq8wkOoyFLlX8bMP6T'
        }
    }
];
