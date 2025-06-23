// script.js
const phrases = [
    "Alguém vestido só para ver a Olivia",
    "Artista traz special guest",
    "Grupo de betos",
    "Ver três pessoas famosas",
    "Fila gigante para os brindes",
    "Pessoa a \"gravar\", sem gravar",
    "Ver três pessoas famosas",
    "Ter muito calor",
    "Alguém com muito glitter na cara",
    "Grupo com outfits iguais",
    "Casal aos beijos na multidão",
    "Doer os pés",
    "IR AO NOS ALIVE",
    "10 brindes por pessoa",
    "Artista fala português s/ de Portugal",
    "Dar mais de 10.000 passos",
    "Alguém a fumar erva",
    "Provar algo novo",
    "Bandeira de Portugal",
    "Alguém a entornar a bebida",
    "Óculos de sol à noite",
    "Casa de banho suja",
    "Alguém com um escaldão",
    "Pessoa a chorar",
    "Pessoa nos ombros de alguém"
];

const boardEl = document.getElementById('board');
const bingoMsg = document.getElementById('bingoMsg');

// criar células
phrases.forEach((text, idx) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = text;
    cell.dataset.index = idx;
    cell.addEventListener('click', () => toggleCell(cell));
    boardEl.appendChild(cell);
});

window.addEventListener('load', () => {
  // 1) constroi as células (o teu código atual)
  const phrases = [ /* … */ ];
    const boardEl = document.getElementById('board');
    const bingoMsg = document.getElementById('bingoMsg');

    phrases.forEach((text, idx) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = text;
    cell.dataset.index = idx;
    cell.addEventListener('click', () => toggleCell(cell));
    boardEl.appendChild(cell);
    });

  // 2) calcula scale
    const parentWidth = boardEl.parentElement.clientWidth;
    const boardWidth  = boardEl.scrollWidth; 
    const scale = Math.min(1, parentWidth / boardWidth);
    boardEl.style.transform = `scale(${scale})`;
});

// o resto do teu código permanece igual:
function toggleCell(cell) { /* … */ }
function checkBingo()    { /* … */ }

function toggleCell(cell) {
    cell.classList.toggle('selected');
    checkBingo();
}

function checkBingo() {
    const cells = Array.from(document.querySelectorAll('.cell'));
    const selected = cells.map(c => c.classList.contains('selected'));
    const size = 5;
    let bingo = false;

  // verificar linhas
    for (let r = 0; r < size; r++) {
        if (selected.slice(r*size, r*size+size).every(v => v)) bingo = true;
    }
    // verificar colunas
    for (let c = 0; c < size; c++) {
        let col = true;
        for (let r = 0; r < size; r++) {
        if (!selected[r*size + c]) col = false;
        }
        if (col) bingo = true;
    }
    // diagonais
    if (Array.from({length:size}).every((_,i) => selected[i*size + i])) bingo = true;
    if (Array.from({length:size}).every((_,i) => selected[i*size + (size-1-i)])) bingo = true;

    bingoMsg.style.display = bingo ? 'block' : 'none';
}
