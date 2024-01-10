
interface SideProjects {
    image: string;
    title: string;
    description: string;
    link: string;
    technologies: string[];
}


export const sideProjects:SideProjects[] = [
    {
      image:
        "/assets/images/portfolio/elreferente.jpeg",
      title: "ElReferente",
      description:
        "El Referente is the leading information magazine on startups and innovation in Spain, created and directed by a young and dynamic team of journalists residing in Madrid.",
      link: "https://elreferente.es/",
      technologies: [
        "PHP",
        "Bootstrap",
        "JavaScript",
      ]
    },
    {
      image:
        "/assets/images/portfolio/apis.jpeg",
      title: "Private REST API for Bancamiga",
      description:
        "Financial APIs were developed for the bancamiga platform",
      link: "https://bancamiga.com/",
      technologies: [
        "Python",
        "FastAPI",
        "Postgresql",
        "AS400",
      ]
    },
    {
      image:
        "/assets/images/portfolio/portal-pagos.jpeg",
      title: "Payment Portal",
      description:
        "Online payment system where business owners can manage their collections through credit and debit cards for the Bancamiga company.",
      link: "https://bancamiga.com/",
      technologies: [
        "React",
        "Tailwind",
        "Javascript",
        
      ]
    },
    {
      image:
        "/assets/images/portfolio/registro-candidatos.jpeg",
      title: "Candidate Registration System",
      description:
        "Registration system for all candidates applied to the Bancamiga company.",
      link: "https://bancamiga.com/",
      technologies: [
        "Laravel",
        "PHP",
        "Javascript",
      ]
    },
    {
      image:
        "/assets/images/portfolio/registro-formacion.jpeg",
      title: "Training Registration System",
      description:
        "Registration system for all training received by employees of the Bancamiga company.",
      link: "https://bancamiga.com/",
      technologies: [
        "Laravel",
        "PHP",
        "Javascript",
      ]
    },
    {
      image:
        "/assets/images/portfolio/verdad-o-reto.jpeg",
      title: "Truth or Dare",
      description:
        "Truth or Dare game with more than 10k downloads on the playstore.",
      link: "#",
      technologies: [
        "Laravel",
        "PHP",
        "Javascript",
      ]
    },
  ];