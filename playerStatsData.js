
const playerStatsData = {
  "kas11k": {
    // базовое
    nickname: "kas11k",
    realName: "Имя Фамилия",
    country: "RU",        // для флага
    age: 20,

    // ключевые статы
    rating: "1.24",
    dpr: "0.58",
    kast: "74.5%",
    impact: "1.30",
    kd: "1.37",

    // топ карты
    topMaps: [
      { name: "Mirage", rating: "1.28" },
      { name: "Nuke", rating: "1.22" },
      { name: "Ancient", rating: "1.15" }
    ],

    // статистика
    stats: {
      killsPerRound: "0.78",
      headshotPercent: "59.4%",
      mapsPlayed: 320,
      mvps: 85
    },

    // трофеи
    trophies: [
      { title: "Major Champion", icon: "img/trophy-gold.png" },
      { title: "LAN Winner", icon: "img/trophy-silver.png" },
      { title: "MVP Awards x12", icon: "img/trophy-bronze.png" }
    ],

    // недавние результаты
    recentResults: [
      { team1: "NAVI", score: "16-9", team2: "G2" },
      { team1: "NAVI", score: "14-16", team2: "VIT" },
      { team1: "NAVI", score: "13-7", team2: "FAZE" },
      { team1: "NAVI", score: "16-11", team2: "ASTRALIS" }
    ],

    avatar: "img/players/kas11k.jpg",
    role: "Rifler",
    team: "Wol2nt Team"
  },

  // остальные игроки...
};
// player.js

function getPlayerIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return id ? decodeURIComponent(id) : null;
}

function renderPlayerPage() {
  const nick = getPlayerIdFromUrl();
  if (!nick || !playerStatsData[nick]) {
    document.getElementById("playerNickname").textContent = "Игрок не найден";
    return;
  }

  const data = playerStatsData[nick];

  // Базовая инфа
  document.getElementById("playerAvatar").src = data.avatar || "img/default-avatar.png";
  document.getElementById("playerNickname").textContent = data.nickname || nick;
  document.getElementById("playerRealName").textContent = data.realName || "";
  document.getElementById("playerCountryAge").textContent =
    `${data.country || ""}${data.country && data.age ? ", " : ""}${data.age ? data.age + " years" : ""}`;

  // Верхние статы
  const headerStats = document.getElementById("playerHeaderStats");
  headerStats.innerHTML = `
    <div class="player-header-stat"><span>Rating 2.0</span><strong>${data.rating || "—"}</strong></div>
    <div class="player-header-stat"><span>DPR</span><strong>${data.dpr || "—"}</strong></div>
    <div class="player-header-stat"><span>KAST</span><strong>${data.kast || "—"}</strong></div>
    <div class="player-header-stat"><span>Impact</span><strong>${data.impact || "—"}</strong></div>
    <div class="player-header-stat"><span>K/D</span><strong>${data.kd || "—"}</strong></div>
  `;

  // Recent results
  const recentBlock = document.getElementById("playerRecentResults");
  recentBlock.innerHTML = "";
  (data.recentResults || []).forEach(r => {
    const div = document.createElement("div");
    div.className = "player-recent-item";
    div.innerHTML = `
      <span class="recent-team">${r.team1}</span>
      <span class="recent-score">${r.score}</span>
      <span class="recent-team">${r.team2}</span>
    `;
    recentBlock.appendChild(div);
  });

  // Top maps
  const mapsBlock = document.getElementById("playerTopMaps");
  mapsBlock.innerHTML = "";
  (data.topMaps || []).forEach(m => {
    const div = document.createElement("div");
    div.className = "player-map-item";
    div.innerHTML = `
      <div class="map-name">${m.name}</div>
      <div class="map-rating">${m.rating}</div>
    `;
    mapsBlock.appendChild(div);
  });

  // Statistics
  const statsBlock = document.getElementById("playerStats");
  const st = data.stats || {};
  statsBlock.innerHTML = `
    <div class="stat-card"><span>Kills per round</span><strong>${st.killsPerRound || "—"}</strong></div>
    <div class="stat-card"><span>Headshot %</span><strong>${st.headshotPercent || "—"}</strong></div>
    <div class="stat-card"><span>Maps played</span><strong>${st.mapsPlayed || "—"}</strong></div>
    <div class="stat-card"><span>MVPs</span><strong>${st.mvps || "—"}</strong></div>
  `;

  // Trophies
  const trophiesBlock = document.getElementById("playerTrophies");
  trophiesBlock.innerHTML = "";
  (data.trophies || []).forEach(t => {
    const div = document.createElement("div");
    div.className = "trophy-item";
    div.innerHTML = `
      <img src="${t.icon}" alt="">
      <span>${t.title}</span>
    `;
    trophiesBlock.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", renderPlayerPage);
