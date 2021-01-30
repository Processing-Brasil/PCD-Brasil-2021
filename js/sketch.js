let paleta = [
  "#004aa3",
  "#ff666c",
  "#e6e6d8"
]

let ondas = [];
let circulos = [];

let desenhos = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // altura, resolucao_x, resolucao_y, frequencia, velocidade 
  
  atualizar_desenho(); 
  noFill();
  strokeWeight(1);
}

function draw() {
  background(paleta[1]);

  stroke(paleta[2]);
  desenhos[0].desenhar();
  stroke(paleta[0]);
  desenhos[1].desenhar();
}

function atualizar_desenho() {

  for(let i = 0; i < 2; i++) {
    let sorteio = random();
    if(sorteio > 0.5) {
      desenhos[i] = new Onda(random(10, 100), 5, 10, random(0.01, 0.3), 0.01);
    } else {
      desenhos[i] = new Circulo(createVector(random(width/2), 0), 2000, 100, 0.01);
    }
  };
  // shuffle(paleta, true);

}

function mousePressed() {
  atualizar_desenho()
}

// function keyPressed() {
//   let nome = "onda-" + frameCount + ".png";
//   save(nome);
// }

class Circulo {

  constructor(pos, diametro, resolucao, velocidade) {
    this.pos = pos;
    this.diametro = diametro;
    this.resolucao = resolucao;
    this.resolucao_inc = 1000 / resolucao;
    this.velocidade = velocidade;
    this.angulo = 0;
  }

  desenhar() {

    push();
    
    translate(width/2, height/2);
    rotate(this.angulo);

    for (let d = this.resolucao_inc / 2; d <= this.diametro; d += this.resolucao_inc) {
      circle(this.pos.x, this.pos.y, d);
    }
    this.angulo += this.velocidade;
    pop();
  }

}

class Onda {

  constructor(altura, resolucao_x, resolucao_y, frequencia, velocidade) {
    this.altura = altura;
    this.resolucao_x = resolucao_x;
    this.resolucao_y = resolucao_y;
    this.frequencia = frequencia;
    this.velocidade = velocidade;
    this.tempo = 0;
  };

  desenhar() {

    for (let y = -this.altura; y < height + this.altura; y += this.resolucao_y) {
      let comprimento = 0;
      beginShape();
      for (let x = 0; x < width + this.resolucao_x; x += this.resolucao_x) {
        let y_sin = sin(comprimento + this.tempo) * this.altura + y;
        vertex(x, y_sin);
        comprimento += this.frequencia;
      }
      endShape();
    }

    this.tempo += this.velocidade;

  }

}