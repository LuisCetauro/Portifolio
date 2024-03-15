const projects = [
  {
    slug: "Streaming",
    title: "Streaming Mockup",
    description:
      "Um site de streaming baseado no netflix.Feito com HTML, CSS, JavaScript, com ênfase no uso de jQuery, manipulação do DOM e eventos para criar uma interface interativa que permite aos usuários ter acesso ao conteudo geral e seu conteudo específico.",
    github: "https://github.com/LuisCetauro/Netflix",
    interact: "https://aesthetic-lebkuchen-de7c7e.netlify.app/",
    src: [
      "/project1/img1.png",
      "/project1/img2.png",
      "/project1/img3.png",
      "/project1/img4.png",
      "/project1/img5.png",
    ],
  },
  {
    slug: "Landing",
    title: "Landing Page",
    description:
      "Uma Landing Page estática e simples desenvolvida principalmente em HTML e CSS, com uma pequena adição de JavaScript para interatividade. Este projeto marcou meu início no desenvolvimento web, explorando conceitos fundamentais de interface e experiência do usuário.",
    github: "https://github.com/LuisCetauro/Landingpage",
    interact: "https://adorable-kitten-dacec1.netlify.app/",
    src: ["/project3/img1.png", "/project3/img2.png", "/project3/img3.png"],
  },
  {
    slug: "Marketplace",
    title: "9Ghz",
    description:
      "Um MarketPlace desenvolvido em React e estilizado com TailWind CSS, com foco na utilização de componentes funcionais, manipulação de estado com Hooks e  uma tipagem estática das interfaces, proporcionando uma experiência de usuário intuitiva e interativa ao explorar uma variedade de produtos.",
    github: "https://github.com/LuisCetauro/9GHZ",
    interact: "https://9ghz-xi.vercel.app/",
    src: [
      "/project2/img1.png",
      "/project2/img2.png",
      "/project2/img3.png",
      "/project2/img4.png",
      "/project2/img5.png",
    ],
  },
  {
    slug: "Quizz",
    title: "Quizz",
    description:
      "Um quiz interativo implementado com HTML, CSS e JavaScript puro, onde diferentes níveis de dificuldade foram integrados. Este projeto foi uma iniciativa pessoal para aprimorar minhas habilidades em desenvolvimento web.",
    github: "https://github.com/LuisCetauro/Quizz",
    interact: "https://lambent-basbousa-60e654.netlify.app/",
    src: [
      "/project4/img1.png",
      "/project4/img2.png",
      "/project4/img3.png",
      "/project4/img4.png",
      "/project4/img5.png",
    ],
  },
  {
    slug: "Iaara",
    title: "Iaara",
    description:
      "Atualmente uma plataforma para compartilhar seus momentos feita com NextJs e TailWind CSS. Para armazenar meus usuários o MongoDB(NoSQL) foi utilizado.Esse é um projeto de longo prazo, eventualmente se tornando uma plataforma para organizar seus grupos do dia a dia. Venha conhecer.",
    github: "https://github.com/LuisCetauro/Iaara",
    interact: "https://iaara.vercel.app/",
    src: [
      "/project5/img1.png",
      "/project5/img2.png",
      "/project5/img3.png",
      "/project5/img4.png",
      "/project5/img5.png",
      "/project5/img6.png",
    ],
  },
];

export async function getProjects() {
  return projects;
}

export async function getProject(slug) {
  const projeto = projects.find((projeto) => projeto.slug === slug);
  return projeto;
}
