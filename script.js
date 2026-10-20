document.documentElement.classList.add('js');

/* ---------- Título: letras aparecendo uma a uma ---------- */
(function () {
  const el = document.querySelector('.title-main');
  if (!el) return;
  const texto = el.textContent;
  el.setAttribute('aria-label', texto);
  el.textContent = '';
  let n = 0;
  texto.split(' ').forEach((palavra, w, todas) => {
    const word = document.createElement('span');
    word.className = 'word';
    word.setAttribute('aria-hidden', 'true');
    [...palavra].forEach(ch => {
      const l = document.createElement('span');
      l.className = 'ch';
      l.style.setProperty('--i', n++);
      l.textContent = ch;
      word.appendChild(l);
    });
    el.appendChild(word);
    if (w < todas.length - 1) { el.appendChild(document.createTextNode(' ')); n++; }
  });
})();

/* ---------- Dados dos países ---------- */
const paises = [
  {
    id: 'bf',
    nome: 'Burkina Faso',
    bandeira: 'data:image/webp;base64,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',
    capital: 'Ouagadougou',
    idioma: 'Francês',
    entrevistado: 'Entrevistado 03',
    texto: 'Burkina Faso é um país sem litoral localizado na África Ocidental. Sua capital é Ouagadougou, e faz fronteira com seis países: Mali, Níger, Benim, Togo, Gana e Costa do Marfim. O país tornou-se independente da França em 1960, quando ainda se chamava Alto Volta, e adotou o nome Burkina Faso em 1984.\n   '
  },
  {
    id: 'cg',
    nome: 'República do Congo',
    bandeira: 'data:image/webp;base64,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',
    capital: 'Brazzaville',
    idioma: 'Francês',
    entrevistado: 'Entrevistado 01',
    texto: 'aís da África Central, banhado pelo oceano Atlântico e coberto em grande parte por florestas tropicais. Sua capital é Brazzaville, e o francês é a língua oficial. Uma curiosidade: Brazzaville fica do outro lado do rio Congo, em frente a Kinshasa, capital da República Democrática do Congo.'
  },
  {
    id: 'ga',
    nome: 'Gabão',
    bandeira: 'data:image/webp;base64,UklGRjADAABXRUJQVlA4ICQDAADQQwCdASpYApABPjEYi0QiIaERX+QAIAMEs7dwu7CIwK/wA944s/wA/YD/AZn7AD+AfgBigH8A9v+7AP2AAQ3F2pp8ISPrHm1NPhCR9Y82pp8ISPrHm1NPhCR9Y82pp8ISPrHm1NPhCR9Y82pp8ISPrHm1NPhCR9Y82pp8ISPrHm1NPhCR9Y82pp8ISPrHm1NPhCR9Y82pp8ISPrHm1NPhCR9Y82pp8ISPrHm1NPhCR9Y82pp8ISPrHm1NPhCR9Y82pp8ISPpIisALTKOmV7EtMr2JaZXsS0yvYlplexLTK9iWmV7EtMr2JaZXsS0yvYlplexLTK9jgnD4QkfWPNqafCEj6x5tTT4QkfWPNqafCEj6x5tTT4QkfWPNqafCEj6x5tTT4QkfWPNqafCEj6x5tTT4QkfWPNqafCEj6x5tTT4QkfWPNqafCEj6x5tTT4QkfWPNqafCEj6x5tTT4QkfWPNqafCEj6x5tTT4Qi3I2tXGQMpOsgZSdZAyk6yBlJ1kDKTrIGUnWQMpOsgZSdZAyk6yBlJ1kDKTrIGUnWaxwoxw+EJH1jzamnwhI+sebU0+EJH1jzamnwhI+sebU0+EJH1jzamnwhI+sebU0+EJH1jzamnwhI+sebU0+EJH1jzamnwhI+sebU0+EJH1jzamnwhI+sebU0+EJH1jzamnwhI+sebU0+EJH1jzamnwhI+sebU0+EJH1jzamnwhI+sebU0+EJHpAAD+/7Ld/HFObo21737Afwuz/lAgAAAAAAAAAAAAAAAACP/XN/5X/Eh+9ovxrSauz6r/vJ3EdB3/9o++5LPu5unfRV/o23JfJirD7slMD7slMD7slMD7slMD7slMD7slMD7slMD7slMD7slMD7slMD7slMD7slMD7slMD7slMD7slMD7slMD7slMD7skoAAAAAAAAAAAAAAAAEtH/THa76SPo7VNat18sSI7dH1+I2NKublB3VQnQAS0CWgS0CWgS0CWgS0CWgS0CWgS0CWgS0CWgS0CWgS0CQLhVJP/ih/FD+KH8UP4ofxQ/ih/FDCAAAAAAAAAAAAAAAAAAAA=',
    capital: 'Libreville',
    idioma: 'Francês',
    entrevistado: 'Entrevistado 02',
    texto: 'País da África Central, também banhado pelo oceano Atlântico e conhecido por suas florestas tropicais e parques nacionais. Sua capital é Libreville, e o francês é a língua oficial. Uma curiosidade: o Gabão abriga uma parte importante da floresta da Bacia do Congo, uma das maiores florestas tropicais do mundo.'
  }
];

/* ---------- Abas por país ---------- */
const tabList = document.querySelector('.tab-list');
const tabButtons = [...tabList.querySelectorAll('.tab')];
const panelsBox = document.querySelector('#tabPanels');

paises.forEach((p, i) => {
  const panel = document.createElement('div');
  panel.className = 'tab-panel';
  panel.id = `panel-${p.id}`;
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', `tab-${p.id}`);
  panel.hidden = i !== 0;
  panel.innerHTML = `
    <div class="panel-flag"><img src="${p.bandeira}" alt="Bandeira de ${p.nome}"></div>
    <div class="panel-body">
      <p class="eyebrow accent-label">${p.entrevistado}</p>
      <h3>${p.nome}</h3>
      <blockquote>“${p.texto}”</blockquote>
      <dl class="facts">
        <div><dt>Capital</dt><dd>${p.capital}</dd></div>
        <div><dt>Idioma oficial</dt><dd>${p.idioma}</dd></div>
      </dl>
    </div>`;
  panelsBox.appendChild(panel);
});

function selectTab(btn, focus) {
  tabButtons.forEach(b => {
    const on = b === btn;
    b.setAttribute('aria-selected', on);
    b.tabIndex = on ? 0 : -1;
    document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
  });
  if (focus) btn.focus();
}

tabButtons.forEach(b => b.addEventListener('click', () => selectTab(b)));

tabList.addEventListener('keydown', e => {
  const i = tabButtons.indexOf(document.activeElement);
  if (i < 0) return;
  let n = null;
  if (e.key === 'ArrowRight') n = (i + 1) % tabButtons.length;
  if (e.key === 'ArrowLeft') n = (i - 1 + tabButtons.length) % tabButtons.length;
  if (e.key === 'Home') n = 0;
  if (e.key === 'End') n = tabButtons.length - 1;
  if (n !== null) { e.preventDefault(); selectTab(tabButtons[n], true); }
});

/* ---------- Menu mobile ---------- */
const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav nav a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

/* ---------- Bandeiras do topo: abrem a aba do país ---------- */
document.querySelectorAll('.flag-link').forEach(a =>
  a.addEventListener('click', () => {
    const tab = document.getElementById(a.dataset.tab);
    if (tab) selectTab(tab);
  })
);

/* ---------- Título do vídeo: palavras aparecendo ao rolar a página ---------- */
(function () {
  const titulo = document.querySelector('#docTitle');
  const bloco = document.querySelector('.doc-layout');
  if (!titulo || !bloco) return;

  const texto = titulo.textContent.trim();
  titulo.setAttribute('aria-label', texto);
  titulo.textContent = '';
  texto.split(' ').forEach((palavra, i, todas) => {
    const w = document.createElement('span');
    w.className = 'rw';
    w.setAttribute('aria-hidden', 'true');
    w.style.setProperty('--w', i);
    w.textContent = palavra;
    titulo.appendChild(w);
    if (i < todas.length - 1) titulo.appendChild(document.createTextNode(' '));
  });

  const mostrar = () => { titulo.classList.add('in-view'); bloco.classList.add('in-view'); };
  if (!('IntersectionObserver' in window)) { mostrar(); return; }
  const io = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) { mostrar(); io.disconnect(); }
  }, { threshold: 0.25 });
  io.observe(bloco);
})();

/* ---------- Botões circulares: aparecem ao rolar ---------- */
(function () {
  const orbs = document.querySelector('#orbs');
  if (!orbs) return;
  const mostrar = () => orbs.classList.add('in-view');
  if (!('IntersectionObserver' in window)) { mostrar(); return; }
  const io = new IntersectionObserver(es => {
    if (es.some(e => e.isIntersecting)) { mostrar(); io.disconnect(); }
  }, { threshold: 0.2 });
  io.observe(orbs);
})();