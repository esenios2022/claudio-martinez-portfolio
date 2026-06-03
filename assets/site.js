/* =====================================================================
   PORTAL BABÁ FUN FUN · site.js
   Inyecta header + footer compartidos, navegación activa, reveal on scroll
   y el panel de ajustes de color en vivo (persistente entre páginas).
   ===================================================================== */
(function () {
  const WA = "https://wa.me/59893422022";
  const IG = "https://instagram.com/tribuarcoiris2022";
  const YT = "https://youtube.com/@portalfunfunkumaras";
  const CURSOS = "https://aulas.frecuencia-mahatma-441.workers.dev/";
  const MAIL = "mailto:esenios2022@gmail.com";

  const page = document.body.dataset.page || "";

  /* -------------------- HEADER -------------------- */
  const header = `
  <header class="site-header">
    <nav class="nav">
      <a class="brand" href="index.html" aria-label="Inicio">
        <span class="brand-mark"></span>
        <span class="brand-text">
          <span class="brand-name">Babá Fun Fun</span><br>
          <span class="brand-sub">Portal de Sanación</span>
        </span>
      </a>
      <ul class="menu">
        <li><a class="navlink" data-p="inicio" href="index.html">Inicio</a></li>
        <li><a class="navlink" data-p="sendero" href="mi-sendero.html">Mi Sendero</a></li>
        <li class="has-sub">
          <a class="navlink" data-p="metodo" href="index.html#terapias">El Método</a>
          <ul class="submenu">
            <li><a href="metodo-codigos-de-luz.html"><span class="sm-title">Códigos de Luz</span><span class="sm-desc">Simbología sagrada de esta dimensión</span></a></li>
            <li><a href="metodo-thetahealing.html"><span class="sm-title">ThetaHealing®</span><span class="sm-desc">Reprogramación subconsciente</span></a></li>
            <li><a href="metodo-terapia-cuantica-atlante.html"><span class="sm-title">Terapia Cuántica Atlante</span><span class="sm-desc">Canalizada por Marcos Berenelli</span></a></li>
          </ul>
        </li>
        <li><a class="navlink" data-p="tarifas" href="index.html#tarifas">Tarifas</a></li>
        <li><a class="navlink" data-p="contacto" href="index.html#contacto">Contacto</a></li>
      </ul>
      <div class="nav-cta">
        <span class="lang-label">Idioma</span>
        <div class="lang-switch" role="group" aria-label="Idioma / Idioma">
          <button type="button" class="lang-opt" data-lang="es">ES</button>
          <span class="lang-sep">·</span>
          <button type="button" class="lang-opt" data-lang="pt">PT</button>
        </div>
        <button class="nav-toggle" aria-label="Menú"><span></span><span></span><span></span></button>
      </div>
    </nav>
  </header>`;

  /* -------------------- FOOTER -------------------- */
  const footer = `
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-news">
        <span class="eyebrow on-dark">Seamos un solo corazón</span>
        <h3 class="display gold-name" style="font-size:2rem;margin-top:14px;font-family:'Marcellus',serif;color:rgb(216,185,91);">Babá Fun Fun</h3>
        <p style="color:rgba(252,250,244,0.7);margin-top:10px;">El puente entre la Tierra ancestral y la conciencia cuántica. Más de 10 años guiando retornos a la esencia.</p>
        <a class="btn btn-primary" href="agendar.html" style="margin-top:22px;">Agendar Atendimiento</a>
      </div>
      <div class="footer-grid">
        <div>
          <h4>El Portal</h4>
          <a href="index.html">Inicio</a>
          <a href="mi-sendero.html">Mi Sendero</a>
          <a href="index.html#tarifas">Tarifas y Programas</a>
          <a href="index.html#contacto">Contacto</a>
        </div>
        <div>
          <h4>El Método</h4>
          <a href="metodo-codigos-de-luz.html">Códigos de Luz</a>
          <a href="metodo-thetahealing.html">ThetaHealing®</a>
          <a href="metodo-terapia-cuantica-atlante.html">Terapia Cuántica Atlante</a>
          <a href="${CURSOS}" target="_blank" rel="noopener">Cursos & Formación</a>
        </div>
        <div>
          <h4>Conecta</h4>
          <a href="${IG}" target="_blank" rel="noopener">Tribuarcoiris2022 · Instagram</a>
          <a href="${YT}" target="_blank" rel="noopener">YouTube · Portal Orden Kumaras</a>
          <a href="${WA}" target="_blank" rel="noopener">WhatsApp</a>
          <a href="${MAIL}">esenios2022@gmail.com</a>
        </div>
      </div>
    </div>
    <div class="disclaimer">
      <p><strong style="color:rgba(252,250,244,0.7);">Aviso Legal:</strong> As terapias holísticas e multidimensionais (incluindo ThetaHealing®, Comandos Quânticos e rituais andinos) atuam como práticas complementares e integrativas à saúde. Elas não substituem, sob nenhuma hipótese, diagnósticos, tratamentos, consultas ou acompanhamentos médicos, psicológicos ou psiquiátricos convencionais.</p>
    </div>
    <div class="footer-base">© ${new Date().getFullYear()} Claudio Fabián Martínez Lorenzo · Babá Fun Fun · Portal Orden Kumaras</div>
  </footer>`;

  /* -------------------- PANEL DE AJUSTES -------------------- */
  const fx = `
  <button class="fx-btn" id="fxBtn" aria-label="Ajustes de color" title="Ajustar colores">✦</button>
  <div class="fx-panel" id="fxPanel">
    <h5 class="display">Ajustes en vivo</h5>
    <div class="fx-sub">Afina la paleta del portal. Se guarda en este navegador.</div>
    <div class="fx-presets">
      <button class="fx-preset" data-preset="marfil"><span class="sw"><span style="background:#F6F1E6"></span><span style="background:#A9842F"></span><span style="background:#243A7A"></span></span>Marfil</button>
      <button class="fx-preset" data-preset="noche"><span class="sw"><span style="background:#141C38"></span><span style="background:#CDA64E"></span><span style="background:#5B4A8A"></span></span>Noche</button>
      <button class="fx-preset" data-preset="plata"><span class="sw"><span style="background:#FCFAF4"></span><span style="background:#9AA0A6"></span><span style="background:#5B4A8A"></span></span>Plata</button>
    </div>
    <div class="fx-row"><label>Fondo marfil</label><input type="color" data-var="--marfil"></div>
    <div class="fx-row"><label>Oro · Obatalá</label><input type="color" data-var="--oro"></div>
    <div class="fx-row"><label>Oro brillante</label><input type="color" data-var="--oro-bright"></div>
    <div class="fx-row"><label>Azul cobalto</label><input type="color" data-var="--cobalto"></div>
    <div class="fx-row"><label>Noche cósmica</label><input type="color" data-var="--noche"></div>
    <div class="fx-row"><label>Tinta (texto)</label><input type="color" data-var="--ink"></div>
    <button class="fx-reset" id="fxReset">Restaurar paleta original</button>
  </div>`;

  /* -------------------- MONTAJE -------------------- */
  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);
  document.body.insertAdjacentHTML("beforeend", fx);

  // Nav activa
  document.querySelectorAll(".navlink").forEach(a => {
    if (a.dataset.p === page) a.classList.add("active");
  });

  // Toggle móvil
  const toggle = document.querySelector(".nav-toggle");
  if (toggle) toggle.addEventListener("click", () => document.body.classList.toggle("nav-open"));

  // Cargar motor de idioma (ES/PT) — después de inyectar header y footer
  (function () {
    const s = document.createElement("script");
    s.src = "assets/i18n.js";
    document.body.appendChild(s);
  })();

  /* -------------------- COLOR ENGINE -------------------- */
  const VARS = ["--marfil","--oro","--oro-bright","--cobalto","--noche","--ink"];
  const KEY = "bff-palette";
  const root = document.documentElement;

  function applySaved() {
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}
    Object.entries(saved).forEach(([k, v]) => root.style.setProperty(k, v));
    syncInputs(saved);
  }
  function cssVal(name) {
    return getComputedStyle(root).getPropertyValue(name).trim();
  }
  function toHex(c) {
    if (!c) return "#000000";
    if (c[0] === "#") return c.length === 4 ? "#" + c.slice(1).split("").map(x=>x+x).join("") : c;
    const m = c.match(/\d+/g);
    if (!m) return "#000000";
    return "#" + m.slice(0,3).map(n => (+n).toString(16).padStart(2,"0")).join("");
  }
  function syncInputs(saved) {
    document.querySelectorAll("#fxPanel input[data-var]").forEach(inp => {
      const v = saved[inp.dataset.var] || cssVal(inp.dataset.var);
      inp.value = toHex(v);
    });
  }
  function save() {
    const obj = {};
    VARS.forEach(v => { const cur = root.style.getPropertyValue(v); if (cur) obj[v] = cur.trim(); });
    localStorage.setItem(KEY, JSON.stringify(obj));
  }

  const PRESETS = {
    marfil: { "--marfil":"#F6F1E6","--oro":"#A9842F","--oro-bright":"#CDA64E","--cobalto":"#243A7A","--noche":"#141C38","--ink":"#2B2620" },
    noche:  { "--marfil":"#ECE6DA","--oro":"#B89039","--oro-bright":"#E2C77A","--cobalto":"#2C449A","--noche":"#0F1530","--ink":"#241F1A" },
    plata:  { "--marfil":"#FCFAF4","--oro":"#9AA0A6","--oro-bright":"#BCC1C7","--cobalto":"#5B4A8A","--noche":"#1B2138","--ink":"#2B2926" }
  };

  applySaved();

  document.getElementById("fxBtn").addEventListener("click", () => {
    document.getElementById("fxPanel").classList.toggle("open");
  });
  document.querySelectorAll("#fxPanel input[data-var]").forEach(inp => {
    inp.addEventListener("input", () => { root.style.setProperty(inp.dataset.var, inp.value); save(); });
  });
  document.querySelectorAll(".fx-preset").forEach(btn => {
    btn.addEventListener("click", () => {
      const p = PRESETS[btn.dataset.preset];
      Object.entries(p).forEach(([k,v]) => root.style.setProperty(k,v));
      save(); syncInputs(p);
    });
  });
  document.getElementById("fxReset").addEventListener("click", () => {
    VARS.forEach(v => root.style.removeProperty(v));
    localStorage.removeItem(KEY);
    syncInputs({});
  });

  /* -------------------- REVEAL ON SCROLL (visible por defecto) -------------------- */
  const reveals = Array.from(document.querySelectorAll(".reveal"));

  if ("IntersectionObserver" in window) {
    // Ocultar solo lo que está claramente bajo el pliegue (evita parpadeo y
    // garantiza que el hero y todo lo visible aparezca de inmediato).
    reveals.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top > window.innerHeight * 0.9) el.classList.add("is-hidden");
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.remove("is-hidden"); io.unobserve(e.target); } });
    }, { threshold: 0, rootMargin: "0px 0px -5% 0px" });
    reveals.forEach(el => io.observe(el));

    // Red de seguridad incondicional: pase lo que pase, a los 1.5s todo es
    // visible. Se desactiva la transición para que la opacidad salte a 1
    // aunque el entorno no pinte animaciones.
    setTimeout(() => {
      reveals.forEach(el => {
        if (el.classList.contains("is-hidden")) { el.style.transition = "none"; el.classList.remove("is-hidden"); }
      });
    }, 1500);
  }
})();
