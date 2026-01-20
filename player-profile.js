// ========================================
// ПРОФИЛЬ ИГРОКА - ЗАГРУЗКА ДАННЫХ
// ========================================

const urlParams = new URLSearchParams(window.location.search);
const playerId = parseInt(urlParams.get('id'));

console.log('Загружаем профиль игрока с ID:', playerId);


// ========================================
// ЗАГРУЗКА ДАННЫХ ИГРОКА (БЕЗ FETCH)
// ========================================
function loadPlayerProfile() {
    // Берём данные прямо из playersDatabase
    const player = playersDatabase.players.find(p => p.id === playerId);
    
    if (!player) {
        console.error('Игрок не найден');
        document.querySelector('.container').innerHTML = 
            '<h1 style="color: white; text-align: center; padding: 100px;">Игрок не найден</h1>';
        return;
    }
    
    console.log('Игрок найден:', player);
    
    // Отображаем данные
    showPlayerProfile(player);
    showPlayerStats(player);
}


// ========================================
// ОТОБРАЖЕНИЕ ПРОФИЛЯ
// ========================================
function showPlayerProfile(player) {
    document.getElementById('playerPhoto').src = player.photo || 'img/profil.jpg';
    document.getElementById('playerNickname').textContent = player.nickname;
    document.getElementById('playerRealName').textContent = 
        `${player.realName} • ${player.age} years`;
    
    document.getElementById('playerTeamLogo').src = player.teamLogo;
    document.getElementById('playerTeamName').textContent = player.teamName;
    
    const teamBadge = document.querySelector('.player-team-badge');
    teamBadge.onclick = () => {
        window.location.href = `team.html?id=${player.teamId}`;
    };
    teamBadge.style.cursor = 'pointer';
}


// ========================================
// ОТОБРАЖЕНИЕ СТАТИСТИКИ
// ========================================
function showPlayerStats(player) {
    const stats = player.stats;
    const quality = player.quality;
    
    document.getElementById('ratingValue').textContent = stats.rating.toFixed(2);
    document.getElementById('ratingQuality').textContent = quality.rating;
    animateRatingCircle(stats.rating);
    
    document.getElementById('tRating').textContent = stats.tRating.toFixed(2);
    document.getElementById('ctRating').textContent = stats.ctRating.toFixed(2);
    
    document.getElementById('roundSwing').textContent = 
        stats.roundSwing !== null ? stats.roundSwing : '-';
    document.getElementById('roundSwingQuality').textContent = 'N/A';
    animateStatBar('roundSwingBar', stats.roundSwing, 10);
    
    document.getElementById('dpr').textContent = stats.dpr.toFixed(2);
    document.getElementById('dprQuality').textContent = quality.dpr;
    animateStatBar('dprBar', stats.dpr, 1.0);
    
    document.getElementById('kast').textContent = stats.kast.toFixed(1) + ' %';
    document.getElementById('kastQuality').textContent = quality.kast;
    animateStatBar('kastBar', stats.kast, 100);
    
    document.getElementById('multiKill').textContent = 
        stats.multiKill !== null ? stats.multiKill : '-';
    document.getElementById('multiKillQuality').textContent = 'N/A';
    animateStatBar('multiKillBar', stats.multiKill, 5);
    
    document.getElementById('adr').textContent = stats.adr.toFixed(1);
    document.getElementById('adrQuality').textContent = quality.adr;
    animateStatBar('adrBar', stats.adr, 100);
    
    document.getElementById('kpr').textContent = stats.kpr.toFixed(2);
    document.getElementById('kprQuality').textContent = quality.kpr;
    animateStatBar('kprBar', stats.kpr, 1.0);
    
    document.getElementById('totalMatches').textContent = stats.matches;
    document.getElementById('kdDiff').textContent = 
        stats.kdDiff > 0 ? '+' + stats.kdDiff : stats.kdDiff;
    document.getElementById('kdRatio').textContent = stats.kd.toFixed(2);
    document.getElementById('rating20').textContent = stats.rating.toFixed(2);
}

function animateRatingCircle(rating) {
    const circle = document.getElementById('ratingCircle');
    const radius = 85;
    const circumference = 2 * Math.PI * radius;
    const percentage = Math.min((rating / 2.0) * 100, 100);
    const offset = circumference - (percentage / 100) * circumference;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
}

function animateStatBar(barId, value, maxValue) {
    const bar = document.getElementById(barId);
    if (!bar || value === null || value === undefined) return;
    
    const percentage = Math.min((value / maxValue) * 100, 100);
    setTimeout(() => {
        bar.style.width = percentage + '%';
    }, 100);
}

// ЗАПУСК
document.addEventListener('DOMContentLoaded', loadPlayerProfile);
