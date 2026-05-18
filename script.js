// =====================================================
// CentralDesk • CESAR School — script.js
// =====================================================

function $(sel) { return document.querySelector(sel); }

function createEl(tag, className, text) {
  var el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined && text !== null) el.textContent = text;
  return el;
}

function formatDate(dateStr) {
  var parts  = dateStr.split("-");
  var months = ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"];
  return String(parts[2]).padStart(2,"0") + " " + months[Number(parts[1]) - 1];
}

function daysUntil(dateStr) {
  var parts  = dateStr.split("-");
  var today  = new Date(); today.setHours(0,0,0,0);
  var target = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  return Math.ceil((target - today) / 86400000);
}

/* ══════════════════════════════════════════════
   TEMA
   ══════════════════════════════════════════════ */

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  var logo  = $("#school-logo");
  var logoM = $("#school-logo-mobile");
  if (CONFIG.logos) {
    var src = theme === "light" ? CONFIG.logos.light : CONFIG.logos.dark;
    if (logo)  logo.src  = src;
    if (logoM) logoM.src = src;
  }
  localStorage.setItem("CentralDesk-theme", theme);
}

function initTheme() {
  var saved = localStorage.getItem("CentralDesk-theme");
  setTheme(saved === "light" ? "light" : "dark");

  function toggleTheme() {
    var cur = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(cur === "dark" ? "light" : "dark");
  }

  var btn  = $("#theme-toggle");
  var btnM = $("#theme-toggle-mobile");
  if (btn)  btn.addEventListener("click", toggleTheme);
  if (btnM) btnM.addEventListener("click", toggleTheme);
}

/* ══════════════════════════════════════════════
   BASE — títulos, footer, botões
   ══════════════════════════════════════════════ */

function applyBase() {
  var titulo    = "CentralDesk • " + CONFIG.turma;
  var subtitulo = "Semestre " + CONFIG.semestre + " • CESAR School";

  // desktop
  var t = $("#hub-title");
  var s = $("#hub-subtitle");
  if (t) t.textContent = titulo;
  if (s) s.textContent = subtitulo;

  // mobile
  var tm = $("#hub-title-mobile");
  var sm = $("#hub-subtitle-mobile");
  if (tm) tm.textContent = titulo;
  if (sm) sm.textContent = subtitulo;

  // footer
  var ft = $("#footer-text");
  if (ft) ft.textContent =
    "Feito por Caio Belmont, representante da " +
    CONFIG.turma + " de Ciência da Computação " +
    CONFIG.semestre + ", inspirado por Thony Barreto, Ao Infinito e Além! 🚀 • CESAR School";

  // links externos
  var gh = $("#github-link");
  var li = $("#linkedin-link");
  if (gh && CONFIG.githubUrl)   gh.href   = CONFIG.githubUrl;
  if (li && CONFIG.linkedinUrl) li.href   = CONFIG.linkedinUrl;

  // copiar link
  function bindCopy(id) {
    var b = document.getElementById(id);
    if (!b) return;
    b.addEventListener("click", function() {
      navigator.clipboard.writeText(window.location.href).then(function() {
        var prev = b.innerHTML;
        b.textContent = "Copiado!";
        setTimeout(function() { b.innerHTML = prev; }, 1600);
      });
    });
  }
  bindCopy("copy-link-btn");
  bindCopy("copy-link-btn-mobile");

  // whatsapp
  function bindWhatsapp(id) {
    var b = document.getElementById(id);
    if (!b) return;
    b.addEventListener("click", function() {
      if (CONFIG.whatsappLink) window.open(CONFIG.whatsappLink, "_blank");
    });
  }
  bindWhatsapp("whatsapp-btn");
  bindWhatsapp("whatsapp-btn-mobile");
}

window.addEventListener("beforeinstallprompt", function(e) {
  e.preventDefault();
  window._installPrompt = e;
});

/* ══════════════════════════════════════════════
   SIDE NAV — scroll suave + highlight ativo
   ══════════════════════════���═══════════════════ */

function initSideNav() {
  var items    = document.querySelectorAll(".side-nav-item[href]");
  var sections = ["links-section","grade-section","provas-section","monitorias-section"];

  items.forEach(function(item) {
    item.addEventListener("click", function(e) {
      e.preventDefault();
      var target = document.querySelector(item.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  var topBtn = $("#back-to-top");
  if (topBtn) topBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  function updateActive() {
    var scrollY = window.scrollY + 140;
    var current = sections[0];
    sections.forEach(function(id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) current = id;
    });
    items.forEach(function(item) {
      if (item.getAttribute("href") === "#" + current) item.classList.add("active");
      else item.classList.remove("active");
    });
  }

  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();
}

/* ══════════════════════════════════════════════
   MARK TODAY — destaca o dia atual na grade
   ══════════════════════════════════════════════ */

function markToday() {
  var dias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
  var hoje = dias[new Date().getDay()];
  document.querySelectorAll(".day-card").forEach(function(card) {
    var title = card.querySelector(".day-title");
    if (title && title.textContent.trim() === hoje) card.classList.add("day-today");
  });
}

/* ══════════════════════════════════════════════
   HIGHLIGHT — próxima prova
   ══════════════════════════════════════════════ */

function buildHighlight() {
  var futuras = CONFIG.provas
    .map(function(p) { return Object.assign({}, p, { days: daysUntil(p.data) }); })
    .filter(function(p) { return p.days >= 0; })
    .sort(function(a, b) { return a.days - b.days; });

  if (!futuras.length) {
    var ht = $("#highlight-title");
    var hd = $("#highlight-description");
    var hy = $("#highlight-days");
    if (ht) ht.textContent = "Nenhuma prova encontrada";
    if (hd) hd.textContent = "Quando houver alguma avaliação marcada, ela aparece aqui.";
    if (hy) hy.textContent = "0";
    return;
  }

  var n       = futuras[0];
  var parts   = n.data.split("-");
  var dateObj = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));

  var ht = $("#highlight-title");
  var hd = $("#highlight-description");
  var hc = $("#highlight-course");
  var hr = $("#highlight-room");
  var hy = $("#highlight-days");
  var hdate = $("#highlight-date");

  if (ht)    ht.textContent    = n.disciplina + " · " + n.tipo;
  if (hd)    hd.textContent    = n.horario + " · " + n.sala;
  if (hc)    hc.textContent    = n.disciplina;
  if (hr)    hr.textContent    = n.sala;
  if (hy)    hy.textContent    = n.days;
  if (hdate) hdate.textContent = dateObj.toLocaleDateString("pt-BR", {
    weekday: "short", day: "2-digit", month: "short"
  });
}

/* ══════════════════════════════════════════════
   LINKS IMPORTANTES
   ══════════════════════════════════════════════ */

function buildLinks() {
  var wrap = $("#important-links");
  if (!wrap) return;
  wrap.innerHTML = "";

  CONFIG.links.forEach(function(link) {
    var a    = document.createElement("a");
    a.className = "link-card";
    a.href      = link.url || "#";
    a.target    = "_blank";
    a.rel       = "noopener noreferrer";

    var left = createEl("div", "link-card-left");
    var icon = createEl("div", "link-icon", link.icon || "🔗");
    var txt  = createEl("div", "link-text-main", link.label);
    left.appendChild(icon);
    left.appendChild(txt);

    var right = createEl("div", "link-card-right");
    if (link.type === "pdf") {
      right.appendChild(createEl("span", "badge badge-secondary", "PDF"));
    }
    right.appendChild(createEl("span", "link-arrow", "→"));

    a.appendChild(left);
    a.appendChild(right);
    wrap.appendChild(a);
  });
}

/* ══════════════════════════════════════════════
   GRADE SEMANAL
   ══════════════════════════════════════════════ */

function buildGrade() {
  var wrap = $("#weekly-schedule");
  if (!wrap) return;
  wrap.innerHTML = "";

  CONFIG.grade.forEach(function(dayObj) {
    var card   = createEl("div", "day-card");
    var header = createEl("div", "day-header");
    var titleW = createEl("div", "day-title-wrap");

    titleW.appendChild(createEl("span", "day-title", dayObj.dia));
    if (dayObj.emoji) titleW.appendChild(createEl("span", "day-emoji", dayObj.emoji));
    header.appendChild(titleW);
    card.appendChild(header);

    var body = createEl("div", "day-body");
    dayObj.aulas.forEach(function(aula) {
      var cls   = "class-block" + (aula.aviso ? " class-block-warning" : "");
      var block = createEl("div", cls);
      block.appendChild(createEl("div", "class-time",     aula.horario));
      block.appendChild(createEl("div", "class-name",     aula.disciplina));
      if (aula.sala) block.appendChild(createEl("div", "class-location", aula.sala));
      if (aula.aviso) block.appendChild(createEl("span", "warn-btn", "⚠ confira seu grupo"));
      body.appendChild(block);
    });

    card.appendChild(body);
    wrap.appendChild(card);
  });

  markToday();
}

/* ══════════════════════════════════════════════
   PROVAS — item compartilhado
   ══════════════════════════════════════════════ */

function makeExamItem(p) {
  var item   = createEl("div", "exam-item");
  var dateEl = createEl("div", "exam-date");
  dateEl.appendChild(createEl("div", "date-full", formatDate(p.data)));

  var main = createEl("div", "exam-main");
  main.appendChild(createEl("div", "exam-title", p.disciplina));
  var meta = [p.horario, p.sala].filter(Boolean).join(" · ");
  if (meta) main.appendChild(createEl("div", "exam-meta", meta));

  item.appendChild(dateEl);
  item.appendChild(main);
  item.appendChild(createEl("div", "exam-tag", p.tipo || ""));
  return item;
}

/* ── Por matéria ── */

function buildProvasBySubject() {
  var wrap = $("#exam-calendar");
  if (!wrap) return;
  wrap.innerHTML = "";

  var map = {}, ordem = [];
  CONFIG.provas.forEach(function(p) {
    if (!map[p.disciplina]) { map[p.disciplina] = []; ordem.push(p.disciplina); }
    map[p.disciplina].push(p);
  });

  var grid = createEl("div", "exam-two-col");

  ordem.forEach(function(disciplina) {
    var disc  = (CONFIG.disciplinas || []).find(function(d) { return d.nome === disciplina; });
    var group = createEl("div", "exam-group");

    var gh = createEl("div", "exam-group-header");
    gh.appendChild(createEl("div", "exam-group-title", disciplina));

    if (disc && disc.classroom) {
      var cl  = document.createElement("a");
      cl.className = "badge badge-classroom";
      cl.href      = disc.classroom;
      cl.target    = "_blank";
      cl.innerHTML =
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
        '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>' +
        '<polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
        ' Classroom';
      gh.appendChild(cl);
    }

    group.appendChild(gh);

    var list = createEl("div", "exam-list");
    map[disciplina]
      .sort(function(a, b) { return new Date(a.data) - new Date(b.data); })
      .forEach(function(p) { list.appendChild(makeExamItem(p)); });

    group.appendChild(list);
    grid.appendChild(group);
  });

  wrap.appendChild(grid);
}

/* ── Por data ── */

function buildProvasByDate() {
  var wrap = $("#exam-calendar");
  if (!wrap) return;
  wrap.innerHTML = "";

  var sorted = CONFIG.provas.slice().sort(function(a, b) {
    return new Date(a.data) - new Date(b.data);
  });

  var list = createEl("div", "exam-list-flat");
  sorted.forEach(function(p) { list.appendChild(makeExamItem(p)); });
  wrap.appendChild(list);
}

function buildProvas() {
  buildProvasBySubject();
}

/* ── Toggle Por matéria / Por data ── */

function initProvasToggle() {
  var btnSubject = document.getElementById("view-by-subject");
  var btnDate    = document.getElementById("view-by-date");
  if (!btnSubject || !btnDate) return;

  btnSubject.addEventListener("click", function() {
    btnSubject.classList.add("active");
    btnDate.classList.remove("active");
    buildProvasBySubject();
  });

  btnDate.addEventListener("click", function() {
    btnDate.classList.add("active");
    btnSubject.classList.remove("active");
    buildProvasByDate();
  });
}

/* ══════════════════════════════════════════════
   MONITORIAS — agrupadas por matéria
   ══════════════════════════════════════════════ */

function buildMonitorias() {
  var wrap = $("#monitorias");
  if (!wrap) return;
  wrap.innerHTML = "";

  var map = {}, ordem = [];
  CONFIG.monitorias.forEach(function(m) {
    if (!map[m.disciplina]) { map[m.disciplina] = []; ordem.push(m.disciplina); }
    map[m.disciplina].push(m);
  });

  var grid = createEl("div", "exam-two-col");

  ordem.forEach(function(disciplina) {
    var group = createEl("div", "monitor-group");

    var gh = createEl("div", "monitor-group-header");
    gh.appendChild(createEl("div", "exam-group-title", disciplina));

    var disc = (CONFIG.disciplinas || []).find(function(d) { return d.nome === disciplina; });
    if (disc && disc.classroom) {
      var cl  = document.createElement("a");
      cl.className = "badge badge-classroom";
      cl.href      = disc.classroom;
      cl.target    = "_blank";
      cl.innerHTML =
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
        '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>' +
        '<polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
        ' Classroom';
      gh.appendChild(cl);
    }

    group.appendChild(gh);

    var list = createEl("div", "monitor-list");
    map[disciplina].forEach(function(m) {
      var item = createEl("div", "monitor-item");
      item.appendChild(createEl("div", "monitor-dot"));

      var main = createEl("div", "monitor-main");
      main.appendChild(createEl("div", "monitor-time", m.dia + " · " + m.horario));
      main.appendChild(createEl("div", "monitor-meta", m.sala));
      item.appendChild(main);

      var isOnline = m.sala.toLowerCase().indexOf("online") !== -1;
      var isADef   = m.horario.toLowerCase().indexOf("definir") !== -1;
      var tagCls   = isADef ? "badge tag-adefir" : isOnline ? "badge tag-online" : "badge tag-presencial";
      var tagTxt   = isADef ? "A definir"         : isOnline ? "Online"          : "Presencial";
      item.appendChild(createEl("span", tagCls, tagTxt));

      list.appendChild(item);
    });

    group.appendChild(list);
    grid.appendChild(group);
  });

  wrap.appendChild(grid);
}

/* ══════════════════════════════════════════════
   MODAL — helpers
   ══════════════════════════════════════════════ */

   function openModal(id) {
    var m = document.getElementById(id);
    if (m) {
      m.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }
  
  function closeModal(id) {
    var m = document.getElementById(id);
    if (m) {
      m.classList.remove("open");
      document.body.style.overflow = "";
    }
  }
  
  /* fechar clicando fora da caixa */
  document.addEventListener("click", function(e) {
    ["modal-qr","modal-install"].forEach(function(id) {
      var m = document.getElementById(id);
      if (m && e.target === m) closeModal(id);
    });
  });
  
  /* ══════════════════════════════════════════════
     MODAL QR CODE
     ══════════════════════════════════════════════ */
  
  function initQrModal() {
    var url     = window.location.href;
    var encoded = encodeURIComponent(url);
    var apiUrl  = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encoded;
  
    var img     = document.getElementById("qr-img");
    var urlText = document.getElementById("qr-url-text");
    if (img)     img.src         = apiUrl;
    if (urlText) urlText.textContent = url;
  
    /* abrir — desktop e mobile */
    ["qr-code-btn","qr-code-btn-mobile"].forEach(function(id) {
      var b = document.getElementById(id);
      if (b) b.addEventListener("click", function() { openModal("modal-qr"); });
    });
  
    /* fechar */
    ["modal-qr-close","modal-qr-close2"].forEach(function(id) {
      var b = document.getElementById(id);
      if (b) b.addEventListener("click", function() { closeModal("modal-qr"); });
    });
  
    /* baixar .png */
    var dl = document.getElementById("btn-download-qr");
    if (dl) dl.addEventListener("click", function() {
      var a    = document.createElement("a");
      a.href   = apiUrl;
      a.download = "CentralDesk-qrcode.png";
      a.target = "_blank";
      a.click();
    });
  }
  
  /* ══════════════════════════════════════════════
     MODAL INSTALAR APP
     ══════════════════════════════════════════════ */
  
  function initInstallModal() {
    /* abrir — desktop e mobile */
    ["install-app-btn","install-app-btn-mobile"].forEach(function(id) {
      var b = document.getElementById(id);
      if (b) b.addEventListener("click", function() {
        /* se PWA disponível, usa prompt nativo direto; senão mostra modal */
        if (window._installPrompt) {
          window._installPrompt.prompt();
        } else {
          openModal("modal-install");
        }
      });
    });
  
    /* fechar */
    ["modal-install-close","modal-install-close2"].forEach(function(id) {
      var b = document.getElementById(id);
      if (b) b.addEventListener("click", function() { closeModal("modal-install"); });
    });
  
    /* abas Android / iPhone */
    var tabs = document.querySelectorAll(".install-tab");
    tabs.forEach(function(tab) {
      tab.addEventListener("click", function() {
        tabs.forEach(function(t) { t.classList.remove("active"); });
        tab.classList.add("active");
  
        var which = tab.getAttribute("data-tab");
        document.getElementById("steps-android").classList.toggle("hidden", which !== "android");
        document.getElementById("steps-iphone").classList.toggle("hidden", which !== "iphone");
      });
    });
  }

/* ══════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", function() {
  if (!window.CONFIG) {
    console.error("CONFIG não encontrado!");
    return;
  }

  initTheme();
  applyBase();
  buildHighlight();
  buildLinks();
  buildGrade();
  buildProvas();
  buildMonitorias();
  initSideNav();
  initProvasToggle();
  initQrModal();
  initInstallModal();
});
