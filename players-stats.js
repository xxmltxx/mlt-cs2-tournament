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

  /// HW Team (команда 3)
"ZeNDoL": { matches: 6, kdDiff: 1.3, kd: "102/78", rating: "5.36" },
"f0l3x": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"ices4d": { matches: 6, kdDiff: 0.93, kd: "74/80", rating: "3.18" },
"Garl1k": { matches: 6, kdDiff: 0.66, kd: "57/86", rating: "2.03" },
"365": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"kewbie": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"FLX": { matches: 6, kdDiff: 0.74, kd: "71/96", rating: "2.55" },
"X3": { matches: 6, kdDiff: 1.05, kd: "91/87", rating: "4.09" },


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

  // Platina Esports (команда 8)
"vlamIcH": { matches: 10, kdDiff: 1.03, kd: "130/126", rating: "3.71" },
"Script1009": { matches: 10, kdDiff: 1.00, kd: "132/132", rating: "3.63" },
"mONRO": { matches: 11, kdDiff: 1.18, kd: "158/134", rating: "4.48" },
"_kasai": { matches: 9, kdDiff: 134, kd: "160/119", rating: "5.64" },
"Monax7": { matches: 11, kdDiff: 0.82, kd: "111/134", rating: "2.60" },
"sonov1337": { matches: 1, kdDiff: 0.8, kd: "16/20", rating: "3.20" },
"YAme": { matches: 4, kdDiff: 1.08, kd: "66/61", rating: "4.49" },
"$200": { matches: 10, kdDiff: 1.56, kd: "228/146", rating: "7.45" },


  // LOTOS Team
"Zayn0x": { matches: 1, kdDiff: 1.11, kd: "30/27", rating: "5.70" },
"Klay_dik": { matches: 2, kdDiff: 0.73, kd: "22/30", rating: "1.93" },
"FanTazy": { matches: 3, kdDiff: 1.04, kd: "69/66", rating: "4.42" },
"HHeav3n": { matches: 3, kdDiff: 0.69, kd: "33/48", rating: "1.80" },
"Shmaa": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"Yazami": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"elogirlschva4": { matches: 3, kdDiff: 1.4, kd: "73/52", rating: "6.43" },
"elogirlssca11": { matches: 3, kdDiff: 0.6, kd: "40/66", rating: "1.86" },


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
"low11ness": { matches: 10, kdDiff: 1.01, kd: "167/165", rating: "4.13" },
"1sma_333": { matches: 10, kdDiff: 1.1, kd: "145/132", rating: "4.09" },
"T1FV": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"greggy": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"T1m2r": { matches: 10, kdDiff: 0.8, kd: "137/170", rating: "2.96" },
"веселый бобер": { matches: 10, kdDiff: 1.18, kd: "161/137", rating: "4.74" },



    // HOLOXY (команда 16)
  "lmz": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "akemanuory": { matches: 9, kdDiff: 1.44, kd: "145/101", rating: "5.78" },
  "dieelo-": { matches: 9, kdDiff: 1.20, kd: "120/100", rating: "4.38" },
  "ymf1le-": { matches: 9, kdDiff: 1.06, kd: "110/104", rating: "3.69" },
  "l1e": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
  "67km": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },

  // AurriX
"TuRm1st": { matches: 6, kdDiff: 0.77, kd: "64/88", rating: "2.20" },
"art1k": { matches: 4, kdDiff: 0.93, kd: "52/56", rating: "3.21" },
"XosakoX": { matches: 7, kdDiff: 1.14, kd: "104/91", rating: "4.34" },
"Whytemples": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"PozitiV": { matches: 5, kdDiff: 1.00, kd: "70/70", rating: "3.74" },
"neagent": { matches: 3, kdDiff: 1.06, kd: "34/32", rating: "3.49" },
"shuntaro": { matches: 6, kdDiff: 0.8, kd: "63/78", rating: "2.31" },


  // KOS Team (команда 18)
"k1PS0": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"ponder": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"Buburuza": { matches: 1, kdDiff: 1.37, kd: "26/19", rating: "6.99" },
"klouz": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"vilchinskii": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"D3lux": { matches: 1, kdDiff: 0.42, kd: "8/19", rating: "1.23" },
"mitsv": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"Sonk1": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"xmood": { matches: 1, kdDiff: 1.93, kd: "29/15", rating: "10.37" },
"Krutoy": { matches: 1, kdDiff: 0.4, kd: "8/20", rating: "1.13" },
"chemp": { matches: 2, kdDiff: 1.01, kd: "29/28", rating: "3.86" },


  // ECHELON ACADEMY (команда 19)
"qvasher": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"hzZh": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"stogi09.": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"Vert1si": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"Into1imore": { matches: 0, kdDiff: 0, kd: "0.00", rating: "3.34" },
"x1tar0": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"khvoia": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"mintty": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"kilasshit": { matches: 3, kdDiff: 0.93, kd: "38/41", rating: "3.22" },
"karass": { matches: 5, kdDiff: 0.89, kd: "66/74", rating: "3.24" },
"Gizxyy": { matches: 5, kdDiff: 0.8, kd: "61/76", rating: "2.86" },
"secret": { matches: 4, kdDiff: 0.74, kd: "48/65", rating: "2.56" },
"a9oqsl": { matches: 1, kdDiff: 0.46, kd: "6/13", rating: "1.07" },
"осьминож": { matches: 2, kdDiff: 0.43, kd: "15/35", rating: "0.76" },


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
"5": { matches: 2, kdDiff: 1.13, kd: "36/32", rating: "4.80" },
"Troid": { matches: 3, kdDiff: 1.3, kd: "60/48", rating: "5.81" },
"auraeater": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"в розыске": { matches: 2, kdDiff: 0.72, kd: "26/36", rating: "2.60" },
"kontuziya": { matches: 2, kdDiff: 0.7, kd: "25/36", rating: "2.47" },
"LETWORLDBURN": { matches: 2, kdDiff: 1.09, kd: "36/33", rating: "4.53" },


  // Fonbet team
"Kasuke999": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"anon1m666": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"kyotaa": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"virpl": { matches: 5, kdDiff: 1.02, kd: "74/73", rating: "3.93" },
"s1lw3r": { matches: 5, kdDiff: 0.98, kd: "76/77", rating: "3.67" },
"z1po0": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"3": { matches: 5, kdDiff: 1.1, kd: "76/69", rating: "3.63" },
"syka_aw4ken": { matches: 5, kdDiff: 0.75, kd: "58/77", rating: "2.56" },
"REFL3X": { matches: 5, kdDiff: 0.83, kd: "68/82", rating: "2.78" },


  // GODBLESS TEAM (команда 24)
"quakaaaa": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"ImprezaLL": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"znx": { matches: 3, kdDiff: 0.79, kd: "30/38", rating: "2.49" },
"mist": { matches: 2, kdDiff: 0.7, kd: "23/33", rating: "2.52" },
"maLLii": { matches: 1, kdDiff: 1.12, kd: "19/17", rating: "4.88" },
"Billy Nogami": { matches: 3, kdDiff: 0.51, kd: "24/47", rating: "1.44" },
"quakaa": { matches: 3, kdDiff: 0.72, kd: "33/46", rating: "1.91" },
"Sva100n": { matches: 3, kdDiff: 0.7, kd: "29/41", rating: "2.18" },
"ptushnik": { matches: 1, kdDiff: 0.23, kd: "10/21", rating: "0.69" },
"DL T1m Pro": { matches: 2, kdDiff: 0.23, kd: "17/35", rating: "0.67" },
"fraerok": { matches: 2, kdDiff: 1.37, kd: "41/30", rating: "5.54" },
"44": { matches: 2, kdDiff: 0.19, kd: "16/31", rating: "0.54" },
"Garfiaeld BOOST": { matches: 1, kdDiff: 1.67, kd: "25/15", rating: "8.35" },


  // TT.Future
"murdered": { matches: 3, kdDiff: 0.75, kd: "48/64", rating: "2.74" },
"nokou": { matches: 3, kdDiff: 0.8, kd: "48/60", rating: "2.77" },
"a1rwave": { matches: 2, kdDiff: 1.09, kd: "50/46", rating: "5.52" },
"wooldunar": { matches: 2, kdDiff: 0.47, kd: "21/45", rating: "1.02" },
"fuwa": { matches: 2, kdDiff: 1.53, kd: "66/43", rating: "8.76" },


 // Rekinder eSports
"sal1ch": { matches: 4, kdDiff: 0.98, kd: "68/69", rating: "4.04" },
"deadl0cked": { matches: 4, kdDiff: 0.98, kd: "78/80", rating: "4.36" },
"L1lpep-fan": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"shnyroQ": { matches: 4, kdDiff: 0.88, kd: "56/64", rating: "3.30" },
"takuya": { matches: 4, kdDiff: 0.87, kd: "69/79", rating: "3.62" },
"Winach": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"2girlpicks": { matches: 0, kdDiff: 0, kd: "0.00", rating: "0.00" },
"forever upset": { matches: 4, kdDiff: 0.9, kd: "67/74", rating: "3.49" },


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
