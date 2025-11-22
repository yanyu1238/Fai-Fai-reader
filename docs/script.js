async function getArticles() {
  const res = await fetch("articles.json");
  return await res.json();
}

async function renderArticles() {
  const articles = await getArticles();
  const container = document.getElementById("articleList");
  container.innerHTML = "";
  articles.forEach(a => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h2><a href="${a.link}">${a.title}</a></h2><p>${a.chapter}</p>`;
    container.appendChild(div);
  });
}
async function renderArticles() {
  const articles = await getArticles();
  const container = document.getElementById("articleList");
  container.innerHTML = "";
  articles.forEach(a => {
    const flags = getFlags(a.updatedAt);
    const badge = renderBadge(flags);
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h2><a href="${a.link}">${a.title}</a> ${badge}</h2><p>${a.chapter}</p>`;
    container.appendChild(div);
  });
}
async function renderArticles() {
  const articles = await getArticles();
  const container = document.getElementById("articleList");
  container.innerHTML = "";
  articles.forEach(a => {
    const flags = getFlags(a.updatedAt);
    const badge = renderBadge(flags);
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h2><a href="${a.link}">${a.title}</a> ${badge}</h2>
      <p style="font-size: 0.9rem; color: #aaa;">${a.category} · ${a.updatedAt}</p>
      <p>${a.chapter}</p>
    `;
    container.appendChild(div);
  });
}
async function renderCategories() {
  const articles = await getArticles();
  const container = document.getElementById("categoryList");
  container.innerHTML = "";
  const grouped = {};
  articles.forEach(a => {
    if (!grouped[a.category]) grouped[a.category] = [];
    grouped[a.category].push(a);
  });
  for (const cat in grouped) {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h2>${cat}</h2>` + grouped[cat].map(a => `<p><a href="${a.link}">${a.title}</a></p>`).join("");
    container.appendChild(div);
  }
}

async function renderSearch() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  const articles = await getArticles();
  const results = document.getElementById("results");
  results.innerHTML = "";
  const matched = articles.filter(a => a.title.toLowerCase().includes(q) || a.chapter.toLowerCase().includes(q));
  matched.forEach(a => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h2><a href="${a.link}">${a.title}</a></h2><p>${a.chapter}</p>`;
    results.appendChild(div);
  });
}
async function renderSearch() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  const articles = await getArticles();
  const results = document.getElementById("results");
  results.innerHTML = "";
  const matched = articles.filter(a => a.title.toLowerCase().includes(q) || a.chapter.toLowerCase().includes(q));
  matched.forEach(a => {
    const flags = getFlags(a.updatedAt);
    let badge = "";
    if (flags.isNew) badge = `<span style="color:lime; font-weight:bold;">New</span>`;
    else if (flags.isUpdated) badge = `<span style="color:orange; font-weight:bold;">Updated</span>`;

    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h2><a href="${a.link}">${a.title}</a> ${badge}</h2><p>${a.chapter}</p>`;
    results.appendChild(div);
  });
}
function getFlags(updatedAt) {
  const now = new Date();
  const updated = new Date(updatedAt);
  const days = (now - updated) / (1000 * 60 * 60 * 24);
  return {
    isNew: days < 7,        // 7天內顯示「New」
    isUpdated: days >= 7 && days < 14 // 7-14天顯示「Updated」
  };
}

async function renderArticles() {
  const articles = await getArticles();
  const container = document.getElementById("articleList");
  container.innerHTML = "";
  articles.forEach(a => {
    const flags = getFlags(a.updatedAt);
    let badge = "";
    if (flags.isNew) badge = `<span style="color:lime; font-weight:bold;">New</span>`;
    else if (flags.isUpdated) badge = `<span style="color:orange; font-weight:bold;">Updated</span>`;

    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h2><a href="${a.link}">${a.title}</a> ${badge}</h2><p>${a.chapter}</p>`;
    container.appendChild(div);
  });
}
function getFlags(updatedAt) {
  if (!updatedAt) return {};
  const now = new Date();
  const updated = new Date(updatedAt);
  const days = (now - updated) / (1000 * 60 * 60 * 24);
  return {
    isNew: days < 7,
    isUpdated: days >= 7 && days < 14
  };
}

function renderBadge(flags) {
  if (flags.isNew) return `<span class="badge new">New</span>`;
  if (flags.isUpdated) return `<span class="badge updated">Updated</span>`;
  return "";
}
const chapter = a.chapter || "（尚未提供摘要）";
const category = a.category || "未分類";
const updatedAt = a.updatedAt || "未提供日期";
div.innerHTML = `
  <h2><a href="${a.link}">${a.title}</a> ${badge}</h2>
  <p style="font-size: 0.9rem; color: #aaa;">${category} · ${updatedAt}</p>
  <p>${chapter}</p>
`;
// 返回頂部按鈕功能
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
