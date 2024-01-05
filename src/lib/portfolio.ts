

interface Portfolio {
    name: string;
    description: string;
    image: string;
    link: string;
    technologies: string[];
}

export const portfolio: Portfolio[] =  [
    {
        name: 'Portfolio',
        description: 'My portfolio website',
        image: 'portfolio.png',
        link: '',
        technologies: ['React', 'TypeScript', 'SCSS']
    },
]