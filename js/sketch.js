function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
}
function draw() {
  background(imagemDaEstrada);
  mostrarAtor();
  mostrarCarros();
  movimentarCarro();
  movimentarAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}
