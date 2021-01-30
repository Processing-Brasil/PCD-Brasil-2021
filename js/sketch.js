/******************
Code by Vamoss & Guilherme Vieira
Original code link:
https://openprocessing.org/sketch/1083121
https://editor.p5js.org/guilhermesv/sketches/sTHNhIlwU
******************/

let tamanho, quadrados;
let paleta = [
  "#004aa3",
  "#ff666c",
  "#e6e6d8"
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  tamanho = min(width, height) / 5;
  inicializaQuadrados();
}

function inicializaQuadrados(){
  quadrados = [];
  for(let y = 0; y < height; y += tamanho){
    for(let x = 0; x < width; x += tamanho){
      var grafico = createGraphics(tamanho, tamanho);
      //grafico.pixelDensity(1);
      grafico.noFill();
      
      shuffle(paleta, true);
      var cor = paleta[0];
      
      var ondas = [];
      var distancia = dist(x, y, width/2, height/2);
      if(random() < distancia/(width/2)){
        // altura, resolucao_x, resolucao_y, frequencia, velocidade 
        ondas[0] = new Onda(grafico, paleta[1], random(30, 100), 5, 10, random(0.01, 0.3), 0.01);
        ondas[1] = new Onda(grafico, paleta[2], random(30, 100), 5, 20, random(0.01, 0.3), -0.01);
        quadrados.push({grafico, x, y, cor, ondas});
      }else{
        grafico.background(cor);
        image(grafico, x, y);
      }
    }
  }
}

function draw() {
  //draw grid
  const t = frameCount/200;
  quadrados.forEach((quadrado, index) => {
    quadrado.grafico.background(quadrado.cor);
    quadrado.ondas[0].desenhar();
    quadrado.ondas[1].desenhar();
    image(quadrado.grafico, quadrado.x, quadrado.y);
  });
}



class Onda {
  constructor(grafico, cor, altura, resolucao_x, resolucao_y, frequencia, velocidade) {
    this.grafico = grafico;
    this.cor = cor;
    this.altura = altura;
    this.resolucao_x = resolucao_x;
    this.resolucao_y = resolucao_y;
    this.frequencia = frequencia;
    this.velocidade = velocidade;
    this.tempo = 0;
  };

  desenhar() {
    this.grafico.stroke(this.cor);
    for (let y = -this.altura; y < this.grafico.height + this.altura; y += this.resolucao_y) {
      let comprimento = 0;
      this.grafico.beginShape();
      for (let x = 0; x < this.grafico.width + this.resolucao_x; x += this.resolucao_x) {
        let y_sin = sin(comprimento + this.tempo) * this.altura + y;
        this.grafico.vertex(x, y_sin);
        comprimento += this.frequencia;
      }
      this.grafico.endShape();
    }

    this.tempo += this.velocidade;
  }
}

function mousePressed() {
  inicializaQuadrados();
}