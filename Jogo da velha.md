```js
Algoritmo "Jogo da Velha"
// 1 vs PC
// Jogo único
// Placar
// 1 - Tela de boas vindas
//   1.1 - Novo Jogo
// 2 - Verificação randomica de quem começa:P x CPU
// 3 - O jogador faz a sua jogada
//   3.1 - Verificação de ganhador ou empate
//   3.2 - Se 3.1 = false entao Retorna p/ o item 3 e quem joga é o oponente
//   3.3 - Se 3.1 - true entao Salvo  o placar e volto para o item 1
procedimento viewTab
inicio
   limpatela
   escreval("     |     |     ")
   escreval("  ", tabuleiro[1,1],"  |  ", tabuleiro[1,2],"  |  ", tabuleiro[1,3],"  ")
   escreval("     |     |     ")
   escreval("-----------------")
   escreval("     |     |     ")
   escreval("  ", tabuleiro[2,1],"  |  ", tabuleiro[2,2],"  |  ", tabuleiro[2,3],"  ")
   escreval("     |     |     ")
   escreval("-----------------")
   escreval("     |     |     ")
   escreval("  ", tabuleiro[3,1],"  |  ", tabuleiro[3,2],"  |  ", tabuleiro[3,3],"  ")
   escreval("     |     |     ")
fimprocedimento
procedimento resetTab
inicio
   para i de 1 ate 3 passo 1 faca
      para j de 1 ate 3 passo 1 faca
         cont <- cont + 1
         tabuleiro[i,j] <- NumpCarac(cont)
      fimpara
   fimpara
   viewTab
fimprocedimento
Var
   esc, x: caracter
   tabuleiro: vetor[1..3,1..3]de caracter
   i,j, cont, op, l: inteiro
   r: real
   erro: logico

Inicio
   escrevaL("_________________________________")
   escrevaL("BEM VINDO AO JOGO DA VELHA - GIR")
   escrevaL("_________________________________")
   escreval
   escreva("Novo jogo? [S/N] ")
   leia(esc)
   se (esc = "s") ou (esc = "S") entao
      resetTab
      r <- rand * 10
      se r > 5 entao
         escreval
         escreval("Player 1 = O")
         escreval("Player 2 = X")
      senao
         escreval
         escreval("Player 1 = X")
         escreval("Player 2 = O")
      fimse
   fimse

   cont <- 0

   erro <- falso
   enquanto cont < 9 faca
      se (erro) entao
         escreval("Jogada Invalída, jogue de novo!")
         erro <- falso
      senao
         cont <- cont + 1
      fimse
      x <- "X"
      se cont % 2 <> 0 entao
         x <- "O"
      fimse

      escreval("Digite um numero para ", x,": ")
      leia(op)
      escolha op

      caso 1
        se (tabuleiro[1,1] = "1") entao
          tabuleiro[1,1] <- x
        senao
          erro <- verdadeiro
        fimse

      caso 2
         se (tabuleiro[1,2] = "2") entao
          tabuleiro[1,2] <- x
        senao
          erro <- verdadeiro
        fimse
      caso 3
         se (tabuleiro[1,3] = "3") entao
          tabuleiro[1,3] <- x
        senao
          erro <- verdadeiro
        fimse

      caso 4
         se (tabuleiro[2,1] = "4") entao
          tabuleiro[2,1] <- x
        senao
          erro <- verdadeiro
        fimse
      caso 5
         se (tabuleiro[2,2] = "5") entao
          tabuleiro[2,2] <- x
        senao
          erro <- verdadeiro
        fimse
      caso 6
         se (tabuleiro[2,3] = "6") entao
          tabuleiro[2,3] <- x
        senao
          erro <- verdadeiro
        fimse

      caso 7
         se (tabuleiro[3,1] = "7") entao
          tabuleiro[3,1] <- x
        senao
          erro <- verdadeiro
        fimse
      caso 8
         se (tabuleiro[3,2] = "8") entao
          tabuleiro[3,2] <- x
        senao
          erro <- verdadeiro
        fimse
      caso 9
         se (tabuleiro[3,3] = "9") entao
          tabuleiro[3,3] <- x
        senao
          erro <- verdadeiro
        fimse

      outrocaso
         erro <- verdadeiro
         fimescolha

         viewTab
      fimenquanto



Fimalgoritmo
```
