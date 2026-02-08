const teamsData = {
    1: {
        name: "Wol2nt Team",
        logo: "img/Wol2nt Team.jpg",
       trophies: [
    { title: "MLT MAJOR", date: "Декабрь 2025", image: "img/imgcupmajor.jpg" },
    { title: "MLT CUP", date: "Январь 2026", image: "img/inmgcup.jpg" }
]
,
        players: ["A1ma3ik", "shodnix", "Da1ke", "small_san", "-deus","suizie"],
        matches: [
            { opponent: "Bezdarez Team", opponentLogo: "img/Bezdarez Team.jpg", myScore: 2, oppScore: 1, date: "17.12.2025", stage: "1/4" },
            { opponent: "HW Team", opponentLogo: "img/HW Team.jpg", myScore: 2, oppScore: 0, date: "22.12.2025", stage: "1/2" },
            { opponent: "2Play", opponentLogo: "img/2play.jpg", myScore: 2, oppScore: 0, date: "26.12.2025", stage: "финал" },
            { opponent: "Team 61", opponentLogo: "img/Team 61.jpg", myScore: 2, oppScore: 0, date: "09.01.2026", stage: "1/4" },
            { opponent: "Lotos Team", opponentLogo: "img/lotos.jpg", myScore: 2, oppScore: 0, date: "10.01.2026", stage: "1/2" },
            { opponent: "Xenox Team", opponentLogo: "img/Xenox Team.jpg", myScore: 2, oppScore: 0, date: "11.01.2026", stage: "Финал" },
        ],
        stats: { wins: 6, losses: 0, winrate: "100%", rating: 1 }
    },
   
    2: {
        name: "2Play",
        logo: "img/2play.jpg",
        players: ["vanilinbl4", "izzo", "sanl0ne", "small_san", "m0rb1e","shodnix"],
        matches: [
            { opponent: "Platina Esports Academy", opponentLogo: "img/Platina Esports Academy.jpg", myScore: 2, oppScore: 0, date: "18.12.2025", stage: "1/4" },
            { opponent: "4otka", opponentLogo: "img/4otka.jpg", myScore: 2, oppScore: 0, date: "23.12.2025", stage: "1/2" },
            { opponent: "Wol2nt Team", opponentLogo: "img/Wol2nt Team.jpg", myScore: 0, oppScore: 2, date: "26.12.2025", stage: "финал" },
            
            
        ],
        stats: { wins: 2, losses: 1, winrate: "66%", rating: 2 }
    },
    3: {
        name: "HW Team",
        logo: "img/HW Team.jpg",
        players: ["ZeNDoL", "F0l3x ", " ices4d", "Garl1k", "365","kewbie"],
        matches: [
            { opponent: "TEMPLI TEAM", opponentLogo: "img/TEMPLI TEAM.jpg", myScore: 2, oppScore: 0, date: "16.12.2025", stage: "1/4" },
            { opponent: "Wol2nt Team", opponentLogo: "img/Wol2nt Team.jpg", myScore: 0, oppScore: 2, date: "22.12.2025", stage: "1/2" },
            { opponent: "4otka", opponentLogo: "img/4otka.jpg", myScore: 2, oppScore: 0, date: "25.12.2025", stage: "3а 3 место" },
            { opponent: "Platina Esports ", opponentLogo: "img/Platina Esports Academy.jpg", myScore: 7, oppScore: 13, date: "31.01.2026", stage: "0:0" },
            { opponent: "ECHELON ACADEMY", opponentLogo: "img/ECHELON ACADEMY.jpg", myScore: 10, oppScore:13 , date: "31.01.2026", stage: "0:1" },
               { opponent: "Lotos Team", opponentLogo: "img/lotos.jpg", myScore: 2, oppScore:0 , date: "01.02.2026", stage: "1:2" },
            
        ],
        stats: { wins: 3, losses:3, winrate: "50%", rating: 10 }
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
        stats: { wins: 1, losses: 2, winrate: "33%", rating: 16 }
    },
    5: {
        name: "Bezdarez Team",
        logo: "img/Bezdarez Team.jpg",
        players: ["Into1imore", "z1zkay", "svetozar4iki","Breez", "skituls", "lovasik",],
        matches: [
            { opponent: "WaLent Team", opponentLogo: "img/Wol2nt Team.jpg", myScore: 1, oppScore: 2, date: "17.12.2025", stage: "1/4" },
            { opponent: "Lotos Team", opponentLogo: "img/lotos.jpg", myScore: 1, oppScore: 2, date: "09.01.2026", stage: "1/4" },
        ],
        stats: { wins: 0, losses: 2, winrate: "0%", rating: 21 }
    },
    6: {
        name: "TEMPLI TEAM",
        logo: "img/TEMPLI TEAM.jpg",
        players: ["FR1K", "D0mkRat1k", "h1lden31", "Abrikossqq", "kyoosa"],
        matches: [
            { opponent: "HW Team", opponentLogo: "img/HW Team.jpg", myScore: 0, oppScore: 2, date: "16.12.2025", stage: "1/4" }
        ],
        stats: { wins: 0, losses: 1, winrate: "0%", rating: 20 }
    },
    7: {
        name: "DFSQUAD",
        logo: "img/DFSQUAD.jpg",
        players: ["patrick", "azend", "tolsti","Macken", "dnm", "Stenc1L"],
        matches: [],
        stats: { wins: 0, losses: 0, winrate: "0%", rating: 26 }
    },
    8: {
        name: "Platina Esports ",
        logo: "img/Platina Esports Academy.jpg",
        players: ["vlamIcH", "Script1009", "mONRO", "_kasai", "Monax7"],
        matches: [
            { opponent: "2Play", opponentLogo: "img/2play.jpg", myScore: 0, oppScore: 2, date: "18.12.2025", stage: "1/4" },
            { opponent: "HW Team", opponentLogo: "img/HW Team.jpg", myScore: 13, oppScore:7 , date: "31.01.2026", stage: "0:0" },
            { opponent: "KOS Team", opponentLogo: "img/KOS TEAM.jpg", myScore: 13, oppScore:11 , date: "31.01.2026", stage: "1:0" },
            { opponent: "Ven Team", opponentLogo: "img/Ven Team.jpg", myScore: 1, oppScore:2 , date: "01.02.2026", stage: "2:0" },
               { opponent: "STAR GAMING ACADEMY", opponentLogo: "img/STAR GAMING ACADEMY.jpg", myScore: 1, oppScore:2 , date: "01.02.2026", stage: "2:1" },
               { opponent: "Aurrix", opponentLogo: "img/Arruix.jpg", myScore: 2, oppScore:1 , date: "01.02.2026", stage: "2:2" },


        ],
        stats: { wins: 3, losses: 3, winrate: "50%", rating: 7 }
    },
    9: {
        name: "LOTOS Team",
        logo: "img/lotos.jpg",
        players: ["Zayn0x", "Klay_dik", "FanTazy","Scail", "Chyva4ok ", "Zerwick","Wizzy"],
        matches: [
            { opponent: "4otka", opponentLogo: "img/4otka.jpg", myScore: 1, oppScore: 2, date: "19.12.2025", stage: "1/4" },
            { opponent: "Bezdarez Team", opponentLogo: "img/Bezdarez Team.jpg", myScore: 2, oppScore: 1, date: "09.01.2026", stage: "1/4" },
            { opponent: "Wol2nt Team", opponentLogo: "img/Wol2nt Team.jpg", myScore: 0, oppScore: 0, date: "10.01.2026", stage: "1/2" },
            { opponent: "Xenox Academy", opponentLogo: "img/Xenox Academy.jpg", myScore: 1, oppScore: 2, date: "11.01.2026", stage: "3-место" },
             { opponent: "GODBLESS TEAM", opponentLogo: "img/GODBLESS TEAM.jpg", myScore: 0, oppScore:13 , date: "31.01.2026", stage: "0:0" },
              { opponent: "TT.Future", opponentLogo: "img/TT.Future.jpg", myScore: 20, oppScore:22 , date: "31.01.2026", stage: "0:1" },
              { opponent: "DL Team", opponentLogo: "img/DL-Team.jpg", myScore: 13, oppScore:0 , date: "01.02.2026", stage: "0:2" },
              { opponent: "HW Team", opponentLogo: "img/HW Team.jpg", myScore: 0, oppScore:2 , date: "01.02.2026", stage: "1:2" },
        ],
        stats: { wins: 2, losses: 6, winrate: "25%", rating: 13 }
    },
    10: {
        name: "Willow team",
        logo: "img/newlogowillow.jpg",
        players: ["sk1nw0rk", "Varadka  ", "xsenzo","selz1sh","DayHe",  ],
        matches: [
            { opponent: "Xenox Academy", opponentLogo: "img/Xenox Academy.jpg", myScore: 0, oppScore: 2, date: "09.01.2025", stage: "1/4" }
        ],
        stats: { wins: 0, losses: 1, winrate: "0%", rating: 17 }
    },
    11: {
        name: "LEGENDS5",
        logo: "img/LEGENDS5.jpg",
        players: ["d1sc0nn3ct ", "D1rolzy", "fanchik","YoUttRuE", "minor"],
        matches: [
            { opponent: "Xenox Team", opponentLogo: "img/Xenox Team.jpg", myScore: 0, oppScore: 2, date: "09.01.2026", stage: "1/4" }
        ],
        stats: { wins: 0, losses: 1, winrate: "0%", rating: 18 }
    },
    12: {
        name: "Xenox Team",
        logo: "img/Xenox Team.jpg",
        players: ["Perf", "zefir", "ikeb","krystal", "l1tsh0t"],
        matches: [
            { opponent: "LEGENDS5", opponentLogo: "img/LEGENDS5.jpg", myScore: 2, oppScore: 0, date: "09.01.2026", stage: "1/4" },
             { opponent: "Xenox Academy", opponentLogo: "img/Xenox Academy.jpg", myScore: 0, oppScore: 0, date: "10.01.2026", stage: "1/2" },
             { opponent: "Wol2nt Team", opponentLogo: "img/Wol2nt Team.jpg", myScore: 0, oppScore: 2, date: "11.01.2026", stage: "финал" }
        ],
        stats: { wins: 2, losses: 1, winrate: "66%", rating: 11 }
    },
    13: {
        name: "Team 61",
        logo: "img/Team 61.jpg",
        players: ["farrrr", "lov3zzy", "VaRked","very very very very are", "MMM l Mentality Atouan"],
        matches: [
            { opponent: "Wol2nt Team", opponentLogo: "img/Wol2nt Team.jpg", myScore: 0, oppScore: 2, date: "09.01.2026", stage: "1/4" }
        ],
        stats: { wins: 0, losses: 1, winrate: "0%", rating: 19 }
    },
    14: {
        name: "Xenox Academy",
        logo: "img/Xenox Academy.jpg",
        players: ["Dazzlix", "Sojerio", "Scyrox","Kovocc", "V3nera"],
        matches: [
            { opponent: "Willow Team", opponentLogo: "img/newlogowillow.jpg", myScore: 2, oppScore: 0, date: "09.01.2026", stage: "1/4" },
            { opponent: "Xenox Team", opponentLogo: "img/Xenox Team.jpg", myScore: 0, oppScore: 2, date: "10.01.2026", stage: "1/2" },
             { opponent: "Lotos Team", opponentLogo: "img/lotos.jpg", myScore: 2, oppScore: 1, date: "11.01.2026", stage: " 3-место" }
        ],
        stats: { wins: 2, losses: 1, winrate: "66%", rating: 12 }
    },

    15: {
        name: "STAR GAMING ACADEMY",
        logo: "img/STAR GAMING ACADEMY.jpg",
        players: ["puywx ", "low11ness ", "1sma_333","T1FV ", "greggy","T1m2r" ],
        matches: [
            { opponent: "AurriX", opponentLogo: "img/AurriX.jpg", myScore: 13, oppScore:5 , date: "31.01.2026", stage: "0:0" },
            { opponent: "Ven Team", opponentLogo: "img/Ven Team.jpg", myScore: 10, oppScore:13 , date: "31.01.2026", stage: "1:0" },
            { opponent: "KOS Team", opponentLogo: "img/KOS Team.jpg", myScore: 13, oppScore:0 , date: "01.02.2026", stage: "1:1" },
            { opponent: "Platina Esports", opponentLogo: "img/Platina Esports Academy.jpg", myScore: 2, oppScore:1 , date: "01.02.2026", stage: "2:1" },
            
        ],
        stats: { wins: 3, losses: 1, winrate: "75%", rating: 6 }
    },
    
    16: {
        name: "HOLOXY",
        logo: "img/HOLOXY.jpg",
        players: [" lmz", " akemanuory", "dieelo-","ymf1le-", "l1e","67km", "Coach: Matriks" ],
        matches: [
            { opponent: "DL-Team", opponentLogo: "img/DL-Team.jpg", myScore: 13, oppScore:5 , date: "31.01.2026", stage: "0:0" },
            { opponent: "Rekinder eSports", opponentLogo: "img/Rekinder eSports.jpg", myScore: 13, oppScore:5 , date: "31.01.2026", stage: "1:0" },
            { opponent: "GODBLESS TEAM", opponentLogo: "img/GODBLESS TEAM.jpg", myScore: 2, oppScore:0 , date: "01.02.2026", stage: "2:0" },
        ],
        stats: { wins: 3, losses: 0, winrate: "100%", rating: 2 }
    },

    17: {
        name: "AurriX",
        logo: "img/AurriX.jpg",
        players: [" TuRm1st ", " art1k", "XosakoX","Whytemples", "PozitiV","neagent" ],
        matches: [
             { opponent: "STAR GAMING ACADEMY", opponentLogo: "img/STAR GAMING ACADEMY.jpg", myScore: 5, oppScore:13 , date: "31.01.2026", stage: "0:0" },
             { opponent: "ECHELON TEAM", opponentLogo: "img/ECHELON TEAM.jpg", myScore: 8, oppScore:13 , date: "31.01.2026", stage: "1:1" },
             { opponent: "ECHELON ACADEMY", opponentLogo: "img/ECHELON ACADEMY.jpg", myScore: 2, oppScore:0 , date: "01.02.2026", stage: "1:2" },
             { opponent: "Platina Esports", opponentLogo: "img/Platina Esports Academy.jpg", myScore: 1, oppScore:2 , date: "01.02.2026", stage: "2:2" },
        ],
        stats: { wins: 1, losses: 3, winrate: "25%", rating: 23 }
    },

    18: {
        name: "KOS Team",
        logo: "img/KOS Team.jpg",
        players: [" k1PS0", " ponder", "Buburuza","klouz", "vilchinskii","D3lux","mitsv","Sonk1" ],
        matches: [
            { opponent: "ECHELON ACADEMY", opponentLogo: "img/ECHELON ACADEMY.jpg", myScore: 13, oppScore:2 , date: "31.01.2026", stage: "0:0" },
            { opponent: "Platina Esports", opponentLogo: "img/Platina Esports Academy.jpg", myScore: 11, oppScore:13 , date: "31.01.2026", stage: "1:0" },
             { opponent: "STAR GAMING ACADEMY", opponentLogo: "img/STAR GAMING ACADEMY.jpg", myScore: 0, oppScore:13 , date: "01.02.2026", stage: "1:1" },
             { opponent: "TT.Future", opponentLogo: "img/TT.Future.jpg", myScore: 2, oppScore:0 , date: "01.02.2026", stage: "1:2" },
              { opponent: "ECHELON TEAM", opponentLogo: "img/ECHELON TEAM.jpg", myScore: 2, oppScore:1 , date: "02.02.2026", stage: "2:2" },
        ],
        stats: { wins: 3, losses: 2, winrate: "60%", rating: 8 }
    },

    19: {
        name: "ECHELON ACADEMY",
        logo: "img/ECHELON ACADEMY.jpg",
        players: [" qvasher ", "hzZh  ", "stogi09. ","Vert1si ", "Into1imore ","x1tar0 ","khvoia","mintty" ],
        matches: [
            { opponent: "KOS Team", opponentLogo: "img/KOS Team.jpg", myScore: 2, oppScore:13 , date: "31.01.2026", stage: "0:0" },
            { opponent: "HW Team", opponentLogo: "img/HW Team.jpg", myScore: 13, oppScore:10 , date: "31.01.2026", stage: "0:1" },
            { opponent: "Rekinder eSports", opponentLogo: "img/Rekinder eSports.jpg", myScore: 8, oppScore:13 , date: "01.02.2026", stage: "1:1" },
            { opponent: "AurriX", opponentLogo: "img/AurriX.jpg", myScore: 2, oppScore:0 , date: "01.02.2026", stage: "1:2" },
        ],
        stats: { wins: 0, losses: 0, winrate: "0%", rating: 19 }
    },

    20: {
        name: "ECHELON TEAM",
        logo: "img/ECHELON TEAM.jpg",
        players: [" norowaretIY ", "faloya  ", "wewqeqe ","unluck ", "Prizmarun ","helllink" ],
        matches: [],
        stats: { wins: 0, losses: 0, winrate: "0%", rating: 20  }
    },

    21: {
        name: "DL-Team",
        logo: "img/DL-Team.jpg",
        players: [" T1mPro",  "LIL_nastusha","20.31", "Nami","qwalaz" ],
        matches: [],
        stats: { wins: 0, losses: 0, winrate: "0%", rating: 21 }
    },

    22: {
        name: "Ven team",
        logo: "img/Ven team.jpg",
        players: ["w0xi2k  ", "5 ", " Troid ","auraeater", "в розыске", ],
        matches: [],
        stats: { wins: 0, losses: 0, winrate: "0%", rating: 22  }
    },

    23: {
        name: "Fonbet team",
        logo: "img/Fonbet team.jpg",
        players: ["Kasuke999 ", " anon1m666", "kyotaa","virpl", "s1lw3r","z1po0","Coach: lftr", ],
        matches: [],
        stats: { wins: 0, losses: 0, winrate: "0%", rating: 23 }
    },

    24: {
        name: "GODBLESS TEAM",
        logo: "img/GODBLESS TEAM.jpg",
        players: [" quakaaaa", "  ImprezaLL", "znx","mist", "maLLii", ],
        matches: [],
        stats: { wins: 0, losses: 0, winrate: "0%", rating: 24  }
    },

    25: {
        name: "TT.Future",
        logo: "img/TT.Future.jpg",
        players: [" ", " ", "","", "","" ],
        matches: [],
        stats: { wins: 0, losses: 0, winrate: "0%", rating: 25 }
    },

    26: {
        name: "Rekinder eSports",
        logo: "img/Rekinder eSports.jpg",
        players: [" sal1ch", "deadl0cked ", "L1lpep-fan","shnyroQ", "takuya","Winach","2girlpicks" ],
        matches: [],
        stats: { wins: 0, losses: 0, winrate: "0%", rating: 26 }
    },
};

const urlParams = new URLSearchParams(window.location.search);
const teamId = parseInt(urlParams.get('id')) || 1;
const team = teamsData[teamId];

if (team) {
    // Генерируем трофеи с изображениями
const trophiesHTML = team.trophies && team.trophies.length
  ? team.trophies.map(t => `
      <div class="trophy-item" title="${t.title} - ${t.date}">
        <img src="${t.image}" alt="${t.title}">
      </div>
    `).join('')
  : '';


document.getElementById('teamName').innerHTML = `
    ${team.name}
    ${trophiesHTML ? `<div class="trophies-container">${trophiesHTML}</div>` : ''}
`;



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
