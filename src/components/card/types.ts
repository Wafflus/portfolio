export interface ICardProps {
    alt: string;
    description: string;
    links?: LinksData;
    src: string;
    title: string;
    tools: string[];
}

interface LinksData {
    github?: string;
    googlePlay?: string;
    website?: string;
    youtube?: string;
}