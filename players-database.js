// ============================================
// БАЗА ДАННЫХ ИГРОКОВ
// ============================================

const playersDatabase = {
    players: [
        // === Wol2nt Team ===
        {
            id: 1,
            nickname: "kas11k",
            realName: "Real Name",
            age: 20,
            photo: "img/Wol2nt Team.jpg",
            teamId: 1,
            teamName: "Wol2nt Team",
            teamLogo: "img/Wol2nt Team.jpg",
            stats: {
                rating: 2.00,
                tRating: 4.00,
                ctRating: 3.00,
                roundSwing: null,
                dpr: 0.00,
                kast: 0.0,
                multiKill: null,
                adr: 0.0,
                kpr: 0.00,
                matches: 0,
                kdDiff: 0,
                kd: 0.00
            },
            quality: {
                rating: "N/A",
                dpr: "N/A",
                kast: "N/A",
                adr: "N/A",
                kpr: "N/A"
            }
        },
        {
            id: 2,
            nickname: "deserted",
            realName: "Real Name",
            age: 20,
            photo: "img/Wol2nt Team.jpg",
            teamId: 1,
            teamName: "Wol2nt Team",
            teamLogo: "img/Wol2nt Team.jpg",
            stats: {
                rating: 0.00,
                tRating: 0.00,
                ctRating: 0.00,
                roundSwing: null,
                dpr: 0.00,
                kast: 0.0,
                multiKill: null,
                adr: 0.0,
                kpr: 0.00,
                matches: 0,
                kdDiff: 0,
                kd: 0.00
            },
            quality: {
                rating: "N/A",
                dpr: "N/A",
                kast: "N/A",
                adr: "N/A",
                kpr: "N/A"
            }
        },
        {
            id: 3,
            nickname: "Chapickka",
            realName: "Real Name",
            age: 20,
            photo: "img/Wol2nt Team.jpg",
            teamId: 1,
            teamName: "Wol2nt Team",
            teamLogo: "img/Wol2nt Team.jpg",
            stats: {
                rating: 0.00,
                tRating: 0.00,
                ctRating: 0.00,
                roundSwing: null,
                dpr: 0.00,
                kast: 0.0,
                multiKill: null,
                adr: 0.0,
                kpr: 0.00,
                matches: 0,
                kdDiff: 0,
                kd: 0.00
            },
            quality: {
                rating: "N/A",
                dpr: "N/A",
                kast: "N/A",
                adr: "N/A",
                kpr: "N/A"
            }
        },
        {
            id: 4,
            nickname: "FishyO",
            realName: "Real Name",
            age: 20,
            photo: "img/Wol2nt Team.jpg",
            teamId: 1,
            teamName: "Wol2nt Team",
            teamLogo: "img/Wol2nt Team.jpg",
            stats: {
                rating: 0.00,
                tRating: 0.00,
                ctRating: 0.00,
                roundSwing: null,
                dpr: 0.00,
                kast: 0.0,
                multiKill: null,
                adr: 0.0,
                kpr: 0.00,
                matches: 0,
                kdDiff: 0,
                kd: 0.00
            },
            quality: {
                rating: "N/A",
                dpr: "N/A",
                kast: "N/A",
                adr: "N/A",
                kpr: "N/A"
            }
        },
        {
            id: 5,
            nickname: "Alma3ik",
            realName: "Real Name",
            age: 20,
            photo: "img/Wol2nt Team.jpg",
            teamId: 1,
            teamName: "Wol2nt Team",
            teamLogo: "img/Wol2nt Team.jpg",
            stats: {
                rating: 0.00,
                tRating: 0.00,
                ctRating: 0.00,
                roundSwing: null,
                dpr: 0.00,
                kast: 0.0,
                multiKill: null,
                adr: 0.0,
                kpr: 0.00,
                matches: 0,
                kdDiff: 0,
                kd: 0.00
            },
            quality: {
                rating: "N/A",
                dpr: "N/A",
                kast: "N/A",
                adr: "N/A",
                kpr: "N/A"
            }
        },
        
        // === 2Play ===
        {
            id: 6,
            nickname: "vanilinbl4",
            realName: "Real Name",
            age: 20,
            photo: "img/2play.jpg",
            teamId: 2,
            teamName: "2Play",
            teamLogo: "img/2play.jpg",
            stats: {
                rating: 0.00,
                tRating: 0.00,
                ctRating: 0.00,
                roundSwing: null,
                dpr: 0.00,
                kast: 0.0,
                multiKill: null,
                adr: 0.0,
                kpr: 0.00,
                matches: 0,
                kdDiff: 0,
                kd: 0.00
            },
            quality: {
                rating: "N/A",
                dpr: "N/A",
                kast: "N/A",
                adr: "N/A",
                kpr: "N/A"
            }
        }
        
        // ... ПРОДОЛЖАЙ ДОБАВЛЯТЬ ВСЕХ ОСТАЛЬНЫХ ИГРОКОВ ...
    ]
};

// Экспортируем для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = playersDatabase;
}
