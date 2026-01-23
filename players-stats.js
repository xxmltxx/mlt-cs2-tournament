// players-stats.js

// Статы игроков по нику
const playerStatsData = {
  // Wol2nt Team
  "kas11k": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "deserted": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Chapickka": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "FishyO": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Alma3ik": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // 2Play
  "vanilinbl4": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "izzo": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "sanl0ne": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "small_san": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "m0rb1e": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "shodnix": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // HW Team
  "-ZeNDoL": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "f0l3x": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "ices4d": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Garl1k": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "365": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // 4otka
  "kup1dmaNN": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Nesqwuik": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "DEgodh": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Dalordico": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Grif_kat": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // Bezdarez Team
  "Into1imore": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "z1zkay": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "svetozar4iki": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Breez": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "skituls": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "lovasik": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // TEMPLI TEAM
  "FR1K": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "D0mkRat1k": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "h1lden31": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Abrikossqq": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "kyoosa": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // DFSQUAD
  "patrick": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "azend": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "tolsti": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Macken": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "dnm": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Stenc1L": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // Platina Esports Academy
  "itsuke": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "sintax": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "anderwolt": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Imprezall": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "co1n": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // LOTOS Team
  "Zayn0x": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Klay_dik": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "FanTazy": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Worm": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Shmaa": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Yazami": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // Willow team
  "sk1nw0rk": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Varadka": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "xsenzo": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "selz1sh": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "DayHe": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // LEGENDS5
  "d1sc0nn3ct": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "D1rolzy": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "fanchik": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "YoUttRuE": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "minor": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // Xenox Team
  "Perf": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "zefir": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "ikeb": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "krystal": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "l1tsh0t": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // Team 61
  "farrrr": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "lov3zzy": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "VaRked": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "very very very very are": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "MMM l Mentality Atouan": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // Xenox Academy
  "Dazzlix": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Sojerio": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Scyrox": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Kovocc": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "V3nera": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // STAR GAMING ACADEMY
  "puywx": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "low11ness": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "1sma_333": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "T1FV": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "greggy": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "T1m2r ": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" }, 
};

// Массив игроков с id — для таблицы и профилей
const players = Object.entries(playerStatsData).map(([nickname, stats], index) => ({
  id: index + 1,
  nickname,
  matches: stats.matches,
  kdDiff: stats.kdDiff,
  kd: Number(stats.kd),
  rating: Number(stats.rating)
}));
