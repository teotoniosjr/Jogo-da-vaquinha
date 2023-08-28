# teotoniojr-Jogo2-IniciandoEmJavaScript-Aula-05
Colocando som, arrumando controle para baixo e finalizando


ACESSO: https://editor.p5js.org/teotoniojr/full/z3Nb0gGqi


## Instruções

### Perder pontos

* Para fazermos nosso ator perder pontos é só incluir na função de verificar colisão o comando para subtrair pontos da variavel meusPontos
* if (colisao) {voltaAtorPontoInicial(); meusPontos -= 1
* Mas, para não ficar com números negativos, vamos verificar se nossos pontos são maiores que zero, para então remover o ponto
* Criamos uma função para verificar como function verificaPontosMairQueZero(){ if (return meusPontos > 0)
* Colocamos essa função depois do if da colisão em verificaColisao

### Limitar o ator na tela 

* Para nosso ator não ir mais para baixo que a tela, verificamos a posição no movimentarAtor(){}
* Adicionamos uma função podeSeMover em um if depois de mandar teclar para baixo e a função fica assim
* function movimentarAtor() { if (keyIsDown(UP_ARROW)) { yAtor -= 3;}if(keyIsDown(DOWN_ARROW)){ if(podeSeMover()){ } yAtor += 3;}}
* function podeSeMover(){return yAtor < 368 }

### Adicionando Sons

* Criaremos uma pasta de sons e vamos adicionar os arquivos de sons que baixamos no curso
* No arquivo de imagens.js, vamos adicionar as variáveis para armazenar os sons
* Na função preload vamos carregar os arquivos com "somDaTrilha = loadSound("sons/trilha.mp3")".. e assim para todos os sons
* Agora só adicionarmos o somDaTrila.loop() na função stup, para ela ficar repetindo
* Depois adicionamos o som da colisão logo depois que ele voltaparaposiçãoinicial
* E por fim o som de quando fazemos pontos, na função marcaPontos.
* Nos últimos dois casos, usamos o .play() para que não fique em loop o som.
