



export interface JobInfo {
    title: string;
    company: string;
    location: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    modality: string;
    link: string;
    current?: boolean;
}


export const jobInfo: JobInfo[] = [
    {
        title: "PHP Developer",
        company: "ElReferente",
        location: "Madrid, Spain",
        startDate: new Date("2022-06-01"),
        description: "My main responsibilities include: Program new features and manage the maintenance of the ElReferente.es platform using PHP as the main language; Work closely with the development team to improve the user experience and increase efficiency.",
        modality: "Full Time, Remote",
        link: "https://elreferente.es/",
        current: true
    },
    {
        title: "Distributed Systems Development Specialist",
        company: "Bancamiga Banbco Universal",
        location: "Caracas, Venezuela",
        startDate: new Date("2022-11-01"),
        description: "I develop and maintain a set of REST API services with python that allow clients to perform financial transactions securely and efficiently. These services are used in the company's internet banking application and have contributed to improving the user experience.",
        modality: "Full Time, In person",
        link: "https://bancamiga.com/",
    },
    {
        title: "PHP Web Developer",
        company: "Innovaditech",
        location: "Buenos Aires, Argentina",
        startDate: new Date("2021-07-01"),
        endDate: new Date("2022-05-01"),
        description: "As a custom website builder, I've created a variety of projects, from landing pages to e-commerce to study centers. I have also had experience maintaining existing websites and implementing new functionality such as new plugins and themes.",
        modality: "Full Time, Remote",
        link: "https://bancamiga.com/",
    },
]