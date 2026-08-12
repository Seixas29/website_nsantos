export const siteConfig = {
  name: "Nuno Santos Lab",
  shortName: "NSL",
  tagline: {
    en: "Biomembranes & nanomedicine",
    pt: "Biomembranas e nanomedicina",
  },
  description: {
    en: "We study biochemical and biophysical processes at human cell membranes and their viral and bacterial pathogens — from enveloped-virus entry and assembly to antimicrobial peptides, biosensors, and cardiovascular risk.",
    pt: "Estudamos processos bioquímicos e biofísicos ao nível das membranas das células humanas e dos seus agentes patogénicos virais e bacterianos — da entrada e montagem de vírus envelopados a péptidos antimicrobianos, biossensores e risco cardiovascular.",
  },
  overview: {
    en: [
      "We investigate biochemical and biophysical processes at the membranes of human cells and of their viral and bacterial pathogens. A core focus is the two stages of the enveloped-virus life cycle that involve biomembranes — entry of the virus or its contents into the target cell, and formation of new virions — with emphasis on HIV-1 and dengue virus. We also study fibrinogen binding to the erythrocyte membrane and its relevance as a cardiovascular risk factor.",
      "We perform preclinical evaluation of membrane activity and molecular mechanisms of action of antimicrobial peptides (AMPs) and cell-penetrating peptides (CPPs). In nanotechnology and nanomedicine, we develop innovative biosensor systems with improved selectivity and sensitivity, including nanoparticles and amyloid-based biosensors.",
    ],
    pt: [
      "Processos bioquímicos e biofísicos que ocorrem ao nível das membranas das células humanas, bem como dos seus agentes patogénicos virais e bacterianos. Estudo das duas etapas do ciclo de vida dos vírus envelopados (principalmente HIV-1 e vírus da dengue) que envolvem biomembranas — a entrada do vírus ou do seu conteúdo na célula-alvo e a formação de novos viriões. Estudo da ligação do fibrinogénio à membrana eritrocitária e da sua importância como fator de risco cardiovascular.",
      "Avaliação pré-clínica da atividade membranar e do mecanismo de ação a nível molecular dos péptidos antimicrobianos (AMP) e dos péptidos de penetração celular (CPP). Na área da Nanotecnologia/Nanomedicina, estamos também a trabalhar no desenvolvimento de sistemas inovadores de biossensores, com maior seletividade e sensibilidade (por exemplo, nanopartículas e biossensores baseados em amiloide).",
    ],
  },
  email: "nuno.santos@gimm.pt",
  address: {
    en: "Edifício Egas Moniz, Avenida Professor Egas Moniz, 1649-028 Lisboa, Portugal",
    pt: "Edifício Egas Moniz, Avenida Professor Egas Moniz, 1649-028 Lisboa, Portugal",
  },
  affiliations: [
    {
      name: "GIMM",
      full: "Gulbenkian Institute for Molecular Medicine",
      url: "https://gimm.pt/",
    },
    {
      name: "FMUL",
      full: "Faculdade de Medicina da Universidade de Lisboa",
      url: "https://www.medicina.ulisboa.pt/",
    },
  ],
  external: {
    surveillance: {
      en: "Surveillance Network",
      pt: "Rede de Vigilância",
      // Replace with dedicated site URL when live
      url: "",
      blurb: {
        en: "Entomological monitoring across Lisbon — pathogen screening, resistance tracking, and spatial risk intelligence.",
        pt: "Monitorização entomológica em Lisboa — deteção de patógenos, resistência e inteligência espacial de risco.",
      },
    },
    insectary: {
      en: "The Insectary",
      pt: "O Insectário",
      // Replace with dedicated site URL when live
      url: "",
      blurb: {
        en: "ACL-2 mosquito rearing integrated with BSL-3 infection studies for vector competence research.",
        pt: "Criação de mosquitos em ACL-2 integrada com estudos de infeção em BSL-3 para competência vetorial.",
      },
    },
    gimmLab:
      "https://gimm.pt/pt-pt/o-nosso-trabalho/laboratorios/laboratorio-nuno-santos/",
  },
  social: {},
} as const;

export const navLinks = [
  { href: "/research", label: { en: "Research", pt: "Investigação" } },
  { href: "/team", label: { en: "Team", pt: "Equipa" } },
  { href: "/publications", label: { en: "Publications", pt: "Publicações" } },
  { href: "/contact", label: { en: "Contact", pt: "Contacto" } },
] as const;

export const researchAreas = [
  { en: "Biophysics", pt: "Biofísica" },
  { en: "Nanomedicine", pt: "Nanomedicina" },
  { en: "Biosensors", pt: "Biossensores" },
  { en: "Synthetic biology", pt: "Biologia sintética" },
  { en: "Cardiovascular risk assessment", pt: "Avaliação do risco cardiovascular" },
  { en: "Enveloped viruses", pt: "Vírus envelopados" },
  { en: "Antimicrobial surface coatings", pt: "Revestimentos de superfícies antimicrobianos" },
  { en: "Antimicrobial peptides", pt: "Péptidos antimicrobianos" },
  { en: "Anticancer peptides", pt: "Péptidos anticancerígenos" },
  { en: "Nuclear membrane ageing", pt: "Envelhecimento da membrana nuclear" },
  { en: "Atomic force microscopy", pt: "Microscopia de força atómica" },
] as const;

export const researchAxes = [
  {
    id: "biomembranes",
    title: { en: "Biomembranes & pathogen interfaces", pt: "Biomembranas e interfaces patogénicas" },
    description: {
      en: "Membrane processes in human cells and pathogens — especially HIV-1 and dengue entry and virion assembly.",
      pt: "Processos membranares em células humanas e patógenos — em especial entrada e montagem de viriões de HIV-1 e dengue.",
    },
    span: "lg:col-span-2",
  },
  {
    id: "nanomedicine",
    title: { en: "Nanomedicine & peptides", pt: "Nanomedicina e péptidos" },
    description: {
      en: "Preclinical membrane activity of AMPs and CPPs, antimicrobial coatings, and anticancer peptide strategies.",
      pt: "Atividade membranar pré-clínica de AMP e CPP, revestimentos antimicrobianos e estratégias com péptidos anticancerígenos.",
    },
    span: "",
  },
  {
    id: "biosensors",
    title: { en: "Biosensors & nanotech", pt: "Biossensores e nanotecnologia" },
    description: {
      en: "Next-generation biosensors with higher selectivity and sensitivity — including nanoparticle and amyloid-based systems.",
      pt: "Biossensores de nova geração com maior seletividade e sensibilidade — incluindo sistemas baseados em nanopartículas e amiloide.",
    },
    span: "",
  },
  {
    id: "cardiovascular",
    title: { en: "Cardiovascular risk", pt: "Risco cardiovascular" },
    description: {
      en: "Fibrinogen–erythrocyte membrane interactions and AFM-based tools to assess cardiovascular risk.",
      pt: "Interações fibrinogénio–membrana eritrocitária e ferramentas baseadas em AFM para avaliar o risco cardiovascular.",
    },
    span: "",
  },
  {
    id: "biophysics",
    title: { en: "Biophysics & AFM", pt: "Biofísica e AFM" },
    description: {
      en: "Quantitative biophysics and atomic force microscopy of cells, membranes, clots, and biomaterials at the nanoscale.",
      pt: "Biofísica quantitativa e microscopia de força atómica de células, membranas, coágulos e biomateriais à nanoescala.",
    },
    span: "",
  },
  {
    id: "vectors",
    title: { en: "Vector surveillance & control", pt: "Vigilância e controlo de vetores" },
    description: {
      en: "Tools for surveillance and control of Aedes mosquitoes — major vectors of dengue and Zika — including SMART-DIET.",
      pt: "Ferramentas para vigilância e controlo de mosquitos Aedes — vetores de dengue e Zika — incluindo o SMART-DIET.",
    },
    span: "lg:col-span-2",
  },
] as const;

export const projects = [
  {
    years: "2025–2028",
    title: "BIODyes",
    description: {
      en: "Development of biopigments for sustainable dyeing and printing.",
      pt: "Desenvolvimento de biopigmentos para tingimento e estampagem sustentáveis.",
    },
    role: { en: "Participation: Nuno Santos", pt: "Participação: Nuno Santos" },
    funding: "Compete 2030 · Lisboa 2030 · Portugal 2030 · EU",
  },
  {
    years: "2025–2028",
    title: "Nano2FILM",
    description: {
      en: "Targeted multiplexed lipid nanocarriers against drug-resistant bacterial biofilm.",
      pt: "Nanoportadores lipídicos multiplexados contra biofilmes bacterianos resistentes a fármacos.",
    },
    role: { en: "Participation: Nuno Santos", pt: "Participação: Nuno Santos" },
    funding: "EU ERA4Health (NANOTECMEC)",
  },
  {
    years: "2025–2026",
    title: "NucLeAR",
    description: {
      en: "Age-defying nucleus: targeting plasmalogens to reverse age-induced biomechanical decline.",
      pt: "Núcleo sem idade: plasmalogénios para reverter o declínio biomecânico associado ao envelhecimento.",
    },
    role: { en: "Coordinator: Maria João Sarmento", pt: "Coordenação: Maria João Sarmento" },
    funding: "FCT",
  },
  {
    years: "2025–2026",
    title: "SMART-DIET",
    description: {
      en: "Next-generation tools for surveillance and control of Aedes albopictus, a major vector of dengue and Zika viruses.",
      pt: "Ferramentas de nova geração para vigilância e controlo de Aedes albopictus, vetor de dengue e Zika.",
    },
    role: { en: "Coordinator: Gonçalo Seixas", pt: "Coordenação: Gonçalo Seixas" },
    funding: "FCT",
  },
  {
    years: "2024–2026",
    title: "SynEry",
    description: {
      en: "Bottom-up reconstruction of a synthetic erythrocyte: biophysical properties, biomechanical assessment and cell–cell interactions.",
      pt: "Reconstrução bottom-up de um eritrócito sintético: propriedades biofísicas, avaliação biomecânica e interações célula–célula.",
    },
    role: { en: "Coordinator: Nuno Santos", pt: "Coordenação: Nuno Santos" },
    funding: "EU HORIZON-EIC Pathfinder (101046894)",
  },
  {
    years: "2023–2025",
    title: "Res4PrioPath",
    description: {
      en: "Integrated antiviral discovery platform of broad-spectrum small-molecule inhibitors of viral targets from priority preparedness pathogens.",
      pt: "Plataforma integrada de descoberta de inibidores de largo espectro de alvos virais de patógenos prioritários.",
    },
    role: { en: "Coordinator: Nuno Santos", pt: "Coordenação: Nuno Santos" },
    funding: "EU ISIDORe JRA",
  },
] as const;

export const previousProjects = [
  {
    years: "2023–2024",
    title: "AMP-AgNP conjugates",
    description: {
      en: "Mutual reinforcement of antibacterial activity in AMP–silver nanoparticle conjugates.",
      pt: "Reforço mútuo da atividade antibacteriana em conjugados AMP–nanopartículas de prata.",
    },
    role: { en: "Coordinator: Sónia Gonçalves", pt: "Coordenação: Sónia Gonçalves" },
    funding: "FCT",
  },
  {
    years: "2023–2024",
    title: "Flavivirus capsid interactions",
    description: {
      en: "Biophysical studies of flavivirus capsid protein interactions with key biological targets toward future inhibition.",
      pt: "Estudos biofísicos das interações da proteína do capsídeo de flavivírus com alvos biológicos-chave.",
    },
    role: { en: "Coordinator: Ivo Martins", pt: "Coordenação: Ivo Martins" },
    funding: "FCT",
  },
  {
    years: "2023–2024",
    title: "ImPlat",
    description: {
      en: "Single-cell platform to validate material scaffolds and drugs for enhanced osteointegration of biomedical implants.",
      pt: "Plataforma de célula única para validar scaffolds e fármacos para osteointegração de implantes.",
    },
    role: { en: "Coordinator: Nuno Santos", pt: "Coordenação: Nuno Santos" },
    funding: "PRR",
  },
  {
    years: "2022–2024",
    title: "COMPLICE",
    description: {
      en: "Cooperative mechanical coupling of adherens junctions and focal adhesions supporting breast cancer progression.",
      pt: "Acoplamento mecânico cooperativo de junções aderentes e adesões focais na progressão do cancro da mama.",
    },
    role: { en: "Coordinator: Nuno Santos", pt: "Coordenação: Nuno Santos" },
    funding: "FCT",
  },
  {
    years: "2022–2024",
    title: "Nano-coatings for prosthetics",
    description: {
      en: "Nano-coatings for prosthetics based on microbial phenazines conjugated with silver nanostars.",
      pt: "Nanorevestimentos para próteses baseados em fenazinas microbianas conjugadas com nanoestrelas de prata.",
    },
    role: { en: "Coordinator: Pedro Castro", pt: "Coordenação: Pedro Castro" },
    funding: "Fundação “la Caixa”",
  },
  {
    years: "2021–2024",
    title: "Fibrinogen–erythrocyte interaction",
    description: {
      en: "Fibrinogen–erythrocyte interaction as a new approach for early detection of thrombotic events in vascular diseases.",
      pt: "Interação fibrinogénio–eritrócito como nova abordagem para deteção precoce de eventos trombóticos.",
    },
    role: { en: "Coordinator: Nuno Santos", pt: "Coordenação: Nuno Santos" },
    funding: "FCT",
  },
] as const;

export const awards = [
  {
    year: 2023,
    title: {
      en: "ULisboa / Caixa Geral de Depósitos Prize (Biology, Biological Engineering, Biochemistry and Biotechnology)",
      pt: "Prémio ULisboa / Caixa Geral de Depósitos (Biologia, Engenharia Biológica, Bioquímica e Biotecnologia)",
    },
  },
  {
    year: 2017,
    title: {
      en: "ULisboa / Caixa Geral de Depósitos Prize (Biology, Biological Engineering, Biochemistry and Biotechnology)",
      pt: "Prémio ULisboa / Caixa Geral de Depósitos (Biologia, Engenharia Biológica, Bioquímica e Biotecnologia)",
    },
  },
  {
    year: 2005,
    title: {
      en: "Dr. José Luís Champalimaud Prize on HIV Research (Applied Research and Technologies)",
      pt: "Prémio Dr. José Luís Champalimaud em Investigação HIV (Investigação Aplicada e Tecnologias)",
    },
  },
  {
    year: 2004,
    title: {
      en: "Dr. José Luís Champalimaud Prize on HIV Research (Basic Research)",
      pt: "Prémio Dr. José Luís Champalimaud em Investigação HIV (Investigação Básica)",
    },
  },
  {
    year: 2001,
    title: {
      en: "Calouste Gulbenkian Foundation Prize in Biophysics",
      pt: "Prémio Fundação Calouste Gulbenkian em Biofísica",
    },
  },
] as const;

export const team = [
  {
    name: "Nuno Santos",
    role: { en: "Group Leader", pt: "Investigador Principal" },
    bio: {
      en: "Group Leader of the Biomembranes and Nanomedicine laboratory at GIMM.",
      pt: "Investigador Principal do laboratório de Biomembranas e Nanomedicina no GIMM.",
    },
    photo: "/team/Nuno.jpg",
    featured: true,
  },
  {
    name: "Filomena Carvalho",
    role: { en: "Researcher", pt: "Investigadora" },
    bio: {
      en: "Researcher specializing in atomic force microscopy and membrane biophysics.",
      pt: "Investigadora especialista em microscopia de força atómica e biofísica de membranas.",
    },
    photo: "/team/filomena.jpg",
  },
  {
    name: "Sónia Gonçalves Abreu",
    role: { en: "Researcher", pt: "Investigadora" },
    bio: {
      en: "Antimicrobial peptides and nanomedicine approaches against bacterial pathogens.",
      pt: "Péptidos antimicrobianos e abordagens de nanomedicina contra patógenos bacterianos.",
    },
  },
  {
    name: "Pedro Marmé",
    role: { en: "Researcher", pt: "Investigador" },
    bio: {
      en: "Membrane biophysics and molecular mechanisms at the cell interface.",
      pt: "Biofísica de membranas e mecanismos moleculares na interface celular.",
    },
  },
  {
    name: "Gonçalo Seixas",
    role: { en: "Postdoctoral Researcher", pt: "Investigador Pós-Doutorado" },
    bio: {
      en: "Postdoctoral researcher coordinating SMART-DIET — surveillance and control of Aedes albopictus.",
      pt: "Investigador pós-doutorado coordenador do SMART-DIET — vigilância e controlo de Aedes albopictus.",
    },
    photo: "/team/Goncalo.jpg",
  },
  {
    name: "Catarina Lopes",
    role: { en: "Postdoctoral Researcher", pt: "Investigadora Pós-Doutorado" },
    bio: {
      en: "Postdoctoral researcher developing synthetic erythrocytes under the SynEry project.",
      pt: "Investigadora pós-doutorado que desenvolve eritrócitos sintéticos no âmbito do projeto SynEry.",
    },
    photo: "/team/catarina.jpg",
  },
  {
    name: "Maria João Sarmento",
    role: { en: "Postdoctoral Researcher", pt: "Investigadora Pós-Doutorado" },
    bio: {
      en: "Nuclear biomechanics and ageing — coordinator of NucLeAR.",
      pt: "Biomecânica nuclear e envelhecimento — coordenadora do NucLeAR.",
    },
  },
  {
    name: "Joana Ricardo",
    role: { en: "Manager", pt: "Gestora" },
    bio: {
      en: "Lab manager ensuring operations, stocks, procurement, and research logistics.",
      pt: "Gestora do laboratório — operações, stocks, encomendas e logística da investigação.",
    },
    photo: "/team/Joana.jpg",
  },
  {
    name: "Beatriz Simões",
    role: { en: "PhD Student", pt: "Estudante de Doutoramento" },
    bio: {
      en: "PhD student in the Biomembranes and Nanomedicine laboratory.",
      pt: "Estudante de doutoramento no laboratório de Biomembranas e Nanomedicina.",
    },
    photo: "/team/beatriz.jpg",
  },
  {
    name: "Inês Saraiva",
    role: { en: "PhD Student", pt: "Estudante de Doutoramento" },
    bio: {
      en: "Doctoral research in membrane biophysics and host–pathogen interactions.",
      pt: "Investigação de doutoramento em biofísica de membranas e interações hospedeiro–patógeno.",
    },
  },
  {
    name: "Rita Fernandes",
    role: { en: "PhD Student", pt: "Estudante de Doutoramento" },
    bio: {
      en: "Explores novel methods for establishing Wolbachia symbiosis in Aedes aegypti through oral feeding techniques.",
      pt: "Explora novos métodos para estabelecer simbiose de Wolbachia em Aedes aegypti através de técnicas de alimentação oral.",
    },
    photo: "/team/Rita.png",
  },
  {
    name: "Eva Dias",
    role: { en: "MSc Student", pt: "Estudante de Mestrado" },
    bio: {
      en: "Master’s research on antivirals targeting flaviviruses and vector-borne outbreaks.",
      pt: "Investigação de mestrado em antivirais contra flavivírus e surtos transmitidos por vetores.",
    },
    photo: "/team/Eva.jpg",
  },
  {
    name: "Renata Matinhos",
    role: { en: "MSc Student", pt: "Estudante de Mestrado" },
    bio: {
      en: "Master’s research within the lab’s biomembranes and infection programmes.",
      pt: "Investigação de mestrado nos programas de biomembranas e infeção do laboratório.",
    },
    photo: "/team/Renata.png",
  },
  {
    name: "Tomás Vieira",
    role: { en: "MSc Student", pt: "Estudante de Mestrado" },
    bio: {
      en: "Master’s research on biophysical properties of antimicrobial peptides.",
      pt: "Investigação de mestrado nas propriedades biofísicas de péptidos antimicrobianos.",
    },
    photo: "/team/Tomas.jpg",
  },
  {
    name: "Constança Cachorreiro",
    role: { en: "MSc Student", pt: "Estudante de Mestrado" },
    bio: {
      en: "Master’s research within the lab’s biomembranes and nanomedicine programmes.",
      pt: "Investigação de mestrado nos programas de biomembranas e nanomedicina do laboratório.",
    },
  },
  {
    name: "João Magueijo",
    role: { en: "MSc Student", pt: "Estudante de Mestrado" },
    bio: {
      en: "Master’s research in molecular biophysics and infection biology.",
      pt: "Investigação de mestrado em biofísica molecular e biologia da infeção.",
    },
  },
  {
    name: "Xenia Marques",
    role: { en: "MSc Student", pt: "Estudante de Mestrado" },
    bio: {
      en: "Master’s research contributing to the lab’s translational projects.",
      pt: "Investigação de mestrado nos projetos translacionais do laboratório.",
    },
  },
] as const;

export const publications = [
  {
    authors: "Martins AS, Carvalho FA, Nascimento AR, et al.",
    year: 2024,
    title: "Zika virus capsid protein closed structure modulates binding to host lipid systems",
    journal: "Protein Science",
    doi: "10.1002/pro.5142",
  },
  {
    authors: "Lopes CS, Curty J, Carvalho FA, et al.",
    year: 2023,
    title: "A mathematical model of fibrinogen-mediated erythrocyte-erythrocyte adhesion",
    journal: "Communications Biology",
    doi: "10.1038/s42003-023-04560-4",
  },
  {
    authors: "Makowski M, Almendro-Vedia VG, Domingues MM, et al.",
    year: 2023,
    title:
      "Activity modulation of the Escherichia coli F1FO ATP synthase by a designed antimicrobial peptide via cardiolipin sequestering",
    journal: "iScience",
    doi: "10.1016/j.isci.2023.107004",
  },
  {
    authors: "Domingues MM, Carvalho FA, Santos NC",
    year: 2022,
    title: "Nanomechanics of blood clot and thrombus formation",
    journal: "Annual Review of Biophysics",
    doi: "10.1146/annurev-biophys-111821-072110",
  },
  {
    authors: "Marques MC, Lousa D, Silva PM, et al.",
    year: 2022,
    title: "The importance of lipid conjugation on anti-fusion peptides against Nipah virus",
    journal: "Biomedicines",
    doi: "10.3390/biomedicines10030703",
  },
  {
    authors: "Silva PM, da Silva IV, Sarmento MJ, et al.",
    year: 2022,
    title:
      "Aquaporin-3 and Aquaporin-5 facilitate migration and cell-cell adhesion in pancreatic cancer by modulating cell biomechanical properties",
    journal: "Cells",
    doi: "10.3390/cells11081308",
  },
  {
    authors: "Tomás AL, Reichel A, Silva PM, et al.",
    year: 2022,
    title: "UV-C irradiation-based inactivation of SARS-CoV-2 in contaminated porous and non-porous surfaces",
    journal: "Journal of Photochemistry and Photobiology B",
    doi: "10.1016/j.jphotobiol.2022.112531",
  },
  {
    authors: "Guedes AF, Carvalho FA, Moreira C, et al.",
    year: 2019,
    title:
      "Fibrinogen-erythrocyte binding and hemorheology measurements in the assessment of essential arterial hypertension patients",
    journal: "Nanoscale",
    doi: "10.1039/C8NR04398A",
  },
  {
    authors: "Guedes AF, Carvalho FA, Moreira C, et al.",
    year: 2017,
    title:
      "Essential arterial hypertension patients present higher cell adhesion forces, contributing to fibrinogen-dependent cardiovascular risk",
    journal: "Nanoscale",
    doi: "10.1039/C7NR03891G",
  },
  {
    authors: "Guedes AF, Carvalho FA, Malho I, et al.",
    year: 2016,
    title: "Atomic force microscopy as a tool to evaluate the risk of cardiovascular diseases in patients",
    journal: "Nature Nanotechnology",
    doi: "10.1038/nnano.2016.52",
  },
] as const;

export const stats = [
  { value: 11, suffix: "", label: { en: "Research areas", pt: "Áreas de investigação" } },
  { value: 100, suffix: "+", label: { en: "Publications", pt: "Publicações" } },
  { value: 6, suffix: "", label: { en: "Active projects", pt: "Projetos ativos" } },
  { value: 5, suffix: "", label: { en: "Awards", pt: "Prémios" } },
] as const;

export const partners = [
  {
    id: "gimm",
    name: "GIMM",
    src: null,
    url: "https://gimm.pt/",
  },
  {
    id: "fct",
    name: "FCT",
    src: "/images/partners/fct.svg",
    url: "https://www.fct.pt/",
  },
  {
    id: "horizon",
    name: "Horizon Europe",
    src: "/images/partners/horizon-europe.svg",
    url: "https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en",
  },
  {
    id: "fmul",
    name: "Faculdade de Medicina da Universidade de Lisboa",
    src: "/images/partners/fmul.png",
    url: "https://www.medicina.ulisboa.pt/",
  },
  {
    id: "compete2030",
    name: "Compete 2030",
    src: "/images/partners/compete2030.svg",
    url: "https://www.compete2030.gov.pt/",
  },
  {
    id: "lacaixa",
    name: "Fundación ”la Caixa”",
    src: "/images/partners/lacaixa.png",
    url: "https://fundacionlacaixa.org/",
  },
] as const;
