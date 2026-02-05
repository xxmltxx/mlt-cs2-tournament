// players.js

// Данные команд
const teamsData = {
    1: {
        name: "Wol2nt Team",
        logo: "img/Wol2nt Team.jpg",
        players: ["shodnix", "Da1ke", "small_san", "deus", "Alma3ik","suizie"]
    },
    2: {
        name: "2Play",
        logo: "img/2play.jpg",
        players: ["vanilinbl4", "izzo", "sanl0ne", "small_san", "m0rb1e", "shodnix"]
    },
    3: {
        name: "HW Team",
        logo: "img/HW Team.jpg",
        players: ["ZeNDoL", "f0l3x", "ices4d", "Garl1k", "365","kewbie"]
    },
    4: {
        name: "4otka",
        logo: "img/4otka.jpg",
        players: ["kup1dmaNN", "Nesqwuik", "DEgodh", "Dalordico", "Grif_kat"]
    },
    5: {
        name: "Bezdarez Team",
        logo: "img/Bezdarez Team.jpg",
        players: ["Into1imore", "z1zkay", "svetozar4iki", "Breez", "skituls", "lovasik"]
    },
    6: {
        name: "TEMPLI TEAM",
        logo: "img/TEMPLI TEAM.jpg",
        players: ["FR1K", "D0mkRat1k", "h1lden31", "Abrikossqq", "kyoosa"]
    },
    7: {
        name: "DFSQUAD",
        logo: "img/DFSQUAD.jpg",
        players: ["patrick", "azend", "tolsti", "Macken", "dnm", "Stenc1L"]
    },
    8: {
        name: "Platina Esports ",
        logo: "img/Platina Esports Academy.jpg",
        players: ["vlamIcH", "Script1009", "mONRO", "_kasai", "Monax7"]
    },
    9: {
        name: "LOTOS Team",
        logo: "img/lotos.jpg",
        players: ["Zayn0x", "Klay_dik", "FanTazy", "Worm", "Shmaa", "Yazami"]
    },
    10: {
        name: "Willow team",
        logo: "img/newlogowillow.jpg",
        players: ["sk1nw0rk", "Varadka", "xsenzo", "selz1sh", "DayHe"]
    },
    11: {
        name: "LEGENDS5",
        logo: "img/LEGENDS5.jpg",
        players: ["d1sc0nn3ct", "D1rolzy", "fanchik", "YoUttRuE", "minor"]
    },
    12: {
        name: "Xenox Team",
        logo: "img/Xenox Team.jpg",
        players: ["Perf", "zefir", "ikeb", "krystal", "l1tsh0t"]
    },
    13: {
        name: "Team 61",
        logo: "img/Team 61.jpg",
        players: ["farrrr", "lov3zzy", "VaRked", "very very very very are", "MMM l Mentality Atouan"]
    },
    14: {
        name: "Xenox Academy",
        logo: "img/Xenox Academy.jpg",
        players: ["Dazzlix", "Sojerio", "Scyrox", "Kovocc", "V3nera"]
    },
    15: {
        name: "STAR GAMING ACADEMY",
        logo: "img/STAR GAMING ACADEMY.jpg",
        players: ["puywx", "low11ness", "1sma_333", "T1FV", "greggy","T1m2r"]
    },
      16: {
        name: "HOLOXY",
        logo: "img/HOLOXY.jpg",
        players: [" lmz", " akemanuory", "dieelo-","ymf1le-", "l1e","67km",  ]
    },
      17: {
        name: "AurriX",
        logo: "img/AurriX.jpg",
        players: [" TuRm1st ", " art1k", "XosakoX","Whytemples", "PozitiV","neagent"]
    },
      18: {
        name: "KOS Team",
        logo: "img/KOS Team.jpg",
        players: [" k1PS0", " ponder", "Buburuza","klouz", "vilchinskii","D3lux","mitsv","Sonk1"]
    },
      19: {
        name: "ECHELON ACADEMY",
        logo: "img/ECHELON ACADEMY.jpg",
        players: [" qvasher ", "hzZh  ", "stogi09. ","Vert1si ", "Into1imore ","x1tar0 ","khvoia","mintty"]
    },
      20: {
        name: "ECHELON TEAM",
        logo: "img/ECHELON TEAM.jpg",
        players: [" norowaretIY ", "faloya  ", "wewqeqe ","unluck ", "Prizmarun ","helllink"]
    },
      21: {
        name: "DL-Team",
        logo: "img/DL-Team.jpg",
        players: [" T1mPro", "LIL_nastusha","20.31", "Nami","qwalaz"]
    },
      22: {
        name: "Ven team",
        logo: "img/Ven team.jpg",
        players: [" w0xi2k ", "5   ", "Troid ","auraeater", "в розыске", ]
    },
      23: {
        name: "Fonbet team",
        logo: "img/Fonbet team.jpg",
        players: ["Kasuke999 ", " anon1m666", "kyotaa","virpl", "s1lw3r","z1po0",]
    },
      24: {
        name: "GODBLESS TEAM",
        logo: "img/GODBLESS TEAM.jpg",
        players: [" quakaaaa", "  ImprezaLL", "znx","mist", "maLLii",]
    },
      25: {
        name: "TT.Future",
        logo: "img/TT.Future.jpg",
        players: []
    },
      26: {
        name: "Rekinder eSports",
        logo: "img/Rekinder eSports.jpg",
        players: [" sal1ch", "deadl0cked ", "L1lpep-fan","shnyroQ", "takuya","Winach","2girlpicks"]
    },
};

/// Генерируем данные игроков с реальными статами из players-stats.js
const playersData = [];
let playerIdCounter = 1;

Object.keys(teamsData).forEach(teamId => {
    const team = teamsData[teamId];
    team.players.forEach(playerName => {
        const trimmedName = playerName.trim();
        // Берём статы из playerStatsData или ставим нули
        const stats = playerStatsData[trimmedName] || { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" };

        playersData.push({
            id: playerIdCounter++,
            name: trimmedName,
            team: team.name,
            teamLogo: team.logo,
            teamId: Number(teamId),
            matches: stats.matches,
            kdDiff: stats.kdDiff,
            kd: stats.kd,
            rating: stats.rating
        });
    });
});

// Переменные для фильтров
let currentTeamFilter = "all";
let currentSortBy = "";

// Цвет рейтинга как на HLTV
function getRatingColor(rating) {
    const r = parseFloat(rating);
    if (r >= 1.25) return "#66ff66";
    if (r >= 1.15) return "#99ff99";
    if (r >= 1.05) return "#ccffcc";
    if (r >= 0.95) return "#ffff99";
    if (r >= 0.85) return "#ffcc99";
    if (r > 0) return "#ff9999";
    return "#94a3b8"; // серый
}

// Рендер таблицы игроков
function renderPlayersTable(players) {
    const tbody = document.getElementById("playersTableBody");

    tbody.innerHTML = players
        .map((player, index) => `
        <tr class="player-row" onclick="window.location.href='player.html?id=${player.id}'">
            <td class="rank-cell">${index + 1}</td>
            <td class="player-cell">
                <div class="player-info">
                    <img src="${player.teamLogo}" alt="${player.team}" class="player-team-icon">
                    <span class="player-name">${player.name}</span>
                </div>
            </td>
            <td class="team-cell">${player.team}</td>
            <td class="matches-cell">${player.matches}</td>
            <td class="kd-diff-cell ${player.kdDiff > 0 ? "positive" : (player.kdDiff < 0 ? "negative" : "")}">
                ${player.kdDiff > 0 ? "+" : ""}${player.kdDiff}
            </td>
            <td class="kd-cell">${player.kd}</td>
            <td class="rating-cell">
                <span class="rating-value" style="color: ${getRatingColor(player.rating)}">${player.rating}</span>
            </td>
        </tr>
    `)
        .join("");
}

// Применить фильтры и сортировку
function applyFiltersAndSort() {
    let filtered =
        currentTeamFilter === "all"
            ? [...playersData]
            : playersData.filter(p => p.team === currentTeamFilter);

    if (currentSortBy === "rating") {
        filtered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else if (currentSortBy === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSortBy === "team") {
        filtered.sort((a, b) => a.team.localeCompare(b.team));
    }

    renderPlayersTable(filtered);
}

// Обработчики фильтров
document.getElementById("teamFilter").addEventListener("change", e => {
    currentTeamFilter = e.target.value;
    applyFiltersAndSort();
});

document.getElementById("sortFilter").addEventListener("change", e => {
    currentSortBy = e.target.value;
    applyFiltersAndSort();
});

// Заполняем фильтр команд
const teamFilter = document.getElementById("teamFilter");
teamFilter.innerHTML = '<option value="all">Все команды</option>';

const uniqueTeams = [...new Set(playersData.map(p => p.team))].sort();
uniqueTeams.forEach(team => {
    const option = document.createElement("option");
    option.value = team;
    option.textContent = team;
    teamFilter.appendChild(option);
});

// Первичный рендер
applyFiltersAndSort();
