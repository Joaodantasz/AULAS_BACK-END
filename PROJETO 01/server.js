// Cronômetro no terminal 
// ================================ 
// Bloco 01: Preparando o terminal 
// ================================ 
const readline = require('readline'); 

readline.emitKeypressEvents(process.stdin); 
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true); 
}

// ================================== 
// Bloco 02: Variáveis do cronômetro 
// ================================== 
let tempo = 0; // Tempo em segundos 
let rodando = true; // O cronômetro está rodando?! 

// ========================================== 
// Bloco 03: Deixando o tempo bonito (mm:ss) 
// ========================================== 
function formatarTempo(total) { 
  const min = Math.floor(total / 60); // Quantos minutos? 
  const seg = total % 60; // Quantos segundos? 
  return String(min).padStart(2, '0') + ':' + String(seg).padStart(2, '0'); 
} 

function desenharTela(mensagemExtra = '') {
  console.clear();
  console.log('⏱️ - Bem-vindo ao Cronômetro do Terminal!'); 
  console.log('p = Pausar / Continuar | r = Reiniciar | Ctrl + C = Sair\n');
  console.log(`⏱️  ${formatarTempo(tempo)} ${rodando ? '[RODANDO]' : '[PAUSADO]'}`);
  if (mensagemExtra) {
    console.log(`\n${mensagemExtra}`);
  }
}

// Primeira renderização
desenharTela();

// ================================================= 
// Bloco 04: O coração do cronômetro: o setInterval 
// ================================================= 
setInterval(() => { 
  if (rodando) { // só conta se o interruptor estiver ligado 
    tempo++; // Soma + 1 em tempo 
    desenharTela();
  } 
}, 1000); 

// ========================================== 
// Bloco 05: Capturando teclas do teclado 
// ========================================== 
process.stdin.on('keypress', (str, key) => { 
  // Proteção contra chamadas com objeto 'key' indefinido
  if (!key) return;

  // Atalho de encerramento Ctrl + C
  if (key.ctrl && key.name === 'c') { 
    console.clear();
    console.log('⏱️ - Cronômetro finalizado. Até mais!\n'); 
    process.exit(); 
  } 

  const tecla = key.name ? key.name.toLowerCase() : '';

  // Foi a tecla P? 
  if (tecla === 'p') { 
    rodando = !rodando; 
    desenharTela(rodando ? '▶️ - Continuando...' : '⏸️ - Pausado...'); 
  } 
  // Foi a tecla R? 
  else if (tecla === 'r') { 
    tempo = 0; // Reinicia o tempo 
    desenharTela('🔄 - Reiniciado...'); 
  } 
});