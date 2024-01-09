
interface SideProjects {
    image: string;
    title: string;
    description: string;
    link: string;
    target?: string;
    technologies: string[];
}
  

export const sideProjects:SideProjects[] = [
    {
      image:
        "/assets/images/portfolio/indietool.jpeg",
      title: "Indietool.tech",
      description:
        "A directory of tools needed for an indie hacker or indie creator.",
      link: "https://indietool.tech",
      technologies: [
        "Nextjs",
        "TypeScript",
        "Tailwind",
        "TRPC",
        "Prisma",      
      ]
    },
  ];