



interface StudyInfo {
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


export const studyInfo: StudyInfo[] = [
    {
        title: "Secure Coding Black Belt",
        company: "OWASP Foundation",
        location: "Remote",
        startDate: new Date("2023-10-01"),
        endDate: new Date("2023-10-01"),
        description: "Intermediate learning of best practices to have secure code.",
        modality: "Remote",
        link: "https://acortar.link/bvLWRv",
    },
    {
        title: "Security Code Review Ninja",
        company: "OWASP Foundation",
        location: "Remote",
        startDate: new Date("2023-10-01"),
        endDate: new Date("2023-10-01"),
        description: "Basic learning of best practices to have secure code.",
        modality: "Remote",
        link: "https://acortar.link/ME3USl",
    },
    {
        title: "Business leadership",
        company: "Platzi",
        location: "Remote",
        startDate: new Date("2023-03-01"),
        endDate: new Date("2023-03-01"),
        description: "Learning about a healthy work environment and correct delegation of activities.",
        modality: "Remote",
        link: "https://platzi.com/p/agarciaweb/curso/1446-liderazgo-empresarial/diploma/detalle/",
    },
    {
        title: "REST API course with Laravel",
        company: "Platzi",
        location: "Remote",
        startDate: new Date("2022-11-01"),
        endDate: new Date("2022-11-01"),
        description: "Development of REST API with Laravel which includes: authentication methods, creation methods and correct API structure.",
        modality: "Remote",
        link: "https://platzi.com/p/agarciaweb/curso/2185-laravel-api/diploma/detalle/",
    },
    
]