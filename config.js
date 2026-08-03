var CONFIG = {

    turma: "CC Turma A",
    semestre: "2026.2",
    whatsappLink: "https://chat.whatsapp.com/EmSVqZR6Klq9f6ZYBYkdsj",
  
    logos: {
      dark:  "assets/images/logo-cesar-school-branca.png",
      light: "assets/images/school_laranja.png",
    },
  
    githubUrl:   "https://github.com/BelmontBeta",
    linkedinUrl: "https://www.linkedin.com/in/caio-belmont-29b6191aa/",
  
    links: [
      { label: "Portal do Aluno (Lyceum)",       url: "https://cesar.lyceum.com.br/AOnline3/#/home/avisos", icon: "🎓", type: "link" },
      { label: "Eden AI",                         url: "https://www.edenai.com.br/home-student",             icon: "🤖", type: "link" },
      { label: "Comunidade CESAR School",         url: "https://a.cesar.school/ConviteCC",                   icon: "🏫", type: "link" },
      { label: "Portal de Carreiras - Workalove", url: "https://workability.worka.love/#/",                  icon: "🔥", type: "link" },
      { label: "Manual do Estudante",             url: "assets/pdfs/Manual-do-Estudante-2026.1.pdf", icon: "📖", type: "pdf" },
      { label: "Calendário Acadêmico",            url: "assets/pdfs/Calendario-Academico-2026.2.pdf", icon: "📅", type: "pdf" },
    ],
  
    disciplinas: [
      { nome: "Lógica Matemática para Computação",               classroom: "https://classroom.google.com/u/3/c/" },
      { nome: "Fundamentos de Desenvolvimento de Software",      classroom: "https://classroom.google.com/u/3/c/" },
      { nome: "Programação Imperativa e Funcional",              classroom: "https://classroom.google.com/u/3/c/" },
      { nome: "Interfaces Humano Computador",                    classroom: "https://classroom.google.com/u/3/c/" },
      { nome: "FP2: Gestão de Projetos",                         classroom: "https://classroom.google.com/u/3/c/" },
      { nome: "Projeto 02",                                      classroom: "https://classroom.google.com/u/3/c/" },
    ],
  
    grade: [
      {
        dia: "Segunda",
        aulas: [
          { horario: "08:15 – 10:15", disciplina: "Lógica Matemática para Computação", sala: "104 · Brum" },
          { horario: "10:30 – 12:30", disciplina: "Fundamentos de Desenvolvimento de Software", sala: "104 · Brum" },
        ],
      },
      {
        dia: "Terça",
        aulas: [
          { horario: "08:15 – 10:15", disciplina: "Programação Imperativa e Funcional", sala: "104 · Brum" },
          { horario: "10:30 – 12:30", disciplina: "Interfaces Humano Computador",    sala: "104 · Brum" },
          { horario: "13:30 – 14:30", disciplina: "Projeto 02 ⚠️ ver grupo",    sala: "104 · Brum", aviso: true },
        ],
      },
      {
        dia: "Quarta",
        aulas: [
          { horario: "08:15 – 10:15", disciplina: "Lógica Matemática para Computação", sala: "104 · Brum" },
          { horario: "10:30 – 12:30", disciplina: "Fundamentos de Desenvolvimento de Software", sala: "104 · Brum" },
          { horario: "13:30 – 14:30", disciplina: "Projeto 02 ⚠️ ver grupo",    sala: "104 · Brum", aviso: true },
        ],
      },
      {
        dia: "Quinta",
        aulas: [
          { horario: "08:15 – 10:15", disciplina: "Programação Imperativa e Funcional", sala: "104 · Brum" },
          { horario: "10:30 – 12:30", disciplina: "Interfaces Humano Computador",    sala: "104 · Brum" },
          { horario: "13:30 – 14:30", disciplina: "Projeto 02 ⚠️ ver grupo",    sala: "104 · Brum", aviso: true },
        ],
      },
      {
        dia: "Sexta",
        emoji: "🛋️",
        aulas: [
          { horario: "08:15 – 10:15", disciplina: "FP2: Gestão de Projetos", sala: "Online 😴", online: true },
          { horario: "10:30 – 11:30", disciplina: "FP2: Gestão de Projetos", sala: "Online 😴", online: true },
        ],
      },
    ],
  
    provas: [
      { data: "2026-05-10", disciplina: "Lógica Matemática para Computação",                 tipo: "AV1 · 2ª Unidade", horario: "A confirmar", sala: "Desconhecido · (Aguardando)" },
      { data: "2026-06-10", disciplina: "Fundamentos de Desenvolvimento de Software",        tipo: "AV1 · 2ª Unidade", horario: "A confirmar", sala: "Desconhecido · (Aguardando)" },
      { data: "2026-07-10", disciplina: "Programação Imperativa e Funcional",                tipo: "AV1 · 2ª Unidade", horario: "A confirmar", sala: "Desconhecido · (Aguardando)" },
      { data: "2026-08-10", disciplina: "Interfaces Humano Computador",                      tipo: "AV1 · 2ª Unidade", horario: "A confirmar", sala: "Desconhecido · (Aguardando)" },
      { data: "2026-09-10", disciplina: "FP2: Gestão de Projetos",                           tipo: "AV1 · 2ª Unidade", horario: "A confirmar", sala: "Desconhecido · (Aguardando)" },
      { data: "2026-10-10", disciplina: "Projeto 02",                                        tipo: "Status Report 1", horario: "A confirmar", sala: "Desconhecido · (Aguardando)" },
    ],
  
    monitorias: [
      { disciplina: "Lógica Matemática para Computação",                 dia: "A confirmar", horario: "A definir", sala: "Desconhecido · (Aguardando)" },
      { disciplina: "Fundamentos de Desenvolvimento de Software",        dia: "A confirmar", horario: "A definir", sala: "Desconhecido · (Aguardando)" },
      { disciplina: "Programação Imperativa e Funcional",                dia: "A confirmar", horario: "A definir", sala: "Desconhecido · (Aguardando)" },
      { disciplina: "Interfaces Humano Computador",                      dia: "A confirmar", horario: "A definir", sala: "Desconhecido · (Aguardando)" },
      { disciplina: "FP2: Gestão de Projetos",                           dia: "A confirmar", horario: "A definir", sala: "Desconhecido · (Aguardando)" },
      { disciplina: "Projeto 02",                                        dia: "A confirmar", horario: "A definir", sala: "Desconhecido · (Aguardando)" },
    ],
  };
