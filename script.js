// --- DATABASE: Free Fire Very Easy (50 Questions) ---
const ffQuestions = [
    { q: "Free Fire is a ___ game?", a: ["Racing", "Battle Royale", "Puzzle", "Sports"], c: 1 },
    { q: "Who developed Free Fire?", a: ["Tencent", "Garena", "Activision", "EA"], c: 1 },
    { q: "Max players in one match?", a: ["50", "100", "25", "10"], c: 0 },
    { q: "Characters have?", a: ["Cars", "Skills", "Pets only", "Maps"], c: 1 },
    { q: "Free Fire is played on?", a: ["Calculator", "Mobile phone", "TV", "Camera"], c: 1 },
    { q: "What reduces health?", a: ["Jumping", "Safe zone", "Enemy attack", "Running"], c: 2 },
    { q: "Item to restore health?", a: ["Gun", "Medkit", "Helmet", "Scope"], c: 1 },
    { q: "Currency name?", a: ["UC", "Diamonds", "Coins", "Gold"], c: 1 },
    { q: "Which map is famous?", a: ["Bermuda", "Erangel", "Sanhok", "Dust"], c: 0 },
    { q: "Logo color mainly?", a: ["Blue", "Yellow", "Green", "Pink"], c: 1 },
    { q: "Weapon used to shoot?", a: ["Knife", "Gun", "Helmet", "Bag"], c: 1 },
    { q: "Pets in Free Fire give?", a: ["Damage", "Skills/bonuses", "Cars", "Maps"], c: 1 },
    { q: "Online or Offline?", a: ["Offline", "Online", "Both", "None"], c: 1 },
    { q: "Button to fire?", a: ["Jump", "Shoot", "Run", "Map"], c: 1 },
    { q: "Protects head?", a: ["Shoes", "Helmet", "Bag", "Medkit"], c: 1 },
    { q: "Who is the mascot?", a: ["Kelly", "Hayato", "DJ Alok", "Wukong"], c: 2 },
    { q: "Released in?", a: ["2010", "2017", "2020", "2023"], c: 1 },
    { q: "Vehicle moves faster?", a: ["Boat", "Car", "Foot", "Crawl"], c: 1 },
    { q: "Outside safe zone?", a: ["Heal", "Damage", "Coins", "Win"], c: 1 },
    { q: "Perspective supported?", a: ["First person", "Third person", "Side view", "Top view"], c: 1 },
    { q: "Increases ammo capacity?", a: ["Bag", "Helmet", "Medkit", "Wall"], c: 0 },
    { q: "Control method?", a: ["Keyboard", "Touch screen", "Voice", "Camera"], c: 1 },
    { q: "Sniper rifle?", a: ["M1014", "AWM", "MP40", "UMP"], c: 1 },
    { q: "Who revives teammates?", a: ["Enemy", "Teammate", "Pet", "Gun"], c: 1 },
    { q: "Team-based mode?", a: ["Solo", "Squad", "Practice", "Training"], c: 1 },
    { q: "Shows map location?", a: ["Compass", "Mini-map", "Scope", "Bag"], c: 1 },
    { q: "Blocks bullets?", a: ["Gloo Wall", "Medkit", "Bag", "Shoe"], c: 0 },
    { q: "Free to play?", a: ["Yes", "No", "Sometimes", "Trial"], c: 0 },
    { q: "Increases speed?", a: ["Shoes", "Skill", "Helmet", "Gun"], c: 1 },
    { q: "Danger zone color?", a: ["Green", "Red", "Blue", "Yellow"], c: 1 },
    { q: "Match ends when?", a: ["Time over", "One team left", "Coins finish", "Zone stops"], c: 1 },
    { q: "Shoots fast?", a: ["Sniper", "SMG", "Shotgun", "Pistol"], c: 1 },
    { q: "FF stands for?", a: ["Fast Fight", "Free Fire", "Full Force", "Fire Free"], c: 1 },
    { q: "Button to jump?", a: ["Fire", "Jump", "Run", "Map"], c: 1 },
    { q: "Increases accuracy?", a: ["Scope", "Bag", "Shoe", "Medkit"], c: 0 },
    { q: "Pets like?", a: ["Panda", "Dog", "Falco", "All of these"], c: 3 },
    { q: "HP = 0 means?", a: ["Win", "Eliminated", "Heal", "Jump"], c: 1 },
    { q: "Close-range weapon?", a: ["Sniper", "Shotgun", "AR", "Scope"], c: 1 },
    { q: "Practice mode?", a: ["Rank", "Training Ground", "Clash Squad", "Solo"], c: 1 },
    { q: "How to win?", a: ["Run", "Survive till end", "Collect coins", "Jump"], c: 1 },
    { q: "Rank mode exists?", a: ["No", "Yes", "Only custom", "Paid"], c: 1 },
    { q: "Uses sniper ammo?", a: ["AWM", "MP40", "UMP", "M1887"], c: 0 },
    { q: "Clash Squad is?", a: ["Racing", "4v4 mode", "Solo mode", "Training"], c: 1 },
    { q: "Pets can be changed?", a: ["No", "Yes", "Only once", "Paid only"], c: 1 },
    { q: "Heals teammates?", a: ["Grenade", "Medkit", "Scope", "Bag"], c: 1 },
    { q: "Events give?", a: ["Rewards", "Damage", "Ban", "Maps"], c: 0 },
    { q: "Opens bag?", a: ["Fire", "Inventory", "Jump", "Run"], c: 1 },
    { q: "Voice chat?", a: ["No", "Yes", "Only text", "Only team"], c: 1 },
    { q: "Gloo wall use?", a: ["Heal", "Cover", "Speed", "Jump"], c: 1 },
    { q: "Worldwide popular?", a: ["No", "Yes", "Only Asia", "Only India"], c: 1 }
];

// --- APP STATE ---
let userProfile = JSON.parse(localStorage.getItem('quiz_profile')) || null;
let coins = parseInt(localStorage.getItem('quiz_coins')) || 100;
let currentQuestions = [];
let qIndex = 0;
let score = 0;
let selectedAvatar = "🔥";

// --- PROFILE LOGIC ---
window.onload = () => {
    if (!userProfile) {
        document.getElementById('profile-modal').classList.remove('hidden');
    } else {
        updateHeader();
    }
};

function selectAvatar(icon) { selectedAvatar = icon; }

function saveProfile() {
    const name = document.getElementById('username-input').value;
    if (!name) return alert("Enter a name!");
    userProfile = { name, avatar: selectedAvatar };
    localStorage.setItem('quiz_profile', JSON.stringify(userProfile));
    document.getElementById('profile-modal').classList.add('hidden');
    updateHeader();
}

function updateHeader() {
    document.getElementById('display-name').innerText = userProfile.name;
    document.getElementById('display-avatar').innerText = userProfile.avatar;
    document.getElementById('coin-count').innerText = coins;
}

// --- NAVIGATION ---
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function selectGame(game) {
    if (game !== 'Free Fire') return alert("Only Free Fire is available right now!");
    document.getElementById('selected-game-title').innerText = game;
    showScreen('difficulty-screen');
}

function startQuiz(diff) {
    if (diff !== 'Very Easy') return alert("Only Very Easy is ready!");
    currentQuestions = [...ffQuestions]; // Load the 50 questions
    qIndex = 0;
    score = 0;
    showScreen('quiz-screen');
    renderQuestion();
}

function renderQuestion() {
    const qData = currentQuestions[qIndex];
    document.getElementById('q-progress').innerText = `Question ${qIndex + 1}/50`;
    document.getElementById('question-text').innerText = qData.q;
    const container = document.getElementById('options-container');
    container.innerHTML = "";
    
    qData.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(i, btn);
        container.appendChild(btn);
    });
}

function checkAnswer(idx, btn) {
    const correct = currentQuestions[qIndex].c;
    if (idx === correct) {
        btn.classList.add('correct');
        score++;
        coins += 5;
    } else {
        btn.classList.add('wrong');
    }
    
    setTimeout(() => {
        qIndex++;
        if (qIndex < currentQuestions.length) {
            renderQuestion();
        } else {
            finishGame();
        }
        localStorage.setItem('quiz_coins', coins);
        updateHeader();
    }, 1000);
}

function finishGame() {
    showScreen('result-screen');
    document.getElementById('final-score').innerText = score;
    saveToLeaderboard();
}

// --- LEADERBOARD ---
function saveToLeaderboard() {
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push({ name: userProfile.name, avatar: userProfile.avatar, coins: coins });
    leaderboard.sort((a, b) => b.coins - a.coins);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard.slice(0, 5)));
}

function showLeaderboard() {
    showScreen('leaderboard-screen');
    const body = document.getElementById('leaderboard-body');
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    body.innerHTML = leaderboard.map((u, i) => `
        <tr>
            <td>${i+1}</td>
            <td>${u.avatar} ${u.name}</td>
            <td>${u.coins}</td>
        </tr>
    `).join('');
}
