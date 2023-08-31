const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ッツヅミテデトドナぁあぃいぅうぇえぉおかがきぎけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ゛゜ゝゞゟ゠ァアィイカガキギクグケゲコゴサザシジスズセゼソゾタダチヂニヌネノハバパヒビピフブプヘベペホボポマムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺヾくぐゥウェエォオ";
const fontSize = 20;
const columns = canvas.width / fontSize;
const matrix = [];

for (let i = 0; i < columns; i++) {
    matrix[i] = canvas.height + Math.floor(Math.random() * canvas.height);
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < matrix.length; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = matrix[i];

        ctx.fillText(char, x, y);
        
        if (y > canvas.height && Math.random() > 0.975) {
            matrix[i] = 0;
        }

        matrix[i] += fontSize;
    }

    requestAnimationFrame(draw);
}

draw();
