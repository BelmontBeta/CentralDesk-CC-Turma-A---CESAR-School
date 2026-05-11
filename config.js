var CONFIG = {

    turma: "CC Turma A",
    semestre: "2026.1",
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
      { label: "Calendário Acadêmico",            url: "assets/pdfs/Calendário Acadêmico 2026.1.pdf", icon: "📅", type: "pdf" },
    ],
  
    disciplinas: [
      { nome: "Matemática para Computação",  classroom: "https://classroom.google.com/u/3/c/ODQ1OTAxNTQ0NzAw" },
      { nome: "Sistemas Digitais",           classroom: "https://classroom.google.com/u/3/c/ODQzNDg1MDY5MTQ3" },
      { nome: "Introdução à Computação",     classroom: "https://classroom.google.com/u/3/c/ODQ0MDc1NDI4MzIw" },
      { nome: "Fundamentos de Programação",  classroom: "https://classroom.google.com/u/3/c/ODQzNzc2MTY1Njky" },
      { nome: "FP1: Gestão de Pessoas",      classroom: "https://classroom.google.com/u/3/c/ODQzNzcwODAxODMz" },
      { nome: "Projeto 01",                  classroom: "https://classroom.google.com/u/3/c/ODQzODcyOTE2OTAw" },
    ],
  
    grade: [
      {
        dia: "Segunda",
        aulas: [
          { horario: "08:15 – 10:15", disciplina: "Sistemas Digitais",          sala: "Garagem 01 · Tiradentes" },
          { horario: "10:30 – 12:30", disciplina: "Matemática para Computação", sala: "Laboratorio 02 · Tiradentes" },
        ],
      },
      {
        dia: "Terça",
        aulas: [
          { horario: "08:15 – 10:15", disciplina: "Fundamentos de Programação", sala: "Sala 08 · Apolo" },
          { horario: "10:30 – 12:30", disciplina: "Introdução à Computação",    sala: "Sala 08 · Apolo" },
          { horario: "13:30 – 14:30", disciplina: "Projeto 01 ⚠️ ver grupo",    sala: "A sala varia com o grupo · Tiradentes", aviso: true },
        ],
      },
      {
        dia: "Quarta",
        aulas: [
          { horario: "08:15 – 10:15", disciplina: "Sistemas Digitais",          sala: "Garagem 01 · Tiradentes" },
          { horario: "10:30 – 12:30", disciplina: "Matemática para Computação", sala: "Laboratorio 02 · Tiradentes" },
          { horario: "13:30 – 14:30", disciplina: "Projeto 01 ⚠️ ver grupo",    sala: "A sala varia com o grupo · Tiradentes", aviso: true },
        ],
      },
      {
        dia: "Quinta",
        aulas: [
          { horario: "08:15 – 10:15", disciplina: "Fundamentos de Programação", sala: "Sala 08 · Apolo" },
          { horario: "10:30 – 12:30", disciplina: "Introdução à Computação",    sala: "Sala 08 · Apolo" },
          { horario: "13:30 – 14:30", disciplina: "Projeto 01 ⚠️ ver grupo",    sala: "A sala varia com o grupo · Tiradentes", aviso: true },
        ],
      },
      {
        dia: "Sexta",
        emoji: "🛋️",
        aulas: [
          { horario: "08:15 – 10:15", disciplina: "FP1: Gestão de Pessoas", sala: "Online 😴", online: true },
          { horario: "10:30 – 11:30", disciplina: "FP1: Gestão de Pessoas", sala: "Online 😴", online: true },
        ],
      },
    ],
  
    provas: [
      { data: "2026-05-18", disciplina: "Sistemas Digitais",          tipo: "AV2 · Exercício Avaliativo 2 · 1ª Unidade", horario: "08:15", sala: "Sala 08 · Apolo" },
      { data: "2026-06-01", disciplina: "Sistemas Digitais",          tipo: "AV2 · Exercício Avaliativo 3 · 1ª Unidade", horario: "08:15", sala: "Sala 08 · Apolo" },
      { data: "2026-06-11", disciplina: "Introdução à Computação",    tipo: "AV2 · 1ª Unidade",                          horario: "08:15", sala: "Sala 08 · Apolo" },
      { data: "2026-06-16", disciplina: "Fundamentos de Programação", tipo: "Módulo 2 · 1ª Unidade",                     horario: "08:15", sala: "Sala 08 · Apolo" },
      { data: "2026-06-17", disciplina: "Matemática para Computação", tipo: "AV2 · 1ª Unidade",                          horario: "08:15", sala: "Sala 08 · Apolo" },
      { data: "2026-06-12", disciplina: "FP1: Gestão de Pessoas",     tipo: "AV2 · 1ª Unidade",                          horario: "08:15", sala: "Presencial" },
      { data: "2026-05-19", disciplina: "Projeto 01",                  tipo: "Status Report 2",                           horario: "A confirmar", sala: "Presencial" },
    ],
  
    monitorias: [
      { disciplina: "Matemática para Computação",  dia: "Segunda", horario: "15:00", sala: "Sala 05 · Apolo" },
      { disciplina: "Matemática para Computação",  dia: "Sexta",   horario: "15:00", sala: "Online" },
      { disciplina: "Sistemas Digitais",           dia: "Segunda", horario: "14:00", sala: "Online — horário a combinar" },
      { disciplina: "Projeto 01",                  dia: "—",       horario: "A definir", sala: "—" },
      { disciplina: "Introdução à Computação",     dia: "—",       horario: "A definir", sala: "—" },
      { disciplina: "Fundamentos de Programação",  dia: "Segunda", horario: "13:30", sala: "Sala 04 · Apolo" },
      { disciplina: "Fundamentos de Programação",  dia: "Terça",   horario: "14:30", sala: "Sala 04 · Apolo" },
    ],
  };
