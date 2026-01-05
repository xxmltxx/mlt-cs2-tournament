const teamsData = {
    1: {
        name: "Wol2nt Team🏆",
        logo: "img/Wol2nt Team.jpg",
        players: ["kas11k", "deserted", "Chapickka", "FishyO", "Alma3ik"],
        matches: [
            { opponent: "Bezdarez Team", opponentLogo: "img/Bezdarez Team.jpg", myScore: 2, oppScore: 1, date: "17.12.2025", stage: "1/4" },
            { opponent: "HW Team", opponentLogo: "img/HW Team.jpg", myScore: 2, oppScore: 0, date: "22.12.2025", stage: "1/2" },
            { opponent: "2Play", opponentLogo: "img/2play.jpg", myScore: 2, oppScore: 0, date: "26.12.2025", stage: "финал" }
        ],
        stats: { wins: 3, losses: 0, winrate: "100%", rating: 1 }
    },
    2: {
        name: "2Play🥈",
        logo: "img/2play.jpg",
        players: ["vanilinbl4", "izzo", "sanl0ne", "small_san", "m0rb1e","shodnix"],
        matches: [
            { opponent: "Platina Esports Academy", opponentLogo: "img/Platina Esports Academy.jpg", myScore: 2, oppScore: 0, date: "18.12.2025", stage: "1/4" },
            { opponent: "4otka", opponentLogo: "img/4otka.jpg", myScore: 2, oppScore: 0, date: "23.12.2025", stage: "1/2" },
            { opponent: "WaLent Team", opponentLogo: "img/Wol2nt Team.jpg", myScore: 0, oppScore: 2, date: "26.12.2025", stage: "финал" }
        ],
        stats: { wins: 2, losses: 1, winrate: "66%", rating: 2 }
    },
    3: {
        name: "HW Team🥉",
        logo: "img/HW Team.jpg",
        players: ["-ZeNDoL", "f0l3x", " ices4d", "Garlik", "365"],
        matches: [
            { opponent: "TEMPLI TEAM", opponentLogo: "img/TEMPLI TEAM.jpg", myScore: 2, oppScore: 0, date: "16.12.2025", stage: "1/4" },
            { opponent: "WaLent Team", opponentLogo: "img/Wol2nt Team.jpg", myScore: 2, oppScore: 0, date: "22.12.2025", stage: "1/2" },
            { opponent: "4otka", opponentLogo: "img/4otka.jpg", myScore: 2, oppScore: 0, date: "25.12.2025", stage: "3а 3 место" }
        ],
        stats: { wins: 3, losses: 0, winrate: "100%", rating: 3 }
    },
    4: {
        name: "4otka",
        logo: "img/4otka.jpg",
        players: ["kup1dmaNN", "Nesqwuik", "DEgodh", "Dalordico", "Grif_kat"],
        matches: [
            { opponent: "LOTOS Team", opponentLogo: "img/lotos.jpg", myScore: 2, oppScore: 1, date: "19.12.2025", stage: "1/4" },
            { opponent: "2Play", opponentLogo: "img/2play.jpg", myScore: 0, oppScore: 2, date: "23.12.2025", stage: "1/2" },
            { opponent: "HW Team", opponentLogo: "img/HW Team.jpg", myScore: 0, oppScore: 2, date: "25.12.2025", stage: "3а 3 место" }
        ],
        stats: { wins: 1, losses: 2, winrate: "33%", rating: 4 }
    },
    5: {
        name: "Bezdarez Team",
        logo: "img/Bezdarez Team.jpg",
        players: ["Into1imore", "z1zkay", "svetozar4iki","Breez", "skituls", "lovasik",],
        matches: [
            { opponent: "WaLent Team", opponentLogo: "img/Wol2nt Team.jpg", myScore: 1, oppScore: 2, date: "17.12.2025", stage: "1/4" }
        ],
        stats: { wins: 0, losses: 1, winrate: "0%", rating: 5 }
    },
    6: {
        name: "TEMPLI TEAM",
        logo: "img/TEMPLI TEAM.jpg",
        players: ["FR1K", "D0mkRat1k", "h1lden31", "Abrikossqq", "kyoosa"],
        matches: [
            { opponent: "HW Team", opponentLogo: "img/HW Team.jpg", myScore: 0, oppScore: 2, date: "16.12.2025", stage: "1/4" }
        ],
        stats: { wins: 0, losses: 1, winrate: "0%", rating: 6 }
    },
    7: {
        name: "DFSQUAD",
        logo: "img/DFSQUAD.jpg",
        players: ["patrick", "azend", "tolsti","Macken", "dnm", "Stenc1L"],
        matches: [],
        stats: { wins: 0, losses: 0, winrate: "0%", rating: 9 }
    },
    8: {
        name: "Platina Esports Academy",
        logo: "img/Platina Esports Academy.jpg",
        players: ["itsuke", "sintax", "anderwolt", "Imprezall", "co1n"],
        matches: [
            { opponent: "2Play", opponentLogo: "img/2play.jpg", myScore: 0, oppScore: 2, date: "18.12.2025", stage: "1/4" }
        ],
        stats: { wins: 0, losses: 1, winrate: "0%", rating: 8 }
    },
    9: {
        name: "LOTOS Team",
        logo: "img/lotos.jpg",
        players: ["Zayn0x", "Klay_dik", "FanTazy","Worm", "Shmaa", "Yazami"],
        matches: [
            { opponent: "4otka", opponentLogo: "img/4otka.jpg", myScore: 1, oppScore: 2, date: "19.12.2025", stage: "1/4" }
        ],
        stats: { wins: 0, losses: 1, winrate: "0%", rating: 7 }
    }
};

const urlParams = new URLSearchParams(window.location.search);
const teamId = parseInt(urlParams.get('id')) || 1;
const team = teamsData[teamId];

if (team) {
    document.getElementById('teamName').textContent = team.name;
    document.getElementById('teamLogo').src = team.logo;
    
    document.getElementById('teamStats').innerHTML = `
        <div class="stat-item">
            <span class="stat-label">ПОБЕД</span>
            <span class="stat-value">${team.stats.wins}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">ПОРАЖЕНИЙ</span>
            <span class="stat-value">${team.stats.losses}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">ВИНРЕЙТ</span>
            <span class="stat-value">${team.stats.winrate}</span>
        </div>
    `;
    
    const rosterEl = document.getElementById('teamRoster');
    rosterEl.innerHTML = team.players.length > 0 
        ? team.players.map(p => `<div class="player">${p}</div>`).join('')
        : '<div class="player">Нет данных</div>';
    
    const matchesEl = document.getElementById('teamMatches');
    matchesEl.innerHTML = team.matches.length > 0 
        ? team.matches.map(m => `
            <div class="match-card">
                <div class="match-team-left">
                    <img src="${team.logo}" alt="${team.name}" class="match-logo">
                    <span class="match-team-name">${team.name}</span>
                </div>
                <div class="match-score-box">
                    <span class="match-score-left">${m.myScore}</span>
                    <span class="match-separator">:</span>
                    <span class="match-score-right">${m.oppScore}</span>
                </div>
                <div class="match-team-right">
                    <span class="match-team-name">${m.opponent}</span>
                    <img src="${m.opponentLogo}" alt="${m.opponent}" class="match-logo">
                </div>
                <span class="match-date">${m.date}</span>
                <span class="match-stage">${m.stage}</span>
            </div>
        `).join('')
        : '<div style="color: #94a3b8; padding: 1rem;">Матчи не сыграны</div>';
    
    document.getElementById('teamStatsDetailed').innerHTML = `
        <div class="stat-card">
            <span class="stat-name">Побед</span>
            <span class="stat-val">${team.stats.wins}</span>
        </div>
        <div class="stat-card">
            <span class="stat-name">Поражений</span>
            <span class="stat-val">${team.stats.losses}</span>
        </div>
        <div class="stat-card">
            <span class="stat-name">Винрейт</span>
            <span class="stat-val">${team.stats.winrate}</span>
        </div>
        <div class="stat-card">
            <span class="stat-name">Рейтинг</span>
            <span class="stat-val">${team.stats.rating}</span>
        </div>
    `;
}
