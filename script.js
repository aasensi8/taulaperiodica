const ELEMENTS_ORDER = [
  ["H", "Hidrogen"], ["He", "Heli"], ["Li", "Liti"], ["Be", "Beril·li"], ["B", "Bor"], ["C", "Carboni"], ["N", "Nitrogen"], ["O", "Oxigen"], ["F", "Fluor"], ["Ne", "Neó"],
  ["Na", "Sodi"], ["Mg", "Magnesi"], ["Al", "Alumini"], ["Si", "Silici"], ["P", "Fòsfor"], ["S", "Sofre"], ["Cl", "Clor"], ["Ar", "Argó"], ["K", "Potassi"], ["Ca", "Calci"],
  ["Sc", "Escandi"], ["Ti", "Titani"], ["V", "Vanadi"], ["Cr", "Crom"], ["Mn", "Manganès"], ["Fe", "Ferro"], ["Co", "Cobalt"], ["Ni", "Níquel"], ["Cu", "Coure"], ["Zn", "Zinc"],
  ["Ga", "Gal·li"], ["Ge", "Germani"], ["As", "Arsènic"], ["Se", "Seleni"], ["Br", "Brom"], ["Kr", "Criptó"], ["Rb", "Rubidi"], ["Sr", "Estronci"], ["Y", "Itri"], ["Zr", "Zirconi"],
  ["Nb", "Niobi"], ["Mo", "Molibdè"], ["Tc", "Tecneci"], ["Ru", "Ruteni"], ["Rh", "Rodi"], ["Pd", "Pal·ladi"], ["Ag", "Argent"], ["Cd", "Cadmi"], ["In", "Indi"], ["Sn", "Estany"],
  ["Sb", "Antimoni"], ["Te", "Tel·luri"], ["I", "Iode"], ["Xe", "Xenó"], ["Cs", "Cesi"], ["Ba", "Bari"], ["La", "Lantani"], ["Ce", "Ceri"], ["Pr", "Praseodimi"], ["Nd", "Neodimi"],
  ["Pm", "Prometi"], ["Sm", "Samari"], ["Eu", "Europi"], ["Gd", "Gadolini"], ["Tb", "Terbi"], ["Dy", "Disprosi"], ["Ho", "Holmi"], ["Er", "Erbi"], ["Tm", "Tuli"], ["Yb", "Iterbi"],
  ["Lu", "Luteci"], ["Hf", "Hafni"], ["Ta", "Tàntal"], ["W", "Wolframi"], ["Re", "Reni"], ["Os", "Osmi"], ["Ir", "Iridi"], ["Pt", "Platí"], ["Au", "Or"], ["Hg", "Mercuri"],
  ["Tl", "Tal·li"], ["Pb", "Plom"], ["Bi", "Bismut"], ["Po", "Poloni"], ["At", "Àstat"], ["Rn", "Radó"], ["Fr", "Franci"], ["Ra", "Radi"], ["Ac", "Actini"], ["Th", "Tori"],
  ["Pa", "Protactini"], ["U", "Urani"], ["Np", "Neptuni"], ["Pu", "Plutoni"], ["Am", "Americi"], ["Cm", "Curi"], ["Bk", "Berkeli"], ["Cf", "Californi"], ["Es", "Einsteini"], ["Fm", "Fermi"],
  ["Md", "Mendelevi"], ["No", "Nobeli"], ["Lr", "Laurenci"], ["Rf", "Rutherfordi"], ["Db", "Dubni"], ["Sg", "Seaborgi"], ["Bh", "Bohri"], ["Hs", "Hassi"], ["Mt", "Meitneri"], ["Ds", "Darmstadti"],
  ["Rg", "Roentgeni"], ["Cn", "Copernici"], ["Nh", "Nihoni"], ["Fl", "Flerovi"], ["Mc", "Moscovi"], ["Lv", "Livermori"], ["Ts", "Tenessi"], ["Og", "Oganessó"]
];

const MAIN_GRID = [
  { period: 1, entries: [[1, "H"], [18, "He"]] },
  { period: 2, entries: [[1, "Li"], [2, "Be"], [13, "B"], [14, "C"], [15, "N"], [16, "O"], [17, "F"], [18, "Ne"]] },
  { period: 3, entries: [[1, "Na"], [2, "Mg"], [13, "Al"], [14, "Si"], [15, "P"], [16, "S"], [17, "Cl"], [18, "Ar"]] },
  { period: 4, entries: [[1, "K"], [2, "Ca"], [3, "Sc"], [4, "Ti"], [5, "V"], [6, "Cr"], [7, "Mn"], [8, "Fe"], [9, "Co"], [10, "Ni"], [11, "Cu"], [12, "Zn"], [13, "Ga"], [14, "Ge"], [15, "As"], [16, "Se"], [17, "Br"], [18, "Kr"]] },
  { period: 5, entries: [[1, "Rb"], [2, "Sr"], [3, "Y"], [4, "Zr"], [5, "Nb"], [6, "Mo"], [7, "Tc"], [8, "Ru"], [9, "Rh"], [10, "Pd"], [11, "Ag"], [12, "Cd"], [13, "In"], [14, "Sn"], [15, "Sb"], [16, "Te"], [17, "I"], [18, "Xe"]] },
  { period: 6, entries: [[1, "Cs"], [2, "Ba"], [3, "La"], [4, "Hf"], [5, "Ta"], [6, "W"], [7, "Re"], [8, "Os"], [9, "Ir"], [10, "Pt"], [11, "Au"], [12, "Hg"], [13, "Tl"], [14, "Pb"], [15, "Bi"], [16, "Po"], [17, "At"], [18, "Rn"]] },
  { period: 7, entries: [[1, "Fr"], [2, "Ra"], [3, "Ac"], [4, "Rf"], [5, "Db"], [6, "Sg"], [7, "Bh"], [8, "Hs"], [9, "Mt"], [10, "Ds"], [11, "Rg"], [12, "Cn"], [13, "Nh"], [14, "Fl"], [15, "Mc"], [16, "Lv"], [17, "Ts"], [18, "Og"]] }
];

const LANTHANIDES = ["Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"];
const ACTINIDES = ["Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"];

const AUFBAU_ORDER = [
  ["1s", 2], ["2s", 2], ["2p", 6], ["3s", 2], ["3p", 6], ["4s", 2], ["3d", 10], ["4p", 6], ["5s", 2], ["4d", 10],
  ["5p", 6], ["6s", 2], ["4f", 14], ["5d", 10], ["6p", 6], ["7s", 2], ["5f", 14], ["6d", 10], ["7p", 6]
];
const MOELLER_GRID = [
  ["1s", "", "", ""],
  ["2s", "2p", "", ""],
  ["3s", "3p", "3d", ""],
  ["4s", "4p", "4d", "4f"],
  ["5s", "5p", "5d", "5f"],
  ["6s", "6p", "6d", ""],
  ["7s", "7p", "", ""]
];
const ATOMIC_MASS = {
  H: "1.008", He: "4.0026", Li: "6.94", Be: "9.0122", B: "10.81", C: "12.011", N: "14.007", O: "15.999", F: "18.998", Ne: "20.180",
  Na: "22.990", Mg: "24.305", Al: "26.982", Si: "28.085", P: "30.974", S: "32.06", Cl: "35.45", Ar: "39.948", K: "39.098", Ca: "40.078",
  Sc: "44.956", Ti: "47.867", V: "50.942", Cr: "51.996", Mn: "54.938", Fe: "55.845", Co: "58.933", Ni: "58.693", Cu: "63.546", Zn: "65.38",
  Ga: "69.723", Ge: "72.630", As: "74.922", Se: "78.971", Br: "79.904", Kr: "83.798", Rb: "85.468", Sr: "87.62", Y: "88.906", Zr: "91.224",
  Nb: "92.906", Mo: "95.95", Tc: "[98]", Ru: "101.07", Rh: "102.91", Pd: "106.42", Ag: "107.87", Cd: "112.41", In: "114.82", Sn: "118.71",
  Sb: "121.76", Te: "127.60", I: "126.90", Xe: "131.29", Cs: "132.91", Ba: "137.33", La: "138.91", Ce: "140.12", Pr: "140.91", Nd: "144.24",
  Pm: "[145]", Sm: "150.36", Eu: "151.96", Gd: "157.25", Tb: "158.93", Dy: "162.50", Ho: "164.93", Er: "167.26", Tm: "168.93", Yb: "173.05",
  Lu: "174.97", Hf: "178.49", Ta: "180.95", W: "183.84", Re: "186.21", Os: "190.23", Ir: "192.22", Pt: "195.08", Au: "196.97", Hg: "200.59",
  Tl: "204.38", Pb: "207.2", Bi: "208.98", Po: "[209]", At: "[210]", Rn: "[222]", Fr: "[223]", Ra: "[226]", Ac: "[227]", Th: "232.04",
  Pa: "231.04", U: "238.03", Np: "[237]", Pu: "[244]", Am: "[243]", Cm: "[247]", Bk: "[247]", Cf: "[251]", Es: "[252]", Fm: "[257]",
  Md: "[258]", No: "[259]", Lr: "[266]", Rf: "[267]", Db: "[268]", Sg: "[269]", Bh: "[270]", Hs: "[277]", Mt: "[278]", Ds: "[281]",
  Rg: "[282]", Cn: "[285]", Nh: "[286]", Fl: "[289]", Mc: "[290]", Lv: "[293]", Ts: "[294]", Og: "[294]"
};
const ELEMENT_USES = {
  H: "Producció d'amoníac (Haber-Bosch), piles de combustible i síntesi química.",
  He: "Refrigeració criogènica (RMN), atmosferes inerts i globus.",
  Li: "Bateries recarregables, aliatges lleugers i ceràmica.",
  Be: "Aliatges Cu-Be, finestres de raigs X i aplicacions aeroespacials.",
  B: "Vidres borosilicats, detergents i control de neutrons.",
  C: "Materials (grafit/diamant), filtres, acer i compostos orgànics.",
  N: "Fertilitzants, atmosferes inerts i refrigeració amb nitrogen líquid.",
  O: "Oxigenoteràpia, siderúrgia i tractament d'aigües.",
  F: "Producció de fluoropolímers i compostos fluorats.",
  Ne: "Il·luminació de neó i tubs indicadors.",
  Na: "Làmpades de vapor de sodi i síntesi química.",
  Mg: "Aliatges lleugers, pirotècnia i reducció metal·lúrgica.",
  Al: "Estructures lleugeres, cablejat i envasos.",
  Si: "Microelectrònica, cèl·lules solars i vidre.",
  P: "Fertilitzants, detergents i química fina.",
  S: "Fabricació d'àcid sulfúric i vulcanització del cautxú.",
  Cl: "Desinfecció d'aigua, PVC i síntesi química.",
  Ar: "Atmosfera inert en soldadura i bombetes.",
  K: "Fertilitzants potàssics i química analítica.",
  Ca: "Ciment, calç i tractament metal·lúrgic.",
  Fe: "Producció d'acers i estructures industrials.",
  Co: "Superaliatges, catalitzadors i bateries.",
  Ni: "Acer inoxidable, recobriments i bateries.",
  Cu: "Conducció elèctrica, canonades i aliatges.",
  Zn: "Galvanització de l'acer i aliatges (llautó).",
  Ag: "Contactes elèctrics, joieria i aplicacions antimicrobianes.",
  Sn: "Soldadures, llaunes i aliatges.",
  I: "Antisèptics, agents de contrast i química orgànica.",
  Xe: "Làmpades d'alta intensitat i anestèsia especialitzada.",
  Cs: "Rellotges atòmics i fotocàtodes.",
  W: "Eines de tall, aliatges d'alta temperatura i elèctrodes.",
  Pt: "Catalitzadors (automoció i química) i joieria.",
  Au: "Electrònica de precisió, joieria i reserves financeres.",
  Hg: "Instrumentació antiga i química de laboratori (ús molt restringit).",
  Pb: "Bateries de plom-àcid i blindatge radiològic.",
  U: "Combustible nuclear i producció d'isòtops.",
  Pu: "Combustible MOX i recerca nuclear.",
  Am: "Detectors de fum i fonts de neutrons."
};

const EXCEPTION_CONFIGS = {
  Cr: "1s2 2s2 2p6 3s2 3p6 3d5 4s1",
  Cu: "1s2 2s2 2p6 3s2 3p6 3d10 4s1",
  Nb: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d4 5s1",
  Mo: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d5 5s1",
  Ru: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d7 5s1",
  Rh: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d8 5s1",
  Pd: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10",
  Ag: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s1",
  La: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 5d1 6s2",
  Ce: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 4f1 5d1 6s2",
  Gd: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 4f7 5d1 6s2",
  Pt: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 4f14 5d9 6s1",
  Au: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 4f14 5d10 6s1",
  Ac: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 6d1 7s2",
  Th: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 6d2 7s2",
  Pa: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 5f2 6d1 7s2",
  U: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 5f3 6d1 7s2",
  Np: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 5f4 6d1 7s2",
  Cm: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 5f7 6d1 7s2",
  Lr: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 5f14 7s2 7p1"
};

const SYMBOL_TO_META = ELEMENTS_ORDER.reduce((acc, [symbol, name], i) => {
  acc[symbol] = { symbol, name, z: i + 1 };
  return acc;
}, {});

function buildPlacementMap() {
  const map = new Map();

  for (const row of MAIN_GRID) {
    for (const [group, symbol] of row.entries) {
      map.set(symbol, { period: row.period, group, displayPeriod: row.period, row: row.period, col: group });
    }
  }

  LANTHANIDES.forEach((symbol, i) => {
    map.set(symbol, { period: 6, group: null, displayPeriod: "6*", row: 8, col: i + 3, series: "lanthanide" });
  });

  ACTINIDES.forEach((symbol, i) => {
    map.set(symbol, { period: 7, group: null, displayPeriod: "7*", row: 9, col: i + 3, series: "actinide" });
  });

  return map;
}

const PLACEMENT = buildPlacementMap();

function fillAufbauConfig(z) {
  let left = z;
  const tokens = [];

  for (const [orbital, cap] of AUFBAU_ORDER) {
    if (left <= 0) break;
    const e = Math.min(cap, left);
    if (e > 0) tokens.push(`${orbital}${e}`);
    left -= e;
  }

  return tokens.join(" ");
}

function getElectronConfig(element) {
  if (EXCEPTION_CONFIGS[element.symbol]) {
    return EXCEPTION_CONFIGS[element.symbol];
  }
  return fillAufbauConfig(element.z);
}

function parseToken(token) {
  const m = token.match(/^(\d)([spdf])(\d+)$/);
  return { n: Number(m[1]), type: m[2], e: Number(m[3]), raw: token };
}

function getOrbitalBlock(element) {
  if (element.series) return "f";
  if (element.group <= 2) return "s";
  if (element.group >= 13) return "p";
  return "d";
}

function valenceInfo(element, config) {
  const parsed = config.split(" ").map(parseToken);
  const maxN = Math.max(...parsed.map((t) => t.n));
  const highestShell = parsed.filter((t) => t.n === maxN).reduce((sum, t) => sum + t.e, 0);
  const block = getOrbitalBlock(element);

  if (block === "s" || block === "p") {
    return { value: `${highestShell}`, orbitalType: parsed[parsed.length - 1].type };
  }

  if (block === "d") {
    return {
      value: `Variables (capa externa n=${maxN}: ${highestShell}; també participa (n-1)d)`,
      orbitalType: "d"
    };
  }

  return {
    value: `Variables (capa externa n=${maxN}: ${highestShell}; també participen (n-2)f i (n-1)d)`,
    orbitalType: "f"
  };
}

function orbitalDescription(type) {
  if (type === "s") return "Orbital s: simetria esfèrica (una única regió de probabilitat al voltant del nucli).";
  if (type === "p") return "Orbital p (representació pz): forma bilobular amb dos lòbuls oposats separats per un pla nodal.";
  if (type === "d") return "Orbital d (representació dz²): dos lòbuls axials i una regió toroidal central.";
  return "Orbital f (representació de la família fz³): geometria 3D multilobular amb estructura nodal complexa.";
}

function orbitalOptions(type) {
  if (type === "s") return [{ key: "s", label: "s", desc: "Orbital s esfèric." }];
  if (type === "p") {
    return [
      { key: "px", label: "p_x", desc: "Dos lòbuls alineats amb l'eix x." },
      { key: "py", label: "p_y", desc: "Dos lòbuls alineats amb l'eix y." },
      { key: "pz", label: "p_z", desc: "Dos lòbuls alineats amb l'eix z." }
    ];
  }
  if (type === "d") {
    return [
      { key: "dxy", label: "d_xy", desc: "Quatre lòbuls entre els eixos x i y." },
      { key: "dxz", label: "d_xz", desc: "Quatre lòbuls al pla xz." },
      { key: "dyz", label: "d_yz", desc: "Quatre lòbuls al pla yz." },
      { key: "dz2", label: "d_z²", desc: "Dos lòbuls axials i tor central." },
      { key: "dx2y2", label: "d_x²−y²", desc: "Quatre lòbuls sobre els eixos x i y." }
    ];
  }
  return [
    { key: "fz3", label: "f_z³", desc: "Forma f axial amb múltiples lòbuls." },
    { key: "fxyz", label: "f_xyz", desc: "Lòbuls orientats entre x, y i z." },
    { key: "fxz2", label: "f_xz²", desc: "Variant f amb pes sobre els eixos x i z." },
    { key: "fxx3y3", label: "f_x(x²−3y²)", desc: "Variant f del sistema real." }
  ];
}

function buildElements() {
  return ELEMENTS_ORDER.map(([symbol, name]) => {
    const meta = SYMBOL_TO_META[symbol];
    const placement = PLACEMENT.get(symbol);
    const element = {
      symbol,
      name,
      z: meta.z,
      period: placement.period,
      group: placement.group,
      displayPeriod: placement.displayPeriod,
      row: placement.row,
      col: placement.col,
      series: placement.series || null
    };

    element.config = getElectronConfig(element);
    const valence = valenceInfo(element, element.config);
    element.valence = valence.value;
    element.orbitalType = valence.orbitalType;
    element.orbitalText = orbitalDescription(valence.orbitalType);
    return element;
  });
}

const ELEMENTS = buildElements();
const TABLE = document.getElementById("periodic-table");
const OVERLAY = document.getElementById("element-overlay");
const CARD = document.getElementById("element-card");
const CLOSE = document.getElementById("close-overlay");

let pinnedOpen = false;
let renderer = null;
let scene = null;
let camera = null;
let orbitalMeshGroup = null;
let animationId = null;
let cleanupPointerControls = null;
let orbitControls = null;

function createEmptyCell(row, col) {
  const d = document.createElement("div");
  d.className = "placeholder";
  d.style.gridRow = String(row);
  d.style.gridColumn = String(col);
  TABLE.appendChild(d);
}

function renderTable() {
  for (let r = 1; r <= 9; r += 1) {
    for (let c = 1; c <= 18; c += 1) {
      createEmptyCell(r, c);
    }
  }

  for (const el of ELEMENTS) {
    const b = document.createElement("button");
    b.className = `element ${getOrbitalBlock(el)}`;
    b.style.gridRow = String(el.row);
    b.style.gridColumn = String(el.col);
    b.innerHTML = `
      <span class="z">${el.z}</span>
      <span class="symbol">${el.symbol}</span>
      <span class="name">${el.name}</span>
    `;

    b.addEventListener("click", () => {
      pinnedOpen = true;
      showElement(el, true);
    });

    TABLE.appendChild(b);
  }
}

function groupLabel(element) {
  if (element.group) return String(element.group);
  return element.series === "lanthanide" ? "Sèrie dels lantànids" : "Sèrie dels actínids";
}

function periodLabel(element) {
  if (typeof element.displayPeriod === "string") return `${element.displayPeriod} (bloc separat)`;
  return String(element.displayPeriod);
}

function showElement(el, modal) {
  const moeller = renderMoellerDiagram(el.config);
  const configWithSup = formatElectronConfigHtml(el.config);
  const uses = getElementUses(el);
  const mass = ATOMIC_MASS[el.symbol] || "No disponible";
  const variants = orbitalOptions(el.orbitalType);
  const selectHtml = variants
    .map((v) => `<option value="${v.key}">${v.label}</option>`)
    .join("");
  CARD.innerHTML = `
    <section class="element-main">
      <h2>${el.name} (${el.symbol})</h2>
      <p class="meta">Nombre atòmic Z = ${el.z}</p>
      <dl>
        <dt>Grup</dt><dd>${groupLabel(el)}</dd>
        <dt>Període</dt><dd>${periodLabel(el)}</dd>
        <dt>Massa atòmica relativa</dt><dd>${mass} u</dd>
        <dt>Configuració electrònica</dt><dd class="config-line">${configWithSup}</dd>
        <dt>Electrons de valència</dt><dd>${el.valence}</dd>
      </dl>
      <section class="moeller-section">
        <h3>Diagrama de Moeller</h3>
        ${moeller}
      </section>
    </section>
    <aside class="orbital-panel">
      <h3>Orbital de valència en 3D</h3>
      <p id="orbital-description">${variants[0].desc}</p>
      <label for="orbital-variant-select"><strong>Variant:</strong></label>
      <select id="orbital-variant-select">${selectHtml}</select>
      <div id="orbital-canvas" role="img" aria-label="Representació 3D orbital"></div>
      <section class="uses-section">
        <h4>Usos principals</h4>
        <p>${uses}</p>
      </section>
    </aside>
  `;

  OVERLAY.classList.remove("is-hidden");
  pinnedOpen = modal;

  renderOrbital(variants[0].key);

  const select = document.getElementById("orbital-variant-select");
  const desc = document.getElementById("orbital-description");
  select.addEventListener("change", () => {
    const found = variants.find((v) => v.key === select.value) || variants[0];
    desc.textContent = found.desc;
    renderOrbital(found.key);
  });
}

function formatElectronConfigHtml(config) {
  return config
    .split(" ")
    .map((token) => {
      const p = parseToken(token);
      return `${p.n}${p.type}<sup>${p.e}</sup>`;
    })
    .join(" ");
}

function getElementUses(element) {
  if (ELEMENT_USES[element.symbol]) return ELEMENT_USES[element.symbol];
  if (element.z >= 93) {
    return "Principalment recerca nuclear i síntesi d'isòtops; sense ús comercial generalitzat.";
  }
  if (element.series === "lanthanide") {
    return "Imants permanents, fosfors per pantalles/il·luminació i aplicacions òptiques.";
  }
  if (element.series === "actinide") {
    return "Recerca nuclear i estudis de radioquímica.";
  }
  if (element.group === 18) {
    return "Gas noble utilitzat en atmosferes inerts, il·luminació i equips tècnics especialitzats.";
  }
  if (element.group === 17) {
    return "Agents oxidants/desinfectants i síntesi química industrial.";
  }
  if (element.group >= 3 && element.group <= 12) {
    return "Aliatges, catalitzadors i aplicacions metal·lúrgiques/electroquímiques.";
  }
  return "Aplicacions industrials en materials, química i tecnologia segons la seva reactivitat.";
}

function hideOverlay() {
  OVERLAY.classList.add("is-hidden");
  clearOrbital();
}

function clearOrbital() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  if (cleanupPointerControls) {
    cleanupPointerControls();
    cleanupPointerControls = null;
  }
  if (renderer) {
    renderer.dispose();
    renderer = null;
  }
  if (orbitControls) {
    orbitControls.dispose();
    orbitControls = null;
  }
  scene = null;
  camera = null;
  orbitalMeshGroup = null;
}

function renderMoellerDiagram(config) {
  const occupancy = new Map();
  config.split(" ").forEach((token) => {
    const p = parseToken(token);
    occupancy.set(`${p.n}${p.type}`, p.e);
  });

  const gridRows = MOELLER_GRID.map((row, i) => {
    const cells = row.map((orbital) => {
      if (!orbital) return '<span class="moeller-cell empty"></span>';
      const e = occupancy.get(orbital) || 0;
      const shown = e > 0 ? `<sup>${e}</sup>` : "";
      const cls = e > 0 ? "filled" : "";
      return `<span class="moeller-cell ${cls}">${orbital}${shown}</span>`;
    }).join("");
    return `<div class="moeller-row"><span class="n-label">n=${i + 1}</span>${cells}</div>`;
  }).join("");

  const order = AUFBAU_ORDER
    .map(([orbital]) => {
      const e = occupancy.get(orbital) || 0;
      return e > 0 ? `<span class="order filled">${orbital}<sup>${e}</sup></span>` : `<span class="order">${orbital}</span>`;
    })
    .join('<span class="arrow">→</span>');

  return `
    <div class="moeller-grid">${gridRows}</div>
    <p class="moeller-order"><strong>Ordre de farciment:</strong> ${order}</p>
  `;
}

function renderOrbital(variant) {
  clearOrbital();

  const host = document.getElementById("orbital-canvas");
  if (!host) return;
  host.innerHTML = "";

  if (typeof THREE === "undefined") {
    renderOrbitalFallback(type, host);
    return;
  }

  try {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, host.clientWidth / host.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 6);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    host.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    const hemi = new THREE.HemisphereLight(0xbcd4ff, 0x10203a, 0.5);
    const key = new THREE.DirectionalLight(0xffffff, 0.9);
    key.position.set(3, 3, 4);
    const rim = new THREE.PointLight(0x8ecae6, 0.5);
    rim.position.set(-2.5, -2.5, -3);
    scene.add(ambient, hemi, key, rim);

    const nucleus = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 18, 18),
      new THREE.MeshPhongMaterial({ color: 0xffe66d, emissive: 0x463f1d, shininess: 80, transparent: true, opacity: 0.85 })
    );
    scene.add(nucleus);

    orbitalMeshGroup = new THREE.Group();
    scene.add(orbitalMeshGroup);
    addAxes3D(orbitalMeshGroup);

    const usedMarching = false;
    if (!usedMarching) {
      if (variant === "s") buildSOrbital();
      else if (variant.startsWith("p")) buildPOrbital(variant);
      else if (variant.startsWith("d")) buildDOrbital(variant);
      else buildFOrbital(variant);
      if (THREE.OrbitControls) {
        orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
        orbitControls.enableDamping = true;
        orbitControls.dampingFactor = 0.08;
        orbitControls.enablePan = false;
        orbitControls.minDistance = 4.2;
        orbitControls.maxDistance = 10.5;
      } else {
        setupPointerControls(host, orbitalMeshGroup);
      }
    } else if (THREE.OrbitControls) {
      orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
      orbitControls.enableDamping = true;
      orbitControls.dampingFactor = 0.08;
      orbitControls.enablePan = false;
      orbitControls.minDistance = 4.2;
      orbitControls.maxDistance = 9.5;
    }

    const animate = () => {
      const t = performance.now() * 0.001;
      if (!usedMarching) {
        orbitalMeshGroup.rotation.y += 0.004 + Math.sin(t * 0.4) * 0.0012;
        orbitalMeshGroup.rotation.x += 0.0018;
      }
      if (orbitControls) orbitControls.update();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();
  } catch (_) {
    clearOrbital();
    renderOrbitalFallback(variant[0] || "s", host);
  }
}

function buildMarchingOrbital(type) {
  if (!THREE.MarchingCubes) return false;

  const paramsByType = {
    s: { res: 34, extent: 1.9, alpha: 1.55, iso: 0.28, signs: [1], colors: ["#2a9d8f"] },
    p: { res: 36, extent: 2.0, alpha: 1.7, iso: 0.22, signs: [1, -1], colors: ["#2a9d8f", "#c1121f"] },
    d: { res: 38, extent: 2.1, alpha: 1.5, iso: 0.20, signs: [1, -1], colors: ["#2a9d8f", "#c1121f"] },
    f: { res: 40, extent: 2.25, alpha: 1.3, iso: 0.18, signs: [1, -1], colors: ["#2a9d8f", "#c1121f"] }
  };
  const params = paramsByType[type] || paramsByType.p;
  let generatedAny = false;

  params.signs.forEach((sign, idx) => {
    const mat = createOrbitalMaterial(params.colors[idx], "#d6ecff", 0.62);
    const mc = new THREE.MarchingCubes(params.res, mat, true, true);
    mc.isolation = params.iso;
    mc.scale.set(2.55, 2.55, 2.55);
    mc.position.set(0, 0, 0);

    const ok = fillMarchingField(mc, type, sign, params.extent, params.alpha);
    if (ok) {
      orbitalMeshGroup.add(mc);
      generatedAny = true;
    }
  });

  return generatedAny;
}

function fillMarchingField(mc, type, sign, extent, alpha) {
  const size = mc.resolution;
  const size2 = size * size;
  const inv = 1 / (size - 1);
  const values = new Float32Array(size * size * size);
  let maxAbs = 0;

  for (let z = 0; z < size; z += 1) {
    const fz = ((z * inv) * 2 - 1) * extent;
    for (let y = 0; y < size; y += 1) {
      const fy = ((y * inv) * 2 - 1) * extent;
      for (let x = 0; x < size; x += 1) {
        const fx = ((x * inv) * 2 - 1) * extent;
        const psi = orbitalPsi(type, fx, fy, fz, alpha);
        const idx = x + y * size + z * size2;
        values[idx] = psi;
        const abs = Math.abs(psi);
        if (abs > maxAbs) maxAbs = abs;
      }
    }
  }

  if (maxAbs < 1e-8) return false;

  const norm = 1 / maxAbs;
  for (let i = 0; i < values.length; i += 1) {
    mc.field[i] = sign * values[i] * norm;
  }
  return true;
}

function orbitalPsi(type, x, y, z, alpha) {
  const r2 = x * x + y * y + z * z;
  const radial = Math.exp(-alpha * r2);

  // Representative orbitals with distinct canonical shapes:
  // s  -> spherical
  // p  -> p_z dumbbell
  // d  -> d_z2 (two lobes + toroidal waist)
  // f  -> f_z3 family (multi-lobed along z)
  if (type === "s") return radial;
  if (type === "p") return z * radial * 2.2;
  if (type === "d") return (2 * z * z - x * x - y * y) * radial * 2.2;
  return z * (5 * z * z - 3 * r2) * radial * 1.85;
}

function renderOrbitalFallback(type, host) {
  const shape = orbitalSvg(type);
  host.innerHTML = `<div class="orbital-fallback">${shape}<span class="fallback-note">Mode visual de reserva</span></div>`;
  setupFallbackPointerControls(host);
}

function orbitalSvg(type) {
  const axis = `
    <line x1="12" y1="50" x2="88" y2="50" class="axis" />
    <line x1="50" y1="12" x2="50" y2="88" class="axis" />
    <line x1="24" y1="76" x2="76" y2="24" class="axis axis-soft" />
    <text x="90" y="50" class="axis-label">x</text>
    <text x="51" y="11" class="axis-label">z</text>
    <text x="76" y="23" class="axis-label">y</text>
  `;

  if (type === "s") {
    return `
      <svg viewBox="0 0 100 100" aria-label="Orbital s">
        ${axis}
        <circle cx="50" cy="50" r="16" class="lobe-a" />
        <circle cx="50" cy="50" r="3" class="core-dot" />
      </svg>
    `;
  }
  if (type === "p") {
    return `
      <svg viewBox="0 0 100 100" aria-label="Orbital p">
        ${axis}
        <ellipse cx="36" cy="50" rx="13" ry="19" class="lobe-a" />
        <ellipse cx="64" cy="50" rx="13" ry="19" class="lobe-b" />
        <circle cx="50" cy="50" r="3" class="core-dot" />
      </svg>
    `;
  }
  if (type === "d") {
    return `
      <svg viewBox="0 0 100 100" aria-label="Orbital d">
        ${axis}
        <ellipse cx="50" cy="28" rx="10" ry="15" class="lobe-a" />
        <ellipse cx="50" cy="72" rx="10" ry="15" class="lobe-b" />
        <ellipse cx="50" cy="50" rx="18" ry="8" class="ring" />
        <circle cx="50" cy="50" r="3" class="core-dot" />
      </svg>
    `;
  }
  return `
    <svg viewBox="0 0 100 100" aria-label="Orbital f">
      ${axis}
      <ellipse cx="31" cy="35" rx="8" ry="12" class="lobe-a" />
      <ellipse cx="69" cy="35" rx="8" ry="12" class="lobe-b" />
      <ellipse cx="31" cy="65" rx="8" ry="12" class="lobe-b" />
      <ellipse cx="69" cy="65" rx="8" ry="12" class="lobe-a" />
      <ellipse cx="50" cy="26" rx="7" ry="11" class="lobe-a" />
      <ellipse cx="50" cy="74" rx="7" ry="11" class="lobe-b" />
      <ellipse cx="50" cy="50" rx="17" ry="7" class="ring" />
      <circle cx="50" cy="50" r="3" class="core-dot" />
    </svg>
  `;
}

function addAxes3D(group) {
  const axisMat = new THREE.LineBasicMaterial({ color: 0x9aa5b1, transparent: true, opacity: 0.72 });
  const pointsX = [new THREE.Vector3(-2.2, 0, 0), new THREE.Vector3(2.2, 0, 0)];
  const pointsY = [new THREE.Vector3(0, -2.2, 0), new THREE.Vector3(0, 2.2, 0)];
  const pointsZ = [new THREE.Vector3(0, 0, -2.2), new THREE.Vector3(0, 0, 2.2)];
  group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pointsX), axisMat));
  group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pointsY), axisMat));
  group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pointsZ), axisMat));
}

function setupPointerControls(host, group) {
  const state = {
    targetX: 0.12,
    targetY: -0.28,
    currentX: 0.12,
    currentY: -0.28,
    hovering: false,
    dragging: false,
    lastX: 0,
    lastY: 0
  };

  host.style.cursor = "grab";

  const onMove = (event) => {
    const rect = host.getBoundingClientRect();
    const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    if (state.dragging) {
      const dx = event.clientX - state.lastX;
      const dy = event.clientY - state.lastY;
      state.targetY += dx * 0.012;
      state.targetX += dy * 0.009;
      state.lastX = event.clientX;
      state.lastY = event.clientY;
      state.hovering = true;
    } else {
      state.targetY = nx * 0.95;
      state.targetX = -ny * 0.7;
      state.hovering = true;
      group.rotation.z = nx * 0.1;
    }
  };

  const onDown = (event) => {
    state.dragging = true;
    state.lastX = event.clientX;
    state.lastY = event.clientY;
    host.style.cursor = "grabbing";
  };

  const onUp = () => {
    state.dragging = false;
    host.style.cursor = "grab";
  };

  const onLeave = () => {
    state.hovering = false;
    state.dragging = false;
    host.style.cursor = "grab";
    group.rotation.z = 0;
  };

  host.addEventListener("pointerdown", onDown);
  window.addEventListener("pointerup", onUp);
  host.addEventListener("pointermove", onMove);
  host.addEventListener("pointerleave", onLeave);
  cleanupPointerControls = () => {
    host.removeEventListener("pointerdown", onDown);
    window.removeEventListener("pointerup", onUp);
    host.removeEventListener("pointermove", onMove);
    host.removeEventListener("pointerleave", onLeave);
    host.style.cursor = "";
  };

  return state;
}

function setupFallbackPointerControls(host) {
  const svg = host.querySelector("svg");
  if (!svg) return;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let rotX = 0;
  let rotY = 0;
  host.style.cursor = "grab";

  const applyRotation = () => {
    svg.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
  };

  const onMove = (event) => {
    const rect = host.getBoundingClientRect();
    const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    if (dragging) {
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      rotY += dx * 0.18;
      rotX -= dy * 0.15;
      lastX = event.clientX;
      lastY = event.clientY;
    } else {
      rotX = -ny * 12;
      rotY = nx * 14;
    }
    applyRotation();
  };

  const onDown = (event) => {
    dragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    host.style.cursor = "grabbing";
  };

  const onUp = () => {
    dragging = false;
    host.style.cursor = "grab";
  };

  const onLeave = () => {
    dragging = false;
    host.style.cursor = "grab";
    rotX = 0;
    rotY = 0;
    applyRotation();
  };

  host.addEventListener("pointerdown", onDown);
  window.addEventListener("pointerup", onUp);
  host.addEventListener("pointermove", onMove);
  host.addEventListener("pointerleave", onLeave);
  cleanupPointerControls = () => {
    host.removeEventListener("pointerdown", onDown);
    window.removeEventListener("pointerup", onUp);
    host.removeEventListener("pointermove", onMove);
    host.removeEventListener("pointerleave", onLeave);
    host.style.cursor = "";
  };
}

function createOrbitalMaterial(colorA, colorB, opacity = 0.55) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  const grad = ctx.createRadialGradient(90, 80, 20, 130, 130, 130);
  grad.addColorStop(0, colorB);
  grad.addColorStop(0.45, colorA);
  grad.addColorStop(1, "#0c1a2f");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 256);

  for (let i = 0; i < 700; i += 1) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    const r = Math.random() * 1.6;
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.14})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1.6, 1.6);

  const bumpCanvas = document.createElement("canvas");
  bumpCanvas.width = 256;
  bumpCanvas.height = 256;
  const bctx = bumpCanvas.getContext("2d");
  bctx.fillStyle = "#7f7f7f";
  bctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 1200; i += 1) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    const r = Math.random() * 1.2;
    const g = Math.floor(Math.random() * 255);
    bctx.fillStyle = `rgb(${g},${g},${g})`;
    bctx.beginPath();
    bctx.arc(x, y, r, 0, Math.PI * 2);
    bctx.fill();
  }
  const bumpTex = new THREE.CanvasTexture(bumpCanvas);
  bumpTex.wrapS = THREE.RepeatWrapping;
  bumpTex.wrapT = THREE.RepeatWrapping;
  bumpTex.repeat.set(2.2, 2.2);

  return new THREE.MeshPhysicalMaterial({
    map: tex,
    bumpMap: bumpTex,
    bumpScale: 0.18,
    roughness: 0.38,
    metalness: 0.08,
    clearcoat: 0.45,
    clearcoatRoughness: 0.45,
    transparent: true,
    opacity
  });
}

function createLobe(radius, material, x, y, z, sx, sy, sz, rx = 0, ry = 0, rz = 0) {
  const lobe = new THREE.Mesh(new THREE.SphereGeometry(radius, 36, 36), material);
  lobe.position.set(x, y, z);
  lobe.scale.set(sx, sy, sz);
  lobe.rotation.set(rx, ry, rz);
  return lobe;
}

function buildSOrbital() {
  const mat = createOrbitalMaterial("#2a9d8f", "#a8dadc", 0.54);
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(1.65, 50, 50),
    mat
  );
  const wire = new THREE.Mesh(
    new THREE.SphereGeometry(1.68, 24, 24),
    new THREE.MeshBasicMaterial({ color: 0xbde0fe, wireframe: true, transparent: true, opacity: 0.14 })
  );
  orbitalMeshGroup.add(wire);
  orbitalMeshGroup.add(mesh);
}

function buildPOrbital(variant) {
  const matA = createOrbitalMaterial("#2a9d8f", "#8ecae6", 0.63);
  const matB = createOrbitalMaterial("#c1121f", "#ff9aa2", 0.63);
  const group = new THREE.Group();
  const lobe1 = createLobe(1.05, matA, 0, -1.35, 0, 0.62, 1.55, 0.62);
  const lobe2 = createLobe(1.05, matB, 0, 1.35, 0, 0.62, 1.55, 0.62);
  const waist = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 0.65, 14),
    new THREE.MeshPhysicalMaterial({ color: 0xd7e3fc, transparent: true, opacity: 0.14, roughness: 0.9 })
  );
  group.add(lobe1, lobe2, waist);
  if (variant === "px") group.rotation.z = Math.PI / 2;
  else if (variant === "pz") group.rotation.x = Math.PI / 2;
  orbitalMeshGroup.add(group);
}

function buildDOrbital(variant) {
  const matA = createOrbitalMaterial("#2a9d8f", "#8ecae6", 0.62);
  const matB = createOrbitalMaterial("#c1121f", "#ff9aa2", 0.62);
  const group = new THREE.Group();
  const lobes = [
    createLobe(0.7, matA, 1.22, 1.22, 0, 0.82, 1.45, 0.82),
    createLobe(0.7, matB, -1.22, 1.22, 0, 0.82, 1.45, 0.82),
    createLobe(0.7, matB, 1.22, -1.22, 0, 0.82, 1.45, 0.82),
    createLobe(0.7, matA, -1.22, -1.22, 0, 0.82, 1.45, 0.82)
  ];
  const top = createLobe(0.62, matB, 0, 1.95, 0, 0.58, 1.35, 0.58);
  const bottom = createLobe(0.62, matA, 0, -1.95, 0, 0.58, 1.35, 0.58);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.08, 0.19, 24, 70),
    createOrbitalMaterial("#2a9d8f", "#d8f3dc", 0.46)
  );
  ring.rotation.x = Math.PI / 2;
  if (variant === "dz2") {
    group.add(top, bottom, ring);
  } else {
    group.add(...lobes);
    if (variant === "dxz") group.rotation.x = Math.PI / 2;
    if (variant === "dyz") group.rotation.y = Math.PI / 2;
    if (variant === "dx2y2") group.rotation.z = Math.PI / 4;
  }
  orbitalMeshGroup.add(group);
}

function buildFOrbital(variant) {
  const matA = createOrbitalMaterial("#2a9d8f", "#8ecae6", 0.56);
  const matB = createOrbitalMaterial("#c1121f", "#ff9aa2", 0.56);
  const group = new THREE.Group();
  const lobes = [];
  for (let i = 0; i < 10; i += 1) {
    const a = (Math.PI * 2 * i) / 10;
    const x = Math.cos(a) * 1.55;
    const y = Math.sin(a) * 1.55;
    const z = i % 2 === 0 ? 0.62 : -0.62;
    const mat = i % 2 === 0 ? matA : matB;
    lobes.push(createLobe(0.5, mat, x, y, z, 0.72, 1.42, 0.72, 0, 0, a));
  }
  lobes.push(createLobe(0.58, matA, 0, 2.05, 0.95, 0.55, 1.38, 0.55));
  lobes.push(createLobe(0.58, matB, 0, -2.05, -0.95, 0.55, 1.38, 0.55));
  lobes.forEach((lobe) => group.add(lobe));

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.24, 0.12, 20, 64),
    createOrbitalMaterial("#2a9d8f", "#d8f3dc", 0.4)
  );
  ring.rotation.x = Math.PI / 2.9;
  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(1.24, 0.1, 20, 64),
    createOrbitalMaterial("#c1121f", "#ffd6d6", 0.28)
  );
  ring2.rotation.y = Math.PI / 3.1;
  group.add(ring2);
  group.add(ring);
  if (variant === "fxyz") group.rotation.y = Math.PI / 4;
  if (variant === "fxz2") group.rotation.x = Math.PI / 3.5;
  if (variant === "fxx3y3") group.rotation.z = Math.PI / 6;
  orbitalMeshGroup.add(group);
}

CLOSE.addEventListener("click", () => {
  pinnedOpen = false;
  hideOverlay();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    pinnedOpen = false;
    hideOverlay();
  }
});

renderTable();
