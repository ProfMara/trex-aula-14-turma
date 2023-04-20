//é aqui que cria as variáveis
var trex;
var solo;
var trexAnimacao;
var soloImagem;
var soloInvisivel;
var nuvemImagem;

//essa função serve para carregar arquivos de mídia
function preload() { 
    nuvemImagem = loadImage("nuvem.png");
    soloImagem = loadImage("solo.png");
    trexAnimacao = loadAnimation("trex1.png", "trex2.png","trex3.png");
}

//essa função executa os comandos apenas uma vez antes do jogo começar
function setup() {
    //cria a área de jogo
    createCanvas(600, 200);
 
    solo = createSprite(300,190,600,20);
    //adicionar a imagem na sprite
    solo.addImage(soloImagem);
    //manda o solo ir para a esquerda
    solo.velocityX = -3;

    soloInvisivel = createSprite(300,200,600,10);
    soloInvisivel.visible = false;

    trex = createSprite(50,190,50,50);
    trex.addAnimation("correndo",trexAnimacao);
    trex.scale=0.5;
}
//executa os comandos por todo o jogo
function draw() {
    //pinta o fundo de branco
    background("black");

    //checa se apertou espaço
    if(keyDown("space") && trex.isTouching(solo)){
        //se sim, determina a velocidade do trex
        trex.velocityY = -10; 
    }
    //dá gravidade ao trex
    trex.velocityY = trex.velocityY + 0.8;
    //faz o trex colidir com o solo
    trex.collide(soloInvisivel);
    
    if(solo.x < 0){
        solo.x = width/2;
    }
    //chama a função criarNuvens
    criarNuvens();
    //cria números aleatórios
    

    //desenha as sprites
    drawSprites();
}
//adiciona a função criarNuvens
function criarNuvens(){
    //checa se frameCount é divisível por 50
    if(frameCount % 50 == 0){
        var nuvem = createSprite(600,Math.round(random(1,100)),75,25);
        nuvem.velocityX = -3;
        nuvem.addImage(nuvemImagem);
        //deixa o trex na frente da nuvem
        trex.depth = nuvem.depth + 1;
        //diminuir o tamanho da nuvem
        nuvem.scale = 0.5;
    }
}
