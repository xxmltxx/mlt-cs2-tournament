// players-stats.js

// Статы игроков по нику
const playerStatsData = {
  // Wol2nt Team (обновлённый)
"shodnix": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"Da1ke": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"small_san": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"deus": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"Alma3ik": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"suizie": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // 2Play
  "vanilinbl4": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "izzo": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "sanl0ne": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "small_san": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "m0rb1e": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "shodnix": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // HW Team (обновлённый)
"ZeNDoL": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },  
"f0l3x": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"ices4d": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"Garl1k": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"365": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"kewbie": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

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

  // Platina Esports (обновлённый)
"vlamIcH": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"Script1009": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"mONRO": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"_kasai": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"Monax7": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

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
  "puywx": { matches: 10, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "low11ness": { matches: 10, kdDiff: 1.01, kd: "167/165", rating: "1.01" },
  "1sma_333": { matches: 10, kdDiff: 1.1, kd: "145/132", rating: "0.00" },
  "T1FV": { matches: 10, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "greggy": { matches: 10, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "T1m2r ": { matches: 10, kdDiff: 0.8, kd: "137/170", rating: "0.00" }, 

    // HOLOXY (команда 16)
  "lmz": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "akemanuory": { matches: 9, kdDiff: 1.44, kd: "145/101", rating: "5.78" },
  "dieelo-": { matches: 9, kdDiff: 1.20, kd: "120/100", rating: "4.38" },
  "ymf1le-": { matches: 9, kdDiff: 1.06, kd: "110/104", rating: "3.69" },
  "l1e": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "67km": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // AurriX (команда 17)
  "TuRm1st": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "art1k": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "XosakoX": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Whytemples": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "PozitiV": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "neagent": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // KOS Team (команда 18)
  "k1PS0": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "ponder": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Buburuza": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "klouz": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "vilchinskii": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "D3lux": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "mitsv": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Sonk1": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // ECHELON ACADEMY (команда 19)
  "qvasher": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "hzZh": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "stogi09": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Vert1si": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "x1tar0": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "khvoia": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "mintty": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // ECHELON TEAM (команда 20)
  "norowaretIY": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "faloya": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "wewqeqe": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "unluck": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Prizmarun": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "helllink": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // DL-Team (команда 21)
  "T1mPro": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "LIL_nastusha": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "20.31": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Nami": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "qwalaz": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // Ven team (команда 22)
  "w0xi2k": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "5": { matches: 2, kdDiff: 1.13, kd: "36/32", rating: "0.00" },
  "Troid": { matches: 3, kdDiff: 1.3, kd: "60/48", rating: "0.00" },
  "auraeater": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "в розыске": { matches: 2, kdDiff: 0.72, kd: "26/36", rating: "0.00" },

  // Fonbet team (команда 23)
  "Kasuke999": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "anon1m666": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "kyotaa": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "virpl": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "s1lw3r": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "z1po0": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // GODBLESS TEAM (команда 24)
  "quakaaaa": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "ImprezaLL": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "znx": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "mist": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "maLLii": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // TT.Future (команда 25) — пустая
  // Нет игроков

  // Rekinder eSports (команда 26)
  "sal1ch": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "deadl0cked": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "L1lpep-fan": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "shnyroQ": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "takuya": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "Winach": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "2girlpicks": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

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
