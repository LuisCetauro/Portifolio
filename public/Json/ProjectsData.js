const projects = [
  {
    slug: "Streaming",
    title: "Streaming Mockup",
    description:
      "Um site de streaming baseado no netflix.Feito com HTML, CSS, JavaScript, com ênfase no uso de jQuery, manipulação do DOM e eventos para criar uma interface interativa que permite aos usuários ter acesso ao conteudo geral e seu conteudo específico.",
    github: "https://github.com/LuisCetauro/Netflix",
    interact: "https://aesthetic-lebkuchen-de7c7e.netlify.app/",
    src: [
      "/Streaming/img1.png",
      "/Streaming/img2.png",
      "/Streaming/img3.png",
      "/Streaming/img4.png",
      "/Streaming/img5.png",
    ],
  },
  {
    slug: "Api_PHP",
    title: "API PHP + ReactJS",
    description:
      "Api desenvolvida utilizando Laravel 10 utilizando Mysql, integrada à um front-end feito em ReactJs e estilizado com TailWindCSS. Aplicação não está online, interagir é o repositório da API onde você encontrará toda a documentação e github o repositório do front-end",
    github: "https://github.com/LuisCetauro/FrontEndCaipira",
    interact: "https://github.com/LuisCetauro/Api-Laravel-10",
    src: [
      "/Api/img1.png",
      "/Api/img2.png",
      "/Api/img3.png",
      "/Api/img4.png",
      "/Api/img5.png",
      "/Api/img6.png",
      "/Api/img7.png",
    ],
  },
  {
    slug: "Marketplace",
    title: "9Ghz",
    description:
      "Um MarketPlace desenvolvido em React e estilizado com TailWind CSS, com foco na utilização de componentes funcionais, ContextApi, manipulação de estado com Hooks e  uma tipagem estática das interfaces, proporcionando uma experiência de usuário intuitiva e interativa ao explorar uma variedade de produtos.",
    github: "https://github.com/LuisCetauro/9GHZ",
    interact: "https://9ghz-xi.vercel.app/",
    src: [
      "/Market/img1.png",
      "/Market/img2.png",
      "/Market/img3.png",
      "/Market/img4.png",
      "/Market/img5.png",
    ],
  },
  {
    slug: "DarkMode",
    title: "DarkMode",
    description:
      "Esse é um projeto de página estática, principal objetivo é a utilização de TailWindCSS para criar o efeito de 'darkMode' global na aplicação.Existe integração com o MongoDB para fazer o back-end. Projeto não está online, não é possível visita-lo. ",
    github: "https://github.com/LuisCetauro/web-developer-challenge",
    interact: "",
    src: ["/DarkMode/img1.png", "/DarkMode/img2.png"],
  },
  {
    slug: "Iaara",
    title: "Iaara",
    description:
      "Atualmente uma plataforma para compartilhar seus momentos feita com NextJs e TailWind CSS. Para armazenar meus usuários e seus momentos o MongoDB(NoSQL) foi utilizado.Venha conhecer.",
    github: "https://github.com/LuisCetauro/Iaara",
    interact: "https://iaara.vercel.app/",
    src: [
      "/Iaara/img1.png",
      "/Iaara/img2.png",
      "/Iaara/img3.png",
      "/Iaara/img4.png",
      "/Iaara/img5.png",
      "/Iaara/img6.png",
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
