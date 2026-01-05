const teamsData = {
  1: {
    name: "Team Wol2nt",
    stats: "3-0 (150 очков)",
    wins: 3,
    losses: 0,
    points: 150,
    rank: 1,
    players: [
      { name: "kas11k", photo: "img/player-photo.jpg" },
      { name: "deserted", photo: "img/player-photo.jpg" },
      { name: "Chapicka", photo: "img/player-photo.jpg" },
      { name: "F1shyO", photo: "img/player-photo.jpg" },
      { name: "Alma3ik", photo: "img/player-photo.jpg" }
    ]
  },
  2: {
    name: "2Play",
    stats: "2-1 (75 очков)",
    wins: 2,
    losses: 1,
    points: 125,
    rank: 2,
    players: [
      { name: "vanilinbl4", photo: "img/player-photo.jpg" },
      { name: "izzo", photo: "img/player-photo.jpg" },
      { name: "san10ne", photo: "img/player-photo.jpg" },
      { name: "small_san", photo: "img/player-photo.jpg" },
      { name: "shodnix", photo: "img/player-photo.jpg" }
      
      
     
    ]
  },
  3: {
    name: "HW Team",
    stats: "2-1 (75 очков)",
    wins: 2,
    losses: 1,
    points: 125,
    rank: 3,
    players: [
      { name: "-ZeNDoL-,", photo: "img/player-photo.jpg" },
      { name: "f0l3x", photo: "img/player-photo.jpg" },
      { name: " ices4d", photo: "img/player-photo.jpg" },
      { name: "Garl1k", photo: "img/player-photo.jpg" },
      { name: "365", photo: "img/player-photo.jpg" }
    ]
  },
  4: {
    name: "4otka",
    stats: "1-2 (0 очков)",
    wins: 1,
    losses: 2,
    points: 75,
    rank: 4,
    players: [
      { name: "kup1dmaNN", photo: "img/player-photo.jpg" },
      { name: "Nesqwuik", photo: "img/player-photo.jpg" },
      { name: "DEgodh", photo: "img/player-photo.jpg" },
      { name: "Dalordico", photo: "img/player-photo.jpg" },
      { name: "Grif_kat", photo: "img/player-photo.jpg" }
    ]
  },
  5: {
    name: "Bezdarrez Team",
    stats: "0-1 (0 очков)",
    wins: 0,
    losses: 1,
    points: 0,
    rank: 5,
    players: [
      { name: "into1imore", photo: "img/player-photo.jpg" },
      { name: "z1zkay", photo: "img/player-photo.jpg" },
      { name: "svetozar4iki", photo: "img/player-photo.jpg" },
      { name: "skituls", photo: "img/player-photo.jpg" },
      { name: "lovasik", photo: "img/player-photo.jpg" },
      { name: "Breez", photo: "img/player-photo.jpg" }
    ]
  },
  6: {
    name: "TEMPLI TEAM",
    stats: "0-1 (0 очков)",
    wins: 0,
    losses: 1,
    points: 0,
    rank: 6,
    players: [
      { name: "FR1K", photo: "img/player-photo.jpg" },
      { name: " D0mkRat1k", photo: "img/player-photo.jpg" },
      { name: "h1lden31", photo: "img/player-photo.jpg" },
      { name: "Abrikossqq", photo: "img/player-photo.jpg" },
      { name: "kyoosa", photo: "img/player-photo.jpg" }
    ]
  },
  7: {
    name: "Lotos Team",
    stats: "0-1 (0 очков)",
    wins: 0,
    losses: 1,
    points: 0,
    rank: 7,
    players: [
      { name: "Zayn0x", photo: "img/player-photo.jpg" },
      { name: "Klay_dik", photo: "img/player-photo.jpg" },
      { name: "FanTazy", photo: "img/player-photo.jpg" },
      { name: "Shmaa", photo: "img/player-photo.jpg" },
      { name: "Yazami", photo: "img/player-photo.jpg" },
      { name: "Worm", photo: "img/player-photo.jpg" }
    ]
  },
  8: {
    name: "Platina Esports Academy",
    stats: "0-1 (0 очков)",
    wins: 0,
    losses: 1,
    points: 0,
    rank: 8,
    players: [
      { name: "itsuke", photo: "img/player-photo.jpg" },
      { name: "sintax", photo: "img/player-photo.jpg" },
      { name: "anderwolt", photo: "img/player-photo.jpg" },
      { name: " Imprezall", photo: "img/player-photo.jpg" },
      { name: " co1n", photo: "img/player-photo.jpg" }
    ]
  },
  9: {
    name: "DFSQUAD",
    stats: "0-0 (0 очков)",
    wins: 0,
    losses: 0,
    points: 0,
    rank: 9,
    players: [
      { name: "patrick", photo: "img/player-photo.jpg" },
      { name: "azend", photo: "img/player-photo.jpg" },
      { name: "tolsti", photo: "img/player-photo.jpg" },
      { name: "dnm", photo: "img/player-photo.jpg" },
      { name: "Stenc1L", photo: "img/player-photo.jpg" },
      { name: "Macken", photo: "img/player-photo.jpg" }
    ]
  },
};

function showRoster(teamId) {
  const team = teamsData[teamId];
  if (!team) return;
  
  const modal = document.getElementById('rosterModal');
  document.getElementById('rosterTeamName').textContent = team.name;
  document.getElementById('rosterTeamStats').textContent = team.stats;
  
  const playersGrid = document.getElementById('playersGrid');
  playersGrid.innerHTML = '';
  
  team.players.forEach((player) => {
    const playerCard = document.createElement('div');
    playerCard.className = 'player-card';
    playerCard.innerHTML = `
      <div class="player-avatar">
        <img src="${player.photo}" alt="${player.name}">
      </div>
      <div class="player-name">${player.name}</div>
      <div class="player-role"></div>
    `;
    playersGrid.appendChild(playerCard);
  });
  
  modal.classList.add('active');
}

function closeRoster() {
  document.getElementById('rosterModal')?.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('rosterModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeRoster();
      }
    });
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeRoster();
    }
  });
});
