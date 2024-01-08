



interface JobInfo {
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
        title: "Software Engineer",
        company: "Google",
        location: "Mountain View, CA",
        startDate: new Date("2020-06-01"),
        endDate: new Date("2020-09-01"),
        description: "Worked on the Google Maps team",
        modality: "Internship",
        link: "https://www.google.com/",
        current: true,
    },
    {
        title: "Software Engineer",
        company: "Google",
        location: "Mountain View, CA",
        startDate: new Date("2020-06-01"),
        endDate: new Date("2020-09-01"),
        description: "Worked on the Google Maps team",
        modality: "Internship",
        link: "https://www.google.com/",
        current: false,
    },
    {
        title: "Software Engineer",
        company: "Google",
        location: "Mountain View, CA",
        startDate: new Date("2020-06-01"),
        endDate: new Date("2020-09-01"),
        description: "Worked on the Google Maps team",
        modality: "Internship",
        link: "https://www.google.com/",
        current: false,
    },
]