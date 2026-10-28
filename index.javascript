// IRON FRONT - SISTEMA DE EVOLUÇÃO DO TANQUE

let creditos = 0;
let danoTanque = 25;
let velocidadeTanque = 3;
let vidaTanque = 100;
let tiroTriplo = false;
let tiroExplosivo = false;
let tipoTiro = "normal";

function ganharCreditos(valor = 25) {
  creditos += valor;
  console.log("Créditos:", creditos);
}

function comprarMelhoria(tipo) {
  const melhorias = {
    dano: { preco: 100, aplicar: () => danoTanque += 10 },
    velocidade: { preco: 80, aplicar: () => velocidadeTanque += 1 },
    blindagem: {
      preco: 100,
      aplicar: () => vidaTanque += 25
    },
    triplo: {
      preco: 150,
      aplicar: () => tiroTriplo = true
    },
    explosivo: {
      preco: 180,
      aplicar: () => tiroExplosivo = true
    }
  };

  const melhoria = melhorias[tipo];

  if (!melhoria) return console.log("Melhoria inválida!");

  if (creditos < melhoria.preco) {
    return console.log("Créditos insuficientes!");
  }

  creditos -= melhoria.preco;
  melhoria.aplicar();

  console.log("Melhoria comprada:", tipo);
  console.log("Créditos restantes:", creditos);
}

function trocarTiro(tipo) {
  if (tipo === "triplo" && !tiroTriplo) {
    return console.log("Compre o tiro triplo primeiro!");
  }

  if (tipo === "explosivo" && !tiroExplosivo) {
    return console.log("Compre o canhão explosivo primeiro!");
  }

  tipoTiro = tipo;
}

function disparar() {
  if (tipoTiro === "triplo" && tiroTriplo) {
    return [
      { angulo: -0.2, dano: danoTanque },
      { angulo: 0, dano: danoTanque },
      { angulo: 0.2, dano: danoTanque }
    ];
  }

  if (tipoTiro === "explosivo" && tiroExplosivo) {
    return [{ angulo: 0, dano: danoTanque * 2, explosivo: true }];
  }

  return [{ angulo: 0, dano: danoTanque }];
}

// Exemplo: ganhar créditos ao derrotar um inimigo
function inimigoDerrotado() {
  ganharCreditos(25);
}

console.log("Sistema de evolução carregado!");
