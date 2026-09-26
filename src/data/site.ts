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
      "Within infectious diseases we also run an Aedes programme: an ACL-2 insectary, field ovitrap surveillance, OneVec (a citizen platform of this lab, with support from Universidade Lusófona FMV and GIMM), and Wolbachia methods in Aedes aegypti aimed at blocking virus transmission.",
    ],
    pt: [
      "Processos bioquímicos e biofísicos que ocorrem ao nível das membranas das células humanas, bem como dos seus agentes patogénicos virais e bacterianos. Estudo das duas etapas do ciclo de vida dos vírus envelopados (principalmente HIV-1 e vírus da dengue) que envolvem biomembranas — a entrada do vírus ou do seu conteúdo na célula-alvo e a formação de novos viriões. Estudo da ligação do fibrinogénio à membrana eritrocitária e da sua importância como fator de risco cardiovascular.",
      "Avaliação pré-clínica da atividade membranar e do mecanismo de ação a nível molecular dos péptidos antimicrobianos (AMP) e dos péptidos de penetração celular (CPP). Na área da Nanotecnologia/Nanomedicina, estamos também a trabalhar no desenvolvimento de sistemas inovadores de biossensores, com maior seletividade e sensibilidade (por exemplo, nanopartículas e biossensores baseados em amiloide).",
      "Nas doenças infecciosas mantemos também um programa Aedes: insetário ACL-2, vigilância de campo com ovitrampas, OneVec (plataforma cidadã deste laboratório, com apoio da Universidade Lusófona FMV e do GIMM) e métodos de Wolbachia em Aedes aegypti para bloquear a transmissão viral.",
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
    insectary: {
      en: "GIMM Aedes Insectary",
      pt: "Insetário Aedes GIMM",
      url: "https://gimm-aedes-insectary.vercel.app/",
      blurb: {
        en: "ACL-2 mosquito rearing in Lisbon, integrated with infection studies for vector competence research.",
        pt: "Criação de mosquitos em ACL-2 em Lisboa, integrada com estudos de infeção para competência vetorial.",
      },
    },
    surveillance: {
      en: "Ovitrap Network",
      pt: "Rede de ovitrampas",
      url: "https://gimm-ovitrap-network.vercel.app/",
      blurb: {
        en: "Field ovitrap surveillance for invasive Aedes in Portugal, from egg collections to laboratory identification — a platform of this lab, hosted at GIMM/FMUL.",
        pt: "Vigilância de campo com ovitrampas para Aedes invasores em Portugal, da recolha de ovos à identificação em laboratório — uma plataforma deste laboratório, no GIMM/FMUL.",
      },
    },
    onevec: {
      en: "OneVec",
      pt: "OneVec",
      url: "https://onevec.vercel.app/",
      blurb: {
        en: "Citizen One Health surveillance of mosquitoes, ticks, sand flies, fleas and Culicoides — a platform of this lab, with support from Universidade Lusófona FMV and GIMM.",
        pt: "Vigilância cidadã One Health de mosquitos, carraças, flebótomos, pulgas e Culicoides — uma plataforma deste laboratório, com apoio da Universidade Lusófona FMV e do GIMM.",
      },
    },
    gimmLab:
      "https://gimm.pt/pt-pt/o-nosso-trabalho/laboratorios/laboratorio-nuno-santos/",
  },
  social: {
    orcid: {
      id: "0000-0002-0580-0475",
      url: "https://orcid.org/0000-0002-0580-0475",
    },
    instagram: {
      handle: "@nunosantoslab",
      url: "https://www.instagram.com/nunosantoslab/",
    },
  },
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
  { en: "Vector biology", pt: "Biologia de vetores" },
  { en: "Aedes mosquitoes", pt: "Mosquitos Aedes" },
  { en: "Wolbachia", pt: "Wolbachia" },
  { en: "Antimicrobial surface coatings", pt: "Revestimentos de superfícies antimicrobianos" },
  { en: "Antimicrobial peptides", pt: "Péptidos antimicrobianos" },
  { en: "Anticancer peptides", pt: "Péptidos anticancerígenos" },
  { en: "Nuclear membrane ageing", pt: "Envelhecimento da membrana nuclear" },
  { en: "Atomic force microscopy", pt: "Microscopia de força atómica" },
] as const;

export const researchAxes = [
  {
    id: "infectious-diseases",
    title: { en: "Infectious diseases", pt: "Doenças infecciosas" },
    description: {
      en: "Viral entry and assembly at host membranes — HIV-1, dengue and related flaviviruses — from molecular mechanisms to Aedes biology and transmission blocking.",
      pt: "Entrada e montagem viral nas membranas do hospedeiro — HIV-1, dengue e flavivírus relacionados — dos mecanismos moleculares à biologia de Aedes e ao bloqueio da transmissão.",
    },
    photo: "/images/research/infectious.png",
    photoAlt: {
      en: "Transmission electron micrograph of flavivirus-like particles at a host membrane",
      pt: "Micrografia electrónica de transmissão de partículas tipo flavivírus junto à membrana do hospedeiro",
    },
  },
  {
    id: "cardiovascular",
    title: { en: "Cardiovascular", pt: "Cardiovascular" },
    description: {
      en: "Fibrinogen–erythrocyte binding and AFM-based tools to read thrombotic and cardiovascular risk, including synthetic-erythrocyte work.",
      pt: "Ligação fibrinogénio–eritrócito e ferramentas de AFM para ler risco trombótico e cardiovascular, incluindo eritrócitos sintéticos.",
    },
    photo: "/images/research/cardiovascular.png",
    photoAlt: {
      en: "Phase-contrast micrograph of human erythrocytes, including rouleaux",
      pt: "Micrografia de contraste de fase de eritrócitos humanos, incluindo roleaux",
    },
  },
  {
    id: "cancer",
    title: { en: "Cancer", pt: "Cancro" },
    description: {
      en: "Membrane-active anticancer peptides and cell mechanics in tumour progression, from adhesions to nuclear biophysics.",
      pt: "Péptidos anticancerígenos com atividade membranar e mecânica celular na progressão tumoral, das adesões à biofísica nuclear.",
    },
    photo: "/images/research/cancer.png",
    photoAlt: {
      en: "Confocal micrograph of epithelial cells with nuclear and actin stains",
      pt: "Micrografia confocal de células epiteliais com marcação nuclear e de actina",
    },
  },
] as const;

export const vectorBiology = {
  items: [
    {
      id: "aedes",
      title: { en: "Aedes insectary", pt: "Insetário Aedes" },
      body: {
        en: "ACL-2 colonies in Lisbon for Aedes (and related mosquitoes), coupled to infection work for vector competence.",
        pt: "Colónias ACL-2 em Lisboa de Aedes (e mosquitos relacionados), ligadas a ensaios de infeção para competência vetorial.",
      },
    },
    {
      id: "wolbachia",
      title: { en: "Wolbachia", pt: "Wolbachia" },
      body: {
        en: "Methods to establish Wolbachia symbiosis in Aedes aegypti — including oral feeding — towards blocking flavivirus transmission.",
        pt: "Métodos para estabelecer simbiose de Wolbachia em Aedes aegypti — incluindo alimentação oral — com vista a bloquear a transmissão de flavivírus.",
      },
    },
    {
      id: "surveillance",
      title: { en: "Surveillance & control", pt: "Vigilância e controlo" },
      body: {
        en: "Field ovitraps hosted at GIMM/FMUL, SMART-DIET tools for Aedes albopictus, and OneVec — this lab’s citizen surveillance platform, with support from Universidade Lusófona FMV.",
        pt: "Ovitrampas de campo no GIMM/FMUL, ferramentas SMART-DIET para Aedes albopictus e o OneVec — plataforma cidadã deste laboratório, com apoio da Universidade Lusófona FMV.",
      },
    },
  ],
} as const;

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
    role: { en: "Coordinator: Nuno Santos", pt: "Coordenação: Nuno Santos" },
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
] as const;

export const previousProjects = [
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
    name: "Andreia Cardetas",
    role: { en: "PhD Student", pt: "Estudante de Doutoramento" },
    bio: {
      en: "PhD student in the Biomembranes and Nanomedicine laboratory.",
      pt: "Estudante de doutoramento no laboratório de Biomembranas e Nanomedicina.",
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
    name: "Tiago Melo",
    role: { en: "PhD Student", pt: "Estudante de Doutoramento" },
    bio: {
      en: "Wolbachia in Aedes and Culex mosquitoes from field and insectary strains.",
      pt: "Wolbachia em mosquitos Aedes e Culex de campo e de colónia.",
    },
    photo: "/team/Tiago.jpg",
  },
  {
    name: "Eva Dias",
    role: { en: "PhD Student", pt: "Estudante de Doutoramento" },
    bio: {
      en: "PhD research on antivirals targeting flaviviruses and vector-borne outbreaks.",
      pt: "Investigação de doutoramento em antivirais contra flavivírus e surtos transmitidos por vetores.",
    },
    photo: "/team/Eva.jpg",
  },
  {
    name: "Renata Matinhos",
    role: { en: "PhD Student", pt: "Estudante de Doutoramento" },
    bio: {
      en: "PhD research on influenza A and respiratory viruses.",
      pt: "Investigação de doutoramento em influenza A e vírus respiratórios.",
    },
    photo: "/team/Renata.png",
  },
  {
    name: "Tomás Vieira",
    role: { en: "PhD Student", pt: "Estudante de Doutoramento" },
    bio: {
      en: "PhD research on peptides and bacteria.",
      pt: "Investigação de doutoramento em péptidos e bactérias.",
    },
    photo: "/team/Tomas.jpg",
  },
] as const;

export const publications = [
  {
    authors: "Silva IC, de Almeida MP, Pereira E, et al.",
    year: 2026,
    title:
      "Enhanced anticancer efficacy of Pa-MAP 1.9 peptide-coated silver nanostars on breast cancer cells",
    journal: "Materials Today Bio",
    doi: "10.1016/j.mtbio.2026.103573",
  },
  {
    authors: "Pereira AR, Di Francescantonio S, da Rosa Soares A, et al.",
    year: 2026,
    title: "The actomyosin cortex controls t-tubule remodeling in skeletal muscle",
    journal: "Science Advances",
    doi: "10.1126/sciadv.aeb3209",
  },
  {
    authors: "Pellequer JL, Aguayo S, Alessandrini A, et al.",
    year: 2026,
    title: "A FAIR road to a bioAFM databank",
    journal: "Nature Methods",
    doi: "10.1038/s41592-026-03214-7",
  },
  {
    authors: "Silva NM, Martins AS, Karguth NE, et al.",
    year: 2026,
    title: "Dengue Virus Capsid Protein Interaction With Nucleic Acids",
    journal: "BioFactors",
    doi: "10.1002/biof.70105",
  },
  {
    authors: "Martins ASG, Reis SD, Baboi R, et al.",
    year: 2026,
    title:
      "Dynamics of an RNase H-Responsive Tetrahedral DNA Nanostructure for Efficient Intracellular microRNA Inhibition",
    journal: "Bioconjugate Chemistry",
    doi: "10.1021/acs.bioconjchem.5c00563",
  },
  {
    authors: "Pimpão C, Carvalho FA, da Silva IV, et al.",
    year: 2026,
    title:
      "Aquaporin-1, aquaporin-3 and aquaporin-5 differentially modulate cell biophysical and biomechanical properties, impacting cell stiffness and cell–cell adhesion",
    journal: "FEBS Journal",
    doi: "10.1111/febs.70269",
  },
  {
    authors: "Alves C, Soares-Castro P, Fernandes RDV, et al.",
    year: 2025,
    title:
      "Application of Prodigiosin Extracts in Textile Dyeing and Novel Printing Processes for Halochromic and Antimicrobial Wound Dressings",
    journal: "Biomolecules",
    doi: "10.3390/biom15081113",
  },
  {
    authors: "Fernandes R, Melo T, Zá-Zé L, et al.",
    year: 2025,
    title:
      "Wolbachia Screening in Aedes aegypti and Culex pipiens Mosquitoes from Madeira Island, Portugal",
    journal: "Insects",
    doi: "10.3390/insects16040418",
  },
  {
    authors: "Matias Z, Lopes CS, Santos NC, Carvalho FA",
    year: 2025,
    title: "Nanotechnology meets medicine: applications of atomic force microscopy in disease",
    journal: "Biophysical Reviews",
    doi: "10.1007/s12551-025-01306-w",
  },
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
  { value: 14, suffix: "", label: { en: "Research areas", pt: "Áreas de investigação" } },
  { value: 200, suffix: "+", label: { en: "Publications", pt: "Publicações" } },
  { value: 5, suffix: "", label: { en: "Active projects", pt: "Projetos ativos" } },
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
    src: "/images/partners/fmul-neg.png",
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
    src: "/images/partners/lacaixa-foundation.png",
    url: "https://fundacionlacaixa.org/",
  },
] as const;
